/* ========================================
   Hybrid Stack — Brand Page Scripts
   All interactive features live here
   ======================================== */

(function () {
  "use strict";

  /* ---- Theme ---- */
  var STORAGE_KEY = "hs-theme";
  var html = document.documentElement;

  function getPreferred() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    var btn = document.querySelector(".theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  applyTheme(getPreferred());

  document.addEventListener("click", function (e) {
    if (e.target.closest(".theme-toggle")) {
      var next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    }
  });

  /* ---- Scroll Progress ---- */
  var bar = document.querySelector(".scroll-progress");
  if (bar) {
    window.addEventListener("scroll", function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = h > 0 ? (window.scrollY / h) * 100 + "%" : "0%";
    }, { passive: true });
  }

  /* ---- Sticky Header ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("shrunk", window.scrollY > 60);
    }, { passive: true });
  }

  /* ---- Active Nav Link ---- */
  var sections = document.querySelectorAll("[id]");
  var navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");
  function updateActive() {
    var current = "";
    sections.forEach(function (s) {
      if (s.id && s.getBoundingClientRect().top <= 120) current = s.id;
    });
    navLinks.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();

  /* ---- Mobile Menu ---- */
  var hamburger = document.querySelector(".hamburger");
  var mobileNav = document.querySelector(".mobile-nav");
  var overlay = document.querySelector(".overlay");
  var closeBtn = document.querySelector(".mobile-nav-close");

  function openMenu() {
    if (mobileNav) mobileNav.classList.add("open");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    if (mobileNav) mobileNav.classList.remove("open");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (hamburger) hamburger.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  document.querySelectorAll(".mobile-nav a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  /* ---- Back to Top ---- */
  var btt = document.querySelector(".back-to-top");
  if (btt) {
    window.addEventListener("scroll", function () {
      btt.classList.toggle("show", window.scrollY > 400);
    }, { passive: true });
    btt.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---- Contact FAB ---- */
  var fab = document.querySelector(".contact-fab");
  if (fab) {
    window.addEventListener("scroll", function () {
      fab.classList.toggle("show", window.scrollY > 400);
    }, { passive: true });
    fab.addEventListener("click", function (e) {
      if (!e.target.closest(".contact-fab-menu")) {
        fab.classList.toggle("open");
      }
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".contact-fab")) {
        fab.classList.remove("open");
      }
    });
  }

  /* ---- Cookie Banner ---- */
  var cookie = document.querySelector(".cookie-banner");
  if (cookie && !localStorage.getItem("hs-cookie")) {
    setTimeout(function () { cookie.classList.add("show"); }, 1000);
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest(".cookie-accept")) {
      localStorage.setItem("hs-cookie", "1");
      if (cookie) cookie.classList.remove("show");
    }
  });

  /* ---- Spotlight Card Effect ---- */
  document.querySelectorAll(".card-spotlight").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", ((e.clientX - rect.left) / rect.width * 100) + "%");
      card.style.setProperty("--mouse-y", ((e.clientY - rect.top) / rect.height * 100) + "%");
    });
  });

  /* ---- Newsletter Toast ---- */
  document.addEventListener("submit", function (e) {
    var form = e.target.closest(".newsletter-form");
    if (!form) return;
    e.preventDefault();
    var email = form.querySelector("input[type=email]");
    if (!email || !email.value) return;
    showToast("Thanks for subscribing!", "default");
    email.value = "";
  });

  function showToast(msg, type) {
    var t = document.createElement("div");
    t.textContent = msg;
    t.style.cssText = "position:fixed;bottom:80px;left:50%;transform:translateX(-50%);padding:12px 24px;border-radius:8px;font-size:.85rem;font-weight:600;z-index:200;background:" + (type === "error" ? "#ef4444" : "#22c55e") + ";color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.15)";
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 3000);
  }

  /* ---- Copy to Clipboard ---- */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-copy]");
    if (!btn) return;
    navigator.clipboard.writeText(btn.getAttribute("data-copy")).then(function () {
      showToast("Copied!", "default");
    });
  });

  /* ---- Smooth Scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id === "#") return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

})();

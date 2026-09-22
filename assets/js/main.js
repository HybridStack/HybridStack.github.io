/* ========================================
   Hybrid Stack — Global Scripts
   ======================================== */

(function () {
  "use strict";

  /* ---- Theme ---- */
  const STORAGE_KEY = "hs-theme";
  const html = document.documentElement;

  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    const btn = document.querySelector(".theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  applyTheme(getPreferred());

  document.addEventListener("click", function (e) {
    if (e.target.closest(".theme-toggle")) {
      const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    }
  });

  /* ---- Scroll Progress ---- */
  const bar = document.querySelector(".scroll-progress");
  if (bar) {
    window.addEventListener("scroll", function () {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = h > 0 ? (window.scrollY / h) * 100 + "%" : "0%";
    }, { passive: true });
  }

  /* ---- Sticky Header ---- */
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("shrunk", window.scrollY > 60);
    }, { passive: true });
  }

  /* ---- Active Nav Link ---- */
  const sections = document.querySelectorAll("[id]");
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");
  function updateActive() {
    let current = "";
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
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".mobile-nav-close");

  function openMenu() {
    mobileNav && mobileNav.classList.add("open");
    overlay && overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    mobileNav && mobileNav.classList.remove("open");
    overlay && overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  hamburger && hamburger.addEventListener("click", openMenu);
  closeBtn && closeBtn.addEventListener("click", closeMenu);
  overlay && overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  document.querySelectorAll(".mobile-nav a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  /* ---- Back to Top ---- */
  const btt = document.querySelector(".back-to-top");
  if (btt) {
    window.addEventListener("scroll", function () {
      btt.classList.toggle("show", window.scrollY > 400);
    }, { passive: true });
    btt.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---- Cookie Banner ---- */
  const cookie = document.querySelector(".cookie-banner");
  if (cookie && !localStorage.getItem("hs-cookie")) {
    setTimeout(function () { cookie.classList.add("show"); }, 1000);
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest(".cookie-accept")) {
      localStorage.setItem("hs-cookie", "1");
      cookie && cookie.classList.remove("show");
    }
  });

  /* ---- Newsletter Toast ---- */
  document.addEventListener("submit", function (e) {
    const form = e.target.closest(".newsletter-form");
    if (!form) return;
    e.preventDefault();
    const email = form.querySelector("input[type=email]");
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
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    navigator.clipboard.writeText(btn.getAttribute("data-copy")).then(function () {
      showToast("Copied!", "default");
    });
  });

})();

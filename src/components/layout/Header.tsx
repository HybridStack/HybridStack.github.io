"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#learning", label: "Learning" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#newsletter", label: "Newsletter" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setIsShrunk(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const sections = document.querySelectorAll(".content-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-200px 0px 0px 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [mounted]);

  return (
    <header
      ref={headerRef}
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg ${
        isShrunk ? "h-[60px]" : "h-[80px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#about" className="font-serif text-2xl font-medium">
            Tariq Mahmood
          </a>

          <nav>
            <ul className="flex gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    suppressHydrationWarning
                    className={`relative transition-colors hover:text-primary ${
                      mounted && activeSection === item.href.slice(1)
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
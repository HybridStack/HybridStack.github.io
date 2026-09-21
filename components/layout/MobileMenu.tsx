"use client";

import { useEffect, useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClose = () => setIsOpen(false);

    // Close on ESC
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav
      className="
        fixed
        top-0 right-0
        h-full w-72 bg-white dark:bg-gray-900
        transform translate-x-full transition-transform duration-300
        shadow-2xl z-50 flex flex-col pt-6
        opacity-0 visibility-hidden transition-opacity duration-300
        data-[open]:opacity-100 data-[open]:visibility-hidden
      "
      aria-label="Mobile navigation"
    >
      <button
        className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M6 18L18 6" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M3 12l2-2m0 0l-2-2m2 2l2-2m0 0l-2 2m2-2l2 2m0 0l2 2" />
          </svg>
        )}
      </button>

      <div
        className="
          flex-1 flex flex-col gap-8 py-8
          opacity-0 visibility-hidden
          transition-opacity duration-300
          data-[open]:opacity-100 data-[open]:visibility-visible
        "
      >
        <a
          href="#about"
          className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-primary transition-colors"
        >
          About
        </a>
        <a
          href="#learning"
          className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-primary transition-colors"
        >
          Learning
        </a>
        <a
          href="#experience"
          className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-primary transition-colors"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-primary transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-primary transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
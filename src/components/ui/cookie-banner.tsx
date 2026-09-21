"use client";

import { useEffect, useState } from "react";

const COOKIE_CONSENT_STORAGE_KEY = "cookie-consent-given";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasGivenConsent = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!hasGivenConsent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="
        fixed
        left-0
        right-0
        bottom-0
        bg-white dark:bg-gray-900
        border-t
        border-zinc-200 dark:border-zinc-700
        shadow-lg
        z-50
        px-6
        py-2
        transition-all
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-zinc-700 dark:text-zinc-300 text-sm">
          We use cookies to improve your experience.{" "}
          <button
            onClick={acceptCookies}
            className="font-medium text-primary hover:underline"
          >
            Accept
          </button>
        </p>
      </div>
    </div>
  );
}
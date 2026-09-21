"use client";

import { ReactNode, useState } from "react";

export function FloatingContactButton() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating button */}
      <button
        className="
          fixed
          bottom-0 right-0
          w-10 h-10
          rounded-full
          bg-primary
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          transition-all
          duration-300
          hover:shadow-xl
          data-[expanded]:w-24
          data-[expanded]:bg-primary/90
          data-[expanded]:transition-width
        "
        onClick={() => setExpanded(!expanded)}
        aria-label={expanded ? "Collapse contact buttons" : "Contact me"}
      >
        {expanded ? (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          "Contact"
        )}
      </button>

      {/* Expanded contact options */}
      {expanded && (
        <div
          className="
            absolute
            top-full
            right-0
            w-24
            bg-white dark:bg-gray-900
            rounded-lg
            shadow-2xl
            py-4
            px-2
            transition-all
            duration-300
            opacity-0
            visibility-hidden
            data-[expanded]:opacity-100
            data-[expanded]:visibility-visible
          "
        >
          <a
            href="https://wa.me/923017322984"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-3
              py-2
              px-4
              rounded-lg
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition-colors
              mb-3
              text-zinc-800 dark:text-zinc-100
              font-medium
            "
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          <a
            href="https://discord.com/users/@CryptoTariq"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-3
              py-2
              px-4
              rounded-lg
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition-colors
              text-zinc-800 dark:text-zinc-100
              font-medium
            "
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 1-.008-.128 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
              Discord
            </a>
          <a
            href="mailto:tariq@omail.sh"
            className="
              flex
              items-center
              gap-3
              py-2
              px-4
              rounded-lg
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition-colors
              text-zinc-800 dark:text-zinc-100
              font-medium
            "
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Email
            </a>
        </div>
      )}
    </div>
  );
}
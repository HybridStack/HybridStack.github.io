export default function NotFoundPage() {
  return (
    <section
      id="not-found"
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        bg-gray-50 dark:bg-gray-900
        text-zinc-600 dark:text-zinc-400
      "
    >
      <div className="text-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8">
          <svg
            className="w-10 h-10 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 16a4 4 0 1 1-8 0 4 4 0 0 1 8z" />
          </svg>
        </div>

        <h1 className="text-5xl font-serif font-medium tracking-tailwind text-zinc-900 dark:text-zinc-100 mb-4">
          404
        </h1>

        <p className="text-2xl text-zinc-500 dark:text-zinc-400 mb-8">
          Page not found
        </p>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="
              rounded-lg
              px-6
              py-3
              bg-primary
              text-white
              font-medium
              hover:bg-primary/90
              transition-colors
            "
          >
            Contact me
          </a>
          <a
            href="/"
            className="
              rounded-lg
              px-6
              py-3
              border
              border-zinc-300 dark:border-zinc-600
              text-zinc-700 dark:text-zinc-300
              hover:bg-zinc-100 dark:hover:bg-zinc-700
              transition-colors
            "
          >
            Go home
          </a>
        </div>
      </div>
    </section>
  );
}
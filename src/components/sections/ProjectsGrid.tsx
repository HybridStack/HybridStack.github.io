"use client";

import { ReactNode, useState } from "react";

type Project = {
  name: string;
  description: string;
  language: string;
  url: string;
  color: string;
};

export type ProjectsGridProps = {
  projects: Project[];
  loading?: boolean;
};

// Aceternity UI: HoverBorderGradient & Spotlight applied via Tailwind classes
export function ProjectsGrid({ projects, loading = false }: ProjectsGridProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  if (loading) {
    return (
      <section id="projects" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="liquid-gradient text-3xl font-medium mb-12 text-center">
            Currently Building
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 4 }, () => (
              <SkeletonCard key={Math.random()} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="liquid-gradient text-3xl font-medium mb-12 text-center">
          Currently Building
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.name}
              className="
                group
                rounded-xl
                border
                border-zinc-200 dark:border-zinc-700
                overflow-hidden
                transition-all
                duration-300
                group-hover:border-gradient-hover
                group-hover:spotlight-effect
                border-t-4
              "
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-medium text-zinc-800 dark:text-zinc-100">
                    {project.name}
                  </h3>
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1
                      text-xs
                      font-medium
                      bg-primary/10
                      text-primary
                      rounded-full
                      px-2
                      py-0.5
                    "
                  >
                    {project.language}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-1
                    text-sm
                    font-medium
                    text-primary
                    transition-colors
                    hover:text-secondary
                  "
                >
                  View Project
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
      <div className="h-64 bg-gray-100 dark:bg-gray-600 animate-pulse" />
      <div className="p-4">
        <div className="h-4 w-3/4 mb-2 bg-gray-100 dark:bg-gray-600 animate-pulse" />
        <div className="h-3 w-1/2 mb-1 bg-gray-100 dark:bg-gray-600 animate-pulse" />
        <div className="h-3 w-full mb-1 bg-gray-100 dark:bg-gray-600 animate-pulse" />
      </div>
    </div>
  );
}
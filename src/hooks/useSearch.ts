"use client";

import { useEffect, useState } from "react";

type Project = {
  name: string;
  description: string;
  language: string;
  url: string;
};

export function useSearch(projects: Project[], query: string) {
  const [results, setResults] = useState<Project[]>([]);

  useEffect(() => {
    const term = query.toLowerCase();
    const filtered = projects.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.language.toLowerCase().includes(term)
    );
    setResults(filtered.slice(0, 10));
  }, [query]);

  return results;
}
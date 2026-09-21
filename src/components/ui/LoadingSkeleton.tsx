"use client";

import { ReactNode } from "react";

export function LoadingSkeleton({ children }: { children: ReactNode }) {
  return (
    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-full">
      {children}
    </div>
  );
}

export function SkeletonCard() {
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

export function SkeletonButton() {
  return (
    <button
      className="w-full py-3 rounded-lg bg-primary/10 text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="h-4 w-full rounded-md bg-gray-100 dark:bg-gray-600 animate-pulse" />
    </button>
  );
}
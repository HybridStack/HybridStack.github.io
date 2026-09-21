"use client";

import { ReactNode, useState } from "react";

export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: ReactNode }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <details
          key={index}
          open={openIndex === index}
          className="
            border
            border-zinc-300 dark:border-zinc-600
            rounded-lg
            overflow-hidden
            transition-all
            duration-200
          "
        >
          <summary
            className="
              p-4
              font-medium
              text-zinc-800 dark:text-zinc-100
              cursor-pointer
              transition-colors
              hover:bg-zinc-100 dark:hover:bg-zinc-700
            "
          >
            {item.question}
          </summary>
          <div
            className="
              p-4
              text-zinc-600 dark:text-zinc-400
              transition-all
              duration-300
            "
          >
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
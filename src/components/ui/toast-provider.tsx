"use client";

import * as React from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type Toast = {
  id: string;
  title: string;
  description: string;
  variant?: "default" | "destructive";
};

type ToastAction = {
  label: string;
  onClick: () => void;
};

const state: {
  toasts: Record<string, Toast & { open: boolean; action?: ToastAction }>;
  add: (toast: Omit<Toast, "id">) => string;
  remove: (id: string) => void;
} = {
  toasts: {},
  add(toast) {
    const id = Math.random().toString(36).substr(2, 9);
    this.toasts = {
      ...this.toasts,
      [id]: { ...toast, id, open: true },
    };
    return id;
  },
  remove(id) {
    this.toasts = {
      ...this.toasts,
      [id]: { ...this.toasts[id], open: false },
    };
    setTimeout(() => {
      this.toasts = {
        ...this.toasts,
        [id]: this.toasts[id],
      };
    }, TOAST_REMOVE_DELAY);
  },
};

export function useToast() {
  const [toasts, setToasts] = React.useState<
    (Toast & { open: boolean; action?: ToastAction })[]
  >(Object.keys(state.toasts).map((id) => state.toasts[id]));

  React.useEffect(() => {
    setToasts(Object.keys(state.toasts).map((id) => state.toasts[id]));
  }, [state.toasts]);

  return {
    toast: {
      title: (args: string | { title: string; description?: string }) => {
        let title: string;
        let description = "";
        if (typeof args === "string") {
          title = args;
        } else {
          title = args.title;
          description = args.description || "";
        }
        const id = state.add({ title, description });
        return () => state.remove(id);
      },
      description: (description: string | undefined) => {
        state.add({ title: "", description: description || "" });
      },
    },
    dismiss: (id?: string) => {
      state.remove(id ?? Object.keys(state.toasts)[0]);
    },
  };
}

export function Toaster() {
  const { toast } = useToast();

  return null;
}
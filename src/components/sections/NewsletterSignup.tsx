"use client";

import { useState } from "react";
import { z } from "zod";

const signupSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type NewsletterSignupProps = {
  successMessage?: string;
};

export function NewsletterSignup({
  successMessage = "Thank you for subscribing!",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    title: "",
    description: "",
    variant: "default",
  });

  const show = (title: string, description: string, variant: "default" | "destructive") => {
    setToast({ open: true, title, description, variant });
    const timeout = setTimeout(
      () => setToast({ open: false, title: "", description: "", variant: "default" }),
      5000
    );
    return () => clearTimeout(timeout);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      signupSchema.parse({ email });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setHasSubmitted(true);
      setEmail("");
      show("Success!", successMessage, "default");
    } catch (error) {
      if (error instanceof z.ZodError) {
        show("Validation Error", error.issues[0].message, "destructive");
      } else {
        show("Error", "Something went wrong. Please try again.", "destructive");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (hasSubmitted) {
    return (
      <div className="py-8 text-center">
        <svg
          className="mx-auto mb-4 text-primary w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <h3 className="text-2xl font-medium text-zinc-800 dark:text-zinc-100 mb-2">
          Thanks for subscribing!
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400">
          {successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="newsletter-email"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
          >
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="
              w-full
              px-4
              py-2
              rounded-lg
              border
              border-zinc-300 dark:border-zinc-600
              focus:outline-none
              focus:ring-2 focus:ring-primary
              placeholder='Enter your email'
              text-sm
            "
            aria-describedby="email-help-text"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full
            py-2
            rounded-lg
            bg-primary
            text-white
            font-medium
            transition-colors
            hover:bg-primary/90
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </form>
  );
}
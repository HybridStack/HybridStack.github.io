"use client";

import { useState, useRef, useEffect } from "react";

export function usePasswordToggle(initialVisible = false) {
  const [visible, setVisible] = useState(initialVisible);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.type = visible ? "text" : "password";
    }
  }, [visible]);

  return {
    visible,
    setVisible,
    inputRef,
    toggleVisibility,
    inputType: visible ? "text" : "password",
  };
}
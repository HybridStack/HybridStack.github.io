"use client";

import { ReactNode, useState } from "react";

type ModalAction = {
  label: string;
  onClick: () => void;
};

type ModalConfirmationProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  confirmLabel?: string;
  confirmAction?: () => void;
  cancelLabel?: string;
  children?: ReactNode;
};

export function ModalConfirmation({
  isOpen,
  onClose,
  title,
  confirmLabel = "Confirm",
  confirmAction,
  cancelLabel = "Cancel",
  children,
}: ModalConfirmationProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirm = () => {
    setShowConfirm(false);
    if (confirmAction) {
      confirmAction();
    }
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/60
        backdrop-blur-sm
        z-50
        flex
        items-center
        justify-center
        hidden
      "
      id="modal-overlay"
    >
      {isOpen && (
        <div
          className="
            bg-white dark:bg-gray-900
            rounded-lg
            p-6
            shadow-2xl
            w-full
            max-w-md
            transform
            scale-100
            transition-transform
            data-[open]:scale-100
            data-[close]:scale-95
            data-[close]:transition-transform
          "
        >
          <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-100 mb-4">
            {title}
          </h3>

          {children}

          <div className="flex gap-3 mt-4">
            <button
              onClick={onClose}
              className="
                flex-1
                py-2
                rounded-lg
                border
                border-zinc-300 dark:border-zinc-600
                text-zinc-700 dark:text-zinc-300
                hover:bg-zinc-100 dark:hover:bg-zinc-700
                transition-colors
              "
            >
              {cancelLabel}
            </button>
            <button
              onClick={handleConfirm}
              className="
                flex-1
                py-2
                rounded-lg
                bg-primary
                text-white
                font-medium
                hover:bg-primary/90
                transition-colors
              "
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
"use client";
import { useTransition } from "react";

export default function DeleteAllButton({
  action,
}: {
  action: () => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    const confirmed = confirm(
      "Are you sure you want to delete ALL tasks? This cannot be undone."
    );
    if (!confirmed) return;

    startTransition(() => action());
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-sm disabled:opacity-50 transition"
    >
      {isPending ? "Deleting..." : "Delete All"}
    </button>
  );
}
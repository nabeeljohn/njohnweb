import Link from "next/link";
import { MdChecklist, MdHome, MdPayment } from "react-icons/md";

type Variant = "desktop" | "mobile";

type Props = {
  variant?: Variant;
  onNavigate?: () => void;
};

export function ProductivityToolsDropdownItems({
  variant = "desktop",
  onNavigate,
}: Props) {
  const desktopItemClass =
    "flex items-center gap-2 px-3 py-2 text-sm text-gray-200 rounded-md hover:bg-gray-600/50 hover:text-white transition";
  const mobileItemClass =
    "flex items-center gap-2 px-3 py-2 text-sm text-gray-200 rounded-md hover:bg-gray-700/40 hover:text-white transition";

  const itemClass = variant === "desktop" ? desktopItemClass : mobileItemClass;

  return (
    <>
      <Link
        role={variant === "desktop" ? "menuitem" : undefined}
        href="/tools/productivity/tasks"
        onClick={() => onNavigate?.()}
        className={itemClass}
      >
        <MdChecklist className="h-4 w-4" />
        Tasks Lite
      </Link>
      <Link
        role={variant === "desktop" ? "menuitem" : undefined}
        href="/tools/productivity/paytracker"
        onClick={() => onNavigate?.()}
        className={itemClass}
      >
        <MdPayment className="h-4 w-4" />
        Pay Tracker
      </Link>
      {variant === "desktop" ? (
        <div className="border-t border-gray-600 my-1" />
      ) : (
        <div className="border-t border-gray-600 my-1 mx-1" />
      )}
      <Link
        role={variant === "desktop" ? "menuitem" : undefined}
        href="/tools/productivity"
        onClick={() => onNavigate?.()}
        className={itemClass}
      >
        <MdHome className="h-4 w-4" />
        Tools Home
      </Link>
    </>
  );
}


import Link from "next/link";
import {
  MdCode,
  MdHome,
  MdLink,
  MdLock,
  MdSmartToy,
  MdVerifiedUser,
} from "react-icons/md";

type Variant = "desktop" | "mobile";

type Props = {
  variant?: Variant;
  onNavigate?: () => void;
};

export function DeveloperToolsDropdownItems({
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
        href="/tools/dev/url"
        onClick={() => onNavigate?.()}
        className={itemClass}
      >
        <MdLink className="h-4 w-4" />
        Link Lab
      </Link>
      <Link
        role={variant === "desktop" ? "menuitem" : undefined}
        href="/tools/dev/jwt"
        onClick={() => onNavigate?.()}
        className={itemClass}
      >
        <MdLock className="h-4 w-4" />
        JWT Utility
      </Link>
      <Link
        role={variant === "desktop" ? "menuitem" : undefined}
        href="/tools/dev/saml"
        onClick={() => onNavigate?.()}
        className={itemClass}
      >
        <MdVerifiedUser className="h-4 w-4" />
        SAML Utility
      </Link>
      <Link
        role={variant === "desktop" ? "menuitem" : undefined}
        href="/tools/dev/formatter"
        onClick={() => onNavigate?.()}
        className={itemClass}
      >
        <MdCode className="h-4 w-4" />
        Formatter
      </Link>
      <Link
        role={variant === "desktop" ? "menuitem" : undefined}
        href="/tools/dev/agent"
        onClick={() => onNavigate?.()}
        className={itemClass}
      >
        <MdSmartToy className="h-4 w-4" />
        Chat with Milo
      </Link>
      {variant === "desktop" ? (
        <div className="border-t border-gray-600 my-1" />
      ) : (
        <div className="border-t border-gray-600 my-1 mx-1" />
      )}
      <Link
        role={variant === "desktop" ? "menuitem" : undefined}
        href="/tools/dev"
        onClick={() => onNavigate?.()}
        className={itemClass}
      >
        <MdHome className="h-4 w-4" />
        Developer Tools Home
      </Link>
    </>
  );
}


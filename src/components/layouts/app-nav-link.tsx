"use client";

// JSDoc comments Block
/** @param = Link is used here for navigation.  */
/** @async here  */

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type AppNavLinkProps = {
  href: string;
  children: ReactNode;
};

export function AppNavLink({ href, children }: AppNavLinkProps) {
  const pathName = usePathname();
  const isActive = href === pathName || pathName.startsWith(`${href}/`);
  const className =
    isActive ?
      "block text-white font-medium transaction"
    : "block text-slate-400 transition hover:text-white";

  return (
    <div>
      <Link
        href={href}
        className={className}
        aria-current={isActive ? "page" : undefined}
      >
        {children}
      </Link>
    </div>
  );
}

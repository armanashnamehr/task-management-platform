"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type AppNavLinkProps = {
  href: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export function AppNavLink({ href, children, onNavigate }: AppNavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  const className =
    isActive ?
      "block font-medium text-white transition"
    : "block text-slate-400 transition hover:text-white";

  return (
    <Link
      href={href}
      className={className}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
    >
      {children}
    </Link>
  );
}

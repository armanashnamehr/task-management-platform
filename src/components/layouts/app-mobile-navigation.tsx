"use client";

import { useState } from "react";
import { AppNavLink } from "./app-nav-link";

export function AppMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((previousState) => !previousState)}
        className="inline-flex size-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-slate-800 hover:text-white md:hidden"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <span aria-hidden="true" className="text-2xl leading-none">
          {isOpen ? "×" : "☰"}
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            onClick={closeMenu}
            className="absolute inset-0 bg-black/60"
            aria-label="Close navigation menu"
          />

          <aside
            id="mobile-navigation"
            className="absolute inset-y-0 left-0 w-72 max-w-[85vw] border-r border-slate-800 bg-slate-950 p-6 shadow-xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-semibold">Navigation</span>

              <button
                type="button"
                onClick={closeMenu}
                className="flex size-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white"
                aria-label="Close navigation menu"
              >
                <span aria-hidden="true" className="text-2xl leading-none">
                  ×
                </span>
              </button>
            </div>

            <nav className="space-y-4 text-sm" aria-label="Mobile navigation">
              <AppNavLink href="/dashboard" onNavigate={closeMenu}>
                Dashboard
              </AppNavLink>

              <AppNavLink href="/workspaces" onNavigate={closeMenu}>
                Workspaces
              </AppNavLink>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

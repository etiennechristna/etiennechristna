"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavLink = { href: string; label: string };

export function MobileMenu({
  links,
  cvHref,
  cvLabel,
}: {
  links: NavLink[];
  cvHref: string;
  cvLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--line)] text-[var(--ink)]"
      >
        {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full bg-[var(--bg)] border-b border-[var(--line)] px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={cvHref}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center bg-[var(--primary)] text-[var(--primary-fg)] px-4 py-2.5 rounded-full text-sm font-semibold"
          >
            {cvLabel}
          </a>
        </div>
      )}
    </div>
  );
}

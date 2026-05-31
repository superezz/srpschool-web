"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { quickEnquiryUrl } from "@/lib/whatsapp";
import Icon from "@/components/Icon";

const links = [
  { label: "Why Us", href: "#why" },
  { label: "Programs", href: "#programs" },
  { label: "Results", href: "#results" },
  { label: "Campus", href: "#gallery" },
  { label: "Contact", href: "#enquire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section flex h-16 items-center justify-between sm:h-20">
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-600 font-display text-lg font-extrabold text-ink-950 shadow-glow">
            {siteConfig.shortName.slice(0, 2)}
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-wide text-white">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold-300/80">
              {siteConfig.board} • {siteConfig.grades}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={quickEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Enquire Now
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-white lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden">
          <div className="section flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-gold-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href={quickEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

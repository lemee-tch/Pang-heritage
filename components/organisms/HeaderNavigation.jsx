'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavigationItem from '../molecules/NavigationItem';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';

const LINKS = [
  { href: '/', label: 'Explore' },
  { href: '/sites/hundred-islands', label: 'Hundred Islands' },
  { href: '/sites/bolinao-lighthouse', label: 'Bolinao Lighthouse' },
  { href: '/sites/balungao-hotspring', label: 'Balungao Hot Spring' },
];

/**
 * Organism: Header Navigation
 *
 * Usage context:
 * The persistent top-of-page navigation on every route, composed from
 * Navigation Item molecules plus the wordmark and mobile menu toggle.
 * Owns the open/closed state of the mobile menu sheet — the one piece
 * of interactivity none of its child molecules need to know about.
 *
 * Responsive logic:
 * Below `md` (768px): links collapse behind a hamburger button into a
 * full-width dropdown sheet, stacked vertically — appropriate for
 * thumb reach on a phone. From `md` up: links render inline in a row
 * and the toggle button is hidden entirely (not just visually hidden —
 * unmounted, so it's never in the tab order on desktop).
 */
export default function HeaderNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-basalt/10 bg-foam/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Icon name="lighthouse" size="1.6em" className="text-brick" />
          <Typography as="span" variant="h3" className="!text-lg">
            Pangasinan Heritage
          </Typography>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <NavigationItem href={link.href}>{link.label}</NavigationItem>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-basalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size="1.5em" />
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Primary" className="border-t border-basalt/10 md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <NavigationItem href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </NavigationItem>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '../atoms/Icon';

/**
 * Molecule: Navigation Item
 *
 * Usage context:
 * One entry inside Header Navigation (desktop top bar or mobile menu
 * sheet). Combines a Typography-style label with active-state logic —
 * a plain Button or Link alone can't express "currently on this page",
 * which is why this is a molecule rather than reusing Button directly.
 *
 * Responsive logic:
 * The component's own markup doesn't change across breakpoints; it's
 * rendered inline in a row on desktop and stacked full-width in the
 * mobile sheet by its parent (Header Navigation), which just changes
 * the surrounding flex direction, not this component.
 */
export default function NavigationItem({ href, children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`group flex items-center justify-between gap-2 rounded-lg px-3 py-2 font-body text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick ${
        isActive ? 'text-brick' : 'text-basalt hover:text-brick'
      }`}
    >
      {children}
      <Icon
        name="chevron"
        size="1em"
        className="text-basalt/30 transition-transform group-hover:translate-x-0.5 md:hidden"
      />
    </Link>
  );
}

/**
 * Atom: Icon
 *
 * Usage context:
 * Small inline glyphs used inside molecules (Search Form's magnifier,
 * Navigation Item's chevron) and organisms (Header Navigation's menu
 * toggle). Every icon is inline SVG — zero icon-font or image request,
 * which matters directly for the "lightning fast on 3G/4G" requirement.
 *
 * Responsive logic:
 * Icons are sized in em units by default (`size` prop sets both
 * dimensions), so they scale with the surrounding text automatically
 * instead of needing per-breakpoint pixel overrides.
 */
const PATHS = {
  pin: 'M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z',
  search: 'M10 4a6 6 0 104.47 10.03l4.75 4.75a1 1 0 001.41-1.41l-4.75-4.75A6 6 0 0010 4zm-4 6a4 4 0 118 0 4 4 0 01-8 0z',
  menu: 'M3 6h18a1 1 0 000-2H3a1 1 0 000 2zm0 7h18a1 1 0 000-2H3a1 1 0 000 2zm0 7h18a1 1 0 000-2H3a1 1 0 000 2z',
  close: 'M18.3 5.71L12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3z',
  chevron: 'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z',
  wave: 'M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0v3c-2-2-4-2-6 0s-4 2-6 0-4-2-6 0v-3z',
  sun: 'M12 5a1 1 0 011-1V2a1 1 0 10-2 0v2a1 1 0 011 1zm0 14a1 1 0 011 1v2a1 1 0 10-2 0v-2a1 1 0 011-1zm9-7a1 1 0 01-1 1h-2a1 1 0 100 2h2a1 1 0 100-2h-2a1 1 0 011-1zM6 12a1 1 0 01-1 1H3a1 1 0 100 2h2a1 1 0 100-2H3a1 1 0 011-1zm9.66-6.66a1 1 0 01-1.41 0l-1.42-1.42a1 1 0 011.42-1.41l1.41 1.41a1 1 0 010 1.42zM7.17 17.24a1 1 0 01-1.41 0l-1.42 1.42a1 1 0 101.42 1.41l1.41-1.41a1 1 0 000-1.42zM18.24 17.24a1 1 0 000 1.42l1.42 1.41a1 1 0 101.41-1.41l-1.41-1.42a1 1 0 00-1.42 0zM5.76 5.76a1 1 0 000 1.42L7.17 8.6a1 1 0 001.41-1.42L7.17 5.76a1 1 0 00-1.41 0zM12 8a4 4 0 100 8 4 4 0 000-8z',
  lighthouse: 'M11 2h2l1 3H10l1-3zm-1.5 4h5l.7 3h-6.4l.7-3zM8 10h8l1.5 11a1 1 0 01-1 1.1H7.5a1 1 0 01-1-1.1L8 10z',
  arrow: 'M13.17 12L8.59 7.41 10 6l6 6-6 6-1.41-1.41z',
};

export default function Icon({ name, size = '1.25em', className = '', label }) {
  const path = PATHS[name];
  if (!path) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role={label ? 'img' : 'presentation'}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      <path d={path} />
    </svg>
  );
}

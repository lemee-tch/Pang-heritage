import Link from 'next/link';

/**
 * Atom: Button
 *
 * Usage context:
 * The single interactive call-to-action control used across the site —
 * "Plan a visit", "View site details", form submits. Never used for
 * navigation between top-level sections (that's NavigationItem's job).
 *
 * Responsive logic:
 * Button is intrinsically sized (padding + font-size) rather than
 * container-queried, so it behaves the same at every breakpoint. On
 * touch/mobile it keeps a 44px+ tap target (WCAG 2.5.5) via py-3;
 * on desktop the hover/focus states become reachable with a mouse.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold ' +
    'transition-colors duration-150 focus-visible:outline focus-visible:outline-2 ' +
    'focus-visible:outline-offset-2 focus-visible:outline-brick disabled:opacity-50 ' +
    'disabled:pointer-events-none';

  const variants = {
    primary: 'bg-brick text-foam hover:bg-brick-dark active:bg-brick-dark',
    secondary:
      'bg-transparent text-lagoon border-2 border-lagoon hover:bg-lagoon hover:text-foam',
    ghost: 'bg-transparent text-basalt hover:bg-limestone',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}

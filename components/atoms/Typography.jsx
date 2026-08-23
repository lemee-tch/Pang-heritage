/**
 * Atom: Typography
 *
 * Usage context:
 * The only place font-family, weight, and type-scale values are declared.
 * Every heading and paragraph in the app renders through this component
 * instead of raw <h1>/<p> tags with ad-hoc classes, so the scale stays
 * consistent and a future redesign only touches one file.
 *
 * Responsive logic:
 * Scale steps down fluidly with clamp() between a mobile-first minimum
 * and a desktop maximum, so headings never need per-breakpoint overrides
 * or cause layout shift as the viewport resizes.
 */
const VARIANTS = {
  display: {
    tag: 'h1',
    className: 'font-display font-normal text-basalt tracking-tight',
    style: { fontSize: 'clamp(2.25rem, 5vw + 1rem, 4.5rem)', lineHeight: 1.05 },
  },
  h1: {
    tag: 'h1',
    className: 'font-display font-normal text-basalt tracking-tight',
    style: { fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)', lineHeight: 1.1 },
  },
  h2: {
    tag: 'h2',
    className: 'font-display font-normal text-basalt tracking-tight',
    style: { fontSize: 'clamp(1.5rem, 2vw + 1rem, 2.25rem)', lineHeight: 1.15 },
  },
  h3: {
    tag: 'h3',
    className: 'font-display font-medium text-basalt',
    style: { fontSize: 'clamp(1.25rem, 1vw + 1rem, 1.5rem)', lineHeight: 1.25 },
  },
  body: {
    tag: 'p',
    className: 'font-body font-normal text-basalt/85',
    style: { fontSize: '1rem', lineHeight: 1.6 },
  },
  bodyLarge: {
    tag: 'p',
    className: 'font-body font-normal text-basalt/85',
    style: { fontSize: '1.125rem', lineHeight: 1.6 },
  },
  eyebrow: {
    tag: 'span',
    className: 'font-mono font-medium uppercase tracking-[0.14em] text-brick',
    style: { fontSize: '0.75rem' },
  },
  caption: {
    tag: 'span',
    className: 'font-mono font-normal text-basalt/60',
    style: { fontSize: '0.8125rem', lineHeight: 1.4 },
  },
};

export default function Typography({
  as,
  variant = 'body',
  children,
  className = '',
  ...rest
}) {
  const config = VARIANTS[variant] || VARIANTS.body;
  const Tag = as || config.tag;

  return (
    <Tag className={`${config.className} ${className}`} style={config.style} {...rest}>
      {children}
    </Tag>
  );
}

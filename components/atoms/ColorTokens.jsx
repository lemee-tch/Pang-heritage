/**
 * Atom: Color Tokens
 *
 * Usage context:
 * Not a visual UI atom on its own — this is the single source of truth
 * for the palette (mirrored into tailwind.config.js as `theme.colors`).
 * Import COLOR_TOKENS anywhere a color needs to be referenced by name
 * (e.g. in charts, inline SVG fills) instead of hard-coding a hex value.
 * <ColorTokenSwatches /> renders the living reference used in this
 * manual and in the /design-system preview route.
 *
 * Responsive logic:
 * The swatch grid is the only "layout" concern here: 2 columns on
 * mobile, up to 6 on desktop, via CSS grid auto-fit — no JS breakpoints.
 */
export const COLOR_TOKENS = [
  { name: 'Lagoon', token: 'lagoon', hex: '#0E5C63', usage: 'Primary brand color — links, focus rings, primary text on light surfaces. Drawn from the Hundred Islands lagoon.' },
  { name: 'Limestone', token: 'limestone', hex: '#EDE6D6', usage: 'Primary background surface. Drawn from the karst rock and sand of the islands.' },
  { name: 'Brick', token: 'brick', hex: '#A64B2A', usage: 'Primary accent — buttons, active states, the eyebrow label. Drawn from Bolinao Lighthouse brickwork.' },
  { name: 'Ember', token: 'ember', hex: '#D69A2D', usage: 'Secondary accent — badges, hover highlights. Drawn from Balungao Hot Spring.' },
  { name: 'Basalt', token: 'basalt', hex: '#16211F', usage: 'Body text and high-contrast ink. Meets WCAG AA contrast on both Limestone and Foam.' },
  { name: 'Foam', token: 'foam', hex: '#FAFBF8', usage: 'Card and header surface white, sits above Limestone.' },
];

export function ColorTokenSwatches() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {COLOR_TOKENS.map((c) => (
        <div key={c.token} className="flex flex-col gap-2">
          <div
            className="h-16 w-full rounded-lg border border-basalt/10"
            style={{ backgroundColor: c.hex }}
            aria-hidden="true"
          />
          <div>
            <p className="font-body text-sm font-semibold text-basalt">{c.name}</p>
            <p className="font-mono text-xs text-basalt/60">{c.hex}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

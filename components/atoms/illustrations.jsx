/**
 * Hand-authored SVG illustrations, one per heritage site.
 *
 * These stand in for photography deliberately: each is a few hundred
 * bytes of vector markup (vs. hundreds of KB for an optimized photo),
 * renders crisply at any pixel density, and needs zero network request
 * once the page's JS/CSS has loaded — a direct answer to the "lightning
 * fast on 3G/4G" requirement. See Image atom for how these are consumed.
 */

export function HundredIslandsArt({ className }) {
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="240" fill="#0E5C63" />
      <rect width="400" height="80" y="0" fill="#3E8B8F" opacity="0.4" />
      <ellipse cx="90" cy="170" rx="70" ry="34" fill="#EDE6D6" />
      <ellipse cx="95" cy="150" rx="30" ry="20" fill="#6B8F5A" />
      <ellipse cx="250" cy="185" rx="95" ry="30" fill="#EDE6D6" />
      <ellipse cx="245" cy="165" rx="40" ry="18" fill="#6B8F5A" />
      <ellipse cx="340" cy="160" rx="45" ry="22" fill="#EDE6D6" />
      <ellipse cx="340" cy="146" rx="18" ry="10" fill="#6B8F5A" />
      <path d="M0 210 Q50 200 100 210 T200 210 T300 210 T400 210 V240 H0 Z" fill="#3E8B8F" opacity="0.6" />
      <path d="M0 222 Q50 214 100 222 T200 222 T300 222 T400 222 V240 H0 Z" fill="#0E5C63" />
    </svg>
  );
}

export function LighthouseArt({ className }) {
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="240" fill="#EDE6D6" />
      <rect width="400" height="150" fill="#3E8B8F" opacity="0.25" />
      <polygon points="180,215 220,215 210,60 190,60" fill="#A64B2A" />
      <rect x="185" y="60" width="30" height="14" fill="#FAFBF8" />
      <rect x="178" y="40" width="44" height="22" fill="#16211F" />
      <polygon points="178,40 200,20 222,40" fill="#A64B2A" />
      <rect x="196" y="8" width="8" height="14" fill="#16211F" />
      <g stroke="#D69A2D" strokeWidth="3" opacity="0.7">
        <line x1="222" y1="48" x2="270" y2="30" />
        <line x1="222" y1="52" x2="270" y2="52" />
      </g>
      <rect x="0" y="215" width="400" height="25" fill="#0E5C63" />
    </svg>
  );
}

export function HotSpringArt({ className }) {
  return (
    <svg viewBox="0 0 400 240" className={className} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="240" fill="#EDE6D6" />
      <ellipse cx="200" cy="150" rx="150" ry="60" fill="#D69A2D" opacity="0.35" />
      <ellipse cx="200" cy="150" rx="110" ry="42" fill="#D69A2D" opacity="0.6" />
      <g stroke="#FAFBF8" strokeWidth="4" fill="none" opacity="0.8">
        <path d="M150 100 q6 -18 0 -30" />
        <path d="M200 90 q6 -18 0 -30" />
        <path d="M250 100 q6 -18 0 -30" />
      </g>
      <ellipse cx="90" cy="190" rx="50" ry="20" fill="#6B8F5A" />
      <ellipse cx="320" cy="185" rx="55" ry="22" fill="#6B8F5A" />
    </svg>
  );
}

export const ILLUSTRATIONS = {
  'hundred-islands': HundredIslandsArt,
  'bolinao-lighthouse': LighthouseArt,
  'balungao-hotspring': HotSpringArt,
};

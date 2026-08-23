import NextImage from 'next/image';
import { ILLUSTRATIONS } from './illustrations';

/**
 * Atom: Image
 *
 * Usage context:
 * The single wrapper for site imagery. Pass a `photo` path (under
 * /public) to render a real photograph; omit it to fall back to the
 * lightweight hand-authored SVG illustration for that `site` key —
 * useful while you're still collecting photos, or for any site that
 * doesn't have one yet. Used inside Heritage Card and the hero of
 * each site's detail page.
 *
 * Responsive logic:
 * `aspect` sets a CSS aspect-ratio box so the image never causes layout
 * shift while surrounding text reflows. A photo fills that box with
 * object-fit: cover at any container width (mobile, tablet, desktop);
 * the SVG fallback scales fluidly via preserveAspectRatio="slice".
 */
export default function Image({ site, photo, alt, aspect = '4 / 3', className = '' }) {
  const Art = ILLUSTRATIONS[site];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-lagoon/10 ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={alt}
    >
      {photo ? (
        <NextImage
          src={photo}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      ) : Art ? (
        <Art className="h-full w-full" />
      ) : null}
    </div>
  );
}

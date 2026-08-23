import Link from 'next/link';
import Image from '../atoms/Image';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

/**
 * Molecule: Heritage Card
 *
 * Usage context:
 * The Heritage Card is used exclusively for displaying tourist site
 * previews in a responsive heritage-site grid (see Heritage Grid). It
 * is a Link, not a Button-wrapped div, so the whole card is a single
 * keyboard-focusable, screen-reader-announced target.
 *
 * Responsive logic:
 * The card itself has no internal breakpoints — it is a single-column
 * flex stack at every size. Layout responsiveness lives one level up,
 * in Heritage Grid, which changes how many cards sit per row. This
 * keeps the card predictable and reusable in non-grid contexts too
 * (e.g. a "related sites" rail).
 */
export default function HeritageCard({ site }) {
  return (
    <Link
      href={`/sites/${site.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-foam shadow-sm ring-1 ring-basalt/5 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick"
    >
      <Image site={site.slug} photo={site.photo} alt={site.name} aspect="4 / 3" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <Typography variant="eyebrow">{site.town}</Typography>
        <Typography variant="h3" as="h3">
          {site.name}
        </Typography>
        <Typography variant="body" className="text-basalt/70">
          {site.tagline}
        </Typography>
        <div className="mt-auto flex items-center justify-between pt-3">
          <Typography variant="caption" className="flex items-center gap-1">
            <Icon name="pin" size="1em" />
            {site.coords}
          </Typography>
          <span className="flex items-center gap-1 font-body text-sm font-semibold text-brick">
            View site
            <Icon name="arrow" size="1em" className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

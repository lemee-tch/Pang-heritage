import { notFound } from 'next/navigation';
import { SITES, getSiteBySlug } from '../../../lib/sites-data';
import Typography from '../../../components/atoms/Typography';
import Icon from '../../../components/atoms/Icon';
import ImageAtom from '../../../components/atoms/Image';
import Button from '../../../components/atoms/Button';

// Required for `output: 'export'` — pre-renders one static HTML file
// per site at build time (true JAMstack: no server-side route handler).
export function generateStaticParams() {
  return SITES.map((site) => ({ slug: site.slug }));
}

export function generateMetadata({ params }) {
  const site = getSiteBySlug(params.slug);
  if (!site) return {};
  return {
    title: `${site.name} — Pangasinan Heritage Digital Showcase`,
    description: site.description,
  };
}

export default function SiteDetailPage({ params }) {
  const site = getSiteBySlug(params.slug);
  if (!site) notFound();

  return (
    <article className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
      <Typography variant="eyebrow">{site.town}</Typography>
      <Typography variant="h1" className="mt-2">
        {site.name}
      </Typography>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <ImageAtom site={site.slug} photo={site.photo} alt={site.name} aspect="4 / 3" />

        <div className="flex flex-col gap-4">
          <Typography variant="bodyLarge">{site.description}</Typography>

          <div className="flex items-center gap-2">
            <Icon name="pin" size="1em" className="text-brick" />
            <Typography variant="caption" as="span">
              {site.coords}
            </Typography>
          </div>

          <ul className="flex flex-wrap gap-2 pt-1">
            {site.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-ember/15 px-3 py-1 font-mono text-xs text-ember"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Button href="/" variant="secondary">
              <Icon name="arrow" size="1em" className="rotate-180" />
              Back to all sites
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

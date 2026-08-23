import Typography from '../../components/atoms/Typography';
import Button from '../../components/atoms/Button';
import Icon from '../../components/atoms/Icon';
import { ColorTokenSwatches } from '../../components/atoms/ColorTokens';
import HeritageCard from '../../components/molecules/HeritageCard';
import SearchForm from '../../components/molecules/SearchForm';
import HeritageGrid from '../../components/organisms/HeritageGrid';
import { SITES } from '../../lib/sites-data';

// A living style-guide route, not linked from primary navigation.
// Exists so every component in the Atomic Design System Manual can be
// screenshotted in isolation, in context, and at the states documented
// in the manual (default / hover / focus) from one static page.
export const metadata = { title: 'Design System — Pangasinan Heritage' };

function Section({ level, title, children }) {
  return (
    <section className="flex flex-col gap-4 border-b border-basalt/10 py-10">
      <Typography variant="eyebrow">{level}</Typography>
      <Typography variant="h2">{title}</Typography>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-12 sm:px-6">
      <Typography variant="h1">Component Library</Typography>
      <Typography variant="body" className="mt-2 max-w-2xl">
        Every atom, molecule, and organism in the Pangasinan Heritage Digital
        Showcase, built with Brad Frost&rsquo;s Atomic Design methodology.
      </Typography>

      <Section level="Atoms" title="Color Tokens">
        <ColorTokenSwatches />
      </Section>

      <Section level="Atoms" title="Typography">
        <div className="flex flex-col gap-3">
          <Typography variant="display">Display</Typography>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="bodyLarge">Body Large — used for lede paragraphs.</Typography>
          <Typography variant="body">Body — the default paragraph style.</Typography>
          <Typography variant="eyebrow">Eyebrow label</Typography>
          <Typography variant="caption">Caption / mono data, e.g. coordinates</Typography>
        </div>
      </Section>

      <Section level="Atoms" title="Button">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </Section>

      <Section level="Atoms" title="Icon">
        <div className="flex flex-wrap gap-6">
          {['pin', 'search', 'menu', 'close', 'chevron', 'wave', 'sun', 'lighthouse', 'arrow'].map((name) => (
            <div key={name} className="flex flex-col items-center gap-1">
              <Icon name={name} size="1.75em" className="text-brick" />
              <Typography variant="caption">{name}</Typography>
            </div>
          ))}
        </div>
      </Section>

      <Section level="Molecules" title="Heritage Card">
        <div className="max-w-sm">
          <HeritageCard site={SITES[0]} />
        </div>
      </Section>

      <Section level="Molecules" title="Search Form">
        <div className="max-w-md">
          <SearchForm />
        </div>
      </Section>

      <Section level="Molecules" title="Navigation Item">
        <Typography variant="caption">See Header Navigation below — Navigation Item is not used standalone.</Typography>
      </Section>

      <Section level="Organisms" title="Header Navigation">
        <Typography variant="caption">Rendered at the top of every page (see site header).</Typography>
      </Section>

      <Section level="Organisms" title="Heritage Grid">
        <HeritageGrid sites={SITES} />
      </Section>
    </div>
  );
}

'use client';

import { useMemo, useState } from 'react';
import HeritageCard from '../molecules/HeritageCard';
import SearchForm from '../molecules/SearchForm';
import Typography from '../atoms/Typography';

/**
 * Organism: Heritage Grid
 *
 * Usage context:
 * The main content of the homepage — combines Search Form with a grid
 * of Heritage Cards. This is the one place that owns "which sites are
 * currently visible", so Search Form and Heritage Card stay presentational
 * and reusable elsewhere.
 *
 * Responsive logic:
 * Container: 1 column on mobile (<640px), 2 columns from `sm`, 3 columns
 * from `lg`. Uses CSS grid with fixed breakpoints (not container queries)
 * since the grid always spans the full page width in this layout — a
 * container query would add complexity with no behavioral difference
 * here. Card internals reflow on their own (see Heritage Card), so the
 * grid only needs to manage column count and gutter spacing.
 */
export default function HeritageGrid({ sites }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sites;
    return sites.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.town.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [sites, query]);

  return (
    <div className="flex flex-col gap-8">
      <div className="max-w-xl">
        <SearchForm onSearch={setQuery} />
      </div>

      {filtered.length === 0 ? (
        <Typography variant="body" className="text-basalt/60">
          No sites match &ldquo;{query}&rdquo;. Try a town name like Bolinao or Alaminos.
        </Typography>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((site) => (
            <HeritageCard key={site.slug} site={site} />
          ))}
        </div>
      )}
    </div>
  );
}

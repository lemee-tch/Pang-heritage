'use client';

import { useState } from 'react';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';

/**
 * Molecule: Search Form
 *
 * Usage context:
 * Sits at the top of the Heritage Grid organism, letting a visitor
 * filter the site list by name or town (e.g. "Bolinao") without a page
 * reload. Filtering happens client-side against the small static site
 * list, so it works from the first paint with no API round-trip —
 * consistent with the JAMstack / low-bandwidth requirement.
 *
 * Responsive logic:
 * On mobile the input and button stack full-width in a row with the
 * button shrunk to an icon-only square (44x44px minimum tap target).
 * From the `sm` breakpoint up, the button gains its text label back
 * since there's enough horizontal room.
 */
export default function SearchForm({ onSearch, placeholder = 'Search by site or town…' }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearch?.(value);
  }

  function handleChange(e) {
    setValue(e.target.value);
    onSearch?.(e.target.value);
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex w-full items-stretch gap-2"
    >
      <label htmlFor="site-search" className="sr-only">
        Search heritage sites
      </label>
      <div className="relative flex-1">
        <Icon
          name="search"
          size="1.1em"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-basalt/40"
        />
        <input
          id="site-search"
          type="search"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full rounded-full border border-basalt/15 bg-foam py-3 pl-11 pr-4 font-body text-base text-basalt placeholder:text-basalt/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick"
        />
      </div>
      <Button type="submit" variant="primary" size="md" className="shrink-0 !px-4 sm:!px-6">
        <span className="sm:hidden" aria-hidden="true">
          <Icon name="search" size="1.1em" />
        </span>
        <span className="hidden sm:inline">Search</span>
      </Button>
    </form>
  );
}

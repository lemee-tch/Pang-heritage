export const SITES = [
  {
    slug: 'hundred-islands',
    photo: '/images/hundred_islands-1.jpg',
    name: 'Hundred Islands',
    town: 'Alaminos',
    coords: '16.1919° N, 119.9186° E',
    tagline: 'Over 120 limestone islets scattered across Lingayen Gulf.',
    description:
      'A national park of karst islets you reach by outrigger boat, with lagoons for swimming, a canopy walk, and a zipline between the larger islands.',
    tags: ['Island hopping', 'Snorkeling', 'National Park'],
  },
  {
    slug: 'bolinao-lighthouse',
    photo: '/images/Lighthouse-2.png',
    name: "Bolinao Lighthouse",
    town: 'Bolinao',
    coords: '16.4167° N, 119.9078° E',
    tagline: 'A working 1905 Spanish-era lighthouse on Punta Piedra Point.',
    description:
      'One of the oldest lighthouses in the Philippines, still guiding ships along the Bolinao coast. The bluff it sits on overlooks the West Philippine Sea.',
    tags: ['Heritage structure', 'Sunset viewpoint', 'Cliffside'],
  },
  {
    slug: 'balungao-hotspring',
    photo: '/images/HotSpring-3.png',
    name: 'Balungao Hot Spring',
    town: 'Balungao',
    coords: '15.9333° N, 120.6167° E',
    tagline: 'Mineral-rich spring-fed pools at the foot of Mt. Balungao.',
    description:
      'A resort built around natural hot springs, with pools ranging from warm to cold and hiking trails up Mt. Balungao itself.',
    tags: ['Hot spring', 'Hiking trail', 'Family-friendly'],
  },
];

export function getSiteBySlug(slug) {
  return SITES.find((s) => s.slug === slug);
}

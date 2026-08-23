import Typography from '../components/atoms/Typography';
import Icon from '../components/atoms/Icon';
import HeritageGrid from '../components/organisms/HeritageGrid';
import { SITES } from '../lib/sites-data';

export default function HomePage() {
  return (
    <>
      <section className="border-b border-basalt/10 bg-foam">
        <div className="mx-auto flex max-w-content flex-col gap-6 px-4 py-16 sm:px-6 sm:py-24">
          <Typography variant="eyebrow">Pangasinan Provincial Tourism Office</Typography>
          <Typography variant="display" className="max-w-3xl">
            Three landscapes, one coastline.
          </Typography>
          <Typography variant="bodyLarge" className="max-w-2xl">
            Limestone islets rising out of Lingayen Gulf, a century-old lighthouse still
            guiding ships past Bolinao, and mineral springs warmed at the foot of Mt.
            Balungao <br></br> - start planning your visit below.
          </Typography>
          <div className="flex flex-wrap gap-6 pt-2">
            {SITES.map((site) => (
              <div key={site.slug} className="flex items-center gap-2">
                <Icon name="pin" size="1em" className="text-brick" />
                <Typography variant="caption">{site.coords}</Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16">
        <HeritageGrid sites={SITES} />
      </section>
    </>
  );
}

import './globals.css';
import HeaderNavigation from '../components/organisms/HeaderNavigation';
import Typography from '../components/atoms/Typography';

export const metadata = {
  title: 'Pangasinan Heritage Digital Showcase',
  description:
    "Explore Alaminos' Hundred Islands, Bolinao's Lighthouse, and Balungao's Hot Spring — a mobile-first guide from the Pangasinan Provincial Tourism Office.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-limestone font-body text-basalt antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brick focus:px-4 focus:py-2 focus:text-foam"
        >
          Skip to content
        </a>
        <HeaderNavigation />
        <main id="main-content">{children}</main>
        <footer className="border-t border-basalt/10 bg-foam">
          <div className="mx-auto max-w-content px-4 py-8 sm:px-6">
            <Typography variant="caption">
              Pangasinan Provincial Tourism Office — Digital Showcase.
            </Typography>
          </div>
        </footer>
      </body>
    </html>
  );
}

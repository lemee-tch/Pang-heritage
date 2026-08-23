import Typography from '../components/atoms/Typography';
import Button from '../components/atoms/Button';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-start gap-4 px-4 py-24 sm:px-6">
      <Typography variant="h1">Page not found</Typography>
      <Typography variant="body">
        The site you&rsquo;re looking for isn&rsquo;t part of this showcase yet.
      </Typography>
      <Button href="/" variant="primary">
        Back to all sites
      </Button>
    </div>
  );
}

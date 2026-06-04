import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-accent text-6xl font-bold mb-4">404</p>
        <h1 className="text-text-primary text-2xl font-semibold mb-3">Page Not Found</h1>
        <p className="text-text-secondary mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/" className="btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default Error;

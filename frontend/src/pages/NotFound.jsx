import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-6">
      <h1 className="text-6xl font-bold text-indigo-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition">
        Go to Home
      </Link>
    </div>
  );
}

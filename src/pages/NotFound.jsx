import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-bold text-[#ffe600] mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="bg-[#ffe600] text-black px-6 py-2 rounded font-semibold hover:bg-[#e0cc00] transition"
      >
        Go to Home
      </Link>
    </div>
  );
}

import Link from 'next/link';

export default function NotFoundUI() {
  return (
    <div className="h-full flex items-center justify-center bg-gray-700 text-gray-100 pt-24 pb-24">
      <div className="bg-gray-00 p-8 rounded-lg shadow-lg w-full max-w-2xl mt-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-lg mb-8">
          The page you're looking for doesn't exist yet. I'm working on adding it soon.
        </p>
        <Link href="/" className="text-blue-400 hover:text-blue-500 text-sm">
          Go back to Home
        </Link>
        <Link href="/contactme" className="text-blue-400 hover:text-blue-500 text-sm ml-4">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
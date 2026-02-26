'use client';

export default function Error({ error }: { error: any }) {
  return (
    <div className="bg-gray-700 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8">Something went wrong!</h1>
        <p className="text-gray-400 mb-6">
          An unexpected error has occurred. Please try again later.
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
        <p className="text-gray-500 mt-4">{error?.message}</p>
      </div>
    </div>
  );
}
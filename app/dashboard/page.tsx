// components/PersonalDashboard.js
import { MdWbSunny, MdCode, MdAutoStories, MdPhotoCamera, MdAutorenew } from 'react-icons/md';

export default function PersonalDashboard() {
  return (
    <div className="w-full flex flex-col gap-6 py-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-100 mb-4">My Dashboard</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

        {/* Weather */}
        <div className="bg-gray-800 p-4 rounded-md shadow hover:shadow-lg transition">
          <div className="flex items-center mb-2">
            <MdWbSunny className="h-6 w-6 text-yellow-400 mr-2" />
            <h2 className="text-lg font-semibold text-gray-100">Weather</h2>
          </div>
          <p className="text-gray-400 text-sm">Placeholder for local weather info</p>
        </div>

        {/* Coding Tip */}
        <div className="bg-gray-800 p-4 rounded-md shadow hover:shadow-lg transition">
          <div className="flex items-center mb-2">
            <MdCode className="h-6 w-6 text-green-400 mr-2" />
            <h2 className="text-lg font-semibold text-gray-100">Coding Tip</h2>
          </div>
          <p className="text-gray-400 text-sm">Placeholder for a daily coding tip</p>
        </div>

        {/* Learning / Tutorial Tip */}
        <div className="bg-gray-800 p-4 rounded-md shadow hover:shadow-lg transition">
          <div className="flex items-center mb-2">
            <MdAutoStories className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-lg font-semibold text-gray-100">Learning Tip</h2>
          </div>
          <p className="text-gray-400 text-sm">Placeholder for a learning or study tip</p>
        </div>

        {/* Photography Highlight */}
        <div className="bg-gray-800 p-4 rounded-md shadow hover:shadow-lg transition">
          <div className="flex items-center mb-2">
            <MdPhotoCamera className="h-6 w-6 text-pink-400 mr-2" />
            <h2 className="text-lg font-semibold text-gray-100">Photography</h2>
          </div>
          <p className="text-gray-400 text-sm">Placeholder for a recent photo or highlight</p>
        </div>

        {/* Daily Inspiration */}
        <div className="bg-gray-800 p-4 rounded-md shadow hover:shadow-lg transition md:col-span-2">
          <div className="flex items-center mb-2">
            <MdAutorenew className="h-6 w-6 text-purple-400 mr-2" />
            <h2 className="text-lg font-semibold text-gray-100">Daily Inspiration</h2>
          </div>
          <p className="text-gray-400 text-sm">Placeholder for a quote, challenge, or idea</p>
        </div>

      </div>
    </div>
  );
}
'use client';

import { useState } from "react";

export default function PhotographyHome() {
    const [name, setName] = useState('');

    function nameChangeEventHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

  return (
    <>
    <form>
        <input
          type="text"
          value={name} 
            onChange={nameChangeEventHandler}   
            placeholder="Enter your name"
            className="p-2 rounded border border-gray-600 bg-gray-800 text-gray-100 mb-4"
        />
        <button
          type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Submit
        </button> 
    </form>
      {/* Page content container */}
      <div className="bg-gray-700 text-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-8">Photography</h1>
            {/* Placeholder Content */}
            <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg opacity-60 cursor-not-allowed">
              <h2 className="text-xl font-semibold text-gray-400 mb-2">
                Photography Portfolio
                </h2>
                <p className="text-gray-500 text-sm">Coming soon…{name}</p>
            </div>
        </div>
      </div>
    </>
  );
}
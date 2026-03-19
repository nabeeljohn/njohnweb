'use client'

import { useState } from "react";

export default function JWTTools() {
  const [jwt, setJwt] = useState("");
  const [decoded, setDecoded] = useState<{ header?: any; payload?: any; signature?: string }>({});

  const handleDecode = () => {
    try {
      const [headerB64, payloadB64, signature] = jwt.split(".");
      const header = JSON.parse(atob(headerB64));
      const payload = JSON.parse(atob(payloadB64));
      setDecoded({ header, payload, signature });
    } catch (err) {
      setDecoded({ header: { error: "Invalid JWT" }, payload: {}, signature: "" });
    }
  };

  return (
    <div className="mx-auto max-w-lg p-6 bg-gray-900 text-gray-100 rounded-md flex flex-col gap-4">
      <h2 className="text-xl font-semibold">JWT Decoder</h2>

      {/* JWT Input */}
      <div className="flex flex-col">
        <label className="mb-1 text-gray-400">JWT Token</label>
        <textarea
          className="bg-gray-800 text-gray-100 p-3 rounded-md resize-none min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste your JWT token here..."
          value={jwt}
          onChange={(e) => setJwt(e.target.value)}
        />
      </div>

      {/* Decode Button */}
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md self-start"
        onClick={handleDecode}
      >
        Decode JWT
      </button>

      {/* Decoded Output */}
      {decoded.header && (
        <div className="flex flex-col gap-2 mt-4">
          <div>
            <strong className="text-gray-300">Header:</strong>
            <pre className="bg-gray-800 p-2 rounded-md overflow-x-auto">
              {JSON.stringify(decoded.header, null, 2)}
            </pre>
          </div>
          <div>
            <strong className="text-gray-300">Payload:</strong>
            <pre className="bg-gray-800 p-2 rounded-md overflow-x-auto">
              {JSON.stringify(decoded.payload, null, 2)}
            </pre>
          </div>
          {decoded.signature && (
            <div>
              <strong className="text-gray-300">Signature:</strong>
              <pre className="bg-gray-800 p-2 rounded-md overflow-x-auto">
                {decoded.signature}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';

export default function UrlForm() {
  const [isEncode, setIsEncode] = useState(true);
  const [inputUrl, setInputUrl] = useState('');
  const [outputUrl, setOutputUrl] = useState('');
  const [submitButtonTitle, setSubmitButtonTitle] = useState(isEncode ? 'Encode' : 'Decode');
  const [setAsideUrl, setSetAsideUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setSubmitButtonTitle(isEncode ? 'Encode' : 'Decode');
  }, [isEncode]);

  const inputUrlHandler = (e: React.ChangeEvent<HTMLInputElement>) => setInputUrl(e.target.value);

  const handleEncodeDecode = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = isEncode ? encodeURIComponent(inputUrl) : decodeURIComponent(inputUrl);
      setOutputUrl(result);
    } catch {
      setOutputUrl(`Error ${isEncode ? 'encoding' : 'decoding'} URL`);
    }
  };

  const setAsideHandler = () => {
    setSetAsideUrl(outputUrl);
    setOutputUrl('');
    setInputUrl('');
  };

  const toggleHandler = () => setIsEncode(prev => !prev);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(setAsideUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <form className="w-full bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
        {/* Header & Toggle */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold text-white">Link Lab - URL Encoder & Decoder</h1>

          {/* Toggle Pill */}
          <div className="relative w-40 h-10 bg-gray-700 rounded-full cursor-pointer flex" onClick={toggleHandler}>
            {/* Active Background */}
            <div
              className={`absolute top-0 left-0 h-full w-1/2 bg-blue-600 rounded-full transition-transform ${!isEncode ? 'translate-x-full' : ''
                }`}
            ></div>
            <span
              className={`w-1/2 text-center z-10 flex items-center justify-center transition-colors ${isEncode ? 'text-white' : 'text-gray-300'
                }`}
            >
              Encode
            </span>
            <span
              className={`w-1/2 text-center z-10 flex items-center justify-center transition-colors ${!isEncode ? 'text-white' : 'text-gray-300'
                }`}
            >
              Decode
            </span>
          </div>
        </div>

        {/* URL Input */}
        <fieldset className="flex flex-col">
          <label htmlFor="url-input" className="text-gray-300 font-medium mb-1">
            URL to {isEncode ? 'Encode' : 'Decode'}:
          </label>
          <input
            type="text"
            id="url-input"
            placeholder="Enter URL here"
            value={inputUrl}
            onChange={inputUrlHandler}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
        </fieldset>

        {/* Output */}
        <fieldset className="flex flex-col">
          <label htmlFor="formattedUrl" className="text-gray-300 font-medium mb-1">
            {isEncode ? 'Encoded' : 'Decoded'} URL:
          </label>
          <textarea
            id="formattedUrl"
            rows={4}
            value={outputUrl}
            readOnly
            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
          />
        </fieldset>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
          <button
            type="button"
            onClick={setAsideHandler}
            disabled={!outputUrl}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition ${!outputUrl ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'
              } w-full sm:w-auto`}
          >
            Set Aside
          </button>
          <button
            type="button"
            onClick={handleEncodeDecode}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition w-full sm:w-auto"
          >
            {submitButtonTitle}
          </button>
        </div>

        {/* Set Aside URL Display */}
        {setAsideUrl && (
          <div className="bg-gray-700 p-4 rounded-lg shadow-md opacity-95 mt-6 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
              <p className="break-all text-white">{setAsideUrl}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-3 py-4 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition"
                >
                  Copy to Clipboard
                </button>
                {copied && <span className="text-green-400 text-sm whitespace-nowrap">Copied!</span>}
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
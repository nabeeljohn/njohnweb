'use client';

import { useState, useEffect } from 'react';
import classes from './urlform.module.css';
import { buttonPrimary, buttonSecondary } from '@/appcomponents/styles/styles';

export default function UrlForm() {
  const [isEncode, setIsEncode] = useState(true); // true = Encode, false = Decode
  const [inputUrl, setInputUrl] = useState('');
  const [outputUrl, setOutputUrl] = useState('');
  const [submitButtonTitle, setSubmitButtonTitle] = useState(isEncode ? 'Encode' : 'Decode');
  const [setAsideUrl, setSetAsideUrl] = useState('');

  function updateSubmitButtonTitle() {
    setSubmitButtonTitle(isEncode ? 'Encode' : 'Decode');
  }

  useEffect(() => {
    updateSubmitButtonTitle();
  }, [isEncode]);

  function inputUrlHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputUrl(e.target.value);
  }

  function handleEncodeDecode(e: React.FormEvent) {
    e.preventDefault();
    if (isEncode) {
      try {
        const encoded = encodeURIComponent(inputUrl);
        setOutputUrl(encoded);
      } catch (error) {
        setOutputUrl('Error encoding URL');
      }
    } else {
      try {
        const decoded = decodeURIComponent(inputUrl);
        setOutputUrl(decoded);
      } catch (error) {
        setOutputUrl('Error decoding URL');
      }
    }
  }

  function setAsideHandler() {
    setSetAsideUrl(outputUrl);
    setOutputUrl('');
    setInputUrl('');
  }

  const toggleHandler = () => {
    setIsEncode(prev => !prev);
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(setAsideUrl);
      setCopied(true);

      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-gray-700 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <form className={classes.form}>
          {/* Title + toggle in one row */}
          <div className={classes.headerRow}>
            <h1 className={classes.title}>Link Lab - URL Encoder & Decoder</h1>

            <div className={classes.toggleContainer} onClick={toggleHandler}>
              <div className={classes.toggleButton}>
                <span className={isEncode ? classes.activeOption : ''}>Encode</span>
                <span className={!isEncode ? classes.activeOption : ''}>Decode</span>
              </div>
            </div>
          </div>

          <fieldset>
            <label htmlFor="url-input">URL to {isEncode ? 'Encode' : 'Decode'}:</label>
            <input
              type="text"
              id="url-input"
              placeholder="Enter URL here"
              value={inputUrl}
              onChange={inputUrlHandler}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="formattedUrl">{isEncode ? 'Encoded' : 'Decoded'} URL:</label>
            <textarea
              id="formattedUrl"
              rows={4}
              value={outputUrl}
              className={classes.textInput}
              readOnly
            />
          </fieldset>

          <div className={classes.actions}>
            <button
              type="button"
              onClick={setAsideHandler}
              disabled={!outputUrl}
              aria-disabled={!outputUrl}
              className={`${buttonPrimary} ${!outputUrl ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Set Aside
            </button>
            <button type="button" onClick={handleEncodeDecode} className={buttonPrimary}>{submitButtonTitle}</button>
          </div>

          {setAsideUrl && (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg opacity-60 mt-6">
    <div className="flex items-center justify-between">
      <p className="text-left break-all">{setAsideUrl}</p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleCopy}
          className={buttonSecondary}
        >
          Copy to Clipboard
        </button>
        {copied && (
          <span className="text-green-400 text-sm">Copied!</span>
        )}
      </div>
    </div>
  </div>
)}


        </form>
      </div>
    </div>
  );
}

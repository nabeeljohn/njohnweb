'use client';

import { useState } from 'react';
import classes from './UrlForm.module.css';

export default function UrlForm() {
  const [isEncode, setIsEncode] = useState(true); // true = Encode, false = Decode

  const toggleHandler = () => {
    setIsEncode(prev => !prev);
  };

  return (
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

  <div>
    <label htmlFor="url-input">URL:</label>
    <input type="text" placeholder="Enter URL here" />
  </div>

  <div>
    <label htmlFor="formattedUrl">Formatted Url:</label>
    <textarea
      placeholder="Formatted Url"
      rows={4}
      className={classes.textInput}
    />
  </div>

  <div className={classes.actions}>
    <button type="submit">Submit</button>
  </div>
</form>

  );
}

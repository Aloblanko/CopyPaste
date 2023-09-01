import React, { useState } from 'react';

function Clipboard() {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = () => {
    navigator.clipboard.readText().then((text) => {
      setCopiedText(text);
    });
  };

  return (
    <div className="clipboard-container">
      <h2>Big Post-It Note</h2>
      <div className="post-it">
        <textarea
          value={copiedText}
          onChange={(e) => setCopiedText(e.target.value)}
          placeholder="Paste text here..."
        />
      </div>
      <button onClick={handleCopy}>Copy to Post-It</button>
    </div>
  );
}

export default Clipboard;

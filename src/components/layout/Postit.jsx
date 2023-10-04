import { useState, useEffect } from 'react';


function Postit() {
  // Zustand für den gespeicherten Text
  const [copiedText, setCopiedText] = useState('');

  // Beim Laden der Komponente den gespeicherten Text aus dem Local Storage abrufen
  useEffect(() => {
    const savedText = localStorage.getItem('copiedText');
    if (savedText) {
      setCopiedText(savedText);
    }
  }, []);

  // Funktion zum Kopieren des Texts in die Zwischenablage
  

  // Funktion zum Aktualisieren des Texts im Zustand und im Local Storage
  const handleChange = (e) => {
    const newText = e.target.value;
    setCopiedText(newText);

    // Text im Local Storage speichern
    localStorage.setItem('copiedText', newText);
  };

  return (
    <div className="clipboard-container">
      <div className="post-it">
        <textarea  
          value={copiedText}
          onChange={handleChange} // Änderungen im Textbereich erfassen
          placeholder="CTRL+V"
        />
      </div>
      
    </div>
  );
}

export default Postit;


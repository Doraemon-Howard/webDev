import React, { useState, useEffect } from 'react';

function MotivationalQuote() {
  const [quoteHtml, setQuoteHtml] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";  // CORS proxy URL
        const apiUrl = "https://zenquotes.io/api/random";  // Actual API URL
        const response = await fetch(proxyUrl + apiUrl);  // Use proxy in fetch
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Data:', data); // Log the full API response
        setQuoteHtml(data[0].h); // Make sure this is the right field
      } catch (error) {
        setError(`Failed to load quote: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: quoteHtml }} /> {/* Display HTML from the response */}
    </div>
  );
}

export default MotivationalQuote;
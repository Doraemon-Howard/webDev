import React, { useState, useEffect } from 'react';

function App() {
  const [backgroundUrl, setBackgroundUrl] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await fetch('https://api.pexels.com/v1/curated?per_page=15', {
          headers: {
            Authorization: 'h9Katcak4hnfw0igDu0idl7v6qAq1trPmSnAmUewFPMyNIgmWSm34hZg',  // Replace YOUR_API_KEY with your actual API key
          },
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        
        // Randomly select an image from the curated list
        const randomIndex = Math.floor(Math.random() * data.photos.length);
        const randomImage = data.photos[randomIndex].src.landscape;

        setBackgroundUrl(randomImage);  // Set the random image as the background
      } catch (error) {
        setError(`Failed to load background image: ${error.message}`);
      }
    };

    fetchBackgroundImage();
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    zIndex: '-1',
  };

  if (error) {
    return <p>{error}</p>;
  }



  return (
    <div style={backgroundStyle}></div>
  );
}

export default App;
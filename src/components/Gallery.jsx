import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Gallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20')
      .then(response => response.json())
      .then(data => setImages(data.photos.slice(0, 20))) // Get first 20 images
      .catch(err => setError('Failed to fetch images.'));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="gallery">
        {images.map(image => (
          <div key={image.id} className="thumbnail">
            <Link to={`/image/${image.id}`}>
              <img src={image.url} alt={image.title} />
              <p>{image.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

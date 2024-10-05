import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ImageView = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20/${id}`)
      .then(response => response.json())
      .then(data => setImage(data.photo))
      .catch(err => setError('Failed to fetch image details.'));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!image) return <p>Loading...</p>;

  return (
    <div>
      <h1>{image.title}</h1>
      <img src={image.url} alt={image.title} />
      <p>{image.description}</p>
    </div>
  );
};

export default ImageView;

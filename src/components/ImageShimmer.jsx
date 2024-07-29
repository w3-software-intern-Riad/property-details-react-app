// ImageWithFallback.jsx
import React, { useState } from 'react';
import { Shimmer } from 'react-shimmer';


const ImageWithFallback = ({ src, alt, id, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div >
      {!loaded && <Shimmer width={300} height={300} />}
      <img
      className={className}
        id={id}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? 'block' : 'none' }}
      />
    </div>
  );
};

export default ImageWithFallback;

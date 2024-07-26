import React, { useState } from 'react';
import styles from '../../style/ImageViewer.module.css'; // Ensure this matches your file structure

const ImageViewer = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  if (!isOpen) return null;

  return (
    <div className={styles.fullGallery}>
      <button className={styles.close} onClick={onClose}>Close</button>
      <div className={styles.navigation_buttons}>
        <button className={styles.prevButton} onClick={handlePrev}>Previous</button>
        <button className={styles.nextButton} onClick={handleNext}>Next</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={styles.image} />
      </div>
    </div>
  );
};

export default ImageViewer;

import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../styles/styles.css';

export default function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <button className="gallery-arrow left" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <img 
        src={images[currentIndex]} 
        alt="Gallery" 
        className="gallery-image"
      />
      <button className="gallery-arrow right" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </div>
  );
}
// components/ImageCarousel.jsx
'use client';
import { useState } from 'react';
import styles from './ImageCarousel.module.css';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container relative w-full max-w-4xl mx-auto my-6">
      {/* 메인 이미지 */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
          className="w-full h-auto max-h-96 object-contain"
        />
        
        {/* 이전/다음 버튼 */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={`${styles.navButton} ${styles.leftButton}`}
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={goToNext}
              className={`${styles.navButton} ${styles.rightButton}`}
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* 인디케이터 점들 */}
      {images.length > 1 && (
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.indicatorActive : ''
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* 이미지 카운터 */}
      {images.length > 1 && (
        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

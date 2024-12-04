import React, { useState, useEffect, useRef } from "react";
import service from "../appwrite/config";
import "./Portfolio.css";

const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageUrls = await service.getFilePreviews();
        setImages(imageUrls);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex, images.length]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      {images.length > 0 ? (
        <>
          <img className="slider-image" src={images[currentIndex]} alt="Portfolio" />
          <div className="slider-controls">
            <button onClick={handlePrev} className="control-button">❮</button>
            <button onClick={handleNext} className="control-button">❯</button>
          </div>
        </>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default Portfolio;

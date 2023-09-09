import React, { useState, useEffect } from 'react';
import styles from './ModalViewer.module.css';

const ModalViewer = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [imageX, setImageX] = useState(0);
  const [imageY, setImageY] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setZoomLevel(1); // Reiniciar el nivel de zoom al cambiar de imagen
    setImageX(0); // Reiniciar la posición horizontal al cambiar de imagen
    setImageY(0);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setZoomLevel(1); // Reiniciar el nivel de zoom al cambiar de imagen
    setImageX(0);
    setImageY(0);
  };

  const handleZoom = (event) => {
    const deltaY = event.deltaY;
    if (deltaY > 0) {
      setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 3)); // Incrementar zoom
    } else {
      setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 1)); // Reducir zoom
    }
  };

  const handleMouseDown = (event) => {
    setDragStartX(event.clientX);
    setDragStartY(event.clientY);
    setDragging(true);
  };

  const handleMouseMove = (event) => {
    if (!dragging) return;

    const deltaX = event.clientX - dragStartX;
    const deltaY = event.clientY - dragStartY;

    setImageX((prevX) => prevX + deltaX);
    setImageY((prevY) => prevY + deltaY);

    setDragStartX(event.clientX);
    setDragStartY(event.clientY);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleZoom);
    return () => {
      window.removeEventListener('wheel', handleZoom);
    };
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className={styles.modalImage}
          style={{  transform: `scale(${zoomLevel}) translate(${imageX}px, ${imageY}px)`, }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
        <button className={styles.prevButton} onClick={prevImage}>
          &lt;
        </button>
        <button className={styles.nextButton} onClick={nextImage}>
          &gt;
        </button>
        <button className={styles.closeButton} onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalViewer;

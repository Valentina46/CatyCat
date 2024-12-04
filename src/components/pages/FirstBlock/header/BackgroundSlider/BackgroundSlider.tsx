import React, { useState, useEffect } from 'react';
import styles from './BackgroundSlider.module.css';
import  fon1 from "./../../../../assets/infoblock/fon1.png"
import  fon3 from "./../../../../assets/infoblock/fon3.png"
import  fon4 from "./../../../../assets/infoblock/fon4.png"
import  fon5 from "./../../../../assets/infoblock/fon5.png"
import  fon6 from "./../../../../assets/infoblock/fon6.png"
import  fon7 from "./../../../../assets/infoblock/fon7.png"
import  fon8 from "./../../../../assets/infoblock/fon8.jpg"
import  fon9 from "./../../../../assets/infoblock/fon9.jpg"

const BackgroundSlider = () => {
  const images = [
    fon1,
    fon3,
    fon4,
    fon5,
    fon6,
    fon7,
    fon8,
    fon9,
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setIsTransitioning(false);
      }, 1000);
    }, 10000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.backgroundSlider} style={{
      backgroundImage: `url(${images[currentImage]})`,
    }}>
        {isTransitioning && <div className={styles.fadeOverlay} />}
    </div>
  );
}

export default BackgroundSlider;
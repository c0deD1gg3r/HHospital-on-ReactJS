import React, { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
  {
    index: 0,
    url: 'https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13',
  },
  {
    index: 1,
    url: 'https://get.wallhere.com/photo/2048x1280-px-animals-baby-cat-cats-cute-fat-fluffy-grass-grey-kitten-kittens-1913313.jpg',
  },
  {
    index: 2,
    url: 'https://get.wallhere.com/photo/2048x1280-px-animals-baby-cat-cats-cute-fat-fluffy-grass-grey-kitten-kittens-1913313.jpg',
  },
  {
    index: 3,
    url: 'https://fresco.wallset.ru/images/detailed/1208/3086.jpg',
  },
  {
    index: 4,
    url: 'https://i.pinimg.com/originals/ba/bd/6d/babd6d37eb2dd965c7f1dfb516d54094.jpg',
  },
  {
    index: 5,
    url: 'https://i.pinimg.com/originals/24/ac/ef/24acef8b3a6a45d7239480bcc4ff0193.jpg',
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const nextImage = () => {
    setAnimate(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setAnimate(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const resetAnimation = () => setAnimate(false);
    const imgElement = document.getElementById('carousel-image');
    imgElement.addEventListener('animationend', resetAnimation);
    return () => {
      imgElement.removeEventListener('animationend', resetAnimation);
    };
  }, [currentIndex]);

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={prevImage}>❮</button>
      <img
        id="carousel-image"
        key={currentIndex}
        src={images[currentIndex].url}
        alt="carousel"
        className={`carousel-image ${animate ? 'slideRight' : ''}`}
      />
      <button className="carousel-button" onClick={nextImage}>❯</button>
    </div>
  );
};

export default Carousel;

import React, { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
  'https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13',
  'https://get.wallhere.com/photo/2048x1280-px-animals-baby-cat-cats-cute-fat-fluffy-grass-grey-kitten-kittens-1913313.jpg',
  'https://fresco.wallset.ru/images/detailed/1208/3086.jpg',
  'https://i.pinimg.com/originals/ba/bd/6d/babd6d37eb2dd965c7f1dfb516d54094.jpg',
  'https://i.pinimg.com/originals/24/ac/ef/24acef8b3a6a45d7239480bcc4ff0193.jpg'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    setInterval(nextImage, 5000);
  }, []);

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={prevImage}>❮</button>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <button className="carousel-button" onClick={nextImage}>❯</button>
    </div>
  );
};

export default Carousel;
import React from 'react';
import image1 from './images/image1.jpg';
import image2 from './images/image2.png';

const WhiteSection = () => {
  return (
    <section className="white-section">
      <div className="image-container">
        <img src={image1} alt="Interview Image 1" className="responsive-image" />
        <img src={image2} alt="Interview Image 2" className="responsive-image" />
      </div>

      <style jsx>{`
        .image-container {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }

        .responsive-image {
          height: 300px;
          object-fit: cover;
          border-radius: 10px;
          transition: transform 0.3s;
        }

        .responsive-image:hover {
          transform: scale(1.05);
        }

        .white-section {
          padding: 40px;
          background-color: white;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default WhiteSection;
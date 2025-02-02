import React from 'react';
import image1 from './images/image1.jpg'; // Adjust the path according to your structure
import image2 from './images/image2.jpg';

const WhiteSection = () => {
  return (
    <section className="white-section">
      <div className="image-container">
        <img src={image1} alt="Interview Image 1" />
        <img src={image2} alt="Interview Image 2" />
      </div>
    </section>
  );
};

export default WhiteSection;

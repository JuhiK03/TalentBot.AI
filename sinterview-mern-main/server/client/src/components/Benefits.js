import React, { useState } from 'react';

const Benefits = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);

  const benefits = [
    "Let AI conduct interviews, reducing hiring times significantly.",
    "Increase your interview capacity, assessing more candidates efficiently.",
    "Send only the most promising applicants to human interviewers, saving resources.",
    "Harness AI for efficient, consistent, and unbiased interviews.",
    "Conduct seamless interviews for both tech and non-tech roles, expanding your talent pool.",
    "Showcase your company as a leader in innovative recruitment, attracting top talent."
  ];

  const handleInteraction = (index, type) => {
    if (type === 'hover') setHoveredItem(index);
    else if (type === 'click') setClickedItem(index);
    else if (type === 'leave') setHoveredItem(null);
  };

  return (
    <section style={{ padding: '60px 20px', background: '#FAFAFA', textAlign: 'center' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
          Why Choose Talentbot.AI?
        </h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
          AI-powered hiring that’s fast, fair, and efficient.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              onMouseEnter={() => handleInteraction(index, 'hover')}
              onMouseLeave={() => handleInteraction(null, 'leave')}
              onClick={() => handleInteraction(index, 'click')}
              style={{
                background: clickedItem === index ? 'black' : 'white',
                color: clickedItem === index ? 'white' : '#333',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: hoveredItem === index ? '0 8px 16px rgba(0, 0, 0, 0.15)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                fontSize: hoveredItem === index ? '18px' : '16px',
                fontWeight: hoveredItem === index ? 'bold' : '500',
                border: hoveredItem === index || clickedItem === index ? '2px solid black' : '2px solid #E0E0E0'
              }}
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
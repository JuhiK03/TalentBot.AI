import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does Talentboi.ai work?",
      answer: "Talentboi.ai uses advanced AI algorithms to conduct interviews, evaluate candidate performance, and provide detailed assessments. You can customize interviews based on skills and access interview recordings for a comprehensive review."
    },
    {
      question: "Can Talentboi.ai be used for both technical and non-technical roles?",
      answer: "Absolutely! Talentboi.ai is versatile and can conduct interviews for a wide range of roles, including both technical and non-technical positions."
    },
    {
      question: "How does Talentboi.ai benefit my company?",
      answer: "By leveraging AI-powered interviews, you can significantly decrease hiring times, increase interview capacity, and ensure that only the most promising candidates reach human interviewers. This efficiency can help you stay ahead in recruitment and showcase your company's commitment to innovation."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="white-section">
      <div className="container">
        <h2>FAQs</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="toggle-icon">{activeIndex === index ? '▲' : '▼'}</span>
              </div>
              {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          background: white;
          border-radius: 8px;
          padding: 18px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }
        .faq-item:hover {
          transform: translateY(-3px);
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          font-size: 18px;
        }
        .toggle-icon {
          font-size: 18px;
        }
        .faq-answer {
          margin-top: 10px;
          font-size: 16px;
          color: #222; /* Darkened Answer Text */
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};
export default FAQs;
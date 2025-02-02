import React from 'react';

const FAQs = () => {
  return (
    <section id="faqs" className="white-section">
      <div className="container">
        <h2>FAQs</h2>
        <div className="faq">
          <div className="faq-item">
            <h3 className="faq-question">Q: How does Zinterview.ai work?</h3>
            <p className="faq-answer">A: Zinterview.ai uses advanced AI algorithms to conduct interviews, evaluate candidate performance, and provide detailed assessments. You can customize interviews based on skills and access interview recordings for a comprehensive review.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Q: Can Zinterview.ai be used for both technical and non-technical roles?</h3>
            <p className="faq-answer">A: Absolutely! Zinterview.ai is versatile and can conduct interviews for a wide range of roles, including both technical and non-technical positions.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Q: How does ZInterview.ai benefit my company?</h3>
            <p className="faq-answer">A: By leveraging AI-powered interviews, you can significantly decrease hiring times, increase interview capacity, and ensure that only the most promising candidates reach human interviewers. This efficiency can help you stay ahead in recruitment and showcase your company's commitment to innovation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

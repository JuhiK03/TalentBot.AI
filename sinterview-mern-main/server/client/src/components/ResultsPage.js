import React from "react";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Thank You for Completing the Interview! 🎉</h2>
        <p style={styles.text}>
          We appreciate your time and effort in participating in our interview process.
          Your responses have been successfully recorded and will be carefully reviewed by our team.
        </p>
        <p style={styles.text}>
          If your profile aligns with our requirements, we will reach out to you with the next steps.
          If you have any further questions, feel free to contact our support team.
        </p>

        <hr style={styles.separator} />

        <h3 style={styles.feedbackHeading}>Help Us Improve Our Interview Experience</h3>
        <p style={styles.feedbackText}>
          We value your opinion and would love to hear your thoughts about the interview process.
          Your feedback helps us enhance the candidate experience.
        </p>

        <div style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} style={styles.star}>⭐</span>
          ))}
        </div>

        <textarea 
          style={styles.feedbackInput} 
          placeholder="Let us know how we can improve..." 
        />

        <button style={styles.submitButton}>Submit Feedback</button>

        <p style={styles.signature}>Best regards,</p>
        <p style={styles.signature}>TalentBot Hiring Team</p>
      </div>

      <div style={styles.footer}>Powered by <span style={styles.brand}>TalentBot.AI</span></div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3f4f6",
    padding: "20px",
  },
  box: {
    width: "50%",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "12px",
    color: "#555",
  },
  separator: {
    border: "none",
    borderTop: "1px solid #ddd",
    margin: "20px 0",
  },
  feedbackHeading: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  feedbackText: {
    fontSize: "16px",
    marginBottom: "10px",
    color: "#555",
  },
  ratingContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "5px",
    marginBottom: "15px",
  },
  star: {
    fontSize: "22px",
    cursor: "pointer",
    color: "#FFD700",
  },
  feedbackInput: {
    width: "100%",
    height: "80px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    resize: "none",
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  signature: {
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#444",
  },
  footer: {
    marginTop: "30px",
    fontSize: "14px",
    color: "gray",
    textAlign: "center",
  },
  brand: {
    fontWeight: "bold",
  },
};

export default ResultsPage;

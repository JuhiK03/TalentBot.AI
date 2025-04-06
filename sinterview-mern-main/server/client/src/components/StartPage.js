import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const StartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = location.state || {};
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>
          Welcome to Your AI-Based Interview{name ? `, ${name}` : ""}
        </h1>
        <p style={styles.subtext}>Thank you for applying for the role of HR Hiring Manager.</p>
        <p style={styles.description}>
          Welcome to your AI-based interview, an innovative approach combining artificial
          intelligence with traditional job applications. This technology ensures fairness and efficiency.
        </p>

        <h2 style={styles.sectionTitle}>Interview Instructions:</h2>
        <ul style={styles.list}>
          <li><strong>Estimated Time:</strong> 30-40 minutes</li>
          <li><strong>Device:</strong> Laptop only</li>
          <li><strong>Time Limit:</strong> 7 minutes per question</li>
          <li><strong>Screen Sharing:</strong> Required during the interview</li>
        </ul>

        <h2 style={styles.sectionTitle}>Important Guidelines:</h2>
        <p style={styles.description}>
          Please ensure you have a stable internet connection and follow all the given guidelines. The AI system will analyze your responses in real-time.
        </p>
        <ul style={styles.list}>
          <li>Ensure a quiet environment.</li>
          <li>Keep your camera and microphone on.</li>
          <li>Answer each question within the time limit.</li>
          <li>Maintain professional body language.</li>
        </ul>

        <h2 style={styles.sectionTitle}>Your Privacy</h2>
        <p style={styles.description}>
          Please note that the interview session is recorded, including your screen activity, audio, and video. Rest assured, we handle this
          information responsibly and in accordance with our privacy policy.
        </p>

        <h2 style={styles.sectionTitle}>Navigating Technical Hiccups and Resuming Smoothly</h2>
        <p style={styles.description}>
          If you experience internet connectivity issues or system malfunctions during the interview, refresh your browser or reopen the link to resume.
          Your progress is automatically saved. For assistance, contact support@TalentBot.ai.
        </p>

        <div style={styles.termsContainer}>
          <input
            type="checkbox"
            id="terms"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="terms" style={styles.termsText}>
            I agree to the <a href="#" style={styles.link}>Terms and Conditions</a>
          </label>
        </div>

        <button
          style={{
            ...styles.startButton,
            backgroundColor: isChecked ? "green" : "gray",
            cursor: isChecked ? "pointer" : "not-allowed",
          }}
          disabled={!isChecked}
          onClick={() => navigate("/interview")}
        >
          Start Interview
        </button>
      </div>

      <footer style={styles.footer}>
        Powered by <span style={styles.brand}>TalentBot.AI</span>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px",
    position: "relative",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "60%",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  },
  list: {
    textAlign: "left",
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#333",
    paddingLeft: "20px",
  },
  termsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15px",
  },
  termsText: {
    fontSize: "14px",
    marginLeft: "5px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  startButton: {
    marginTop: "20px",
    padding: "10px 20px",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    width: "100%",
    borderRadius: "5px",
  },
  footer: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#6c757d",
    textAlign: "center",
    padding: "10px",
    position: "absolute",
    bottom: "10px",
    width: "100%",
  },
  brand: {
    fontWeight: "bold",
    color: "#6c757d",
  },
};

export default StartPage;
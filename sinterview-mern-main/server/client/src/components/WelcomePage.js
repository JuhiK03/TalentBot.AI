import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (name.trim() !== "") {
      navigate("/start", { state: { name } });
    } else {
      alert("Please enter your name before continuing.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Welcome to your AI Interview</h2>

      <label>Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />

      <h3>Job Description for HR:</h3>
      <p><strong>Required Candidate Profile:</strong></p>
      <ul style={styles.list}>
        <li>People Management skills</li>
        <li>Strong functional skills in HR area of expertise</li>
        <li>Ability to resolve conflicts and build teams</li>
        <li>Excellent transparent communication style</li>
        <li>Understanding of employment labor law</li>
        <li>Excellent computer skills, especially with MS-Office</li>
        <li><strong>Educational Qualifications:</strong> MBA/Postgraduate in Human Resources</li>
        <li><strong>Work Experience:</strong> 6-8 years in Human Resource</li>
      </ul>
      <p><strong>Job Type:</strong> Full-time, Permanent</p>

      <button onClick={handleContinue} style={styles.button}>Continue</button>

      <footer style={styles.footer}>
        <span style={styles.brand}>Powered by TalentBot.AI</span>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    position: "relative",
    minHeight: "100vh",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
  },
  list: {
    textAlign: "left",
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#333",
    paddingLeft: "20px",
  },
  footer: {
    marginTop: "20px",
    fontSize: "14px",
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

export default WelcomePage;
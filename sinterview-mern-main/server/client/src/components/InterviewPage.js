import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import mainAnimation from "../assets/main-animation.gif";

const InterviewPage = () => {
  const navigate = useNavigate();
  const [questionNum, setQuestionNum] = useState(0);
  const videoRef = useRef(null);
  const [proctoringActive, setProctoringActive] = useState(false);
  const [cheatingDetected, setCheatingDetected] = useState(false);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const startProctoring = async () => {
    try {
      await fetch("http://localhost:5000/start-proctoring", { method: "POST" });
      setProctoringActive(true);
    } catch (error) {
      console.error("Failed to start proctoring:", error);
    }
  };

  const stopProctoring = async () => {
    try {
      await fetch("http://localhost:5000/stop-proctoring", { method: "POST" });
      setProctoringActive(false);
    } catch (error) {
      console.error("Failed to stop proctoring:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch("http://localhost:5000/cheat-status");
        const data = await response.json();
        setCheatingDetected(data.cheatDetected);
      } catch (error) {
        console.error("Error checking cheat status:", error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    startWebcam();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <span style={styles.brand}>XYZ</span>
        <span style={styles.title}>Interview for HR</span>
        <span style={styles.endInterview} onClick={() => { stopProctoring(); navigate("/results"); }}>
          End Interview
        </span>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.animationContainer}>
          <img src={mainAnimation} alt="Interview Animation" style={styles.animation} />
        </div>
        <div style={styles.videoContainer}>
          <video ref={videoRef} autoPlay muted style={styles.video} />
        </div>
      </div>

      <div style={styles.textContainer}>
        <p style={styles.interviewerText}>
          ✦ Zouk (Interviewer) <br />
          Question {questionNum + 1}:
        </p>
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.askDoubt}>Ask Doubt?</button>
        <button
          style={styles.skipQuestion}
          onClick={() => setQuestionNum((prev) => Math.min(prev + 1, 10))}
        >
          Skip Question {'>'}
        </button>
        <button
          style={styles.next}
          onClick={() => setQuestionNum((prev) => Math.min(prev + 1, 10))}
        >
          Next {'>'}
        </button>
      </div>

      <button
        style={styles.startSpeaking}
        onClick={() => {
          startProctoring();
        }}
      >
        Start Interview
      </button>

      {cheatingDetected && (
        <div style={styles.cheatingAlert}>⚠ Cheating Detected! Stay focused.</div>
      )}

      <footer style={styles.footer}>
        Powered by <span style={styles.brandBottom}>TalentBot.AI</span>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "white",
    padding: "15px 30px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  title: {
    fontSize: "1.2rem",
  },
  endInterview: {
    color: "red",
    fontWeight: "bold",
    cursor: "pointer",
  },
  mainContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0",
    marginTop: "20px",
  },
  animationContainer: {
    flex: 1,
    textAlign: "center",
    margin: 0,
  },
  animation: {
    width: "200px",
    height: "auto",
    borderRadius: "10px",
  },
  videoContainer: {
    flex: 1,
    margin: 0,
  },
  video: {
    width: "200px",
    height: "150px",
    borderRadius: "10px",
    border: "2px solid black",
  },
  textContainer: {
    background: "white",
    padding: "15px",
    margin: "20px auto",
    width: "60%",
    borderRadius: "10px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  },
  interviewerText: {
    fontSize: "1rem",
    whiteSpace: "pre-line",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  askDoubt: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
  },
  skipQuestion: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    backgroundColor: "#17a2b8",
    color: "white",
  },
  next: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    backgroundColor: "#28a745",
    color: "white",
  },
  startSpeaking: {
    marginTop: "20px",
    backgroundColor: "#dc3545",
    color: "white",
    padding: "15px 25px",
    fontSize: "1.2rem",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
  },
  cheatingAlert: {
    marginTop: "20px",
    backgroundColor: "#ffcccc",
    color: "red",
    padding: "10px",
    fontWeight: "bold",
    borderRadius: "5px",
  },
  footer: {
    marginTop: "30px",
    fontSize: "0.9rem",
    color: "grey",
  },
  brandBottom: {
    fontWeight: "bold",
  },
};

export default InterviewPage;
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "#000",
        color: "#fff",
        padding: "60px 20px",
        paddingBottom: "180px",
        textAlign: "left",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "140px",
          fontWeight: "bold",
          color: "rgba(255, 255, 255, 0.05)",
          whiteSpace: "nowrap",
          userSelect: "none",
          zIndex: "0",
        }}
      >
        Talentbot.AI
      </div>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: "1",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              marginBottom: "15px",
              lineHeight: "1.4",
            }}
          >
            Don't just take our word, <br /> Try it yourself
          </h2>
          <p style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "1.6" }}>
            Share your email to schedule a meet with our Sales Team <br />
            or call us at{" "}
            <a
              href="tel:+919513976677"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              +91 95139 76677
            </a>
          </p>
        </div>

        <div style={{ flex: "1", minWidth: "300px", textAlign: "right" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "8px",
              fontSize: "16px",
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="yourname@example.com"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#222",
              color: "#fff",
              fontSize: "16px",
              marginBottom: "15px",
            }}
          />
          <button
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#333",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>

          <div style={{ marginTop: "12px", fontSize: "14px" }}>
            <a href="/terms" style={{ color: "#fff", textDecoration: "underline", marginRight: "10px" }}>
              Terms & Conditions
            </a>
            |
            <a href="/privacy" style={{ color: "#fff", textDecoration: "underline", marginLeft: "10px" }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <Link to="/welcome">
          <button
            style={{
              padding: "12px 20px",
              backgroundColor: "#808080",
              color: "#fff",
              fontSize: "16px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Try Demo Interview
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
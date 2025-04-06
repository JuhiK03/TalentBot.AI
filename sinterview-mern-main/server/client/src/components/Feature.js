import React, { useState, useEffect, useRef } from 'react';

const Features = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    { 
      title: "Multiple Interview Invites", 
      description: "Schedule interviews for hundreds of candidates on a single day and expedite your hiring process.",
      icon: "📅" 
    },
    { 
      title: "AI Evaluation", 
      description: "Once the interview ends, our AI brings you a detailed evaluation report about the candidate on various parameters.",
      icon: "🤖"
    },
    { 
      title: "Filter the Best Candidates", 
      description: "With our AI ranking the candidates based on their performance, your panel can save time filtering the best for next rounds.",
      icon: "📊"
    },
    { 
      title: "Hire Versatile Roles", 
      description: "Create openings for roles from all domains such as Tech or Non-Tech.",
      icon: "👨‍💻"
    },
    { 
      title: "Anti-Cheating Measures", 
      description: "Reduce the risk of cheating or fraudulent behavior throughout the interview process without manual proctoring.",
      icon: "🔒"
    },
    { 
      title: "Integrates with Your Existing Stack", 
      description: "Using multiple tools can reduce efficiency, hence you can integrate ZInterview into your existing recruitment stack.",
      icon: "🔗"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      style={{
        background: "#f5f5f5", 
        padding: "80px 20px", 
        textAlign: "center",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
          Features
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                border: "2px solid #ddd"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "28px" }}>{feature.icon}</span>
                <span style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>{feature.title}</span>
              </div>
              <div style={{ marginTop: "10px", fontSize: "16px", color: "#555", textAlign: "left" }}>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
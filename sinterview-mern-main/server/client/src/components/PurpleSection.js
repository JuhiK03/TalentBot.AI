import React from 'react';

const PurpleSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>
          Finding the best fit from thousands of applications has become like finding a gem 💎 in a desert 🏜, which slows down your hiring process.
        </h2>
        <p style={styles.paragraph}>
          Introducing <b>Talentbot.AI</b>, where our intelligent AI avatars conduct interviews
          across technical and non-technical roles.
        </p>
        <p style={styles.paragraph}>
          From evaluating candidates to delivering insightful, AI-driven reports, we streamline your hiring process.
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'black',
    color: 'white',
    padding: '80px 20px',
    textAlign: 'left',
    fontFamily: '"SF Pro Display", "Inter", "Poppins", "Nunito", sans-serif',
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  heading: {
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '22px',
    fontWeight: '500',
    margin: '12px 0',
  },
};

export default PurpleSection;
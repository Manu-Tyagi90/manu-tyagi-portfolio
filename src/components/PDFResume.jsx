// src/components/PDFResume.jsx (New component for generating PDF resume)
import React from 'react';

const PDFResume = () => {
  const styles = {
    page: {
      width: '210mm',
      minHeight: '297mm',
      padding: '15mm',
      margin: '0 auto',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
      fontSize: '11pt',
      lineHeight: '1.5',
      color: '#333'
    },
    header: {
      textAlign: 'center',
      marginBottom: '5mm',
      borderBottom: '2px solid #3B82F6',
      paddingBottom: '3mm'
    },
    name: {
      fontSize: '24pt',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: '2mm'
    },
    tagline: {
      fontSize: '12pt',
      color: '#3B82F6',
      marginBottom: '2mm'
    },
    contact: {
      fontSize: '10pt',
      color: '#666',
      display: 'flex',
      justifyContent: 'center',
      gap: '10mm',
      flexWrap: 'wrap'
    },
    section: {
      marginTop: '5mm',
      marginBottom: '5mm'
    },
    sectionTitle: {
      fontSize: '14pt',
      fontWeight: 'bold',
      color: '#3B82F6',
      marginBottom: '2mm',
      textTransform: 'uppercase',
      letterSpacing: '0.5mm'
    },
    subsection: {
      marginBottom: '3mm'
    },
    jobTitle: {
      fontWeight: 'bold',
      fontSize: '12pt'
    },
    company: {
      fontStyle: 'italic',
      color: '#666'
    },
    date: {
      float: 'right',
      color: '#666',
      fontSize: '10pt'
    },
    list: {
      marginLeft: '5mm',
      marginTop: '1mm'
    },
    listItem: {
      marginBottom: '1mm'
    },
    skills: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2mm'
    },
    link: {
      color: '#3B82F6',
      textDecoration: 'none'
    }
  };

  return (
    <div id="pdf-resume" style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.name}>Manu Tyagi</h1>
        <p style={styles.tagline}>Full-Stack Developer | React.js & Spring Boot Specialist</p>
        <div style={styles.contact}>
          <span>📧 manu@manu</span>
          <span>📱 +91 XXXXXXXXXX</span>
          <span>📍 Meerut, UP, India</span>
        </div>
        <div style={styles.contact}>
          <a href="https://github.com/Manu-Tyagi90" style={styles.link}>GitHub: Manu-Tyagi90</a>
          <a href="https://in.linkedin.com/in/thoughtful-manu" style={styles.link}>LinkedIn: thoughtful-manu</a>
        </div>
      </header>

      {/* Professional Summary */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Professional Summary</h2>
        <p>
          Enthusiastic Software Developer and recent B.Tech graduate with a strong foundation in full-stack development 
          and machine learning. Proficient in React.js, Spring Boot, and Python, with hands-on experience building 
          real-time applications and data analytics dashboards. Seeking to leverage technical skills and passion for 
          innovation to contribute to a dynamic development team.
        </p>
      </section>

      {/* Education */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        <div style={styles.subsection}>
          <span style={styles.date}>2021 - 2025</span>
          <div style={styles.jobTitle}>Bachelor of Technology in Information Technology</div>
          <div style={styles.company}>I.M.S Engineering College, Ghaziabad</div>
          <div>CGPA: 8.06/10.0</div>
        </div>
        <div style={styles.subsection}>
          <span style={styles.date}>Completed 2021</span>
          <div style={styles.jobTitle}>Senior Secondary Education</div>
          <div style={styles.company}>M.S. Heritage Senior Secondary School</div>
          <div>Percentage: 87.2%</div>
        </div>
      </section>

      {/* Technical Skills */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <div style={styles.skills}>
          <div>
            <strong>Languages:</strong> Java, Python, C/C++
          </div>
          <div>
            <strong>Frontend:</strong> React.js, React Native, TypeScript
          </div>
          <div>
            <strong>Backend:</strong> Spring Boot, Flask, Node.js
          </div>
          <div>
            <strong>Tools:</strong> Git, Maven, Streamlit, Socket.io
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Key Projects</h2>
        <div style={styles.subsection}>
          <span style={styles.date}>1 Month</span>
          <div style={styles.jobTitle}>Real-Time Chat Application</div>
          <ul style={styles.list}>
            <li style={styles.listItem}>Built WhatsApp-inspired chat app using React, TypeScript, and Socket.io</li>
            <li style={styles.listItem}>Implemented real-time messaging, typing indicators, and online user tracking</li>
            <li style={styles.listItem}>Deployed on Vercel with responsive design and dark mode support</li>
          </ul>
        </div>
        <div style={styles.subsection}>
          <span style={styles.date}>1 Month</span>
          <div style={styles.jobTitle}>Vehicle Analytics Dashboard</div>
          <ul style={styles.list}>
            <li style={styles.listItem}>Developed data visualization dashboard using Python and Streamlit</li>
            <li style={styles.listItem}>Analyzed vehicle registration data with YoY/QoQ growth metrics</li>
            <li style={styles.listItem}>Created interactive charts for manufacturer performance analysis</li>
          </ul>
        </div>
        <div style={styles.subsection}>
          <span style={styles.date}>1 Month</span>
          <div style={styles.jobTitle}>Cloud Management System</div>
          <ul style={styles.list}>
            <li style={styles.listItem}>Designed RESTful APIs using Spring Boot and Java</li>
            <li style={styles.listItem}>Implemented CRUD operations with custom exception handling</li>
            <li style={styles.listItem}>Built responsive frontend with real-time search functionality</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Certifications</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Java Spring Boot Certification - Infosys</li>
          <li style={styles.listItem}>Machine Learning - Coursera</li>
          <li style={styles.listItem}>UI/UX Design - Coursera</li>
          <li style={styles.listItem}>Python Programming - Simplilearn</li>
        </ul>
      </section>

      {/* Languages */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Languages</h2>
        <div>Hindi (Fluent) • English (Conversational)</div>
      </section>
    </div>
  );
};

export default PDFResume;
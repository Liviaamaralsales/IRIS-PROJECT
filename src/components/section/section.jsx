// Section.jsx
// Componente reutilizável para as seções "Problem" e "Solution" da página SOBRE O PROJETO.
import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      {/* Título da seção */}
      <h2 className={styles.sectionTitle}>{title}</h2>
      {/* Conteúdo da seção */}
      <div className={styles.sectionContent}>{children}</div>
    </div>
  );
};

export default Section;
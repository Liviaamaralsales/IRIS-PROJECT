// Stats.jsx
// Componente que exibe as estatísticas (número de usuários, câmeras e avaliação) na página SOBRE O PROJETO.
import React from 'react';
import styles from './Stats.module.css';

const Stats = () => {
  return (
    <div className={styles.stats}>
      {/* Estatísticas */}
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Users</span>
        <span className={styles.statValue}>+10000</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Cameras in Brazil</span>
        <span className={styles.statValue}>+100</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Rate</span>
        <span className={styles.statValue}>★ 4.5</span>
      </div>
    </div>
  );
};

export default Stats;
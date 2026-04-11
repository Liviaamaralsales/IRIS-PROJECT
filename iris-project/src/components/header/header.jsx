// Header.jsx
// Componente responsável pelo cabeçalho da página SOBRE O PROJETO, incluindo a seta de volta e o título "IRIS".
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      {/* Ícone de seta para voltar usando FontAwesome */}
      <FontAwesomeIcon icon={faArrowLeft} className={styles.backArrow} />
      {/* Título principal */}
      <h1 className={styles.title}>IRIS</h1>
    </div>
  );
};

export default Header;
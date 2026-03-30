// ProfileCard.jsx
// Componente que exibe a imagem de perfil e a descrição do sistema IRIS na página SOBRE O PROJETO.
import React from 'react';
import styles from './ProfileCard.module.css';

const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      {/* Imagem de perfil */}
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className={styles.profileImage}
      />
      {/* Descrição do sistema */}
      <div className={styles.description}>
        <h2>Imaging-based Risk Identification System</h2>
        <p>
          An intelligent monitoring system designed to assist both Brazilians and health agents in combating these endemic diseases. The solution will utilize...
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
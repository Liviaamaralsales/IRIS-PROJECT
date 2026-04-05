import React from 'react';
import Header from '../Header/Header';
import ProfileCard from '../ProfileCard/ProfileCard';
import Stats from '../Stats/Stats';
import Section from '../Section/Section';
import styles from './ScrollablePage.module.css';

const ScrollablePage = () => {
  return (
    <div className={styles.scrollableContainer}>
      <Header />
      <ProfileCard />
      <Stats />
      <Section title="Problem">
        <p>Um sistema inteligente de monitoramento que tem como objetivo auxiliar tanto os brasileiros quanto os agentes de saúde no combate a essas endemias. A solução utilizará...</p>
        <img
          src="https://via.placeholder.com/300x200"
          alt="Problem Illustration"
          className={styles.sectionImage}
        />
      </Section>
      <Section title="Solution">
        <p>Um sistema inteligente de monitoramento que tem como objetivo auxiliar tanto os brasileiros quanto os agentes de saúde no combate a essas endemias. A solução utilizará...</p>
      </Section>
    </div>
  );
};

export default ScrollablePage;
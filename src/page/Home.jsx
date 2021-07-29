import React from 'react';
import ProfileSummary from '../components/ProfileSummary'
import '../styles/Home.css';
import Main from '../components/Main'
import Informations from '../components/Informations';

export default function Home() {
  return (
    <div className="div_home">
      <ProfileSummary />
      <Main />
      <Informations />
    </div>
  );
}

import React from 'react';
// import '../styles/ProfileSummary.css';
import Efficiency from './cards/informationsCard/Efficiency';
import Birthdays from './cards/informationsCard/Birthdays';
import Pendencies from './cards/informationsCard/Pendencies';


export default function Informations() {
  return (
    <aside>
      <>
        <Efficiency />
        <Birthdays />
        <Pendencies />
      </>
    </aside>
  );
}

import React from 'react';
import '../styles/ProfileSummary.css';
import locationIcon from '../images/locationIcon.png';
import profilePicture from '../images/profilePicture.png';
import companyIcon from '../images/companyIcon.png';
import collegeIcon from '../images/collegeIcon.png';

export default function ProfileSummary() {
  return (
    <aside>
      <img alt="Imagem de Perfil" src={ profilePicture } id="profilePicture"/>
      <h1>Bruno Taveira</h1>
      <h4>@taveira_bruno</h4>
      <p>Front-end Developer</p>
      <div>
       <img alt="Incone de Localização" src={ locationIcon } className="iconImage"/>
       <span>Rio Branco/Acre - Brasil</span>
      </div>
      <div>
        <img alt="Incone de Local de Trabalho" src={ companyIcon } className="iconImage"/>
        <span>InCicle</span>
        <img alt="Incone de Formação" src={ collegeIcon } className="iconImage"/>
        <span>Unama</span>
      </div>
    </aside>
  );
}

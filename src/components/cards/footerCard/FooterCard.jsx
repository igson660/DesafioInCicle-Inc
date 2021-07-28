import React from 'react';
// import '../styles/ProfileSummary.css';
import likeIcon1 from '../../../images/likeIcon1.png';
import commentIncon from '../../../images/commentIncon.png';
import shareIcon from '../../../images/shareIcon.png';


export default function ProfileSummary() {
  return (
    <div>
      <button type="button">
        <img src={ likeIcon1 } alt="Icone de Curtir"/>
        Curtir
      </button>
      <button type="button">
        <img src={ commentIncon } alt="Icone de Comentar"/>
        Comentar
      </button>
      <button type="button">
        <img src={ shareIcon } alt="Icone de Compartilhar"/>
        Compartilhar
      </button>
    </div>
  );
}
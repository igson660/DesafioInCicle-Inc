import React from 'react';
import '../../../styles/FooterCard.css';
import likeIcon1 from '../../../images/likeIcon1.png';
import commentIncon from '../../../images/commentIncon.png';
import shareIcon from '../../../images/shareIcon.png';


export default function ProfileSummary() {
  return (
    <div className="div_Footer_card">
      <button 
        type="button"
        className="button_Footer_card"
      >
        <img
          src={ likeIcon1 }
          alt="Icone de Curtir"
          className="img_Footer_card"
        />
        Curtir
      </button>
      <button
        type="button"
        className="button_Footer_card"
      >
        <img
          src={ commentIncon }
          alt="Icone de Comentar"
          className="img_Footer_card"
        />
        Comentar
      </button>
      <button
        type="button"
        className="button_Footer_card"
        >
        <img
          src={ shareIcon }
          alt="Icone de Compartilhar"
          className="img_Footer_card"
        />
        Compartilhar
      </button>
    </div>
  );
}
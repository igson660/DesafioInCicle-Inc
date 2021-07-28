import React from 'react';
// import '../styles/ProfileSummary.css';
import publishingIcon from '../images/publishingIcon.png';
import pictureIcon from '../images/pictureIcon.png';
import movieIcon from '../images/movieIcon.png';
import data from '../data'

export default function Main() {
  return (
    <main>
      <section>
        <div>
          <img src={ publishingIcon } alt="Icone de Publicação de Texto"/>
          <input />
          <img src={ pictureIcon } alt="Icone de Publicação de foto"/>
          <img src={ movieIcon } alt="Icone de Publicação de Video"/>
        </div>
        <div>
          <span>ou <strong>publique um artigo</strong> na InCide</span>
        </div>
      </section>
    </main>
  );
}

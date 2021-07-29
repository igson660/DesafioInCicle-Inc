import React from 'react';
import '../../styles/NewsCard.css';
import otherProfilePictures from '../../images/otherProfilePictures.jpg';
import clockIcon from '../../images/clockIcon.jpg';
import padlockIcon from '../../images/padlockIcon.png';
import globeIcon from '../../images/globeIcon.jpg';
import likeIcon1 from '../../images/likeIcon1.png';
import FooterCard from './footerCard/FooterCard';

export default function ProfileSummary({name, time, privacy, publication, comments, shares }) {
  return (
    <section className="section_card">
      <div>
        <img alt={`Imagem de Perfil ${name}`} src={ otherProfilePictures } id="profilePicture"/>
        <h1>{name}</h1>
        <span>
          <img src={ clockIcon } alt="Icone de Relógio" /> {time }
        </span>
          { privacy ? (
            <>
              <img src={ padlockIcon } alt="Icone de Cadiado" />
              <span>Somente eu</span>
            </>) : (
              <>
                <img src={ globeIcon } alt="Icone de Globo" />
                <span>Público</span>
              </>
            )
          }
        <p>{ publication }</p>
      </div>
      <div>
        {
          shares === 0 ? (
            <>
              <img src={ likeIcon1 } alt="Icone de Curtir" />
              <span>Seja o primeiro a curtir essa publicação</span>
            </>
          ) : (
            <>
              <img src={ likeIcon1 } alt="Icone de Curtir" />
              <span>{shares} pessoas Curtiram isso </span>
            </>
          )
        }
      </div>
      <FooterCard />
    </section>
  );
}

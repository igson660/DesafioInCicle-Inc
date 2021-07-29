import React from 'react';
import '../../styles/NewsCard.css';
import otherProfilePictures from '../../images/otherProfilePictures.jpg';
import clockIcon from '../../images/clockIcon.jpg';
import padlockIcon from '../../images/padlockIcon.png';
import globeIcon from '../../images/globeIcon.jpg';
import likeIcon1 from '../../images/likeIcon1.png';
import FooterCard from './footerCard/FooterCard';
import useLike from  '../../hook/Like'

export default function NewsCard({id, name, time, privacy, publication, comments, shares }) {
  const { like } = useLike()
  
  function checkLike(param) {
    if(param === 1 && like === 1) {
       return (
         <>
          <img src={ likeIcon1 } alt="Icone de Curtir" />
          <span>{like} pessoas Curtiram isso </span>
         </>
       )
    } else if((param === 2 && like === 1) || (param === 2 && like !== 1)) {
      return (
        <>
          <img src={ likeIcon1 } alt="Icone de Curtir" />
          <span>{shares} pessoas Curtiram isso </span>
      </>)
    } else {
      return (
        <>
          <img src={ likeIcon1 } alt="Icone de Curtir" />
          <span>Seja o Primeiro a curtir </span>
      </>)
    }
  }

  return (
    <section className="section_card">
      <div>
        <div className="div_card">
          <img alt={`Imagem de Perfil ${name}`} src={ otherProfilePictures } id="otherProfilePicture"
          />
          <div>
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
            </div>
          </div>
        <p>{ publication }</p>
      </div>
      <div>
        {
          checkLike(id)
        }
      </div>
      <FooterCard
      id={ id }
      />
    </section>
  );
}

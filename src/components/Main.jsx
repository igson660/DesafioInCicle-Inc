import React from 'react';
import '../styles/Main.css';
import publishingIcon from '../images/publishingIcon.png';
import pictureIcon from '../images/pictureIcon.png';
import movieIcon from '../images/movieIcon.png';
import NewsCard from './cards/NewsCard'
import data from '../data'

export default function Main() {
  return (
    <main>
      <section className="section_input">
        <div className="div_main">
          <img src={ publishingIcon } alt="Icone de Publicação de Texto"
          className="img_main_input"
          />
          <input placeholder="O que está pensando"/>
          <img src={ pictureIcon } alt="Icone de Publicação de foto"
          className="img_main_input"
          />
          <img src={ movieIcon } alt="Icone de Publicação de Video"
          className="img_main_input"
          />
        </div>
        <div>
          <span>ou <strong>publique um artigo</strong> na InCide</span>
        </div>
      </section>
      {
        data.map((people, index) => (
        <NewsCard
        name={people.name}
        time={people.time}
        privacy={people.privacy}
        publication={people.publication}
        comments={people.comments}
        shares={people.shares}
        />))
      }
    </main>
  );
}

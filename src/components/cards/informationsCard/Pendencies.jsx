import React from 'react';
// import '../styles/ProfileSummary.css';

export default function Pendencies() {

  function nowDate() {
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    const dataAtual = dia + '/' + mes + '/' + ano;
    return dataAtual
  }
  return (
    <section>
      <h1>Pendencias</h1>
      <div>{ nowDate() }</div>
      <p>Você não possui nenhuma pendência para Hoje</p>
    </section>
  );
}

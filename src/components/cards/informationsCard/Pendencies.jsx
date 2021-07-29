import React from 'react';
import '../../../styles/Pendencies.css';

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
    <section className="section_pendencies">
      <h1>Pendencias</h1>
      <div className="div_pendencies">
        { nowDate() }
      </div>
      <p>Você não possui nenhuma pendência para Hoje</p>
    </section>
  );
}

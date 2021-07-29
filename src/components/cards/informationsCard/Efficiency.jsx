import React from 'react';
import '../../../styles/Efficiency.css';

export default function Efficiency() {
  return (
    <section className="section_efficiency">
      <h1>Eficiência</h1>
      <hr />
      <div className="div_efficiency">
        <section className="section_task activity">
          <div>
            <h4>Atividades</h4>
            <p>23/106</p>
          </div>
          <p>50%</p>
        </section>
        <section className="section_task projects">
          <div>
            <h4>Porjetos</h4>
            <p>23/106</p>
          </div>
          <p>50%</p>
        </section>
      </div>
      <section className="section_task total">
        <div>
          <h4>Total</h4>
          <p>23/106</p>
        </div>
        <p>50%</p>
      </section>
      <section className="section_task">
        <div className="div_activity">
          <h4>Atividades</h4>
          <p>Pendentes 3</p>
          <p>Pendentes 3</p>
          <p>Pendentes 3</p>
        </div>
        <div className="div_projects">
          <h4>Projetos</h4>
          <p>Pendentes 3</p>
          <p>Pendentes 3</p>
          <p>Pendentes 3</p>
        </div>
        <div className="div_total">
          <h4>Total</h4>
          <p>Pendentes 6</p>
          <p>Pendentes 6</p>
          <p>Pendentes 6</p>
        </div>
      </section>
    </section>
  );
}

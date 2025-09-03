import React from 'react';
import './PageStyles.css';

const Contact = () => (
  <div className="page-container">
    <section className="founder" id="contact">
      <h2>Qui suis-je ?</h2>
      <div style={{display: 'flex', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap'}}>
        <div style={{minWidth: '160px', maxWidth: '180px', background: '#f5f7fa', borderRadius: '12px', padding: '12px', textAlign: 'center'}}>
          <img src="/logo192.png" alt="Portrait" style={{width: '100%', borderRadius: '8px', marginBottom: '10px'}} />
          <span style={{fontWeight: 'bold', color: '#1565c0'}}>Photo à venir</span>
        </div>
        <div style={{flex: 1}}>
          <ul style={{fontSize: '1.08rem', color: '#333', paddingLeft: '18px', marginTop: 0}}>
            <li><strong>Nom :</strong> [Ton Nom]</li>
            <li><strong>Profession :</strong> Formateur professionnel depuis 25 ans</li>
            <li><strong>Diplôme :</strong> Master 2 Responsable de Formation</li>
            <li><strong>Expérience spécifique :</strong> Animateur du programme "À la découverte de Marseille" depuis 2003, destiné à faire découvrir la ville aux jeunes, notamment issus de quartiers prioritaires.</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;

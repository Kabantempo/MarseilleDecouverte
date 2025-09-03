import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>Marseille Découverte</h4>
        <p>Visites vivantes et citoyennes pour explorer Marseille autrement.</p>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email : contact@marseilledecouverte.fr</p>
        <p>Téléphone : 06 12 34 56 78</p>
      </div>
      <div className="footer-section">
        <h4>Suivez-nous</h4>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Marseille Découverte. Tous droits réservés.<br />
      Réalisé par <a href="https://github.com/KabanTempo" target="_blank" rel="noopener noreferrer">KabanTempo</a> — Mentions légales : ce site est une création personnelle.
    </div>
  </footer>
);

export default Footer;

import React from 'react';
import './HeaderNav.css';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <header className="header-nav">
      <div className="logo">Marseille Découverte</div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/a-propos">À propos</Link></li>
          <li><Link to="/objectifs">Objectifs</Link></li>
          <li><Link to="/valeurs">Valeurs</Link></li>
          <li><Link to="/public">Public</Link></li>
          <li><Link to="/partenaire">Partenaire</Link></li>
          <li><Link to="/nos-visites">Nos visites</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;

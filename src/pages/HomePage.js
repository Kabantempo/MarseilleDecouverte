import React from 'react';
import './HomePage.css';
import HeaderNav from '../components/HeaderNav';

const HomePage = () => {
  return (
    <div className="home-container">
      <HeaderNav />
      <section className="hero" id="accueil">
        <h1>Découvrez Marseille autrement…</h1>
        <p className="hero-subtitle">Des visites vivantes et citoyennes pour explorer la ville sous un nouvel angle.</p>
      </section>

      <section className="project-overview" id="a-propos">
        <h2>Présentation du projet</h2>
        <p>Marseille Autrement propose des visites guidées non conventionnelles, axées sur la transformation urbaine, l’histoire populaire et les partenariats culturels.</p>
      </section>

      <section className="founder" id="contact">
        <h2>Qui suis-je ?</h2>
        <p>
          <strong>Nom :</strong> [Ton Nom]<br/>
          <strong>Profession :</strong> Formateur professionnel depuis 25 ans<br/>
          <strong>Diplôme :</strong> Master 2 Responsable de Formation<br/>
          <strong>Expérience :</strong> Animateur du programme “À la découverte de Marseille” depuis 2003.
        </p>
      </section>

      <section className="activities" id="nos-visites">
        <h2>Activités proposées</h2>
        <ul>
          <li>Visites thématiques (centre-ville, street-art, patrimoine…)</li>
          <li>Programmes sur mesure</li>
          <li>Balades apprenantes pour scolaires et groupes</li>
          <li>Animations avec partenaires culturels</li>
        </ul>
      </section>

      <section className="values" id="valeurs">
        <h2>Nos valeurs</h2>
        <ul>
          <li>Ancrage local</li>
          <li>Expérience unique de formateur</li>
          <li>Approche citoyenne et inclusive</li>
          <li>Offre flexible et adaptée</li>
        </ul>
      </section>

      <section className="objectives" id="objectifs">
        <h2>Objectifs</h2>
        <ul>
          <li>Tester le modèle via une structure d’accompagnement</li>
          <li>Développer un réseau de partenaires</li>
          <li>Lancer une offre régulière de balades</li>
          <li>Valoriser l’activité sur le web</li>
        </ul>
      </section>

      <section className="public" id="public">
        <h2>Publics visés</h2>
        <ul>
          <li>Jeunes (collèges, lycées, missions locales…)</li>
          <li>Groupes d’adultes (centres sociaux, comités d’entreprise…)</li>
          <li>Touristes curieux de vivre une expérience locale, authentique</li>
          <li>Professionnels de la formation et de l’accompagnement</li>
        </ul>
      </section>

      <section className="partners" id="partenaire">
        <h2>Partenaires</h2>
        <ul>
          <li>Musées, expositions, galeries</li>
          <li>Lieux alternatifs</li>
          <li>MJC, centres sociaux, écoles</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;


import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import PageTransition from './components/PageTransition';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import APropos from './pages/APropos';
import Objectifs from './pages/Objectifs';
import Valeurs from './pages/Valeurs';
import Public from './pages/Public';
import Partenaire from './pages/Partenaire';
import NosVisites from './pages/NosVisites';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <HeaderNav />
      <PageTransition key={location.pathname}>
        <div style={{ minHeight: '80vh' }}>
          <Routes location={location}>
            <Route path="/" element={<Accueil />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/objectifs" element={<Objectifs />} />
            <Route path="/valeurs" element={<Valeurs />} />
            <Route path="/public" element={<Public />} />
            <Route path="/partenaire" element={<Partenaire />} />
            <Route path="/nos-visites" element={<NosVisites />} />
          </Routes>
        </div>
      </PageTransition>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router basename="/MarseilleDecouverte">
      <App />
    </Router>
  );
}

export default AppWrapper;

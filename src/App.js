
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
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
  return (
    <Router>
      <div className="App">
        <HeaderNav />
        <div style={{ minHeight: '80vh' }}>
          <Routes>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;

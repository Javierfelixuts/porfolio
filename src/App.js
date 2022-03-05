import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Experiencia from './pages/experiencia/Experiencia';
import Educacion from './pages/educacion/Educacion';
import Footer from './components/footer/Footer';
import Contacto from './pages/contacto/Contacto';

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="experiencia" element={<Experiencia />} />
        <Route path="educacion" element={<Educacion />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
      <Footer />

    </div>
    </>
  );
}

export default App;

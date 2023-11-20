import React, { Suspense, lazy } from 'react';
import './index.css';
import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";
/* import Home from './pages/home/Home';
import Experiencia from './pages/experiencia/Experiencia';
import Educacion from './pages/educacion/Educacion';
import Contacto from './pages/contacto/Contacto'; */
import Footer from './components/footer/Footer';


const Home = lazy(() => import('./pages/home/Home'));
const Experiencia = lazy(() => import('./pages/experiencia/Experiencia'));
const Educacion = lazy(() => import('./pages/educacion/Educacion'));
const Contacto = lazy(() => import('./pages/contacto/Contacto'));

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
        <Suspense fallback={<>...</>}>
        <Home/>
      </Suspense>
        } />
        <Route path="experiencia" element={
        <Suspense fallback={<>...</>}>
          <Experiencia/>
        </Suspense>
        } />
        <Route path="educacion" element={
          <Suspense fallback={<>...</>}>
          <Educacion/>
          </Suspense>
        } />
        <Route path="contacto" element={
          <Suspense fallback={<>...</>}>
            <Contacto/>
          </Suspense>
        } />
      </Routes>
      <Footer />

    </div>
    </>
  );
}

export default App;

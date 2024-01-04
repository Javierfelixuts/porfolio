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
import Loading from './components/loading/Loading';
import Certificates from './pages/certificates/Certificates';


const Home = lazy(() => import('./pages/home/Home'));
const Experiencia = lazy(() => import('./pages/experiencia/Experiencia'));
const Educacion = lazy(() => import('./pages/educacion/Educacion'));
const Contacto = lazy(() => import('./pages/contacto/Contacto'));

var loading = false;

setTimeout(() => { loading = true }, 3000)

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<><Loading /> </>}>
              <Home />
            </Suspense>
          } />
          <Route path="experiencia" element={
            <Suspense fallback={<><Loading /></>}>
              <Experiencia />
            </Suspense>
          } />
          <Route path="educacion" element={
            <Suspense fallback={<><Loading /></>}>
              <Educacion />
            </Suspense>
          } />
          <Route path="certificates" element={
            <Suspense fallback={<><Loading /></>}>
              <Certificates />
            </Suspense>
          } />
          <Route path="contacto" element={
            <Suspense fallback={<><Loading /></>}>
              <Contacto />
            </Suspense>
          } />
        </Routes>
        <Footer />

      </div>
    </>
  );
}

export default App;

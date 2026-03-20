/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyEldercare from './components/WhyEldercare';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Footer from './components/Footer';
import FencingJourney from './pages/FencingJourney';

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white">
      <div className="bg-grain"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyEldercare />
        <Projects />
        <Experience />
        <Leadership />
        <Publications />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fencing" element={<FencingJourney />} />
      </Routes>
    </BrowserRouter>
  );
}

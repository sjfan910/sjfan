/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Leadership from './components/Leadership';
import Fencing from './components/Fencing';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white">
      <div className="bg-grain"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Publications />
        <Leadership />
        <Fencing />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

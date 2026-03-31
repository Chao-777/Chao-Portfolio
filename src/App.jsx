import { useState, useEffect } from 'react';
import './index.css';
import { LoadingScreen } from './components/LoadingScreen';
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('night');

  // Apply theme class to body so CSS vars cascade everywhere
  useEffect(() => {
    document.body.classList.toggle('day-mode', theme === 'day');
  }, [theme]);

  return (
    <>
      {/* CRT scanlines overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, var(--c-scanlines) 2px, var(--c-scanlines) 4px)',
        }}
      />

      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

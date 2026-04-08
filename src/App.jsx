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
  const isDay = theme === 'day';

  useEffect(() => {
    document.body.classList.toggle('day-mode', theme === 'day');
  }, [theme]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Mobile sticky header — hidden on desktop */}
        <header
          className="lg:hidden sticky top-0 z-40 flex justify-between items-center px-6 py-4"
          style={{
            background: 'var(--c-nav-bg)',
            borderBottom: '1px solid var(--c-border)',
            backdropFilter: 'blur(10px)',
            transition: 'background 0.4s ease, border-color 0.4s ease',
          }}
        >
          <a
            href="#home"
            style={{
              color: 'var(--c-heading)',
              fontWeight: 700,
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif',
              textDecoration: 'none',
              letterSpacing: '0.06em',
            }}
          >
            CHAO YUAN
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(isDay ? 'night' : 'day')}
              className="theme-btn"
              title={isDay ? 'Switch to Night mode' : 'Switch to Day mode'}
            >
              {isDay ? '☾' : '☀'}
            </button>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              style={{
                color: 'var(--c-heading)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.4rem',
                padding: '0 4px',
                lineHeight: 1,
              }}
              aria-label="Open menu"
            >
              &#9776;
            </button>
          </div>
        </header>

        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme} />

        {/* Two-column layout */}
        <div className="max-w-screen-xl mx-auto lg:flex">

          {/* Left sticky sidebar — desktop only */}
          <aside
            className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:flex-shrink-0"
            style={{ width: '45%', maxWidth: '560px' }}
          >
            <NavBar theme={theme} setTheme={setTheme} />
          </aside>

          {/* Right scrollable content */}
          <main style={{ flex: 1, minWidth: 0 }}>
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </main>

        </div>
      </div>
    </>
  );
}

export default App;

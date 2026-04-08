import { useEffect, useState } from 'react';
import './index.css';
import { NavBar } from './components/NavBar';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState('night');
  const isDay = theme === 'day';

  useEffect(() => {
    document.body.classList.toggle('day-mode', theme === 'day');
  }, [theme]);

  return (
    <>
      <div className="min-h-screen">
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
            href="#about"
            style={{
              color: 'var(--c-heading)',
              fontWeight: 600,
              fontSize: '2rem',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            Chao Yuan
          </a>
          <button
            onClick={() => setTheme(isDay ? 'night' : 'day')}
            className="theme-btn"
            title={isDay ? 'Switch to Night mode' : 'Switch to Day mode'}
          >
            {isDay ? '☾' : '☀'}
          </button>
        </header>

        {/* Mobile hero — hidden on desktop */}
        <div
          className="lg:hidden"
          style={{ padding: '2rem 1.5rem 0' }}
        >
          <h2 style={{ color: 'var(--c-mid)', fontSize: '1rem', fontWeight: 400, marginBottom: '0.75rem' }}>
            Software Developer
          </h2>
          <p style={{ color: 'var(--c-body)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '340px' }}>
            I build accessible, scalable full-stack applications with a focus on clean architecture and great user experience.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '2rem' }}>
            <a href="https://github.com/Chao-777" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/chao-yuan-nic777/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

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
            <About />
            <Experience />
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

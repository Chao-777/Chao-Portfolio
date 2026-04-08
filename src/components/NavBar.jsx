import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NAV_ITEMS = [
  ['HOME',     'home'],
  ['ABOUT',    'about'],
  ['PROJECTS', 'projects'],
  ['CONTACT',  'contact'],
];

export const NavBar = ({ theme, setTheme }) => {
  const isDay = theme === 'day';
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      // Walk sections in reverse so the topmost visible one wins
      const ids = ['contact', 'projects', 'about', 'home'];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id);
          return;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="flex flex-col justify-between w-full h-full"
      style={{ padding: '6rem 4rem 4rem 4rem' }}
    >
      {/* ── Top: identity + nav ─────────────────────────── */}
      <div>
        {/* Name */}
        <a href="#home" style={{ textDecoration: 'none' }}>
          <h1
            style={{
              color: 'var(--c-heading)',
              fontSize: '2.75rem',
              fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.05,
              marginBottom: '0.75rem',
              letterSpacing: '-0.01em',
            }}
          >
            CHAO YUAN
          </h1>
        </a>

        {/* Title */}
        <h2
          style={{
            color: 'var(--c-mid)',
            fontSize: '1rem',
            fontWeight: 500,
            fontFamily: 'Inter, sans-serif',
            marginBottom: '1.25rem',
            letterSpacing: '0.01em',
          }}
        >
          Software Developer
        </h2>

        {/* Short tagline */}
        <p
          style={{
            color: 'var(--c-body)',
            fontSize: '0.875rem',
            lineHeight: 1.75,
            maxWidth: '300px',
            marginBottom: '3.5rem',
          }}
        >
          AWS-certified developer building robust, scalable full-stack systems.
          Open to full-time opportunities.
        </p>

        {/* Nav */}
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {NAV_ITEMS.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link${activeSection === id ? ' active' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ── Bottom: social + theme toggle ──────────────── */}
      <div>
        <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem' }}>
          <a
            href="https://github.com/Chao-777"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/chao-yuan-nic777/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        <button
          className="theme-btn"
          onClick={() => setTheme(isDay ? 'night' : 'day')}
          title={isDay ? 'Switch to Night mode' : 'Switch to Day mode'}
        >
          {isDay ? '☾ Night mode' : '☀ Day mode'}
        </button>
      </div>
    </div>
  );
};

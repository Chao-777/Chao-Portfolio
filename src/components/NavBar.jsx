import { useEffect, useState } from 'react';

const pad = (n) => String(n).padStart(2, '0');
const MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

export const NavBar = ({ menuOpen, setMenuOpen, theme, setTheme }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const date = `${pad(now.getDate())}-${MONTHS[now.getMonth()]}-${now.getFullYear()}`;
      const clock = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
      setTime(`${date} ${clock}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const isDay = theme === 'day';

  return (
    <nav
      className="sticky top-0 w-full z-40"
      style={{
        background: 'var(--c-nav-bg)',
        borderBottom: '1px solid var(--c-border)',
        backdropFilter: 'blur(8px)',
        fontFamily: 'JetBrains Mono',
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Row 1 — Node / Title / Clock */}
        <div
          className="flex justify-between items-center py-1.5"
          style={{ borderBottom: '1px solid var(--c-border)' }}
        >
          <span className="text-xs" style={{ color: 'var(--c-label)' }}>
            Node:&nbsp;<span style={{ color: 'var(--c-primary)' }}>CHAO_YUAN</span>
          </span>
          <span
            className="hidden md:block text-xs font-bold glow"
            style={{ color: 'var(--c-primary)', letterSpacing: '0.18em' }}
          >
            PORTFOLIO_SYSTEM v1.0
          </span>
          <span className="text-xs" style={{ color: 'var(--c-label)' }}>
            {time}
          </span>
        </div>

        {/* Row 2 — Status / Nav / Actions */}
        <div className="flex justify-between items-center py-1.5">
          <span className="text-xs" style={{ color: 'var(--c-label)' }}>
            Status:&nbsp;
            <span className="glow" style={{ color: 'var(--c-primary)' }}>ONLINE</span>
          </span>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {[['HOME','#home'],['ABOUT','#about'],['PROJECTS','#projects']].map(([label, href]) => (
              <a key={label} href={href} className="nav-link">[{label}]</a>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="term-btn-ghost"
              style={{ padding: '3px 12px', fontSize: '0.72rem' }}
            >
              [CONTACT_ME]
            </a>
            <button
              className="theme-btn"
              onClick={() => setTheme(isDay ? 'night' : 'day')}
              title={isDay ? 'Switch to Night mode' : 'Switch to Day mode'}
            >
              {isDay ? '☾ NGT' : '☀ DAY'}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden cursor-pointer text-xl"
            style={{ color: 'var(--c-primary)' }}
          >
            &#9776;
          </div>
        </div>

      </div>
    </nav>
  );
};

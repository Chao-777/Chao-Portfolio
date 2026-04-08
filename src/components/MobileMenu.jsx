export const MobileMenu = ({ menuOpen, setMenuOpen, theme, setTheme }) => {
  const isDay = theme === 'day';

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        background: 'var(--c-bg)',
      }}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 focus:outline-none cursor-pointer"
        style={{
          color: 'var(--c-heading)',
          background: 'none',
          border: 'none',
          fontSize: '2rem',
          lineHeight: 1,
        }}
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Nav links */}
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            ['About',      '#about'],
            ['Experience', '#experience'],
            ['Projects',   '#projects'],
            ['Contact',    '#contact'],
          ].map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`transition-all duration-300 ${
                  menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{
                  display: 'block',
                  color: 'var(--c-heading)',
                  textDecoration: 'none',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  padding: '0.5rem 1rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--c-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--c-heading)')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Theme toggle */}
      <button
        className="theme-btn"
        style={{ marginTop: '3rem' }}
        onClick={() => setTheme(isDay ? 'night' : 'day')}
      >
        {isDay ? '☾ Night mode' : '☀ Day mode'}
      </button>
    </div>
  );
};

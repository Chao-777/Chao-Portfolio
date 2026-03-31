export const MobileMenu = ({ menuOpen, setMenuOpen, theme, setTheme }) => {
  const isDay = theme === 'day';

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out ${
                    menuOpen
                      ? 'h-screen opacity-100 pointer-events-auto'
                      : 'h-0 opacity-0 pointer-events-none'
                  }`}
      style={{
        background: 'var(--c-nav-bg)',
        borderBottom: menuOpen ? '1px solid var(--c-border)' : 'none',
        fontFamily: 'JetBrains Mono',
      }}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-3xl focus:outline-none cursor-pointer"
        style={{ color: 'var(--c-primary)', background: 'none', border: 'none' }}
        aria-label="Close Menu"
      >
        &times;
      </button>

      <div
        className="text-xs mb-8"
        style={{ color: 'var(--c-faint)', letterSpacing: '0.22em' }}
      >
        NAVIGATION_MENU
      </div>

      {[['HOME','#home'],['ABOUT','#about'],['PROJECTS','#projects'],['CONTACT','#contact']].map(
        ([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-bold my-3 transition-all duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              color: 'var(--c-primary)',
              textDecoration: 'none',
              letterSpacing: '0.15em',
            }}
          >
            [{label}]
          </a>
        )
      )}

      {/* Theme toggle */}
      <button
        className="theme-btn mt-8"
        onClick={() => setTheme(isDay ? 'night' : 'day')}
      >
        {isDay ? '☾ SWITCH TO NIGHT' : '☀ SWITCH TO DAY'}
      </button>
    </div>
  );
};

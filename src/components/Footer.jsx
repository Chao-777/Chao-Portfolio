import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer
      style={{
        padding: '3rem',
        borderTop: '1px solid var(--c-border)',
        transition: 'border-color 0.4s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <p
          style={{
            color: 'var(--c-faint)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            margin: 0,
          }}
        >
          Designed &amp; built by Chao Yuan · {new Date().getFullYear()}
        </p>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <a
            href="https://github.com/Chao-777"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/chao-yuan-nic777/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>

      <p
        style={{
          color: 'var(--c-faint)',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.775rem',
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        Coded in Visual Studio Code. Built with React and Tailwind CSS, deployed with GitHub Pages.
        All text is set in the Inter typeface. Loosely inspired by the design of{' '}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--c-mid)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--c-primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--c-mid)')}
        >
          Brittany Chiang
        </a>
        . Many thanks for the inspiration.
      </p>
    </footer>
  );
};

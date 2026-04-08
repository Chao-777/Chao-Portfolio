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
        Built with React and Tailwind CSS, deployed with GitHub Pages.
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

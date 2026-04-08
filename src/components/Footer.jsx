import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer
      style={{
        padding: '2rem 3rem',
        borderTop: '1px solid var(--c-border)',
        transition: 'border-color 0.4s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p
          style={{
            color: 'var(--c-faint)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.72rem',
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} CHAO_YUAN &nbsp;|&nbsp; ALL_RIGHTS_RESERVED
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
    </footer>
  );
};

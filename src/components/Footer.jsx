import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer
      className="w-full py-4"
      style={{
        borderTop: '1px solid var(--c-border)',
        background: 'var(--c-nav-bg)',
        fontFamily: 'JetBrains Mono',
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-xs" style={{ color: 'var(--c-label)' }}>
            © {new Date().getFullYear()} CHAO_YUAN &nbsp;|&nbsp; ALL_RIGHTS_RESERVED
          </p>
          <div className="flex gap-5">
            <a
              href="https://github.com/Chao-777"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/chao-yuan-nic777/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

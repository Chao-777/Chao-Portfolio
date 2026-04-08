import { useEffect, useState } from 'react';

const LOG_LINES = [
  '> AWS-certified full-stack developer',
  '> Internship exp. in Node.js + RESTful APIs',
  '> Project exp. in .NET, React, PostgreSQL',
  '> GPA 6.4/7 — Griffith Award for Academic Excellence',
  '> Open to full-time opportunities',
];

export const Home = () => {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let idx = 0;
    const id = setInterval(() => {
      if (idx < LOG_LINES.length) {
        setVisibleLines((prev) => [...prev, LOG_LINES[idx]]);
        idx++;
      } else {
        clearInterval(id);
      }
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 3rem 4rem',
      }}
    >
      <div style={{ width: '100%', maxWidth: '680px' }}>

        {/* ── Mobile-only name (hidden on desktop where sidebar shows it) */}
        <div className="lg:hidden" style={{ marginBottom: '2.5rem' }}>
          <h1
            style={{
              color: 'var(--c-heading)',
              fontSize: '2.5rem',
              fontWeight: 400,
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.05,
              marginBottom: '0.5rem',
              letterSpacing: '-0.01em',
            }}
          >
            CHAO YUAN
          </h1>
          <p style={{ color: 'var(--c-mid)', fontSize: '1rem', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Software Developer
          </p>
        </div>

        {/* ── Prompt header */}
        <div
          style={{
            color: 'var(--c-primary)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            marginBottom: '2rem',
          }}
        >
          &gt; SYSTEM_BOOT_COMPLETE &nbsp;&nbsp;&nbsp; STATUS: NOMINAL
        </div>

        {/* ── Identity fields + photo */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '2.5rem',
            alignItems: 'start',
            marginBottom: '2.5rem',
          }}
        >
          {/* Left: fields */}
          <div>
            <div
              style={{
                color: 'var(--c-primary)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                marginBottom: '1rem',
              }}
            >
              USER_PROFILE
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
              {[
                ['ROLE_____', 'SOFTWARE_DEVELOPER'],
                ['CERTS____', 'AWS_SAA / AWS_CCP'],
                ['STATUS___', 'AVAILABLE_FOR_HIRE'],
                ['LOCATION_', 'BRISBANE, QLD'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: 'var(--c-faint)' }}>{label}: </span>
                  <span
                    style={{
                      color: label === 'STATUS___' ? 'var(--c-primary)' : 'var(--c-heading)',
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* System log */}
            <div>
              <div
                style={{
                  color: 'var(--c-primary)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.68rem',
                  letterSpacing: '0.2em',
                  marginBottom: '0.75rem',
                }}
              >
                SYSTEM_LOG
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {visibleLines.map((line, i) => (
                  <div
                    key={i}
                    style={{
                      color: 'var(--c-body)',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.78rem',
                      lineHeight: 1.8,
                    }}
                  >
                    {line}
                  </div>
                ))}
                {visibleLines.length > 0 && (
                  <span
                    className="animate-blink"
                    style={{
                      color: 'var(--c-primary)',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.85rem',
                    }}
                  >
                    _
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: profile photo with teal frame */}
          <div className="photo-container" style={{ flexShrink: 0, width: '160px' }}>
            <div className="photo-offset-frame" />
            <div className="photo-inner">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="CHAO_YUAN"
                className="profile-img"
                style={{ width: '160px', height: '200px' }}
                onError={(e) => {
                  e.currentTarget.parentElement.parentElement.style.display = 'none';
                }}
              />
              <div className="photo-teal-overlay" />
            </div>
          </div>
        </div>

        {/* ── Divider */}
        <hr className="term-divider" style={{ marginBottom: '2rem' }} />

        {/* ── CTA buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a href="#projects" className="term-btn">▶ VIEW_PROJECTS</a>
          <a href="#about" className="term-btn-ghost">▶ ABOUT_SYS</a>
          <a
            href={`${import.meta.env.BASE_URL}Chao_Yuan_Resume.pdf`}
            download="Chao_Yuan_Resume.pdf"
            className="term-btn-ghost"
          >
            ↓ DOWNLOAD_CV
          </a>
        </div>

      </div>
    </section>
  );
};

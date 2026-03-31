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
      className="min-h-screen flex justify-center items-center relative"
      style={{ padding: '5rem 0' }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">

        {/* Prompt header */}
        <div
          className="text-xs mb-6"
          style={{
            color: 'var(--c-label)',
            fontFamily: 'JetBrains Mono',
            letterSpacing: '0.15em',
          }}
        >
          &gt; SYSTEM_BOOT_COMPLETE &nbsp;&nbsp;&nbsp; STATUS: NOMINAL
        </div>

        <hr className="term-divider mb-8" />

        {/* Identity panel — 3 cols: [text 2/3] [photo 1/3] */}
        <div className="term-panel p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Left 2/3 — name + fields + system log */}
            <div className="md:col-span-2 flex flex-col justify-between">

              <div>
                <div
                  className="text-xs mb-4"
                  style={{
                    color: 'var(--c-label)',
                    fontFamily: 'JetBrains Mono',
                    letterSpacing: '0.2em',
                  }}
                >
                  USER_PROFILE
                </div>

                {/* Name */}
                <h1
                  className="text-4xl md:text-5xl font-bold mb-6 glow"
                  style={{
                    color: 'var(--c-primary)',
                    fontFamily: 'JetBrains Mono',
                    letterSpacing: '0.04em',
                  }}
                >
                  CHAO YUAN
                </h1>

                {/* Fields */}
                <div
                  className="text-sm space-y-2 mb-6"
                  style={{ fontFamily: 'JetBrains Mono' }}
                >
                  {[
                    ['ROLE_____', 'SOFTWARE_DEVELOPER'],
                    ['CERTS____', 'AWS_SAA / AWS_CCP'],
                    ['STATUS___', 'AVAILABLE_FOR_HIRE'],
                    ['LOCATION_', 'BRISBANE, QLD'],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <span style={{ color: 'var(--c-label)' }}>{label}: </span>
                      <span
                        className={label === 'STATUS___' ? 'glow' : ''}
                        style={{ color: 'var(--c-primary)' }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System log */}
              <div>
                <div
                  className="text-xs mb-3"
                  style={{
                    color: 'var(--c-label)',
                    fontFamily: 'JetBrains Mono',
                    letterSpacing: '0.2em',
                  }}
                >
                  SYSTEM_LOG
                </div>
                <div className="space-y-1">
                  {visibleLines.map((line, i) => (
                    <div
                      key={i}
                      className="text-sm"
                      style={{
                        color: 'var(--c-body)',
                        fontFamily: 'JetBrains Mono',
                        lineHeight: '1.8',
                      }}
                    >
                      {line}
                    </div>
                  ))}
                  {visibleLines.length > 0 && (
                    <span
                      className="animate-blink text-sm"
                      style={{ color: 'var(--c-primary)', fontFamily: 'JetBrains Mono' }}
                    >
                      _
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right 1/3 — big profile photo */}
            <div className="flex flex-col">
              <div
                className="text-xs mb-3"
                style={{
                  color: 'var(--c-label)',
                  fontFamily: 'JetBrains Mono',
                  letterSpacing: '0.2em',
                }}
              >
                VISUAL_ID
              </div>
              <div
                className="flex-1"
                style={{
                  border: '1px solid var(--c-primary)',
                  overflow: 'hidden',
                  minHeight: '260px',
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="CHAO_YUAN"
                  className="profile-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  onError={(e) => {
                    e.currentTarget.parentElement.style.display = 'none';
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        <hr className="term-divider mb-8" />

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
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

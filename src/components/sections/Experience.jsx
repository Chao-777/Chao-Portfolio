import { RevealOnScroll } from '../RevealOnScroll';

const JOBS = [
  {
    period: 'Mar — Jul 2025',
    title: 'Software Developer Intern',
    company: 'ApyApp',
    location: 'Sydney (Remote)',
    bullets: [
      'Developed features for a parking management web application using Node.js with HTML, CSS, and Bootstrap.',
      'Implemented role-based access control and secure authentication for multiple user types.',
      'Built booking and payment workflows supporting multiple properties and billing scenarios.',
      'Contributed to admin tooling for managing users, properties, and transaction records.',
      'Collaborated in an Agile team using Git for version control and feature branch workflows.',
    ],
    stack: ['Node.js', 'JavaScript', 'TypeScript', 'Bootstrap', 'MySQL', 'CI/CD'],
  },
];

export const Experience = () => {
  return (
    <section id="experience" style={{ padding: '4rem 3rem' }}>
      <RevealOnScroll>

        <div className="section-label">Experience</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {JOBS.map((job, i) => (
            <div key={i} className="exp-card">

              {/* Date column */}
              <div
                style={{
                  flexShrink: 0,
                  width: '130px',
                  paddingTop: '0.2rem',
                  color: 'var(--c-faint)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  lineHeight: 1.5,
                }}
              >
                {job.period}
              </div>

              {/* Content column */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    color: 'var(--c-heading)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    marginBottom: '0.15rem',
                  }}
                >
                  {job.title}
                  <span style={{ color: 'var(--c-primary)', marginLeft: '0.4rem' }}>
                    · {job.company}
                  </span>
                </div>

                <div
                  style={{
                    color: 'var(--c-faint)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.8rem',
                    marginBottom: '0.85rem',
                  }}
                >
                  {job.location}
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {job.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        gap: '0.6rem',
                        color: 'var(--c-body)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.875rem',
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: 'var(--c-primary)', flexShrink: 0, marginTop: '0.15rem' }}>▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {job.stack.map((t) => (
                    <span key={t} className="term-tag">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Resume link */}
        <div style={{ marginTop: '2rem', paddingLeft: '1.25rem' }}>
          <a
            href={`${import.meta.env.BASE_URL}Chao_Yuan_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--c-heading)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 400,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--c-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--c-heading)')}
          >
            View Full Resume
            <span style={{ fontSize: '0.75rem' }}>↗</span>
          </a>
        </div>

      </RevealOnScroll>
    </section>
  );
};

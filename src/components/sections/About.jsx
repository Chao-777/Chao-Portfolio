const SKILLS = {
  Languages:  ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'C#', 'PHP'],
  Frameworks: ['React', 'React Native', 'Node.js', '.NET', 'Laravel'],
  Tools:      ['PostgreSQL', 'MySQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Tailwind CSS'],
};

const CERTS = [
  'AWS Certified Solutions Architect — Associate',
  'AWS Certified Cloud Practitioner',
];

const COURSES = [
  'Software Engineering',
  'Database Design',
  'Cloud Computing',
  'Secure Development Operations',
  'Mobile App Development',
  'Data Structures & Algorithms',
  'Web Application Development',
  'Software Testing & QA',
  'Agile Software Development',
  'ITIL Foundations',
];

export const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 3rem 4rem' }}>

      <div className="section-label">About</div>

      {/* Bio */}
      <p style={{ color: 'var(--c-body)', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '1rem' }}>
        I'm a software developer based in Brisbane, Australia, with a strong foundation in building
        full-stack web and mobile applications. I enjoy working across the entire stack — from
        designing clean REST APIs to crafting responsive, accessible interfaces.
      </p>
      <p style={{ color: 'var(--c-body)', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '1rem' }}>
        Currently holding AWS certifications in Solutions Architecture and Cloud Practitioner, I'm
        comfortable deploying and managing cloud infrastructure alongside application development.
        I'm open to full-time opportunities where I can contribute to meaningful products and keep growing.
      </p>
      <p style={{ color: 'var(--c-body)', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '2.5rem' }}>
        Outside of work I enjoy exploring new technologies, contributing to side projects, and
        staying active through outdoor activities.
      </p>

      {/* Skills */}
      <h3 style={{ color: 'var(--c-heading)', fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 400, marginBottom: '1rem' }}>
        Technologies
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
        {Object.entries(SKILLS).map(([cat, items]) => (
          <div key={cat} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '0 1rem' }}>
            <span
              style={{
                color: 'var(--c-faint)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                flexShrink: 0,
                width: '90px',
                paddingTop: '5px',
              }}
            >
              {cat}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', flex: 1 }}>
              {items.map((item) => (
                <span key={item} className="term-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <h3 style={{ color: 'var(--c-heading)', fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 400, marginBottom: '1rem' }}>
        Certifications
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2.5rem' }}>
        {CERTS.map((cert) => (
          <div
            key={cert}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: 'var(--c-body)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
            }}
          >
            <span style={{ color: 'var(--c-primary)', fontSize: '0.7rem' }}>▸</span>
            {cert}
          </div>
        ))}
      </div>

      {/* Education */}
      <h3 style={{ color: 'var(--c-heading)', fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 400, marginBottom: '1rem' }}>
        Education
      </h3>
      <div
        style={{
          borderLeft: '2px solid var(--c-border)',
          paddingLeft: '1.25rem',
          marginBottom: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <div>
            <div style={{ color: 'var(--c-heading)', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 400 }}>
              Master of Information Technology — Software Development
            </div>
            <div style={{ color: 'var(--c-body)', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
              Griffith University
            </div>
          </div>
          <span className="term-tag" style={{ flexShrink: 0 }}>2023 — 2025</span>
        </div>
        <div style={{ color: 'var(--c-faint)', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
          GPA 6.4 / 7.0 &nbsp;·&nbsp; Griffith Award for Academic Excellence
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {COURSES.map((c) => (
            <span key={c} className="term-tag">{c}</span>
          ))}
        </div>
      </div>

    </section>
  );
};

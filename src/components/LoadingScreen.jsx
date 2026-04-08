import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const id = setInterval(() => {
      current++;
      setProgress(Math.min(Math.round((current / steps) * 100), 100));
      if (current >= steps) {
        clearInterval(id);
        setTimeout(() => { if (onComplete) onComplete(); }, 300);
      }
    }, interval);

    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: 'var(--c-bg)' }}
    >
      <div style={{ width: '100%', maxWidth: '320px', padding: '0 2rem' }}>
        {/* Name */}
        <div
          style={{
            color: 'var(--c-heading)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            marginBottom: '0.5rem',
          }}
        >
          Chao Yuan
        </div>
        <div
          style={{
            color: 'var(--c-body)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.85rem',
            marginBottom: '2rem',
          }}
        >
          Software Developer
        </div>

        {/* Progress bar */}
        <div className="term-progress-bg" style={{ height: '2px' }}>
          <div
            className="term-progress-fill"
            style={{ width: `${progress}%`, transition: 'width 0.03s linear' }}
          />
        </div>
      </div>
    </div>
  );
};

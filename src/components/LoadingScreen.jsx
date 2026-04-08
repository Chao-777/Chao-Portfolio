import { useEffect, useState } from 'react';

const BOOT_LINES = [
  '> CHAO_PORTFOLIO_SYSTEM v1.0',
  '> INITIALIZING...',
  '> LOADING USER_PROFILE: CHAO_YUAN.............. OK',
  '> VERIFYING AWS_CREDENTIALS.................... OK',
  '> MOUNTING PROJECT_DATABASE.................... OK',
  '> ESTABLISHING CONTACT_RELAY................... OK',
  '> ALL SYSTEMS NOMINAL',
];

export const LoadingScreen = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let idx = 0;
    const id = setInterval(() => {
      if (idx < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[idx]]);
        idx++;
        setProgress(Math.round((idx / BOOT_LINES.length) * 100));
      } else {
        clearInterval(id);
        setTimeout(() => { if (onComplete) onComplete(); }, 700);
      }
    }, 280);
    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: 'var(--c-bg)' }}
    >
      <div className="w-full max-w-lg px-8">
        {/* Label */}
        <div
          className="text-xs mb-6"
          style={{
            color: 'var(--c-primary)',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.2em',
          }}
        >
          PORTFOLIO_SYSTEM — BOOT_SEQUENCE
        </div>

        {/* Lines */}
        <div className="space-y-1 mb-2">
          {lines.map((line, i) => (
            <div
              key={i}
              className="text-sm"
              style={{
                color: i === lines.length - 1 ? 'var(--c-heading)' : 'var(--c-body)',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {line}
            </div>
          ))}
        </div>

        <span
          className="animate-blink text-sm"
          style={{ color: 'var(--c-primary)', fontFamily: 'JetBrains Mono, monospace' }}
        >
          _
        </span>

        {/* Progress bar */}
        <div className="mt-8 flex items-center gap-4">
          <div className="flex-1 term-progress-bg" style={{ height: '4px' }}>
            <div
              className="term-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span
            className="text-xs"
            style={{
              color: 'var(--c-primary)',
              fontFamily: 'JetBrains Mono, monospace',
              minWidth: '42px',
            }}
          >
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

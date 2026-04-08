import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from 'emailjs-com';

const FieldLabel = ({ children }) => (
  <label
    style={{
      display: 'block',
      color: 'var(--c-faint)',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.68rem',
      letterSpacing: '0.12em',
      marginBottom: '0.5rem',
    }}
  >
    {children}
  </label>
);

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('VALIDATION_ERROR: SENDER_ID is required.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('VALIDATION_ERROR: Invalid CHANNEL format.');
      return;
    }
    if (!formData.message.trim()) {
      setError('VALIDATION_ERROR: MESSAGE cannot be empty.');
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert('TRANSMISSION_SUCCESS: Message sent.');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setError('TRANSMISSION_ERROR: Failed to send. Try again.');
        }
      );
  };

  return (
    <section id="contact" style={{ padding: '4rem 3rem 4rem' }}>
      <RevealOnScroll>

        {/* Section header */}
        <div
          style={{
            color: 'var(--c-primary)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            marginBottom: '0.5rem',
          }}
        >
          &gt; ESTABLISH_CONNECTION
        </div>
        <h2
          className="section-heading"
          style={{ marginBottom: '2.5rem' }}
        >
          CONTACT_ME
        </h2>

        <div
          style={{
            background: 'var(--c-panel)',
            border: '1px solid var(--c-border)',
            borderRadius: '4px',
            padding: '2rem',
          }}
        >
          <form onSubmit={handleSubmit}>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginBottom: '1.25rem',
              }}
            >
              <div>
                <FieldLabel>SENDER_ID:</FieldLabel>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="your name..."
                  required
                  className="term-input"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <FieldLabel>CHANNEL:</FieldLabel>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="your email..."
                  required
                  className="term-input"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <FieldLabel>MESSAGE:</FieldLabel>
              <textarea
                name="message"
                value={formData.message}
                rows={6}
                placeholder="your message..."
                required
                className="term-input"
                style={{ resize: 'vertical' }}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {error && (
              <div
                style={{
                  color: 'var(--c-primary)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  border: '1px solid var(--c-border)',
                  borderRadius: '4px',
                  padding: '10px 14px',
                  background: 'var(--c-highlight)',
                  marginBottom: '1.25rem',
                }}
              >
                ! {error}
              </div>
            )}

            <button type="submit" className="term-btn" style={{ width: '100%' }}>
              ▶ TRANSMIT_MESSAGE
            </button>

          </form>
        </div>

      </RevealOnScroll>
    </section>
  );
};

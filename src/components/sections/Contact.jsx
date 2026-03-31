import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from 'emailjs-com';

const FieldLabel = ({ children }) => (
  <label
    className="block text-xs mb-1.5"
    style={{
      color: 'var(--c-label)',
      fontFamily: 'JetBrains Mono',
      letterSpacing: '0.12em',
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
    <section id="contact" className="py-24 flex flex-col justify-center items-center">
      <RevealOnScroll>
        <div className="w-full max-w-3xl px-4 md:px-8">

          <div
            className="text-xs mb-2"
            style={{
              color: 'var(--c-label)',
              fontFamily: 'JetBrains Mono',
              letterSpacing: '0.2em',
            }}
          >
            &gt; ESTABLISH_CONNECTION
          </div>
          <h2
            className="text-2xl font-bold mb-8 glow"
            style={{
              color: 'var(--c-primary)',
              fontFamily: 'JetBrains Mono',
              letterSpacing: '0.1em',
            }}
          >
            CONTACT_ME
          </h2>

          <div className="term-panel p-8">
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

              <div>
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
                  className="text-xs"
                  style={{
                    color: 'var(--c-primary)',
                    fontFamily: 'JetBrains Mono',
                    border: '1px solid var(--c-border)',
                    padding: '8px 12px',
                    background: 'var(--c-panel)',
                  }}
                >
                  ! {error}
                </div>
              )}

              <button type="submit" className="term-btn w-full">
                ▶ TRANSMIT_MESSAGE
              </button>

            </form>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};

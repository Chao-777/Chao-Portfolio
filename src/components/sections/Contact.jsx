import { useState } from 'react';
import emailjs from 'emailjs-com';

const FieldLabel = ({ children }) => (
  <label
    style={{
      display: 'block',
      color: 'var(--c-faint)',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
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
      setError('Please enter your name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please enter a message.');
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
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setError('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" style={{ padding: '4rem 3rem' }}>

        <p
          style={{
            color: 'var(--c-body)',
            fontSize: '0.95rem',
            lineHeight: 1.85,
            maxWidth: '540px',
            marginBottom: '2.5rem',
          }}
        >
          I'm currently open to full-time opportunities. Whether you have a question, a project
          in mind, or just want to say hi — my inbox is always open.
        </p>

        <div
          style={{
            background: 'var(--c-panel)',
            border: '1px solid var(--c-border)',
            borderRadius: '8px',
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
                <FieldLabel>Name</FieldLabel>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your name"
                  required
                  className="term-input"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <FieldLabel>Email</FieldLabel>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="your@email.com"
                  required
                  className="term-input"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <FieldLabel>Message</FieldLabel>
              <textarea
                name="message"
                value={formData.message}
                rows={6}
                placeholder="Your message..."
                required
                className="term-input"
                style={{ resize: 'vertical' }}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {error && (
              <div
                style={{
                  color: 'var(--c-body)',
                  fontSize: '0.825rem',
                  border: '1px solid var(--c-border)',
                  borderRadius: '4px',
                  padding: '10px 14px',
                  background: 'var(--c-highlight)',
                  marginBottom: '1.25rem',
                }}
              >
                {error}
              </div>
            )}

            <button type="submit" className="term-btn" style={{ width: '100%' }}>
              Send Message
            </button>

          </form>
        </div>

    </section>
  );
};

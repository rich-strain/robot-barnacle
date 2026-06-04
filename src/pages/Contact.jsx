import { useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { HiEnvelope, HiPaperAirplane } from 'react-icons/hi2';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/richardstrain',
    icon: FaLinkedinIn,
    username: '/in/richardstrain',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/rich-strain',
    icon: FaGithub,
    username: 'rich-strain',
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/.netlify/functions/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="container mx-auto px-6 max-w-6xl py-20">
      <div className="mb-14">
        <p className="text-accent text-xs uppercase tracking-widest mb-3 font-medium">Get In Touch</p>
        <h1 className="section-title mb-3">Contact Me</h1>
        <p className="section-subtitle max-w-lg">
          Have a project in mind or want to discuss an opportunity? Fill out the form and I&apos;ll get
          back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left panel */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <h2 className="text-text-primary font-semibold mb-5">Contact Details</h2>
            <a
              href="mailto:richardstrain@gmail.com"
              className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors group mb-2"
            >
              <div className="w-9 h-9 rounded-lg bg-elevated border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors flex-shrink-0">
                <HiEnvelope className="w-4 h-4" />
              </div>
              <span className="text-sm">richardstrain@gmail.com</span>
            </a>
          </div>

          <div className="card">
            <h2 className="text-text-primary font-semibold mb-5">Find Me Online</h2>
            <div className="space-y-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon, username }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-elevated border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{label}</p>
                    <p className="text-xs text-text-muted">{username}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="card bg-accent/5 border-accent/20">
            <p className="text-text-secondary text-sm leading-relaxed">
              Currently open to <span className="text-accent font-medium">remote junior/mid-level</span> full-stack
              positions. Let&apos;s build something great together.
            </p>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="lg:col-span-3">
          <div className="card">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-text-primary font-semibold text-xl mb-2">Message Sent!</h3>
                <p className="text-text-secondary text-sm max-w-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 btn-secondary text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-text-primary text-sm font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`form-input ${errors.name ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                  />
                  {errors.name && <p className="mt-1.5 text-red-400 text-xs">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-text-primary text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`form-input ${errors.email ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                  />
                  {errors.email && <p className="mt-1.5 text-red-400 text-xs">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-primary text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className={`form-input resize-none ${errors.message ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                  />
                  {errors.message && <p className="mt-1.5 text-red-400 text-xs">{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

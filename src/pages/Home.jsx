import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { HiArrowRight } from 'react-icons/hi2';

const SKILLS_PREVIEW = ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Docker'];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-6xl pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              Available for remote opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight mb-6">
              Full-Stack
              <br />
              <span className="text-accent">Web Developer</span>
            </h1>

            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
              UCF coding bootcamp graduate with 1.5+ years building production-grade MERN stack
              applications — including a SaaS membership platform with real paying customers and
              payment integrations.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/portfolio" className="btn-primary">
                View My Work
                <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/richardstrain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/rich-strain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <span className="text-text-muted text-sm">Based in Florida&apos;s Treasure Coast</span>
            </div>
          </div>

          {/* RS Monogram */}
          <div className="flex items-center justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-surface border border-border flex items-center justify-center shadow-2xl">
                <div className="text-8xl sm:text-9xl font-bold text-accent/20 select-none tracking-tighter">
                  RS
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-accent/5 blur-2xl scale-110 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-elevated border border-border flex flex-col items-center justify-center shadow-lg">
                <span className="text-accent font-bold text-lg leading-none">1.5+</span>
                <span className="text-text-muted text-xs mt-0.5">yrs exp</span>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-elevated border border-border flex flex-col items-center justify-center shadow-lg">
                <span className="text-accent font-bold text-base leading-none">UCF</span>
                <span className="text-text-muted text-xs mt-0.5">bootcamp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick skills strip */}
        <div className="mt-20 pt-10 border-t border-border">
          <p className="text-text-muted text-xs uppercase tracking-widest mb-4">Core Technologies</p>
          <div className="flex flex-wrap gap-2">
            {SKILLS_PREVIEW.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
            <Link to="/resume" className="skill-badge text-accent border-accent/30 hover:bg-accent hover:text-white">
              View all →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-surface border-y border-border py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-accent text-xs uppercase tracking-widest mb-3 font-medium">About Me</p>
              <h2 className="section-title mb-6">Building real things<br />for real users</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                I&apos;m a full-stack developer based along Florida&apos;s Treasure Coast, focused on building
                production-ready web applications. I graduated from UCF&apos;s coding bootcamp and have since
                shipped real products — including a SaaS membership platform with Stripe payment integrations
                that serves paying customers.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                My stack centers on the MERN ecosystem, but I&apos;m equally comfortable with Next.js, TypeScript,
                Docker, and third-party API integrations. I care about clean code, user experience, and shipping
                things that actually work.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/portfolio" className="btn-primary">
                  See My Projects
                  <HiArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/resume" className="btn-secondary">
                  View Resume
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
                { label: 'Backend', items: ['Node.js', 'Express', 'PHP', 'GraphQL'] },
                { label: 'Database', items: ['MongoDB', 'SQL', 'Mongoose', 'Sequelize'] },
                { label: 'DevOps & Tools', items: ['Docker', 'DigitalOcean', 'Netlify', 'Git'] },
              ].map(({ label, items }) => (
                <div key={label} className="card">
                  <h3 className="text-text-primary font-semibold text-sm mb-3">{label}</h3>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="text-text-secondary text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent inline-block flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

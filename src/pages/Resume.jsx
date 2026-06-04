import Skills from '../components/Skills';
import ProficiencyCard from '../components/ProficiencyCard';
import { HiArrowDownTray } from 'react-icons/hi2';

const FRONTEND = [
  {
    title: 'React & Next.js',
    children:
      'Proficient in building component-driven UIs with React and server-rendered apps with Next.js. Experienced with hooks, context, routing, and performance optimization.',
  },
  {
    title: 'TypeScript',
    children:
      'Comfortable writing typed JavaScript across both frontend and backend — interfaces, generics, utility types, and integrating TypeScript into existing JS projects.',
  },
  {
    title: 'Responsive Design',
    children:
      'Skilled in building fully responsive layouts using Tailwind CSS, CSS Grid, and Flexbox. Every project I ship is mobile-first by default.',
  },
];

const BACKEND = [
  {
    title: 'Node.js & Express',
    children:
      'Experienced building RESTful APIs and server-side applications with Node.js and Express. Skilled in middleware, authentication flows, and third-party integrations.',
  },
  {
    title: 'MongoDB & SQL',
    children:
      'Proficient with MongoDB and Mongoose for NoSQL data modeling, as well as SQL databases including MySQL and PostgreSQL using Sequelize ORM.',
  },
  {
    title: 'Payment Integrations',
    children:
      'Real production experience integrating Stripe for subscription billing, one-time payments, and webhook handling on a live SaaS platform with paying customers.',
  },
  {
    title: 'GraphQL & Auth',
    children:
      'Proficient with GraphQL APIs using Apollo, and experienced implementing JWT-based authentication and OAuth 2.0 social login flows.',
  },
];

function Resume() {
  return (
    <section className="container mx-auto px-6 max-w-6xl py-20">
      <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="text-accent text-xs uppercase tracking-widest mb-3 font-medium">My Background</p>
          <h1 className="section-title mb-3">Resume & Skills</h1>
          <p className="section-subtitle max-w-lg">
            UCF coding bootcamp graduate with 1.5+ years of hands-on full-stack experience.
          </p>
        </div>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          title="Resume download coming soon"
          className="btn-secondary flex-shrink-0 opacity-60 cursor-not-allowed"
          aria-disabled="true"
        >
          <HiArrowDownTray className="w-4 h-4" />
          Download Resume
        </a>
      </div>

      {/* Skills */}
      <div className="card mb-12">
        <h2 className="text-text-primary font-semibold text-lg mb-6">Technical Skills</h2>
        <Skills />
      </div>

      {/* Proficiencies */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div>
          <h2 className="text-text-primary font-semibold text-lg mb-5 pb-3 border-b border-border">
            Frontend Proficiencies
          </h2>
          <div className="space-y-4">
            {FRONTEND.map((props, idx) => (
              <ProficiencyCard key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-text-primary font-semibold text-lg mb-5 pb-3 border-b border-border">
            Backend Proficiencies
          </h2>
          <div className="space-y-4">
            {BACKEND.map((props, idx) => (
              <ProficiencyCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

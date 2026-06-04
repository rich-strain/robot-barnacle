import Project from '../components/Project';

const PROJECTS = [
  // Production SaaS
  {
    img: '/image/wealthen-preview.png',
    title: 'Wealthen',
    desc: 'A financial wellness SaaS platform with three subscription tiers (Free / $2 / $7 per month). Users import bank CSVs — no account linking ever — and get spending categorization, a debt payoff engine (avalanche & snowball), subscription waste detection, budget alerts, a financial health score, and a net worth tracker. Stripe handles billing; a Premium tier unlocks an AI coach and life planning tools.',
    deployUrl: 'https://wealthen.com',
    gitUrl: '',
    privateRepo: true,
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'NextAuth'],
  },
  {
    img: '/image/selfreliant-preview-1200x600.png',
    title: 'SaaS Membership Platform',
    desc: 'A production SaaS membership platform built for a live business with real paying customers. Features tiered membership access controlled by Clickfunnels payment webhooks, a Payload CMS backend running in Docker, a Next.js API layer, and a React frontend. Handles webhook verification, membership permission gates, and customer management. Deployed and actively serving customers.',
    deployUrl: 'https://members.selfreliantusa.com',
    gitUrl: '',
    privateRepo: true,
    demoCredentials: { user: 'demo@richardstrain.com', pass: 'demo' },
    tags: ['React', 'Next.js', 'Payload CMS', 'Docker', 'Clickfunnels', 'Webhooks', 'Node.js', 'TypeScript'],
  },
  // Standalone services
  {
    title: 'Auth Service',
    desc: 'A standalone authentication microservice featuring JWT-based auth, OAuth 2.0 social login, refresh token rotation, and role-based access control.',
    comingSoon: true,
    tags: ['Node.js', 'JWT', 'OAuth', 'TypeScript'],
  },
  {
    title: 'Stripe Payment API',
    desc: 'A reusable payment integration layer built on Stripe — supporting subscriptions, one-time charges, webhooks, and customer portal management.',
    comingSoon: true,
    tags: ['Node.js', 'Stripe', 'TypeScript', 'Webhooks'],
  },
  // Full-stack bootcamp projects
  {
    img: '/image/xClone.png',
    title: 'X Clone',
    desc: 'A content management style social platform where developers can publish posts and comment on each other — built with MERN stack.',
    deployUrl: 'https://crispy-dollop.onrender.com',
    gitUrl: 'https://github.com/rich-strain/crispy-dollop',
    tags: ['React', 'Node.js', 'MongoDB', 'GraphQL'],
  },
  {
    img: '/image/travelBlog.png',
    title: 'Travel Blog',
    desc: 'A full-stack travel diary built with Express.js and Sequelize ORM backed by a PostgreSQL database with session authentication.',
    deployUrl: 'https://travel-guide-9oc3.onrender.com',
    gitUrl: 'https://github.com/rich-strain/travel-guide',
    tags: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL'],
  },
  {
    img: '/image/mixIt-preview-1200x600.png',
    title: 'Mix-It',
    desc: 'MixIt! lets you search over 600 cocktails or stumble on something new with a single tap. The highlight is Bartender Mode: tell it what\'s behind your bar and it instantly surfaces every drink you can make — powered by TheCocktailDB\'s free API, with a locally-cached ingredient index and fuzzy matching that handles "Rum" finding "Dark Rum" automatically.',
    deployUrl: 'https://rich-strain.github.io/cocktail-search/',
    gitUrl: 'https://github.com/rich-strain/cocktail-search',
    tags: ['JavaScript', 'REST API', 'LocalStorage', 'TailwindCSS'],
  },
  {
    img: '/image/openWeather.png',
    title: 'Open Weather',
    desc: 'A weather dashboard that retrieves current conditions and a five-day forecast based on city search, using the OpenWeather API.',
    deployUrl: '',
    gitUrl: 'https://github.com/rich-strain/open-weather',
    tags: ['JavaScript', 'OpenWeather API', 'LocalStorage'],
  },
];

function Portfolio() {
  return (
    <section className="container mx-auto px-6 max-w-6xl py-20">
      <div className="mb-14">
        <p className="text-accent text-xs uppercase tracking-widest mb-3 font-medium">My Work</p>
        <h1 className="section-title mb-3">Projects</h1>
        <p className="section-subtitle max-w-lg">
          A selection of projects spanning full-stack web apps, API integrations, and developer tools. More coming as I build in public.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <Project key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

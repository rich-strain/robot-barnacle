import Project from '../components/Project';

const PROJECTS = [
  {
    img: '/image/mixIt.svg',
    title: 'Mix-It',
    desc: 'A cocktail search app that lets users find beverages by name and display recipe details, ingredients, and preparation instructions.',
    deployUrl: 'https://rich-strain.github.io/cocktail-search/',
    gitUrl: 'https://github.com/rich-strain/cocktail-search',
    tags: ['JavaScript', 'REST API', 'CSS'],
  },
  {
    img: '/image/openWeather.png',
    title: 'Open Weather',
    desc: 'A weather dashboard that retrieves current conditions and a five-day forecast based on city search, using the OpenWeather API.',
    deployUrl: '',
    gitUrl: 'https://github.com/rich-strain/open-weather',
    tags: ['JavaScript', 'OpenWeather API', 'LocalStorage'],
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
    img: '/image/xClone.png',
    title: 'X Clone',
    desc: 'A content management style social platform where developers can publish posts and comment on each other — built with MERN stack.',
    deployUrl: 'https://crispy-dollup.onrender.com',
    gitUrl: 'https://github.com/rich-strain/crispy-dollop',
    tags: ['React', 'Node.js', 'MongoDB', 'GraphQL'],
  },
  {
    img: '/image/cssCheatsheet.png',
    title: 'CSS Cheatsheet',
    desc: 'A quick-reference HTML page covering the most common CSS layout patterns — Grid, Flexbox, positioning, and more.',
    deployUrl: 'https://css.richardstrain.com',
    gitUrl: 'https://github.com/rich-strain/css-cheat',
    tags: ['HTML', 'CSS'],
  },
  {
    img: '/image/dailyNotes.png',
    title: 'Daily Task List',
    desc: 'A simple Node/Express task manager app with API routing, persistent JSON storage, and a clean frontend interface.',
    deployUrl: 'https://expert-spoon.onrender.com',
    gitUrl: 'https://github.com/rich-strain/expert-spoon',
    tags: ['Node.js', 'Express', 'REST API'],
  },
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
];

function Portfolio() {
  return (
    <section className="container mx-auto px-6 max-w-6xl py-20">
      <div className="mb-14">
        <p className="text-accent text-xs uppercase tracking-widest mb-3 font-medium">My Work</p>
        <h1 className="section-title mb-3">Projects</h1>
        <p className="section-subtitle max-w-lg">
          A selection of projects spanning full-stack web apps, API integrations, and developer tools.
          More coming as I build in public.
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

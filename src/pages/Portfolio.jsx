import Project from '../components/Project';
import { Typography } from '@material-tailwind/react';

const PROJECTS = [
  {
    img: '/image/mixIt.svg',
    title: 'Mix-It',
    desc: 'An app that allows users to search for cocktail beverages by name, and display information about the beverage such as its recipe, ingredients.',
    deployUrl: 'https://rich-strain.github.io/cocktail-search/',
    gitUrl: 'https://github.com/rich-strain/cocktail-search',
  },
  {
    img: '/image/openWeather.png',
    title: 'Open Weather ',
    desc: 'A weather dashboard that allows a user to retrieve the current weather and the five day forecast based upon the city searched.',
    deployUrl: '',
    gitUrl: 'https://github.com/rich-strain/open-weather',
  },
  {
    img: '/image/travelBlog.png',
    title: 'Travel Blog',
    desc: 'A travel diary or blog based on an Express.js API back end that utilizes Sequalize to interact with the PosgresSQL database.',
    deployUrl: 'https://travel-guide-9oc3.onrender.com',
    gitUrl: 'https://github.com/rich-strain/travel-guide',
  },
  {
    img: '/image/cssCheatsheet.png',
    title: 'CSS Cheatsheet',
    desc: 'A simple HTML page that can be used to reference code snippets for some of the most common CSS layouts a developer might use.',
    deployUrl: 'https://css.richardstrain.com',
    gitUrl: 'https://github.com/rich-strain/css-cheat',
  },
  {
    img: '/image/dailyNotes.png',
    title: 'Daily Task List',
    desc: 'A simple task list created with node and express. The app utilizes express for navigation and API routing and Nodemon for automatic rebooting of the server.',
    deployUrl: 'https://expert-spoon.onrender.com',
    gitUrl: 'https://github.com/rich-strain/expert-spoon',
  },
  {
    img: '/image/xClone.png',
    title: 'X Clone',
    desc: "A content mangagement style clone of X where developers can publish their posts and comment on each other's posts as well.",
    deployUrl: 'https://crispy-dollup.onrender.com',
    gitUrl: 'https://github.com/rich-strain/crispy-dollop',
  },
];

function Portfolio() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Portfolio
        </Typography>
        <Typography variant="lead" className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
          Whether you&apos;re envisioning a new mobile app or looking to revamp your website, I am here to bring your digital ambitions to life.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <Project key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

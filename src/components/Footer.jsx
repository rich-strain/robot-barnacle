import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const LINKS = ['About', 'Portfolio', 'Contact', 'Resume'];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Made with{' '}
            <span role="img" aria-label="heart">
              ❤️ by Rich Strain.
            </span>
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <Typography as="a" href="#" variant="small" className="font-normal text-gray-700 hover:text-gray-900 transition-colors">
                  <Link to={link}>{link}</Link>
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

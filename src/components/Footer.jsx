// Import Tailwind CSS Components
import { Typography } from '@material-tailwind/react';
// Import React Router
import { Link } from 'react-router-dom';
// Import React Icons
import { FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

// Set Misc Variables
const footerIconColor = '#25334d';
const CURRENT_YEAR = new Date().getFullYear();
//const LINKS = ['About', 'Portfolio', 'Contact', 'Resume'];

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
            <li>
              <Link to="http://linkedin.com">
                <FaLinkedinIn className="h-5 w-5" color={footerIconColor} />
              </Link>
            </li>
            <li>
              <Link to="http://twitter.com">
                <FaXTwitter className="h-5 w-5" color={footerIconColor} />
              </Link>
            </li>
            <li>
              <Link to="http://github.com/rich-strain">
                <FaGithub className="h-5 w-5" color={footerIconColor} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

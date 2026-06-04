import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-6 max-w-6xl py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center text-white font-bold text-xs">
              RS
            </div>
            <p className="text-text-muted text-sm">
              &copy; {CURRENT_YEAR} Richard Strain. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/richardstrain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/rich-strain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

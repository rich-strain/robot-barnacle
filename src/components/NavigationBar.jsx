import React from 'react';
import { Navbar, Collapse, Typography, IconButton } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SiCoderwall } from 'react-icons/si';
import { GiPineapple } from 'react-icons/gi';

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 p">
      <Typography as="li" variant="small" className="p-1 font-medium text-lightGray">
        <Link key={2} to="/about">
          ABOUT
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium text-lightGray">
        <Link key={3} to="/portfolio">
          PORTFOLIO
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium text-lightGray">
        <Link key={4} to="/contact">
          CONTACT
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium text-lightGray ">
        <Link key={5} to="/resume">
          RESUME
        </Link>
      </Typography>
    </ul>
  );
}

function NavigationBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    // <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
    <Navbar fullWidth className="border-0 sticky top-0 z-50 bg-midnightBlue py-0">
      <div className="flex items-center justify-between">
        <Typography variant="h6" className="mr-4 cursor-pointer-none py-1.5">
          <GiPineapple size="3rem" color="#fafafa" />
        </Typography>
        <div className="hidden lg:block text-lightGray">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
export default NavigationBar;

import { Input, Button, Typography } from '@material-tailwind/react';
import headShot from '../assets/portfolioHeadShot.jpg';
import Skills from '../components/Skills';
import { useState } from 'react';

const Home = () => {
  const [email, setEmail] = useState('');
  return (
    <>
      <header className="bg-white p-8">
        <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
          <div className="row-start-2 lg:row-auto">
            <Typography variant="h1" color="blue-gray" className="mb-4 lg:text-5xl !leading-tight text-3xl">
              Welcome to my Development Portofolio!
            </Typography>
            <Typography variant="lead" className="mb-4 !text-gray-500 md:pr-16 xl:pr-28">
              I&apos;m Rich Strain, a passionate web developer based along Florida&apos;s Treasure Coast. Here, you&apos;ll get a glimpse of my journey in the
              world of web development, where creativity meets functionality.
            </Typography>
            <div className="grid">
              <Typography variant="small" className="mb-2 text-gray-900 font-medium">
                Your email
              </Typography>
              <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
                <Input color="gray" label="Enter your email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Button color="gray" className="w-full px-4 md:w-[12rem]">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
          <img width={1024} height={1024} alt="team work" src={headShot} className="rounded-xl" />
        </div>
      </header>
      <Skills />
    </>
  );
};

export default Home;

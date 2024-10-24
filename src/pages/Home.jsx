// Import React Components
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { validateEmail, handleEmailChange } from '../utils';

// Import Tailwind CSS Components
import { Input, Button, Typography } from '@material-tailwind/react';

const Home = () => {
  //  React States/Hooks
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // validate email field
  const emailChange = (e) => {
    handleEmailChange(e, setEmail, setError, validateEmail);
  };
  // Navigate to Contact Form Pushing Email as Prop
  // const passEmail = () => {
  //   console.log('Email to pass: ', email);
  //   console.log('Passing Email to Contact Form');
  //   navigate('/contact', { state: { email } });
  // };

  // Navigate to Contact Form Pushing Email as Prop
  const sendEmail = () => {
    console.log(email);

    if (error) {
      console.log('Invalid Email Provided');
    } else {
      navigate('/contact', { state: { email } });
    }
    return;
  };

  //HTML RETURN
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
                <Input color="gray" label="Enter your email" size="lg" value={email} onChange={emailChange} error={error} />
                <Button color="gray" className="w-full px-4 md:w-[12rem]" onClick={() => sendEmail()} disabled={error}>
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
          <img width={1024} height={1024} alt="team work" src="/image/portfolioHeadshot.jpg" className="rounded-xl" />
        </div>
      </header>
    </>
  );
};

export default Home;

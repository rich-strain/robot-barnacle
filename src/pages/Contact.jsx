// Import React Components
// import { useLocation } from 'react-router-dom';
import { useState } from 'react';

// Import Tailwind CSS Components
import { Typography, Card, CardBody, Radio, Input, Textarea, Button, IconButton } from '@material-tailwind/react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

export function Contact() {
  // React Hooks

  //const [email, setEmail] = useState('');
  // const location = useLocation();
  const passedEmail = location.state?.email;
  if (passedEmail) {
    setEmail(passedEmail);
    console.log(`Email: `, { passedEmail });
  }

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [contactMessage, setMessage] = useState('');

  // const handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   // Based on the input type, we set the state of either email, username, and password
  //   if (inputType === 'email') {
  //     setEmail(inputValue);
  //   } else if (inputType === 'first-name') {
  //     setFirstName(inputValue);
  //   } else if (inputType === 'last-name') {
  //     setLastName(inputValue);
  //   } else {
  //     setMessage(inputValue);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Submitted');
  // };

  return (
    <section className="px-8 py-16">
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-midnightBlue">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography variant="lead" className="mx-auto mb-8 text-base !text-gray-500">
                Fill out the form and I will get back to you within 24 business hours.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +1(916) 718 9233
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  richardstrain@mail.com
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action="#">
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="first-name"
                    // value={firstName}
                    placeholder="eg. Edward"
                    containerProps={{
                      className: '!min-w-full mb-3 md:mb-0',
                    }}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last-name"
                    // value={lastName}
                    placeholder="eg. VanHalen"
                    containerProps={{
                      className: '!min-w-full',
                    }}
                  />
                </div>
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  //value={email}
                  name="email"
                  placeholder="eg. eddy@vanhalen.com"
                  containerProps={{
                    className: '!min-w-full mb-8',
                  }}
                />
                <Typography variant="lead" className="!text-blue-gray-500 text-sm mb-2">
                  What are you interested on?
                </Typography>
                <div className="-ml-3 mb-14 ">
                  <Radio color="gray" name="type" label="Design" defaultChecked />
                  <Radio color="gray" name="type" label="Development" />
                  <Radio color="gray" name="type" label="Support" />
                  <Radio color="gray" name="type" label="Other" />
                </div>
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  // value={contactMessage}
                  containerProps={{
                    className: '!min-w-full mb-8',
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button className="w-full md:w-fit bg-midnightBlue" size="md">
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Contact;

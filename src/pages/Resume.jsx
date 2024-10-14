import { IconButton, Typography } from '@material-tailwind/react';
import { BriefcaseIcon, FireIcon } from '@heroicons/react/24/solid';
import { PiDownloadSimple } from 'react-icons/pi';
import Skills from '../components/Skills';

// import { DiJqueryLogo, DiHtml5, DiCss3, DiResponsive, DiReact, DiBootstrap, DiNodejsSmall, DiMysql, DiMongodb } from 'react-icons/di';
// import { FaHtml5 } from 'react-icons/fa6';
// import { SiApollographql, SiGraphql } from 'react-icons/si';
import ProficiencyCard from '../components/ProficiencyCard';

const resumeDownload = () => {
  window.open('/assets/resume.pdf', '_blank');
};

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: 'Freelancer Web Developer',
    date: '2023 - PRESENT',
    children:
      "The core of my work involved actual web development. I would write code, design layouts, and create functionality based on the project's specifications.",
  },
  {
    icon: BriefcaseIcon,
    title: 'Technical Team Lead',
    date: '2021 - 2023',
    children: 'I provided strong leadership by overseeing and guiding a team of highly skilled technical professionals.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Senior Web Developer',
    date: '2017 - 2021',
    children: 'Revamped the automated test framework for web services, resulting in a remarkable 90% reduction in debugging and issue resolution time.',
  },
];

const FRONTEND = [
  {
    icon: FireIcon,
    title: 'Front-End Frameworks',
    children:
      'Competent in working with front-end frameworks such as React, Angular, or Vue.js to develop dynamic and responsive web applications with a focus on user experience.',
  },
  {
    icon: FireIcon,
    title: 'Responsive Web Design',
    children:
      'Skilled in creating responsive layouts using CSS Grid, Flexbox, and media queries. Ensures websites adapt seamlessly to various screen sizes and devices.',
  },
  {
    icon: FireIcon,
    title: 'Attention to Detail',
    children: 'Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.',
  },
];

export function InformationSection() {
  return (
    <>
      <div className="relative w-full">
        <div className="grid place-items-center min-h-[52vh] px-8">
          <div className="container mx-auto grid place-items-center h-max text-center">
            <Typography variant="h1" color="blue-gray">
              My Resume
            </Typography>
            <Typography variant="lead" color="gray" className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl">
              Welcome to my professional resume page! Below, you&apos;ll find a <br /> comprehensive overview of my front-end and back-end proficiencies.
            </Typography>
            <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">Download My Resume:</Typography>
            <div className="gap-2 lg:flex">
              <IconButton variant="text" color="gray" onClick={() => resumeDownload()}>
                <PiDownloadSimple size="2rem" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-28 px-8">
        <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start pt-[120px]">
          <div>
            <div className="mb-10">
              <Typography c className="mb-2 text-3xl font-bold text-center">
                Front-end Proficiencies
              </Typography>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
              {FRONTEND.map((props, idx) => (
                <ProficiencyCard key={idx} {...props} />
              ))}
            </div>
          </div>
          <div>
            <div className="mb-10">
              <Typography color="blue-gray" className="mb-2 text-3xl font-bold text-center">
                Back-end Proficiencies
              </Typography>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
              {EXPERIENCE.map((props, idx) => (
                <ProficiencyCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <Skills />
      </section>
    </>
  );
}

export default InformationSection;

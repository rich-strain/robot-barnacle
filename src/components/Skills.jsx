import { Typography } from '@material-tailwind/react';
import { DiCss3Full, DiGithubBadge, DiHtml5, DiJavascript, DiMongodb, DiMysql, DiNodejs, DiReact } from 'react-icons/di';
const iconColor = '#424242';

const Skills = () => {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          Coding Skills
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <DiGithubBadge color={iconColor} size="4rem" variant="gradient" />
            <DiHtml5 color={iconColor} size="4rem" />
            <DiCss3Full color={iconColor} size="4rem" />
            <DiJavascript color={iconColor} size="4rem" />
            <DiMongodb color={iconColor} size="4rem" />
            <DiMysql color={iconColor} size="4rem" />
            <DiNodejs color={iconColor} size="4rem" />
            <DiReact color={iconColor} size="4rem" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

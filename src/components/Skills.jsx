import { Typography } from '@material-tailwind/react';
import { DiCss3Full, DiGithubBadge, DiHtml5, DiJavascript, DiMongodb, DiMysql, DiNodejs, DiReact } from 'react-icons/di';

const Skills = () => {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h5" className="mb-8 text-gray-900">
          Coding Skills
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <DiGithubBadge className="text-gray-700" size="4rem" variant="gradient" />
            <DiHtml5 variant="gradient" className="text-gray-700" size="4rem" />
            <DiCss3Full className="text-gray-700" size="4rem" />
            <DiJavascript className="text-gray-700" size="4rem" />
            <DiMongodb className="text-gray-700" size="4rem" />
            <DiMysql className="text-gray-700" size="4rem" />
            <DiNodejs className="text-gray-700" size="4rem" />
            <DiReact className="text-gray-700" size="4rem" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

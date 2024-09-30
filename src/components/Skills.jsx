import { Typography } from '@material-tailwind/react';
import { DiGitHubBadge } from 'react-icons/di';
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'PHP'];

const Skills = () => {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          Coding Skills
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {skills.map((logo, key) => (
            <div key={key} className="flex items-center gap-2">
              <DiGitHubBadge size="3rem" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'PHP', 'GraphQL', 'REST APIs'],
  },
  {
    label: 'Database',
    skills: ['MongoDB', 'SQL', 'MySQL', 'PostgreSQL', 'Mongoose'],
  },
  {
    label: 'Payments & APIs',
    skills: ['Stripe', 'Clickbank', 'Clickfunnels', 'JWT', 'OAuth', 'Resend'],
  },
  {
    label: 'DevOps & Cloud',
    skills: ['Docker', 'DigitalOcean', 'Netlify', 'Git', 'GitHub'],
  },
];

const Skills = () => {
  return (
    <div className="space-y-8">
      {SKILL_GROUPS.map(({ label, skills }) => (
        <div key={label}>
          <h3 className="text-text-muted text-xs uppercase tracking-widest mb-3 font-medium">{label}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

import { FaGithub } from 'react-icons/fa6';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold">
      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
      Coming Soon
    </span>
  );
}

export function Project({ img, title, desc, gitUrl, deployUrl, comingSoon, tags }) {
  return (
    <article className="card card-hover group flex flex-col h-full p-0 overflow-hidden">
      {/* Image / Placeholder */}
      <div className="h-48 overflow-hidden bg-elevated relative">
        {comingSoon ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-elevated to-accent/10">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <ComingSoonBadge />
          </div>
        ) : (
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-text-primary font-semibold text-lg leading-tight">{title}</h3>
          {comingSoon && <ComingSoonBadge />}
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">{desc}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded text-xs bg-elevated text-text-muted border border-border">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 pt-3 border-t border-border mt-auto">
          {deployUrl && !comingSoon ? (
            <a
              href={deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-secondary text-sm font-medium hover:text-accent transition-colors"
            >
              <HiArrowTopRightOnSquare className="w-4 h-4" />
              Live Demo
            </a>
          ) : comingSoon ? (
            <span className="text-text-muted text-sm italic">Live link coming soon</span>
          ) : null}

          {gitUrl && (
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-secondary text-sm font-medium hover:text-accent transition-colors ml-auto"
            >
              <FaGithub className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Project;

import { ExternalLink, Github, Sparkles } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { title, subtitle, description, achievements, techStack, github, demo, featured } = project;

  return (
    /* ── Glow border wrapper ─────────────────────────────────────────── */
    <div className="relative group">
      {/* Animated gradient glow border – appears on hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

      {/* Card */}
      <div className="relative bg-slate-950 border border-white/10 group-hover:border-transparent rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-violet-500/20">

        {/* Shine sweep on hover */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 skew-x-12" />
        </div>

        {/* Inner subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90 backdrop-blur-sm shadow-lg shadow-violet-500/20">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-semibold text-white tracking-wide">Featured</span>
          </div>
        )}

        <div className="relative p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-lg text-violet-400 font-medium">{subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>

          {/* Key Achievements */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-violet-400 shadow-sm shadow-violet-400/50" />
                  <span className="text-sm text-slate-300 leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-6 flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-violet-500/20 hover:border-violet-500/40 hover:text-violet-300 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:border-violet-500/30 transition-all duration-200 hover:scale-105"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">Code</span>
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

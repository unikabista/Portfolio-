import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  techStack: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, subtitle, description, achievements, techStack, github, demo, featured } = project;

  return (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/10">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-violet-600/80 to-fuchsia-600/80 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span className="text-xs font-medium text-white">Featured</span>
        </div>
      )}

      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 sm:p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
            {title}
          </h3>
          <p className="text-lg text-violet-400 font-medium">{subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>

        {/* Key Achievements */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {achievements.map((achievement: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                <span className="text-sm text-slate-300 leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-violet-500/20 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-300"
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

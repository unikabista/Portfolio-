import { useEffect, useRef, useState } from 'react';
import { Cpu, Code2, Wrench, Database, Brain, Sparkles } from 'lucide-react';
import { skills } from '@/constants';
import type { LucideIcon } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  skills: { name: string; level: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    color: 'from-cyan-500 to-blue-500',
    skills: skills.languages,
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: Cpu,
    color: 'from-violet-500 to-purple-500',
    skills: skills.frameworks,
  },
  {
    id: 'aiAndML',
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-fuchsia-500 to-pink-500',
    skills: skills.aiAndML,
  },
  {
    id: 'dataScience',
    title: 'Data Science',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    skills: skills.dataScience,
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-amber-500 to-orange-500',
    skills: skills.tools,
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-slate-950"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-slate-300">Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technical{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            A comprehensive toolkit built through hands-on experience in AI/ML, 
            full-stack development, and data engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:border-violet-500/30 transition-all duration-300 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Highlights */}
        <div
          className={`mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          {[
            { label: 'AI/ML Frameworks', value: 'PyTorch, Scikit-Learn' },
            { label: 'Cloud Platforms', value: 'AWS, Azure DevOps' },
            { label: 'Data Tools', value: 'Pandas, Spark, Power BI' },
            { label: 'Version Control', value: 'Git, GitHub, Docker' },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-sm font-medium text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

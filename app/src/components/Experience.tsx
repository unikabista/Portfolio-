import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, ChevronRight, Code2, Wallet, Users, MapPin } from 'lucide-react';
import { experiences, leadership } from '@/constants';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2: Code2,
  Wallet: Wallet,
  Users: Users,
};

const Experience = () => {
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
      id="experience"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-slate-950"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <Briefcase className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-slate-300">Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Work &{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Professional experience building real-world solutions and leading 
            initiatives that empower the tech community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Professional Experience */}
          <div className="lg:col-span-2 space-y-6">
            <h3
              className={`text-xl font-semibold text-white mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Professional Experience
            </h3>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-violet-500/30 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-violet-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-400 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Section */}
          <div className="space-y-6">
            <h3
              className={`text-xl font-semibold text-white mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Leadership Roles
            </h3>

            <div className="space-y-4">
              {leadership.map((role, index) => {
                const IconComponent = iconMap[role.icon] || Users;
                return (
                  <div
                    key={role.id}
                    className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-violet-500/30 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20">
                        <IconComponent className="w-5 h-5 text-violet-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-violet-300 transition-colors">
                          {role.role}
                        </h4>
                        <p className="text-sm text-violet-400 mb-2">{role.organization}</p>
                        <p className="text-sm text-slate-400">{role.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Education Card */}
            <div
              className={`relative bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-400">Education</span>
              </div>
              <h4 className="font-semibold text-white mb-1">
                University of Louisiana at Monroe
              </h4>
              <p className="text-sm text-slate-300 mb-2">
                Bachelor of Science, Computer Science
              </p>
              <p className="text-xs text-slate-400">Aug 2023 - May 2027</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

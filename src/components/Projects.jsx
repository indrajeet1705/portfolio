import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const badgeColors = {
  'Microservices': 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  'AI / ML':       'text-blue-400   border-blue-500/30   bg-blue-500/10',
  'Full-Stack':    'text-violet-400 border-violet-500/30 bg-violet-500/10',
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest     = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            Production-grade systems — microservices architecture, distributed APIs, and AI-powered backends.
          </p>
        </motion.div>

        {/* Featured grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-2 gap-6 mb-6"
        >
          {featured.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </motion.div>

        {/* Non-featured row */}
        {rest.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {rest.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={featured.length + idx} compact />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, idx, compact = false }) {
  const badgeClass = badgeColors[project.badge] ?? 'text-violet-400 border-violet-500/30 bg-violet-500/10';

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex flex-col p-7 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/40 hover:bg-linear-to-br hover:from-violet-500/5 hover:to-transparent transition-all duration-300 overflow-hidden"
    >
      {/* Top row: number + badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl font-bold text-white/5 select-none group-hover:text-white/8 transition-colors">
          {String(idx + 1).padStart(2, '0')}
        </span>
        {project.badge && (
          <span className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${badgeClass}`}>
            {project.badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-base leading-snug mb-3">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Highlights */}
      {!compact && (
        <ul className="space-y-2 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
              <ChevronRight
                size={12}
                className="mt-0.5 text-violet-400 shrink-0 group-hover:translate-x-0.5 transition-transform"
              />
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-[11px] font-medium rounded-md border border-white/10 text-gray-400 bg-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/8">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <GithubIcon size={14} />
            Source Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

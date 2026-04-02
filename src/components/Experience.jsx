import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/1">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Work Experience</h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            Production-level contributions across backend engineering, AI systems, and cloud automation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-linear-to-b from-violet-500/40 via-violet-500/20 to-transparent" />

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <motion.div
                key={job.company}
                variants={itemVariants}
                className="relative pl-14 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-2 top-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-violet-500/40 bg-violet-500/10 flex items-center justify-center">
                  <Briefcase size={14} className="text-violet-400" />
                </div>

                {/* Card */}
                <div className="group p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-base">{job.role}</h3>
                      <p className="text-violet-400 font-medium text-sm mt-0.5">{job.company}</p>
                    </div>
                    {idx === 0 && (
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 rounded-full shrink-0">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-5 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} className="text-violet-400" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-violet-400" />
                      {job.location}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/6">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] rounded-md border border-white/10 text-gray-500 bg-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';
import { about, certifications, personal } from '../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stats = [
  { label: 'Certifications', value: '2' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Who I Am
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-300 text-base leading-relaxed">{about.summary}</p>

              <ul className="space-y-3">
                {about.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Meta tags */}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="flex items-center gap-1.5 text-xs text-gray-400 border border-white/10 px-3 py-1.5 rounded-full">
                  <MapPin size={12} className="text-violet-400" />
                  {personal.location}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400 border border-white/10 px-3 py-1.5 rounded-full">
                  <Briefcase size={12} className="text-violet-400" />
                  Open to Full-time & Internships
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400 border border-white/10 px-3 py-1.5 rounded-full">
                  <GraduationCap size={12} className="text-violet-400" />
                  BE Information Technology
                </span>
              </div>
            </motion.div>

            {/* Right — Stats + Certs */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ label, value }) => (
                  <div
                    key={label}
                    className="p-5 rounded-xl border border-white/8 bg-white/3 hover:border-violet-500/30 transition-colors duration-300"
                  >
                    <p className="text-3xl font-bold text-white mb-1">{value}</p>
                    <p className="text-gray-500 text-xs">{label}</p>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Award size={12} className="text-violet-400" />
                  Certifications
                </p>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="relative flex items-start gap-4 p-4 rounded-xl border border-white/8 bg-white/3 hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300 overflow-hidden"
                    >
                      {/* Left accent bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-violet-500/60 rounded-l-xl" />
                      <div className="w-9 h-9 rounded-lg bg-violet-500/15 flex items-center justify-center shrink-0 ring-1 ring-violet-500/20">
                        <Award size={15} className="text-violet-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <p className="text-white text-sm font-medium leading-snug">{cert.name}</p>
                          {cert.date && (
                            <span className="text-[10px] font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                              {cert.date}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
                        {cert.detail && (
                          <p className="text-gray-600 text-xs mt-1.5 leading-relaxed">{cert.detail}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

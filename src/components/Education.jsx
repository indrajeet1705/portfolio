import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              variants={itemVariants}
              className="group p-7 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center mb-5 group-hover:bg-violet-500/25 transition-colors">
                <GraduationCap size={22} className="text-violet-400" />
              </div>

              {/* Degree */}
              <h3 className="text-white font-bold text-base leading-snug mb-1">{edu.degree}</h3>
              <p className="text-violet-400 text-sm font-medium mb-4">{edu.institution}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} className="text-violet-400" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={11} className="text-violet-400" />
                  {edu.location}
                </span>
              </div>

              {/* Score badge */}
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold">
                {edu.detail}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

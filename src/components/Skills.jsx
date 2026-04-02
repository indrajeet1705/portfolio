import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const categoryIcons = {
  'Languages': '{ }',
  'Frameworks & Libraries': '⚡',
  'Databases': '🗄',
  'Tools & Platforms': '🛠',
  'Cloud & Auth': '☁',
  'AI / ML': '🤖',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/1">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Skills</h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            Technologies I work with across the full stack — from API design to ML pipelines.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              className="group p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg" aria-hidden="true">
                  {categoryIcons[group.category] || '◈'}
                </span>
                <h3 className="text-white font-semibold text-sm">{group.category}</h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-400 bg-white/5 group-hover:border-violet-500/20 group-hover:text-gray-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

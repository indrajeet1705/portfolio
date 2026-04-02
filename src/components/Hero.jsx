import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personal } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-violet-900/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
        >
          {personal.name.split(' ')[0]}{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-indigo-400">
            {personal.name.split(' ')[1]}
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg sm:text-xl text-violet-300 font-medium mb-4 tracking-wide"
        >
          {personal.role} · Java & Spring Boot · Microservices
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personal.tagline}
        </motion.p>

        {/* Core tech strip */}
        <motion.div
          {...fadeUp(0.35)}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {['Java', 'Spring Boot', 'NestJS', 'Express.js', 'Microservices', 'PostgreSQL', 'Docker'].map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-gray-400"
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-600/30 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="mailto:indrajeetbhujbal0@gmail.com"
            className="px-6 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div {...fadeUp(0.5)} className="flex items-center justify-center gap-5">
          {[
            { href: personal.github, icon: GithubIcon, label: 'GitHub' },
            { href: personal.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
            { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

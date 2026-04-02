import { personal } from '../data/portfolioData';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: personal.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: personal.linkedin },
  { icon: Mail, label: 'Email', href: `mailto:${personal.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-lg tracking-tight">
            IB<span className="text-violet-400">.</span>
          </span>
          <span className="text-gray-600 text-sm">— Indrajeet Bhujbal</span>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-xs flex items-center gap-1.5">
          Built with <Heart size={11} className="text-violet-400 inline" /> using React & Tailwind CSS
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

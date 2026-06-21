import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Mann Shah. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/MannShah720" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <LuGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/mann-shah619/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LuLinkedin size={24} />
          </a>
          <a 
            href="mailto:shahmann0108@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <LuMail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
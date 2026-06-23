import {ExternalLink} from 'lucide-react';
import { 
  SiReact, SiThreedotjs, SiVite, SiNextdotjs, SiTailwindcss, 
  SiTypescript, SiCloudinary, SiStripe, SiClerk, SiGsap, SiExpress, SiNodedotjs
} from 'react-icons/si';

import ambientFlare from '../assets/Ambient.jpg';
import earthProject from '../assets/EarthProject.png';
import chefBotProject from '../assets/ChefBot.png';
import tenziesProject from '../assets/Tenzies.png';
import assembleProject from '../assets/Assemble.png';

const TechIconMap: {[key: string]: React.ReactNode} = {
  "React": <SiReact className="w-4 h-4" />,
  "Three.js": <SiThreedotjs className="w-4 h-4" />,
  "Vite": <SiVite className="w-4 h-4" />,
  "Next.js": <SiNextdotjs className="w-4 h-4" />,
  "Tailwind CSS": <SiTailwindcss className="w-4 h-4" />,
  "TypeScript": <SiTypescript className="w-4 h-4" />,
  "Cloudinary": <SiCloudinary className="w-4 h-4" />,
  "Stripe": <SiStripe className="w-4 h-4" />,
  "Clerk": <SiClerk className="w-4 h-4" />,
  "GSAP": <SiGsap className="w-4 h-4" />,
  "Express": <SiExpress className="w-4 h-4" />,
  "Node.js": <SiNodedotjs className="w-4 h-4" />
};

const projects = [
  {
    title: "3D Solar System",
    description: "Explore the wonders of our solar system with this captivating 3D visualization of the planets using Three.js.",
    tech: ["React", "Three.js", "Vite"],
    image: earthProject,
    github: "https://github.com/MannShah720",
    live: "#"
  },
  {
    title: "Chef Bot",
    description: "An AI kitchen companion that generates custom recipes based on the ingredients you have on hand.",
    tech: ["React", "Node.js", "Express"],
    image: chefBotProject,
    github: "https://github.com/MannShah720/Chef-Claude",
    live: "#"
  },
  {
    title: "Tenzies",
    description: "A fast-paced dice game where the goal is to roll all 10 dice to the same number as fast as possible.",
    tech: ["React"],
    image: tenziesProject,
    github: "https://github.com/MannShah720/Tenzies",
    live: "https://tenzies300.netlify.app/"
  },
  {
    title: "Assemble",
    description: "Wordle clone with a tech twist",
    tech: ["React", "Node.js", "Express"],
    image: assembleProject,
    github: "https://github.com/MannShah720/Assemble",
    live: "https://assemble10.netlify.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500"
            >
              {/* Project Image Container */}
              <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-[#13162d] flex items-end justify-center">
                <img 
                  src={ambientFlare}
                  alt="Ambient Flare"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen filter invert" 
                />
                
                {/* Mockup Frame Wrapper with 3D Tilt and Curved Border */}
                <div className="w-[90%] h-[88%] translate-y-5 translate-x-1.5 -rotate-2 rounded-t-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] z-10 overflow-hidden group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-3 transition-all duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.26 1.23-.26 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                    <a href={project.live} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Icons & Learn More */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {project.tech.map((tag) => (
                    <div 
                      key={tag}
                      title={tag}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400"
                    >
                      {TechIconMap[tag] || <span className="text-[10px]">?</span>}
                    </div>
                  ))}

                  {/* Right-aligned Link */}
                  <a 
                    href={project.live} 
                    className="ml-auto inline-flex items-center text-sm font-bold text-white hover:text-indigo-400 transition-colors"
                  >
                    Learn More 
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
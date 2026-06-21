import { ExternalLink } from 'lucide-react';
import { 
  SiReact, SiThreedotjs, SiVite, SiNextdotjs, SiTailwindcss, 
  SiTypescript, SiCloudinary, SiStripe, SiClerk, SiGsap 
} from 'react-icons/si';

import ambientFlare from '../assets/Ambient.jpg';
import earthProject from '../assets/EarthProject.png';
import yoomProject from '../assets/YoomProject.png';
import AImageProject from '../assets/AImageProject.png';
import phoneProject from '../assets/3DPhoneProject.png';

const TechIconMap: { [key: string]: React.ReactNode } = {
  "React": <SiReact className="w-4 h-4" />,
  "Three.js": <SiThreedotjs className="w-4 h-4" />,
  "Vite": <SiVite className="w-4 h-4" />,
  "Next.js": <SiNextdotjs className="w-4 h-4" />,
  "Tailwind CSS": <SiTailwindcss className="w-4 h-4" />,
  "TypeScript": <SiTypescript className="w-4 h-4" />,
  "Cloudinary": <SiCloudinary className="w-4 h-4" />,
  "Stripe": <SiStripe className="w-4 h-4" />,
  "Clerk": <SiClerk className="w-4 h-4" />,
  "GSAP": <SiGsap className="w-4 h-4" />
};

const projects = [
  {
    title: "3D Solar System Planets",
    description: "Explore the wonders of our solar system with this captivating 3D visualization of the planets using Three.js.",
    tech: ["React", "Three.js", "Vite"],
    image: earthProject,
    github: "https://github.com/MannShah720",
    live: "#"
  },
  {
    title: "Yoom - Video Conferencing App",
    description: "Simplify your video conferencing experience with Yoom. Experience a connect with friends and family.",
    tech: ["Next.js", "Clerk", "Tailwind CSS"],
    image: yoomProject,
    github: "https://github.com/MannShah720",
    live: "#"
  },
  {
    title: "AI Image SaaS - Canva App",
    description: "A Next.js software-as-a-service app with AI features and a payments system using Cloudinary and Stripe.",
    tech: ["Next.js", "Cloudinary", "Stripe", "TypeScript"],
    image: AImageProject,
    github: "https://github.com/MannShah720",
    live: "#"
  },
  {
    title: "Animated Apple iPhone 3D Website",
    description: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D models.",
    tech: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    image: phoneProject,
    github: "https://github.com/MannShah720",
    live: "#"
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
              <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-[#13162d]">
                <img 
                  src={ambientFlare}
                  alt="Ambient Flare"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen filter invert" 
                />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
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
import {useState} from 'react';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, 
  SiFirebase, SiPython, SiJavascript, SiFigma
} from 'react-icons/si';

import UoBLogo from '../assets/UoB.png';
import StDomsLogo from '../assets/StDoms.png';

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  logo: string;
}

interface EducationExperience {
  institution: string;
  degree: string;
  period: string;
  description: string[];
  technologies: string[];
  logo: string;
}

const isWork = (item: WorkExperience | EducationExperience): item is WorkExperience => {
  return (item as WorkExperience).role !== undefined;
};

const skillIcons:{[key:string]:React.ReactNode} = {
  "React": <SiReact className="w-8 h-8 text-sky-400" />,
  "TypeScript": <SiTypescript className="w-8 h-8 text-blue-500" />,
  "Tailwind": <SiTailwindcss className="w-8 h-8 text-teal-400" />,
  "Node.js": <SiNodedotjs className="w-8 h-8 text-green-500" />,
  "Firebase": <SiFirebase className="w-8 h-8 text-amber-500" />,
  "Python": <SiPython className="w-8 h-8 text-yellow-400" />,
  "JavaScript": <SiJavascript className="w-8 h-8 text-yellow-400" />,
  "Figma": <SiFigma className="w-8 h-8 text-pink-500" />
};

const skills = ["React", "JavaScript", "TypeScript", "Tailwind", "Python", "Node.js", "Firebase", "Figma"];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'skills'>('work');

  const workExperiences: WorkExperience[] = [
    {
      company: "Tech Company Name",
      role: "Full-Stack Developer Intern",
      period: "Jun 2024 - Present",
      description: [
        "Engineered scalable UI components using React and Tailwind CSS, improving render times by 15%.",
        "Integrated Firebase authentication and real-time database to manage user sessions."
      ],
      technologies: ["React", "Tailwind CSS", "Firebase", "TypeScript"],
      logo: "/logos/tech-company.png"
    },
    {
      company: "Freelance",
      role: "Web Developer",
      period: "Jan 2024 - May 2024",
      description: [
        "Designed and developed responsive landing pages for local businesses to increase conversion rates.",
        "Optimized web assets for maximum speed, accessibility, and SEO performance."
      ],
      technologies: ["JavaScript", "HTML/CSS", "Figma"],
      logo: "/logos/freelance.png"
    }
  ];

  const educationExperiences: EducationExperience[] = [
    {
      institution: "University of Birmingham",
      degree: "BSc Computer Science",
      period: "Sep 2024 - Present",
      description: [
        "Grade: 1st Class (Year 1)",
        "Modules: Data Structures & Algorithms, Software Engineering, Artificial Intelligence, OOP in Java, Operating Systems, Databases & Web",
        "SWE Group Project: Knowtice - Neighbourhood Social Media Platform"
      ],
      technologies: ["Java", "Springboot", "Angular", "TypeScript", "PostgreSQL"],
      logo: UoBLogo
    },
    {
      institution: "St Dominic's Sixth Form",
      degree: "A-Levels",
      period: "Sep 2022 - Jun 2024",
      description: [
        "Maths (A*), Computer Science (A*), Further Maths (A), Physics (A)",
        "CS Project: Educational Physics Game with PyGame & SQLite Database"
      ],
      technologies: ["Python", "PyGame", "SQLite"],
      logo: StDomsLogo
    }
  ];

  return (
    <section id="experience" className="w-full py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight">
          Experience
      </h2>
      <div className="max-w-3xl w-full border border-white/10 rounded-xl bg-[#0d1117]/40 backdrop-blur-md overflow-hidden shadow-2xl">
        
        {/* Navigation Tabs Bar - Fixed State */}
        <div className="flex w-full border-b border-white/10 bg-[#161b22]">
          {(['work', 'education', 'skills'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-center text-sm font-semibold capitalize ${
                activeTab === tab 
                  ? 'bg-[#21262d] text-white border-b-2 border-indigo-500' 
                  : 'text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content Display */}
        <div className="p-6 md:p-8 bg-[#0a0a0a]/60">
          {activeTab === 'skills' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill}
                  className="flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/10 rounded-xl"
                >
                  {skillIcons[skill] || <div className="w-8 h-8 bg-indigo-500/20 rounded-lg" />}
                  <span className="mt-4 text-xs font-medium text-gray-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 md:pl-10 space-y-10">
              {(activeTab === 'work' ? workExperiences : educationExperiences).map((item, idx) => (
                <div key={idx} className="relative">
                  
                  {/* Circular Timeline Node */}
                  <div className="absolute -left-[53px] md:-left-[61px] top-0 w-10 h-10 rounded-full bg-indigo-500/20 border border-white/20 flex items-center justify-center overflow-hidden shadow-md z-10">
                    <img src={item.logo} alt="Logo" className="w-6 h-6 object-contain" />
                  </div>

                  {/* Header Row */}
                  <div className="flex flex-col mb-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {isWork(item) ? item.company : item.institution}
                      </h3>
                      <span className="text-xs md:text-sm text-gray-500 font-medium whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 font-medium mt-0.5">
                      {isWork(item) ? item.role : item.degree}
                    </p>
                  </div>

                  {/* Description */}
                  <ul className="list-disc pl-4 mt-4 space-y-2.5">
                    {item.description.map((bullet, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed marker:text-gray-600 pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  {item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-[11px] font-medium rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
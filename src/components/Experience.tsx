import { useState } from 'react';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, 
  SiFirebase, SiPython, SiJavascript, SiFigma
} from 'react-icons/si';

// 1. Defined Interfaces
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

// 2. Used to differentiate between Work and Education items
const isWork = (item: WorkExperience | EducationExperience): item is WorkExperience => {
  return (item as WorkExperience).role !== undefined;
};

const skillIcons: { [key: string]: React.ReactNode } = {
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

  // 3. Explicitly typed arrays
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
      logo: "🏢"
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
      logo: "💻"
    }
  ];

  const educationExperiences: EducationExperience[] = [
    {
      institution: "University of Birmingham",
      degree: "BSc Computer Science",
      period: "Sep 2024 - Present",
      description: [
        "Grade: 1st Class (Year 1)",
        "Modules: Data Structures & Algorithms, Software Engineering, Artificial Intelligence, OOP in Java, Operating Systems, Databases & Web"
      ],
      technologies: ["Java", "Python", "Git", "Figma"],
      logo: "🎓"
    },
    {
      institution: "St Dominic's Sixth Form",
      degree: "A-Levels",
      period: "Sep 2022 - Jun 2024",
      description: [
        "Maths (A*), Computer Science (A*), Further Maths (A), Physics (A)",
        "Consistently achieved top percentiles and participated in national coding logic challenges."
      ],
      technologies: ["Mathematics", "Algorithms", "Logic"],
      logo: "🏫"
    }
  ];

  return (
    <section id="experience" className="w-full py-20 px-4 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-tight">
          Experience
        </h2>

        <div className="flex justify-center mb-12">
          <div className="p-1.5 bg-white/5 border border-white/10 rounded-2xl flex gap-1 backdrop-blur-sm">
            {(['work', 'education', 'skills'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-xl font-semibold capitalize transition-all duration-300 ${
                  activeTab === tab 
                  ? 'bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]' 
                  : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'skills' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-in fade-in duration-500">
            {skills.map((skill) => (
              <div 
                key={skill}
                className="flex flex-col items-center justify-center p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-indigo-500/50 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                {skillIcons[skill] || <div className="w-8 h-8 bg-indigo-500/20 rounded-lg" />}
                <span className="mt-4 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative border-l border-white/10 ml-3 md:ml-4 animate-in fade-in duration-500">
            <div className="flex flex-col gap-10">
              {(activeTab === 'work' ? workExperiences : educationExperiences).map((item, idx) => (
                <div key={idx} className="relative pl-8 md:pl-10 group">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-8 ring-4 ring-[#0a0a0a] group-hover:bg-indigo-400 transition-colors duration-200" />
                  <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 shadow-sm">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-500 shadow-inner">
                      {item.logo}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          {isWork(item) ? item.role : item.degree}
                        </h3>
                        <span className="text-sm text-gray-500 font-bold bg-white/5 px-3 py-1 rounded-full border border-white/5 md:whitespace-nowrap w-fit">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-indigo-400 font-bold text-lg mb-6 tracking-wide uppercase text-sm opacity-80">
                        {isWork(item) ? item.company : item.institution}
                      </p>
                      <ul className="space-y-4 mb-6">
                        {item.description.map((bullet, i) => (
                          <li key={i} className="text-gray-400 leading-relaxed text-sm md:text-base flex gap-4">
                            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {item.technologies.map((tech) => (
                          <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
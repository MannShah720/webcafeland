import {useState} from 'react';

const skills = ["React", "TypeScript", "Tailwind", "Node.js", "Firebase", "Python", "Java"];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const workExperiences = [
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

  const educationExperiences = [
    {
      institution: "University in London",
      degree: "BSc Computer Science",
      period: "Sep 2023 - Present",
      description: [
        "Specializing in Software Engineering, UI/UX Design, and Data Structures.",
        "Collaborated in an agile team of 5 to develop a full-stack web application for a university project."
      ],
      technologies: ["Java", "Python", "Git", "Figma"],
      logo: "🎓"
    },
    {
      institution: "Previous College Name",
      degree: "A-Levels",
      period: "Sep 2021 - Jun 2023",
      description: [
        "Studied Mathematics, Further Mathematics, and Computer Science.",
        "Consistently achieved top percentiles and participated in national coding logic challenges."
      ],
      technologies: ["Mathematics", "Algorithms", "Logic"],
      logo: "🏫"
    }
  ];

  const currentData = activeTab === 'work' ? workExperiences : educationExperiences;

  return (
    <section id="experience" className="w-full py-20 px-4 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        
        {/* Centered Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 tracking-tight">
          Experience
        </h2>

        {/* Top-Level Tech Skills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Modern Segmented Control (Tab Switcher) */}
        <div className="flex justify-center mb-16">
          <div className="p-1.5 bg-white/5 border border-white/10 rounded-2xl flex gap-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-10 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'work' 
                ? 'bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-10 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'education' 
                ? 'bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l border-white/10 ml-3 md:ml-4">
          <div className="flex flex-col gap-10">
            {currentData.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                
                {/* Timeline Dot */}
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-8 ring-4 ring-[#0a0a0a] group-hover:bg-indigo-400 transition-colors duration-200" />
                
                {/* Content Card */}
                <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 shadow-sm">
                  
                  {/* Logo Placeholder / Icon */}
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-500 shadow-inner">
                    {item.logo}
                  </div>

                  <div className="flex-grow">
                    {/* Card Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-300">
                        {item.role || item.degree}
                      </h3>
                      <span className="text-sm text-gray-500 font-bold bg-white/5 px-3 py-1 rounded-full border border-white/5 md:whitespace-nowrap w-fit">
                        {item.period}
                      </span>
                    </div>
                    
                    <p className="text-indigo-400 font-bold text-lg mb-6 tracking-wide uppercase text-sm opacity-80">
                      {item.company || item.institution}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-4 mb-6">
                      {item.description.map((bullet, i) => (
                        <li key={i} className="text-gray-400 leading-relaxed text-sm md:text-base flex gap-4">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Contextual Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {item.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                        >
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

      </div>
    </section>
  );
};

export default Experience;
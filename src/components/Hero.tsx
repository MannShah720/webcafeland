const socialLinks = [
    {
      name: "Email",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/MannShah720",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
        </svg>
      )
    }
  ];
  
  const Hero = () => {
    return (
      <section id="about" className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16 py-20 w-full">
        
        {/* Left Column: Text and Buttons */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Hey, I’m <span className="animate-aurora">Mann</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
            CS Undergraduate in London <br />
            UI/UX & Full-Stack Development
          </p>
  
          {/* Social Icons & Resume Button Matrix */}
          <div className="flex items-center flex-wrap justify-center md:justify-start gap-4 mt-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200 shadow-sm"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
  
            {/* Dedicated Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-5 h-12 rounded-xl bg-white/10 border border-white/20 text-gray-200 hover:text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200 shadow-sm font-medium text-sm"
            >
              Resume
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </a>
          </div>
        </div>
  
        {/* Right Column: Profile Image */}
        <div className="relative shrink-0">
          <div className="w-48 h-60 md:w-60 md:h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center shadow-2xl relative z-10 backdrop-blur-sm">
            <span className="text-gray-500 font-medium text-sm">Profile Image</span>
          </div>
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full z-0 -translate-y-4 translate-x-4" />
        </div>
  
      </section>
    );
  };
  
  export default Hero;
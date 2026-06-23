const ContactCTA = () => {
    return (
      <section className="w-full py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let's build something <span className="animate-aurora">remarkable</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            I am currently open to new opportunities and challenging projects. 
            Have a question or just want to connect? My inbox is always open.
          </p>
          
          <a 
            href="mailto:your-email@example.com" 
            className="inline-flex items-center justify-center px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
          >
            Send me an email
          </a>
        </div>
      </section>
    );
  };
  
  export default ContactCTA;
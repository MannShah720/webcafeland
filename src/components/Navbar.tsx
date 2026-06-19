const navLinks = [
    {name: "About", href: "#about"},
    {name: "Experience", href: "#experience"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
  ];
  
  const Navbar = () => {
    return (
      <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-8 px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>
    );
  };
  
  export default Navbar;
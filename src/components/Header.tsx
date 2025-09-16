import { useEffect, useState } from "react";
import { navLinks } from "../lib/data";
import { Menu, X } from "lucide-react"; // for icons

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center mx-auto px-6 md:px-12 lg:px-24 max-w-[1280px] h-20">
        {/* Logo */}
        <a href="#home">
          <div className="flex items-center gap-2 mr-5">
            <div className="w-15">
              <img src="/images/main-logo.png" alt="Main logo" />
            </div>

            <h2 className="flex flex-col font-black">
              <span className="text-blue-700">Remont</span>
              <span className="text-blue-600">Line</span>
            </h2>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block md:w-full md:max-w-[600px]">
          <ul className="flex md:justify-between gap-6 md:gap-0 font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Burger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden top-20 left-0 absolute bg-white/95 shadow-md backdrop-blur-md w-full">
          <ul className="flex flex-col gap-4 p-6 font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="block hover:text-blue-600 transition-colors"
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

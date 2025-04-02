
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="font-bold text-xl flex items-center gap-2" onClick={closeMenu}>
          <span className="bg-primary text-white p-1 rounded">JD</span>
          <span>John Doe</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => `block px-4 py-2 rounded-md ${isActive ? 'bg-muted text-primary font-medium' : 'text-foreground hover:bg-muted'}`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `block px-4 py-2 rounded-md ${isActive ? 'bg-muted text-primary font-medium' : 'text-foreground hover:bg-muted'}`}
              onClick={closeMenu}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `block px-4 py-2 rounded-md ${isActive ? 'bg-muted text-primary font-medium' : 'text-foreground hover:bg-muted'}`}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

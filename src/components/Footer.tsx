
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-bold text-xl flex items-center gap-2">
              <span className="bg-primary text-white p-1 rounded">JD</span>
              <span>John Doe</span>
            </div>
            <p className="mt-2 text-muted-foreground max-w-md">
              Crafting beautiful web experiences with a focus on usability and design.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-medium mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:hello@johndoe.dev"
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

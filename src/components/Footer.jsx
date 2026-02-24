import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Divyanshu Kumar. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/divyanshu7-18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/divyanshu-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:divyanshu07aug@gmail.com"
            className="hover:text-primary transition"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Scroll To Top */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};
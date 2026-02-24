import { ArrowDown } from "lucide-react";
import profileImage from "../assets/profile.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT SIDE — TEXT */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Divyanshu
            </span>{" "}
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              Kumar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
            I’m a Computer Science student passionate about building impactful
            web and AI solutions. From responsive front-end interfaces to deep
            learning models, I focus on delivering technology that is both
            practical and innovative.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — PHOTO */}
        <div className="flex justify-center md:justify-end opacity-0 animate-fade-in-delay-2">
          <div className="relative">
            <img
              src={profileImage}
              alt="Divyanshu Kumar"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary shadow-2xl"
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
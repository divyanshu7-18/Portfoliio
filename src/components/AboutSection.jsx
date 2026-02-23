import { Briefcase, Code, Brain } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Science Student & AI Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Science student at Vellore Institute of Technology
              with a strong interest in building modern web applications and
              intelligent systems. I enjoy transforming ideas into scalable,
              real-world solutions using technology.
            </p>

            <p className="text-muted-foreground">
              From developing AI-powered Indian Sign Language recognition models
              to building full-stack web platforms with React and Firebase,
              I focus on creating solutions that are both practical and impactful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1STAEbuMQYfIfa1zvL1Ggouxm1qnS9LNB/view?usp=sharing"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and scalable web applications using React,
                    JavaScript, Firebase, and modern front-end tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Developing deep learning models using TensorFlow and OpenCV,
                    with hands-on experience in CNNs and real-time gesture recognition.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Strong foundation in Data Structures & Algorithms with a focus
                    on writing efficient, optimized, and clean code.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
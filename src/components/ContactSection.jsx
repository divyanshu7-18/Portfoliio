import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Optional: Reset form
    e.target.reset();
  };

  return (
    <section id="contact" className="py-28 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Contact <span className="text-primary">Me</span>
        </h2>

        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Interested in working together or discussing opportunities? Feel free
          to reach out — I’d love to connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-primary" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:divyanshu07aug@gmail.com"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    divyanshu07aug@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+916200920940"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    +91 6200920940
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-primary" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Patna, Bihar, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-6">
              <a
                href="https://www.linkedin.com/in/divyanshu-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <Linkedin />
              </a>

              <a
                href="https://github.com/divyanshu7-18"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <Github />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-md">
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              <textarea
                required
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
              />

              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={16} />
              </button>

              {isSubmitted && (
                <p className="text-green-500 text-sm text-center mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Award, ExternalLink, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-28 px-4 bg-secondary/20 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-14 text-center"
        >
          My <span className="text-primary">Certifications</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group bg-card/80 backdrop-blur-md p-10 rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Badge Icon */}
            <div className="p-6 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
              <Award className="h-12 w-12 text-primary" />
            </div>

            {/* Certificate Details */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Oracle Cloud Infrastructure 2025  
                Certified Generative AI Professional
              </h3>

              <p className="text-muted-foreground mb-2">
                Issued by Oracle University
              </p>

              <div className="flex items-center justify-center md:justify-start gap-2 text-green-500 text-sm mb-4">
                <CheckCircle size={16} />
                Verified Certification • Valid until July 2027
              </div>

              <a
                href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=040901988013A010E4805A107766127499AB10052CA57EFD47B693BDA548A50C"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300"
              >
                View Official Badge
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
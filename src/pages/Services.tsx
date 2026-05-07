import { motion } from "motion/react";
import PageTransition from "../components/PageTransition";

const Services = () => {
  const services = [
    { 
      id: "01", 
      title: "Strategy", 
      items: ["Brand Positioning", "Market Analysis", "Digital Roadmap", "Campaign Planning"] 
    },
    { 
      id: "02", 
      title: "Design", 
      items: ["Visual Identity", "UI/UX Design", "Product Design", "Editorial & Print"] 
    },
    { 
      id: "03", 
      title: "Technology", 
      items: ["Custom Development", "E-commerce Solutions", "Performance Audit", "Web3 Integration"] 
    },
    { 
      id: "04", 
      title: "Creation", 
      items: ["3D Animation", "Motion Graphics", "Content Production", "Art Direction"] 
    }
  ];

  return (
    <PageTransition>
      <div className="pt-40 px-6 md:px-12 pb-32">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-9xl font-display font-medium uppercase tracking-tighter"
          >
            Services
          </motion.h1>
          <p className="max-w-sm text-lg opacity-60 pb-4">
            We provide outcome-driven solutions that bridge the gap between complex technology and human emotion.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border-t border-noir-white/10 pt-12"
            >
              <span className="text-meta opacity-40 mb-8 block">{service.id}</span>
              <h2 className="text-5xl font-display font-medium uppercase mb-12">{service.title}</h2>
              <ul className="flex flex-wrap gap-x-8 gap-y-4">
                {service.items.map(item => (
                  <li key={item} className="text-lg opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-noir-white/20 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;

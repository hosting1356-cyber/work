import { motion } from "motion/react";
import PageTransition from "../components/PageTransition";

const Work = () => {
  const projects = [
    { title: "L'HORIZON", category: "Branding", type: "Digital Product" },
    { title: "VELOUR", category: "Motion", type: "Visual Identity" },
    { title: "MONOLITH", category: "Architecture", type: "Content Strategy" },
    { title: "AETHER", category: "Interactive", type: "Full Experience" },
    { title: "KAIROS", category: "App Design", type: "Mobile First" },
    { title: "OBSIDIAN", category: "3D Art", type: "Immersive Web" },
  ];

  return (
    <PageTransition>
      <div className="pt-40 px-6 md:px-12 pb-32">
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-9xl font-display font-medium uppercase tracking-tighter"
          >
            Work
          </motion.h1>
          <div className="h-px w-full bg-noir-white/10 mt-12" />
        </header>

        <div className="grid grid-cols-1 gap-px bg-noir-white/5" id="project-list">
          {projects.map((project, i) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row justify-between items-start md:items-end py-12 border-b border-noir-white/10 hover:px-8 transition-all duration-500 ease-in-out hover:bg-noir-white hover:text-noir-black relative overflow-hidden"
            >
              <div className="z-10">
                <span className="text-meta opacity-40 group-hover:opacity-100 mb-4 block">0{i+1} / project</span>
                <h2 className="text-5xl md:text-7xl font-display font-medium uppercase tracking-tight group-hover:italic">{project.title}</h2>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 mt-6 md:mt-0 z-10">
                <span className="text-meta">{project.category}</span>
                <span className="text-sm opacity-40 group-hover:opacity-60">{project.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Work;

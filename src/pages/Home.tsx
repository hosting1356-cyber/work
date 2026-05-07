import { motion } from "motion/react";
import PageTransition from "../components/PageTransition";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <PageTransition>
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-24" id="hero">
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-meta mb-6 block">Creative Digital Studio</span>
            <h1 className="text-huge font-medium tracking-tighter uppercase mb-12">
              Forming <br />
              <span className="italic font-light">Digital</span> <br />
              Excellence.
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
            className="w-full h-px bg-noir-white/20 origin-left mb-12"
          />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="max-w-md text-lg leading-relaxed"
            >
              We partner with forward-thinking brands to craft distinctive digital identities that command attention and deliver results in an ever-evolving landscape.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <button className="w-40 h-40 rounded-full border border-noir-white flex items-center justify-center group hover:bg-noir-white hover:text-noir-black transition-all duration-700">
                <span className="text-meta group-hover:scale-110 transition-transform">Explore Work</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Grid */}
      <section className="py-32 px-6 md:px-12" id="featured-work">
        <div className="flex justify-between items-end mb-16 border-b border-noir-white/10 pb-8">
          <h2 className="text-3xl uppercase font-display tracking-tight">Featured Projects</h2>
          <span className="text-meta opacity-40">Selected Case Studies / 01—03</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-noir-white/10 border border-noir-white/10">
          {[
            { 
              title: "L'HORIZON", 
              category: "Branding / Web Design", 
              img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200&auto=format&fit=crop",
              year: "2024"
            },
            { 
              title: "VELOUR", 
              category: "Motion Graphics", 
              img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
              year: "2023"
            },
            { 
              title: "MONOLITH", 
              category: "Architecture / Identity", 
              img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
              year: "2024"
            },
            { 
              title: "AETHER", 
              category: "Digital Experience", 
              img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1200&auto=format&fit=crop",
              year: "2024"
            }
          ].map((project, i) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] bg-noir-black overflow-hidden cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out grayscale"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-meta">{project.year}</span>
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-display font-medium uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                  <span className="text-meta opacity-60">{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Spelled Out */}
      <section className="py-32 px-6 md:px-12 bg-noir-white text-noir-black overflow-hidden" id="services-preview">
        <marquee className="text-[12rem] font-display font-bold uppercase tracking-tighter opacity-10 whitespace-nowrap -mb-12 select-none">
          Design • Execution • Innovation • Strategy • 
        </marquee>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {[
            { title: "Visual Identity", desc: "Crafting enduring brand languages that resonate and distinguish." },
            { title: "Digital First", desc: "Bespoke web experiences built for the modern era." },
            { title: "Brand Voice", desc: "Defining the unique rhythm and perspective of your narrative." }
          ].map((s, i) => (
            <div key={s.title} className="flex flex-col gap-6">
              <span className="text-meta font-bold">0{i+1}</span>
              <h3 className="text-3xl font-display font-medium uppercase">{s.title}</h3>
              <p className="opacity-70 leading-relaxed font-sans">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;

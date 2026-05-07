import { motion } from "motion/react";
import PageTransition from "../components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div className="pt-40 pb-32">
        <section className="px-6 md:px-12 mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
          >
            <h1 className="text-7xl md:text-9xl font-display font-medium uppercase tracking-tighter shrink-0">
              Forme <br /><span className="italic font-light">Studio</span>
            </h1>
            <div className="max-w-2xl mt-8">
              <p className="text-2xl md:text-4xl leading-tight font-light mb-12">
                We are a distributed collective of designers, thinkers, and makers working at the intersection of minimal aesthetic and profound impact.
              </p>
              <div className="grid grid-cols-2 gap-12 text-sm opacity-60 uppercase tracking-widest leading-loose">
                <div>
                  Founded in 2018 with a vision to distill complexity into clarity. We believe that the best work is often the most reductive.
                </div>
                <div>
                  Based in Europe, operating globally. Our team scale adapts to the unique needs of every collaboration, ensuring peak precision.
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Vision Image */}
        <section className="h-[70vh] w-full overflow-hidden mb-32 grayscale hover:grayscale-0 transition-all duration-1000">
          <img 
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2000&auto=format&fit=crop" 
            alt="Studio Vision"
            className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3000ms]"
          />
        </section>

        {/* Stats */}
        <section className="px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0">
          {[
            { label: "Founded", value: "2018" },
            { label: "Team", value: "12+" },
            { label: "Awards", value: "24" },
            { label: "Clients", value: "80+" }
          ].map((stat, i) => (
            <div key={stat.label} className="md:border-l border-noir-white/10 md:pl-12">
              <span className="text-meta opacity-40 mb-4 block underline underline-offset-8 decoration-noir-white/10">{stat.label}</span>
              <span className="text-5xl md:text-7xl font-display font-bold">{stat.value}</span>
            </div>
          ))}
        </section>
      </div>
    </PageTransition>
  );
};

export default About;

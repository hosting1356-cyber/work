import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-noir-black border-t border-noir-white/10 pt-24 pb-12 px-6 md:px-12" id="main-footer">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-5">
          <h2 className="text-4xl md:text-6xl font-display font-medium leading-none mb-8">
            Let's create something <span className="italic">extraordinary</span> together.
          </h2>
          <Link 
            to="/contact" 
            className="inline-block text-2xl font-display border-b-2 border-noir-white pb-1 group"
          >
            Start a project
            <span className="inline-block transition-transform group-hover:translate-x-2 ml-2">→</span>
          </Link>
        </div>

        <div className="md:col-span-2 md:col-start-8">
          <h3 className="text-meta mb-6">Explore</h3>
          <ul className="flex flex-col gap-4">
            <li><Link to="/work" className="hover:opacity-60 transition-opacity">Work</Link></li>
            <li><Link to="/services" className="hover:opacity-60 transition-opacity">Services</Link></li>
            <li><Link to="/about" className="hover:opacity-60 transition-opacity">About</Link></li>
            <li><Link to="/contact" className="hover:opacity-60 transition-opacity">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-meta mb-6">Offices</h3>
          <ul className="flex flex-col gap-4 text-sm opacity-60">
            <li>Paris, France</li>
            <li>Berlin, Germany</li>
            <li>London, UK</li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-meta mb-6">Social</h3>
          <ul className="flex flex-col gap-4 text-sm opacity-60">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end border-t border-noir-white/5 pt-8">
        <div className="text-[10px] uppercase tracking-widest opacity-30">
          © 2024 Forme Agency. All rights reserved.
        </div>
        <div className="text-[10px] uppercase tracking-widest opacity-30 mt-4 md:mt-0">
          Privacy Policy / Terms of Service
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion, useAnimation } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const HoveringNavbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const controls = useAnimation();

  // ✅ Force reset + animate on every route change
  useEffect(() => {
    controls.set({ y: -80, opacity: 0 }); // Reset first
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    });
  }, [location.pathname, controls]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={controls}
      className={`${
        isHome ? "fixed" : "sticky"
      } top-0 w-full z-50 bg-white/70 dark:bg-black/50 backdrop-blur-md shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Branding */}
        <div className="flex items-center gap-4">
          <motion.img
            src="public/logo.png"
            alt="Logo"
            className="w-10 h-10"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="leading-tight"
          >
            <div className="text-lg font-bold text-primary">Hagerstone</div>
            <div className="text-sm text-muted-foreground">International Pvt. Ltd.</div>
          </motion.div>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex items-center">
          <Link to="/" className="hover:underline text-foreground">Home</Link>
          <Link to="/about" className="hover:underline text-foreground">About</Link>
          <Link to="/projects" className="hover:underline text-foreground">Projects</Link>
          <Link to="/services" className="hover:underline text-foreground">Our Services</Link>
          <Link to="/ideas" className="hover:underline text-foreground">Ideas</Link>
          <Link to="/blog" className="hover:underline text-foreground">Blog</Link>
          <Link to="/contact" className="hover:underline text-foreground">Contact Us</Link>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default HoveringNavbar;

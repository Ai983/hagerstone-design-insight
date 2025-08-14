import { motion, useAnimation } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { isFreedomWeek } from "@/lib/independence";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

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

  const showBadge = isFreedomWeek();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={controls}
      className={`${
        isHome ? "fixed" : "sticky"
      } top-0 w-full z-50 relative overflow-hidden bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-sm`}
    >
      {showBadge && <div aria-hidden className="flag-wave" />}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        {/* Logo & Branding */}
        <div className="flex items-center gap-4">
          <motion.img
            src="/logoo.png"
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
          <Link to="/find-your-style" className="hover:underline text-foreground">Find Your Style</Link>
          <Link to="/contact" className="hover:underline text-foreground">Contact Us</Link>

          {/* Freedom Week badge - preserves space to avoid layout shift */}
          <div className="min-w-[160px] flex items-center justify-end">
            {showBadge ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="inline-flex h-8 items-center gap-2 rounded-full border border-border px-3 text-xs text-foreground bg-white/60 dark:bg-black/40 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md"
                    role="status"
                    aria-label="Independence Day"
                  >
                    <span className="text-base" aria-hidden>🇮🇳</span>
                    <span className="max-[375px]:hidden">79th Independence Day</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  79th Independence Day • 15 Aug 2025
                </TooltipContent>
              </Tooltip>
            ) : (
              <span aria-hidden className="inline-block h-8" />
            )}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default HoveringNavbar;

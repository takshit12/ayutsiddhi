import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Navbar() {
  const [logoText, setLogoText] = useState("AyutSidhhi");
  const logoTexts = ["AyutSidhhi", "आयुत सिद्धि "];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoText((prevText) => 
        prevText === logoTexts[0] ? logoTexts[1] : logoTexts[0]
      );
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-cream/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={logoText}
                className="font-display text-4xl font-semibold text-stone"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                {logoText}
              </motion.span>
            </AnimatePresence>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-stone hover:text-coffee transition-colors">
              Home
            </Link>
            <a href="https://maps.app.goo.gl/pC4zCtNFZ6Fw9UDk9" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-coffee transition-colors">
              Navigation
            </a>
            <Link to="/about" className="text-stone hover:text-coffee transition-colors">
              About
            </Link>
            <Link to="/amenities" className="text-stone hover:text-coffee transition-colors">
              Amenities
            </Link>
            <a href="https://wa.me/9829050150" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-coffee transition-colors">
              Contact
            </a>
            <a href="https://www.airbnb.com/l/3dDulKT8" target="_blank" rel="noopener noreferrer">
              <Button className="bg-sand hover:bg-coffee text-stone transition-colors">
                Book Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

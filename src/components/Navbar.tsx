import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [logoText, setLogoText] = useState("AyutSidhhi");
  const logoTexts = ["AyutSidhhi", "आयुत सिद्धि"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoText((prevText) => 
        prevText === logoTexts[0] ? logoTexts[1] : logoTexts[0]
      );
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-stone p-2">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }} 
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-cream shadow-lg overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-6 p-6">
              <Link to="/" className="text-stone hover:text-coffee transition-colors text-lg" onClick={closeMenu}>
                Home
              </Link>
              <a href="https://maps.app.goo.gl/pC4zCtNFZ6Fw9UDk9" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-coffee transition-colors text-lg" onClick={closeMenu}>
                Navigation
              </a>
              <Link to="/about" className="text-stone hover:text-coffee transition-colors text-lg" onClick={closeMenu}>
                About
              </Link>
              <Link to="/amenities" className="text-stone hover:text-coffee transition-colors text-lg" onClick={closeMenu}>
                Amenities
              </Link>
              <a href="https://wa.me/9829050150" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-coffee transition-colors text-lg" onClick={closeMenu}>
                Contact
              </a>
              <a href="https://www.airbnb.com/l/3dDulKT8" target="_blank" rel="noopener noreferrer" className="w-full" onClick={closeMenu}>
                <Button className="w-full bg-sand hover:bg-coffee text-stone transition-colors py-3 text-lg">
                  Book Now
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-cream/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl text-stone">AyutSiddhi</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-stone hover:text-coffee transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-stone hover:text-coffee transition-colors">
              About
            </Link>
            <Link to="/amenities" className="text-stone hover:text-coffee transition-colors">
              Amenities
            </Link>
            <Link to="/contact" className="text-stone hover:text-coffee transition-colors">
              Contact
            </Link>
            <Button className="bg-sand hover:bg-coffee text-stone transition-colors">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

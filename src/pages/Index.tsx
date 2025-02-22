
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.scroll-reveal').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 image-container scroll-reveal">
              <img 
                src="/lovable-uploads/9d8a58e2-813d-4157-8213-2bfbe5147804.png"
                alt="Luxury Property"
                loading="lazy"
              />
            </div>
            <div className="flex-1 space-y-8 scroll-reveal" style={{transitionDelay: '0.2s'}}>
              <span className="text-coffee uppercase tracking-wider font-medium">Welcome to Luxury</span>
              <h1 className="font-display text-5xl md:text-7xl text-stone leading-tight">
                Explore the Wonders of Ayut Siddhi
              </h1>
              <p className="text-stone/80 text-lg max-w-lg">
                Step into a world of luxury and serenity at Ayut Siddhi. Immerse yourself in the stunning natural surroundings,
                indulge in the exceptional amenities.
              </p>
              <Button className="bg-sand hover:bg-coffee text-stone px-10 py-7 text-lg transition-all duration-300 hover:shadow-xl">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 bg-stone">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-24 scroll-reveal">
            <span className="text-sand uppercase tracking-wider">Exceptional Experiences</span>
            <h2 className="font-display text-5xl text-cream">Unforgettable Moments</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 scroll-reveal">
              <h3 className="font-display text-4xl text-cream">Embrace the Essence</h3>
              <p className="text-cream/90 text-lg">
                Ayut Siddhi is more than just a property; it's a sanctuary of tranquility where you can escape the stresses
                of everyday life and reconnect with the beauty of nature.
              </p>
              <Button variant="outline" className="border-sand text-sand hover:bg-sand hover:text-stone px-8 py-6 text-lg transition-all duration-300">
                Discover More
              </Button>
            </div>
            <div className="flex-1 image-container scroll-reveal" style={{transitionDelay: '0.2s'}}>
              <img 
                src="/lovable-uploads/2bc759a0-d2df-4170-9721-dc43ed596acc.png"
                alt="Luxury Interior"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 image-container scroll-reveal">
              <img 
                src="/lovable-uploads/3b00a6b8-23a0-4443-ac5a-92945337c618.png"
                alt="Luxury Exterior"
                loading="lazy"
              />
            </div>
            <div className="flex-1 space-y-8 scroll-reveal" style={{transitionDelay: '0.2s'}}>
              <h2 className="font-display text-5xl text-stone">Luxury Redefined</h2>
              <p className="text-stone/80 text-lg">
                Ayut Siddhi is where luxury meets tranquility. Nestled amidst the serene landscapes of Bassi,
                this property offers an unparalleled experience, blending modern comforts with the natural beauty of the region.
              </p>
              <Button className="bg-sand hover:bg-coffee text-stone px-8 py-6 text-lg transition-all duration-300 hover:shadow-xl">
                Explore Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-stone">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-10 scroll-reveal">
            <h2 className="font-display text-5xl md:text-6xl text-cream">Elevate Your Stay</h2>
            <p className="text-cream/90 text-lg">
              At Ayut Siddhi, we believe that every moment should be extraordinary. Indulge in our world-class amenities,
              explore the stunning natural surroundings, and create memories that will last a lifetime.
            </p>
            <Button className="bg-sand hover:bg-coffee text-stone px-10 py-7 text-lg transition-all duration-300 hover:shadow-xl">
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

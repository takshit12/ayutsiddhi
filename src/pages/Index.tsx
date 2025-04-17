import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextRotate, TextRotateRef } from "@/components/TextRotate";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { ImageModal } from "@/components/ui/image-modal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";

const Index = () => {
  const textRotateRef = useRef<TextRotateRef>(null);
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

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
    <div className="min-h-screen bg-[#faf7f2] overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2] via-transparent to-[#faf7f2] opacity-90" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32"
          >
            <div className="flex-1 space-y-12 scroll-reveal order-2 lg:order-1 text-center lg:text-left">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[#8B7355] uppercase tracking-wider font-medium text-lg inline-block"
              >
                Your Home Away From Home
              </motion.span>
              <TextRotate
                ref={textRotateRef}
                texts={[
                  "Escape the City",
                  "Find Your Peace",
                  "Connect with Nature",
                  "Create Memories"
                ]}
                mainClassName="font-display text-5xl sm:text-6xl lg:text-8xl text-[#2C1810] leading-tight text-center lg:text-left"
                splitLevelClassName="overflow-hidden"
                staggerDuration={0.02}
                rotationInterval={3000}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
              />
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-[#5C4434]/80 text-xl max-w-2xl mx-auto lg:mx-0"
              >
                Welcome to Ayut Sidhhi, your serene escape nestled in nature. Experience the warmth of a homestay, 
                the charm of farm life, and the peace of being away from the city bustle.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <a href="https://www.airbnb.com/l/3dDulKT8" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#8B7355] hover:bg-[#5C4434] text-white px-12 py-8 text-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    Book Now
                  </Button>
                </a>
              </motion.div>
            </div>

            <div className="flex-[1.4] grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 order-1 lg:order-2 scroll-reveal">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="col-span-1 aspect-[3/4]"
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-[2rem] overflow-hidden shadow-2xl h-full cursor-pointer bg-white p-2"
                  onClick={() => setSelectedImage({ url: "/ayutsiddhi-uploads/IMG_2054 2.png", alt: "Luxury View" })}
                >
                  <img 
                    src="/ayutsiddhi-uploads/IMG_2054 2.png"
                    alt="Luxury View"
                    width="4032"
                    height="3024"
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="col-span-1 aspect-[3/4] mt-20"
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-[2rem] overflow-hidden shadow-2xl h-full cursor-pointer bg-white p-2"
                  onClick={() => setSelectedImage({ url: "/ayutsiddhi-uploads/IMG_2023 2.png", alt: "Luxury Interior" })}
                >
                  <img 
                    src="/ayutsiddhi-uploads/IMG_2023 2.png"
                    alt="Luxury Interior"
                    width="4032"
                    height="3024"
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="col-span-1 aspect-[3/4] hidden md:block"
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-[2rem] overflow-hidden shadow-2xl h-full cursor-pointer bg-white p-2"
                  onClick={() => setSelectedImage({ url: "/ayutsiddhi-uploads/IMG_1997 2.png", alt: "Luxury Exterior" })}
                >
                  <img 
                    src="/ayutsiddhi-uploads/IMG_1997 2.png"
                    alt="Luxury Exterior"
                    width="4032"
                    height="3024"
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 bg-[#2C1810] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810] via-[#2C1810]/95 to-[#2C1810] opacity-90" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8 scroll-reveal text-center md:text-left"
            >
              <HandWrittenTitle 
                title="Natural Serenity" 
                subtitle="Your Perfect Getaway"
                isDarkBg={true}
              />
              <p className="text-[#D4C4B5]/90 text-lg max-w-lg mx-auto md:mx-0">
                Ayut Sidhhi is more than just a stay; it's your home in nature where every morning brings fresh air,
                every evening offers stunning sunsets, and every moment feels like a gentle escape from city life.
              </p>
              <a href="https://www.airbnb.com/l/3dDulKT8" target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
                <Button className="bg-[#8B7355] hover:bg-[#5C4434] text-white px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  Plan Your Escape
                </Button>
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-2/5 aspect-[3/4] scroll-reveal"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl h-full transform hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => setSelectedImage({ url: "/ayutsiddhi-uploads/IMG_2023 2.png", alt: "Luxury Interior" })}
              >
                <img 
                  src="/ayutsiddhi-uploads/IMG_2023 2.png"
                  alt="Luxury Interior"
                  loading="lazy"
                  width="4032"
                  height="3024"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Luxury Section */}
      <section className="py-32 relative overflow-hidden bg-[#faf7f2]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2] via-transparent to-[#faf7f2] opacity-90" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-2/5 aspect-[3/4] scroll-reveal order-2 md:order-1"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl h-full transform hover:scale-105 transition-transform duration-500 cursor-pointer bg-white p-2"
                onClick={() => setSelectedImage({ url: "/ayutsiddhi-uploads/IMG_1997 2.png", alt: "Luxury Exterior" })}
              >
                <img 
                  src="/ayutsiddhi-uploads/IMG_1997 2.png"
                  alt="Luxury Exterior"
                  loading="lazy"
                  width="4032"
                  height="3024"
                  className="w-full h-full object-cover rounded-[1.5rem]"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8 scroll-reveal order-1 md:order-2 text-center md:text-left"
            >
              <HandWrittenTitle 
                title="Farm Life Awaits" 
                subtitle="Where Nature Meets Comfort"
              />
              <p className="text-[#5C4434]/80 text-lg max-w-lg mx-auto md:mx-0">
                Nestled in the peaceful landscapes of Bassi, our farmhouse offers a perfect blend of rustic charm 
                and modern comfort. Experience the joy of countryside living with all the comforts of home.
              </p>
              <a href="https://www.airbnb.com/l/3dDulKT8" target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
                <Button className="bg-[#8B7355] hover:bg-[#5C4434] text-white px-8 py-6 text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  Book Your Stay
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-[#2C1810] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810] via-[#2C1810]/95 to-[#2C1810] opacity-90" />
        <div className="container mx-auto px-4 relative">
          <HandWrittenTitle 
            title="Our Gallery" 
            subtitle="Glimpses of Serenity"
            isDarkBg={true}
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="scroll-reveal"
          >
            <Carousel 
              className="w-full max-w-6xl mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage({ url: "/ayutsiddhi-uploads/IMG_1754 2.png", alt: "Luxury View" })}
                  >
                    <img 
                      src="/ayutsiddhi-uploads/IMG_1754 2.png"
                      alt="Luxury View"
                      className="object-cover w-full h-full transition-transform duration-500"
                    />
                  </motion.div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage({ url: "/ayutsiddhi-uploads/IMG_1756 2.png", alt: "Luxury View" })}
                  >
                    <img 
                      src="/ayutsiddhi-uploads/IMG_1756 2.png"
                      alt="Luxury View"
                      className="object-cover w-full h-full transition-transform duration-500"
                    />
                  </motion.div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage({ url: "/ayutsiddhi-uploads/IMG_1760 2.png", alt: "Luxury View" })}
                  >
                    <img 
                      src="/ayutsiddhi-uploads/IMG_1760 2.png"
                      alt="Luxury View"
                      className="object-cover w-full h-full transition-transform duration-500"
                    />
                  </motion.div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage({ url: "/ayutsiddhi-uploads/IMG_2013 2.png", alt: "Luxury View" })}
                  >
                    <img 
                      src="/ayutsiddhi-uploads/IMG_2013 2.png"
                      alt="Luxury View"
                      className="object-cover w-full h-full transition-transform duration-500"
                    />
                  </motion.div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage({ url: "/ayutsiddhi-uploads/IMG_2043 2.png", alt: "Luxury View" })}
                  >
                    <img 
                      src="/ayutsiddhi-uploads/IMG_2043 2.png"
                      alt="Luxury View"
                      className="object-cover w-full h-full transition-transform duration-500"
                    />
                  </motion.div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage({ url: "/ayutsiddhi-uploads/IMG_2052 2.png", alt: "Luxury View" })}
                  >
                    <img 
                      src="/ayutsiddhi-uploads/IMG_2052 2.png"
                      alt="Luxury View"
                      className="object-cover w-full h-full transition-transform duration-500"
                    />
                  </motion.div>
                </CarouselItem>
              </CarouselContent>
              <div className="mt-8 flex justify-center gap-4">
                <CarouselPrevious className="static transform-none bg-[#D4C4B5] hover:bg-[#8B7355] text-[#2C1810]" />
                <CarouselNext className="static transform-none bg-[#D4C4B5] hover:bg-[#8B7355] text-[#2C1810]" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-[#faf7f2] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2] via-transparent to-[#faf7f2] opacity-90" />
        <div className="container mx-auto px-4 relative">
          <HandWrittenTitle 
            title="Your Perfect Escape" 
            subtitle="Make Yourself at Home"
            size="large"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-10 scroll-reveal text-center"
          >
            <p className="text-[#5C4434]/80 text-lg">
              At Ayut Sidhhi, we believe in the simple pleasures of life. Wake up to birdsong, spend your days exploring 
              the farm, enjoy home-cooked meals, and end your evenings under star-filled skies.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="mt-10"
            >
              <a href="https://www.airbnb.com/l/3dDulKT8" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#8B7355] hover:bg-[#5C4434] text-white px-10 py-7 text-lg transition-all duration-300 hover:shadow-xl">
                  Reserve Now
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ImageModal
        isOpen={!!selectedImage}
        imageUrl={selectedImage?.url || ""}
        altText={selectedImage?.alt || ""}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Index;

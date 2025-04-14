import { useEffect } from "react";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { motion } from "motion/react";

const About = () => {
  useEffect(() => {
    // Scroll-reveal observer logic (same as Index.tsx)
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

  // Array of image sources and alt text for interspersing
  const galleryImages = [
    { src: "/ayutsiddhi-uploads/IMG_1997 2.png", alt: "Ayut Sidhhi Exterior View" },
    { src: "/ayutsiddhi-uploads/IMG_2023 2.png", alt: "Ayut Sidhhi Villa Interior" },
    { src: "/ayutsiddhi-uploads/IMG_2054 2.png", alt: "Ayut Sidhhi Hill View" },
    { src: "/ayutsiddhi-uploads/IMG_1754 2.png", alt: "Ayut Sidhhi Yagya Shala" },
  ];

  return (
    <div className="bg-[#faf7f2] pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"> 
      <section className="relative">
        <div className="container mx-auto px-4 relative">
          <div className="mb-16 md:mb-24">
            <HandWrittenTitle 
              title="Our Philosophy"
              subtitle="Your Sanctuary in Bassi"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            {/* Paragraph 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="scroll-reveal text-center md:text-left"
            >
              <p className="text-[#5C4434]/90 text-lg leading-relaxed">
                Welcome to Aayut Siddhi Farm House. We chose this name carefully, drawing inspiration from the ancient Indian Vaisheshika philosophy. "Aayut Siddhi" speaks to the profound idea of union – how individual elements come together not just to coexist, but to create something new and harmonious. For us, it symbolizes the way love, laughter, and shared moments weave together to make a house a true home. We wanted to build a sanctuary that embodies this principle, a place where diverse elements merge beautifully.
              </p>
            </motion.div>

            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full aspect-[16/10] md:aspect-[16/7] scroll-reveal"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-xl h-full bg-white p-2">
                <img src={galleryImages[0].src} alt={galleryImages[0].alt} loading="lazy" className="w-full h-full object-cover rounded-[1.5rem]" />
              </div>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="scroll-reveal text-center md:text-left"
            >
              <p className="text-[#5C4434]/90 text-lg leading-relaxed">
                You'll find us nestled in the quietude of Shyampura village, conveniently located just 400 meters off the Delhi-Agra Highway and an easy half-hour to hour's drive from the heart of Jaipur. Despite the accessibility, you'll feel a world away, embraced by the tranquil Rajasthani landscape near the Aravalli foothills. Here, our elegant French Villa provides spacious comfort for families, featuring well-appointed rooms and bay windows overlooking charming lawns. The separate Outhouse offers a more private retreat with stunning hill views, perfect for watching the sunrise.
              </p>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full aspect-[16/10] md:aspect-[16/7] scroll-reveal"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-xl h-full bg-white p-2">
                <img src={galleryImages[1].src} alt={galleryImages[1].alt} loading="lazy" className="w-full h-full object-cover rounded-[1.5rem]" />
              </div>
            </motion.div>

            {/* Paragraph 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="scroll-reveal text-center md:text-left"
            >
              <p className="text-[#5C4434]/90 text-lg leading-relaxed">
                At Aayut Siddhi, we believe luxury and nature should enhance each other. Modern amenities like our fully equipped kitchens (both indoor and open-air), the hanging bell dining area, and the indulgent wellness space with its Jacuzzi, sauna, and steam bath, exist side-by-side with timeless traditions. You can experience the serenity of the Yagya Shala, find peace near the entrance temple, or taste the freshness of milk and chach sourced directly from neighbouring farms. Our backyard garden even offers seasonal vegetables, truly connecting you to the land.
              </p>
            </motion.div>
            
            {/* Image 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full aspect-[16/10] md:aspect-[16/7] scroll-reveal"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-xl h-full bg-white p-2">
                <img src={galleryImages[2].src} alt={galleryImages[2].alt} loading="lazy" className="w-full h-full object-cover rounded-[1.5rem]" />
              </div>
            </motion.div>

            {/* Paragraph 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="scroll-reveal text-center md:text-left"
            >
              <p className="text-[#5C4434]/90 text-lg leading-relaxed">
                We envision Aayut Siddhi as more than just accommodation; it's a canvas for your experience. We invite you to immerse yourself in village life with guided tours in our jeep, connect with local farmers, or perhaps savor traditional SriAnna cuisine. For those seeking deeper engagement, we offer optional interactions with our unique resident hosts – from seasoned yogis to knowledgeable professionals and passionate storytellers. Or simply relax – enjoy badminton or cricket, try traditional archery, swing gently under the porch, or find quiet contemplation on the elevated machan. We are pet-friendly and provide secure parking with driver accommodation. Our goal is for your stay to be your own 'Aayut Siddhi' – a harmonious blend of relaxation, discovery, and connection, leaving you refreshed and inspired. We look forward to welcoming you.
              </p>
            </motion.div>

             {/* Image 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full aspect-[16/10] md:aspect-[16/7] scroll-reveal"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-xl h-full bg-white p-2">
                <img src={galleryImages[3].src} alt={galleryImages[3].alt} loading="lazy" className="w-full h-full object-cover rounded-[1.5rem]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 
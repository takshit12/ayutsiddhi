import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { motion } from "motion/react";

const Amenities = () => {
  return (
    <div className="bg-[#faf7f2] pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex flex-col items-center justify-center">
      {/* Content Section */}
      <section className="relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HandWrittenTitle 
              title="Amenities" 
              subtitle="Coming Soon..."
            />
            <p className="text-[#5C4434]/80 text-lg mt-[-4rem] md:mt-[-6rem]">
              We're currently preparing this section. Check back soon for details about our amenities!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Amenities; 
import { motion } from "framer-motion";
import network1 from "@/assets/network-1.jpg";
import network2 from "@/assets/network-2.jpg";
import network3 from "@/assets/network-3.jpg";
import network4 from "@/assets/network-4.jpg";
import network5 from "@/assets/network-5.jpg";
import network6 from "@/assets/network-6.jpg";

const images = [
  { src: network1, alt: "Modern commercial architecture" },
  { src: network2, alt: "Property keys and real estate documentation" },
  { src: network3, alt: "Contemporary residential property" },
  { src: network4, alt: "Luxury interior living space" },
  { src: network5, alt: "International residential real estate" },
  { src: network6, alt: "Classic property exterior" },
];

const InsideNetworkSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            The World We Operate In
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Inside The Network
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            International markets. Professional environments. The spaces where our operators build.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative overflow-hidden rounded-lg ${
                i === 0 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/20 hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsideNetworkSection;

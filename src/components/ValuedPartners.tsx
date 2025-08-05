import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const ValuedPartners = () => {
  const partners = [
    {
      name: "Monin",
      color: "#FF6B35", // Orange
      bgColor: "rgba(255, 107, 53, 0.1)",
    },
    {
      name: "APL Logistics", 
      color: "#E31837", // Red
      bgColor: "rgba(227, 24, 55, 0.1)",
    },
    {
      name: "Singapore Airlines",
      color: "#003087", // Blue
      bgColor: "rgba(0, 48, 135, 0.1)",
    },
    {
      name: "AECOM",
      color: "#00A651", // Green
      bgColor: "rgba(0, 166, 81, 0.1)",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-gold mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Valued Partners
          </motion.h2>
          <motion.p
            className="text-xl text-white/90"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by industry leaders worldwide
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card 
                className="p-8 text-center hover:shadow-luxury transition-all duration-300 hover:scale-105 bg-white/10 border-white/20 backdrop-blur-sm"
                style={{ backgroundColor: partner.bgColor }}
              >
                <h3 
                  className="text-2xl font-bold"
                  style={{ color: partner.color }}
                >
                  {partner.name}
                </h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuedPartners;
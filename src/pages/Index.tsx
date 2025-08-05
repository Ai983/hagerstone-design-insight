import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import VideoBackground from "@/components/VideoBackground";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import {
  Building2,
  Users,
  Award,
  Star,
  ArrowRight,
  Palette,
  Building,
  Zap,
  CheckCircle,
  Briefcase,
  Ruler,
  Projector,
  Globe
} from "lucide-react";

const Index = () => {

  const services = [
    {
      icon: Palette,
      title: "Interior Designing",
      description: "Transform spaces with innovative design solutions"
    },
    {
      icon: Building,
      title: "Construction",
      description: "Complete construction with premium quality"
    },
    {
      icon: Zap,
      title: "MEP Services",
      description: "Mechanical, Electrical & Plumbing expertise"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Ltd.",
      content: "Hagerstone transformed our office space beautifully. The attention to detail and professionalism exceeded our expectations.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Fashion Retail Chain",
      content: "Outstanding work on our showroom design. The team understood our vision and delivered exactly what we wanted.",
      rating: 5
    }
  ];

  const heroText = "Hagerstone".split("");

  return (
    <div className="min-h-screen bg-background">

      <motion.nav
        className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/50 backdrop-blur-md shadow-sm"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.img
              src="/logo.png"
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
          <div className="space-x-6 hidden md:flex">
            <Link to="/" className="hover:underline text-primary">Home</Link>
            <Link to="/projects" className="hover:underline text-primary">Projects</Link>
            <Link to="/services" className="hover:underline text-primary">Services</Link>
            <Link to="/contact" className="hover:underline text-primary">Contact</Link>
          </div>
        </div>
      </motion.nav>




      {/* Hero Section with Video Background */}
      <section className="relative text-white min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/Office Interior.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Animated Heading */}
        <div className="relative z-20 text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-4 flex justify-center flex-wrap gap-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            {heroText.map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-white drop-shadow-md"
                style={{ color: i % 2 === 0 ? '#d5b179' : '#fff' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl text-white/90 font-light mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            International Pvt. Ltd.
          </motion.h2>

          <motion.p
            className="text-lg md:text-2xl max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
            Transforming spaces into extraordinary experiences with 11+ years of design excellence.
=======
            Transforming spaces into extraordinary experiences with 11+ years of design excellence
>>>>>>> aa5837d (changes made in navbar)
=======
            Transforming spaces into extraordinary experiences with 11+ years of design excellence.
>>>>>>> 84be6fd (made changes in expertise)
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <Button
              asChild
              size="lg"
              className="cursor-hover bg-gold text-gold-foreground hover:bg-gold/90 shadow-luxury hover:scale-105 transition-all duration-300"
            >
              <Link to="/projects">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="cursor-hover border-white text-black bg-white hover:bg-primary hover:text-white shadow-luxury hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-muted/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              <span className="text-blue-600 dark:text-yellow-400">Making an Impact:</span> The Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[ 
              { icon: Briefcase, value: 11, suffix: "+ YEARS", label: "Experience of In Industry" },
              { icon: Ruler, value: 7, suffix: " MILLION+ SQFT", label: "Designed & Delivered" },
              { icon: Projector, value: 250, suffix: "+ PROJECTS", label: "Combined Projects Delivery By Our Leadership Team" },
              { icon: Users, value: 350, suffix: "+ MANPOWER", label: "Expert & general workforce across India" },
              { icon: Building2, value: 15, suffix: "+ CITIES", label: "Across the India" },
              { icon: Globe, value: 7, suffix: "+ COUNTRIES", label: "For Global Clients" },
            ].map(({ icon: Icon, value, suffix, label }, index) => {
              const { ref, inView } = useInView({ triggerOnce: true });
              return (
                <div
                  key={index}
                  ref={ref}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center transition hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-10 w-10 text-primary dark:text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {inView && <CountUp start={0} end={value} duration={2} suffix={` ${suffix}`} />}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      {/* Services Preview */}
         <section className="py-20 px-6 md:px-16 text-center bg-background">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Expertise
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Comprehensive solutions for all your interior design needs
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-muted rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <service.icon className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
  

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in">Featured Projects</h2>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Showcase of our exceptional design work
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Corporate Office",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
                category: "Office"
              },
              {
                title: "Luxury Residential Villa",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
                category: "Residential"
              },
              {
                title: "Boutique Hotel Design",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
                category: "Hospitality"
              }
            ].map((project, index) => (
              <Card 
                key={project.title}
                className="group bg-gradient-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm bg-accent px-2 py-1 rounded">{project.category}</span>
                    <h3 className="text-lg font-bold mt-2">{project.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="hover:bg-muted hover:scale-105 transition-all duration-300"
            >
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground animate-slide-up">
              What our clients say about working with us
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="bg-gradient-card border-0 shadow-luxury animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic text-lg">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">Why Choose Hagerstone?</h2>
            <p className="text-xl text-primary-foreground/90 animate-slide-up">
              Excellence in every project, innovation in every design
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "16+ Years of Excellence",
              "500+ Satisfied Clients", 
              "Fortune 500 Experience",
              "Turnkey Solutions"
            ].map((benefit, index) => (
              <div 
                key={benefit}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
            Let's create something extraordinary together
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-accent text-gold-foreground hover:scale-105 transition-all duration-300 shadow-luxury animate-scale-in"
          >
            <Link to="/contact">Start Your Project Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

hgvhvvkohhjn 

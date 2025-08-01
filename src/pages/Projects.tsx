import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Home, Hotel, Factory, Store, MapPin, Calendar } from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", icon: Building },
    { name: "Office", icon: Building },
    { name: "Residential", icon: Home },
    { name: "Hotels", icon: Hotel },
    { name: "Factories", icon: Factory },
    { name: "Commercial", icon: Store },
  ];

  const projects = [
    {
      id: 1,
      title: "Corporate Headquarters - Tech Solutions",
      category: "Office",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      location: "Mumbai, Maharashtra",
      year: "2024",
      description: "Modern workspace design with collaborative areas",
      tags: ["Modern", "Collaborative", "Tech-forward"]
    },
    {
      id: 2,
      title: "Luxury Villa - Residential Complex",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      location: "Delhi, NCR",
      year: "2024",
      description: "Elegant residential design with premium finishes",
      tags: ["Luxury", "Elegant", "Premium"]
    },
    {
      id: 3,
      title: "Boutique Hotel - Hospitality Design",
      category: "Hotels",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      location: "Goa",
      year: "2023",
      description: "Contemporary hotel design with coastal influences",
      tags: ["Contemporary", "Coastal", "Hospitality"]
    },
    {
      id: 4,
      title: "Manufacturing Facility - Industrial Design",
      category: "Factories",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      location: "Pune, Maharashtra",
      year: "2023",
      description: "Efficient factory layout with safety-first approach",
      tags: ["Industrial", "Efficient", "Safety-focused"]
    },
    {
      id: 5,
      title: "Retail Showroom - Fashion Brand",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      location: "Bangalore, Karnataka",
      year: "2024",
      description: "Trendy retail space with dynamic display areas",
      tags: ["Retail", "Trendy", "Dynamic"]
    },
    {
      id: 6,
      title: "Executive Office Suite",
      category: "Office",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
      location: "Chennai, Tamil Nadu",
      year: "2023",
      description: "Sophisticated executive workspace with premium amenities",
      tags: ["Executive", "Sophisticated", "Premium"]
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Explore our portfolio of exceptional interior design projects across various sectors
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.name}
                  variant={activeCategory === category.name ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center space-x-2 px-6 py-3 transition-all duration-300 hover:scale-105 animate-scale-in ${
                    activeCategory === category.name 
                      ? "bg-primary text-primary-foreground shadow-luxury" 
                      : "hover:bg-muted"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
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
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="text-xs bg-muted hover:bg-accent transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 animate-slide-up">
            Let's create something extraordinary together
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-luxury hover:scale-105 transition-all duration-300 animate-scale-in"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
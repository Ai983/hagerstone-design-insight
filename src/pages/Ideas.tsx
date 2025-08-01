import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2 } from "lucide-react";

const Ideas = () => {
  const [selectedRoom, setSelectedRoom] = useState("All");
  const [selectedStyle, setSelectedStyle] = useState("All");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const roomTypes = [
    "All", "Meeting Rooms", "Conference Rooms", "Quiet Rooms", 
    "Green Rooms", "Cabins", "Reception", "Workstations"
  ];

  const interiorStyles = [
    "All", "Minimalistic", "Industrial", "Scandinavian", 
    "Japandi", "Modern", "Luxury", "Classic"
  ];

  const ideas = [
    {
      id: 1,
      title: "Modern Executive Cabin",
      room: "Cabins",
      style: "Modern",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      description: "Sleek executive workspace with clean lines and premium finishes"
    },
    {
      id: 2,
      title: "Minimalist Meeting Room",
      room: "Meeting Rooms",
      style: "Minimalistic",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      description: "Clean, distraction-free environment for focused discussions"
    },
    {
      id: 3,
      title: "Industrial Conference Space",
      room: "Conference Rooms",
      style: "Industrial",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
      description: "Raw materials and exposed elements for creative brainstorming"
    },
    {
      id: 4,
      title: "Scandinavian Workstation",
      room: "Workstations",
      style: "Scandinavian",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      description: "Light wood and neutral tones for productive work environment"
    },
    {
      id: 5,
      title: "Luxury Reception Area",
      room: "Reception",
      style: "Luxury",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      description: "Impressive entrance with premium materials and elegant design"
    },
    {
      id: 6,
      title: "Japandi Quiet Room",
      room: "Quiet Rooms",
      style: "Japandi",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      description: "Zen-inspired space combining Japanese and Scandinavian aesthetics"
    },
    {
      id: 7,
      title: "Classic Conference Room",
      room: "Conference Rooms",
      style: "Classic",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop",
      description: "Timeless elegance with traditional wood and leather accents"
    },
    {
      id: 8,
      title: "Green Meeting Space",
      room: "Green Rooms",
      style: "Modern",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      description: "Biophilic design with natural elements and living walls"
    }
  ];

  const filteredIdeas = ideas.filter(idea => {
    const roomMatch = selectedRoom === "All" || idea.room === selectedRoom;
    const styleMatch = selectedStyle === "All" || idea.style === selectedStyle;
    return roomMatch && styleMatch;
  });

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Design Ideas
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Discover inspiring interior design concepts for your next project
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-muted/30 sticky top-20 z-30 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Room Type Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-primary mb-3">Room Type</h3>
            <div className="flex flex-wrap gap-2">
              {roomTypes.map((room) => (
                <Button
                  key={room}
                  variant={selectedRoom === room ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRoom(room)}
                  className={`transition-all duration-300 hover:scale-105 ${
                    selectedRoom === room 
                      ? "bg-primary text-primary-foreground shadow-luxury" 
                      : "hover:bg-muted"
                  }`}
                >
                  {room}
                </Button>
              ))}
            </div>
          </div>

          {/* Style Filter */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Interior Style</h3>
            <div className="flex flex-wrap gap-2">
              {interiorStyles.map((style) => (
                <Button
                  key={style}
                  variant={selectedStyle === style ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStyle(style)}
                  className={`transition-all duration-300 hover:scale-105 ${
                    selectedStyle === style 
                      ? "bg-accent text-accent-foreground shadow-luxury" 
                      : "hover:bg-muted"
                  }`}
                >
                  {style}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideas Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredIdeas.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredIdeas.map((idea, index) => (
                <Card 
                  key={idea.id}
                  className="group bg-gradient-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={idea.image}
                      alt={idea.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
                        onClick={() => toggleFavorite(idea.id)}
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            favorites.has(idea.id) 
                              ? "fill-red-500 text-red-500" 
                              : "text-muted-foreground"
                          }`} 
                        />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
                      >
                        <Share2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>

                    {/* Style Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground">
                        {idea.style}
                      </Badge>
                    </div>

                    {/* Room Type Badge */}
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {idea.room}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1">
                      {idea.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {idea.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-primary mb-4">No Ideas Found</h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your filters to see more design ideas
              </p>
              <Button 
                onClick={() => {
                  setSelectedRoom("All");
                  setSelectedStyle("All");
                }}
                className="bg-primary hover:bg-primary/90"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Inspired by What You See?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 animate-slide-up">
            Let our expert designers bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-luxury hover:scale-105 transition-all duration-300 animate-scale-in"
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-luxury hover:scale-105 transition-all duration-300 animate-scale-in"
            >
              View Our Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ideas;
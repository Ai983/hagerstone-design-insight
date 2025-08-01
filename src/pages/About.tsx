import { Building2, Users, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Building2, label: "Square Feet Completed", value: "7M+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Years of Excellence", value: "16+" },
    { icon: Calendar, label: "Projects Delivered", value: "1000+" },
  ];

  const team = [
    {
      name: "Dhruv Agarwal",
      role: "Founder",
      image: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face`,
    },
    {
      name: "Bhaskar Tyagi",
      role: "Director",
      image: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Hagerstone
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Transforming spaces, creating experiences, and building dreams for over 16 years
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-scale-in">
                  <stat.icon className="h-8 w-8 text-gold-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="prose prose-lg text-foreground space-y-6">
                <p>
                  <strong>Hagerstone International</strong> is one of India's leading interior design and build companies, 
                  specializing in creating innovative and functional spaces for commercial, residential, and retail projects.
                </p>
                <p>
                  Founded by <strong>Dhruv Agarwal</strong> and led by Director <strong>Bhaskar Tyagi</strong>, 
                  the company has earned a reputation for excellence in delivering high-quality, turnkey interior 
                  solutions across India.
                </p>
                <p>
                  With over <strong>16 years of experience</strong>, Hagerstone International has successfully 
                  completed more than <strong>7 million square feet</strong> of space, working with over 
                  <strong> 500 prestigious clients</strong>, including Fortune 500 companies and renowned global brands.
                </p>
                <p>
                  The company is known for its <strong>meticulous attention to detail</strong>, 
                  <strong> unmatched craftsmanship</strong>, and commitment to turning design concepts into reality.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                alt="Modern office space"
                className="rounded-2xl shadow-luxury w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in">Leadership Team</h2>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Meet the visionaries behind Hagerstone's success
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="bg-gradient-card border-0 shadow-luxury hover:shadow-hover transition-all duration-500 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-lg text-gold font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">
                    {member.role === "Founder" 
                      ? "Visionary leader with a passion for innovative design and exceptional client service."
                      : "Strategic director driving operational excellence and business growth."
                    }
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in">Our Values</h2>
            <p className="text-xl text-muted-foreground animate-slide-up">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for perfection in every project, ensuring the highest quality standards."
              },
              {
                title: "Innovation",
                description: "We embrace cutting-edge design trends and technologies to create unique spaces."
              },
              {
                title: "Integrity",
                description: "We build lasting relationships through transparency, honesty, and reliability."
              }
            ].map((value, index) => (
              <Card 
                key={value.title}
                className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-500 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
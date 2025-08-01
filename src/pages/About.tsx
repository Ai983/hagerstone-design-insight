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
      role: "Founder & CEO",
      image: `/lovable-uploads/edd078f8-1df5-4f8f-95b3-ba955860347b.png`,
      bio: "Visionary leader with over 16 years of experience in transforming commercial and residential spaces. Dhruv's passion for innovative design and exceptional client service has positioned Hagerstone as a leading name in interior architecture."
    },
    {
      name: "Bhaskar Tyagi",
      role: "Director",
      image: `/lovable-uploads/caef2106-d964-405b-b54a-aaea2bb48c18.png`,
      bio: "Strategic director driving operational excellence and business growth. With extensive experience in project management and client relations, Bhaskar ensures every project delivers beyond expectations."
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
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-1 bg-gradient-accent rounded-full"></div>
                <h2 className="text-5xl font-bold text-primary mb-8 leading-tight">
                  Our Story
                  <span className="block text-2xl font-normal text-accent mt-2">Crafting Dreams Since 2008</span>
                </h2>
              </div>
              
              <div className="prose prose-lg text-foreground space-y-8">
                <div className="relative bg-gradient-card p-6 rounded-xl border-l-4 border-accent shadow-card">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-primary">Hagerstone International</strong> stands as one of India's premier interior design and build companies, 
                    pioneering innovative and functional spaces across commercial, residential, and retail sectors.
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Founded by visionary entrepreneur <strong className="text-primary">Dhruv Agarwal</strong> and strategically led by Director <strong className="text-primary">Bhaskar Tyagi</strong>, 
                  our company has cultivated an unparalleled reputation for excellence in delivering sophisticated, turnkey interior 
                  solutions throughout India and beyond.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="text-center p-4 bg-gradient-card rounded-xl shadow-card">
                    <div className="text-3xl font-bold text-primary mb-2">16+</div>
                    <div className="text-sm text-accent font-medium">Years of Excellence</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-card rounded-xl shadow-card">
                    <div className="text-3xl font-bold text-primary mb-2">7M+</div>
                    <div className="text-sm text-accent font-medium">Sq.Ft. Completed</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-card rounded-xl shadow-card">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-accent font-medium">Prestigious Clients</div>
                  </div>
                </div>
                
                <blockquote className="relative bg-gradient-hero text-primary-foreground p-6 rounded-xl italic text-lg">
                  <div className="absolute -top-2 -left-2 text-6xl text-gold opacity-50">"</div>
                  Our commitment extends beyond mere aesthetics—we create environments that inspire, 
                  enhance productivity, and reflect the unique identity of every client.
                  <div className="absolute -bottom-4 -right-2 text-6xl text-gold opacity-50 rotate-180">"</div>
                </blockquote>
                
                <p className="text-lg leading-relaxed">
                  Distinguished by our <strong className="text-accent">meticulous attention to detail</strong>, 
                  <strong className="text-accent"> unmatched craftsmanship</strong>, and unwavering commitment to innovation, 
                  Hagerstone International has successfully partnered with Fortune 500 companies and globally recognized brands, 
                  transforming design concepts into extraordinary realities.
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
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-accent rounded-full opacity-20"></div>
                <h2 className="text-4xl font-bold text-primary mb-6 relative z-10">Our Mission</h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                To revolutionize interior design by creating spaces that seamlessly blend functionality, 
                aesthetics, and sustainability. We are committed to exceeding client expectations through 
                innovative solutions, superior craftsmanship, and personalized service that transforms 
                visions into extraordinary realities.
              </p>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-hero rounded-full opacity-20"></div>
                <h2 className="text-4xl font-bold text-primary mb-6 relative z-10">Our Vision</h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                To be the most trusted and innovative interior design partner globally, setting new standards 
                in design excellence while creating environments that inspire, enhance productivity, and 
                positively impact the lives of everyone who experiences our spaces.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 animate-fade-in">Our Core Values</h2>
            <p className="text-xl text-muted-foreground animate-slide-up">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We pursue perfection in every detail, ensuring the highest quality standards in design, materials, and execution. Our commitment to excellence drives continuous improvement and innovation.",
                icon: "🏆"
              },
              {
                title: "Innovation",
                description: "We embrace cutting-edge design trends, sustainable technologies, and creative solutions to deliver unique spaces that anticipate and exceed modern lifestyle and business needs.",
                icon: "💡"
              },
              {
                title: "Integrity",
                description: "We build lasting relationships through unwavering transparency, honest communication, and reliable delivery. Trust is the foundation of every partnership we forge.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <Card 
                key={value.title}
                className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-500 hover:scale-105 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
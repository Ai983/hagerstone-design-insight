import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-12 max-w-7xl mx-auto">
      {/* Company Overview */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold text-primary mb-6">About Us</h1>
        <p className="text-lg text-foreground mb-4">
          Hagerstone International is a leading design and build firm specializing in architecture, interiors, construction and factories. With 11+ years of experience, 7M+ sq. ft. completed, and 250+ projects across 15+ cities, we craft world-class commercial, corporate, and luxury spaces.
        </p>
        <p className="text-lg text-foreground mb-4">
          Our 350+ professionals ensure seamless execution, integrating cutting-edge design, sustainability, and innovation. From offices to retail and hospitality, we create functional, inspiring, and future-ready environments.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-primary mb-4">Our Vision</h2>
        <p className="text-foreground mb-6">
          Our vision for the next 10 years is to become India’s No. 1 technology-enabled design and build firm across all sectors. We aim to be the first preference for clients when it comes to technology-driven design and build projects.
        </p>
        <h2 className="text-4xl font-semibold text-primary mb-4">Our Mission</h2>
        <p className="text-foreground">
          Our mission is to empower our team, our people, and the entire Hagerstone International family in such a manner that we create at least 30 millionaires inside the Hagerstone family over the next 10 years. We want Hagerstone International family teams and staff to be stakeholders in the company, to have ESOPs, so that they also grow with the entire company. Our mission is to bring happiness to each of our team members’ lives and their families’ lives, and this mission drives us to keep on growing and to keep on improving every day.
        </p>
      </section>
      

      {/* Leadership */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-primary mb-8">Our Leaders</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-gradient-card border-0 shadow-luxury p-6">
            <CardContent>
              <h3 className="text-2xl font-bold text-primary mb-2">Dhruv Agarwal</h3>
              <p className="text-foreground mb-4">
                Founder & Managing Director, Civil Engineer from Delhi College of Engineering. With over 10 million sq ft of projects delivered across UAE, Myanmar, and India, Dhruv established Hagerstone to provide seamless, end-to-end design and build services blending creativity with functionality.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-0 shadow-luxury p-6">
            <CardContent>
              <h3 className="text-2xl font-bold text-primary mb-2">Bhaskar Tyagi</h3>
              <p className="text-foreground mb-4">
                Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Safety Checklist */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-primary mb-8">Prioritizing Safety Always and Everywhere</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-foreground">
          {[
            "Hard Hats",
            "Safety Glasses or Goggles",
            "High-Visibility Clothing",
            "Steel-Toed Reflective Vests or Safety",
            "High-Visibility Clothing",
            "Ear Protection",
            "Comprehensive System & Checklist Ensuring Excellence with 79+ Quality Checkpoints",
            "Protective Gloves",
            "First Aid Kits",
            "Safety Signs and Labels",
            "Scaffolding and Ladders",
            "Protective Clothing"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center space-x-3">
              <span className="text-gold font-bold">{idx + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Client Testimonials */}
      <section>
        <h2 className="text-4xl font-semibold text-primary mb-8">What Our Clients Say About Us</h2>
        <div className="space-y-8 text-foreground">
          {[
            "Throughout the project, Hagerstone International demonstrated remarkable project management skills. They kept us informed every step of the way, adhered to timelines, and stayed within budget. Their commitment to quality and client satisfaction is truly commendable.",
            "Your team managed the project professionally, delivering exceptional quality. Completing the entire building construction within 60 days was impressive and satisfying. Your quick response time consistently enabled us to make informed decisions efficiently throughout the process.",
            "We loved your team’s positivity and professionalism. Before working with Hagerstone, we never imagined office interiors could be done so smoothly. The project was hassle-free, completed with top-notch quality, and delivered within our 45-day timeline. Truly impressive!",
            "We are satisfied with the office delivered, meeting our requirements with satisfactory quality. The project was completed within the timeline, and we look forward to collaborating with Hagerstone International on future projects. Best wishes for their endeavors.",
            "We faced a unique gym lounge design challenge, and this firm exceeded expectations. They understood our vision, incorporated ideas beautifully, and ensured flawless execution. The result is a stunning, functional space perfect for our needs. Highly recommended!",
            "We hired Hagerstone International to design and build our new office space interiors. Their expertise and experience truly stand out. We are extremely satisfied with their work and look forward to working with them again in the future."
          ].map((testimonial, idx) => (
            <blockquote key={idx} className="border-l-4 border-gold pl-4 italic">
              {testimonial}
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;


import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "I was skeptical about AI-optimized resumes, but JobGenie helped me reframe my experience in a way that caught recruiters' attention. I landed three interviews in my first week!"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "The cover letter generator saved me hours of work. It captured my voice perfectly and helped me customize applications quickly. I'm now at my dream company thanks to JobGenie."
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Financial Analyst",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "The mock interview feature was a game-changer. It helped me identify weakness in my responses and the AI feedback was surprisingly insightful. I felt much more confident in real interviews."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Hear from job seekers who transformed their job search with JobGenie.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-secondary rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-border"
            >
              <div className="flex mb-4 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

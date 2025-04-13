
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseBusiness, FileUp, Lightbulb, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Features />
        
        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Our streamlined process helps you optimize your job search from start to finish
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <FileUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Resume</h3>
                <p className="text-muted-foreground">
                  Upload your existing resume or create a new one from scratch with our templates
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Optimized</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes and optimizes your resume for specific job descriptions
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Cover Letter</h3>
                <p className="text-muted-foreground">
                  Generate personalized cover letters tailored to each job application
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <BriefcaseBusiness className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Apply with Confidence</h3>
                <p className="text-muted-foreground">
                  Submit applications with tailored documents and prepare for interviews
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button className="flex items-center gap-2" asChild>
                <Link to="/resume-optimizer">
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Job Search?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of job seekers who've found their dream jobs with JobGenie's AI-powered tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/signup">Sign Up Free</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/job-search">Browse Jobs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

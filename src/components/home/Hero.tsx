
import { Link } from "react-router-dom";
import { ArrowRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-background pt-24 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Find Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Perfect</span> Job with AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              JobGenie uses advanced AI to optimize your resume, create personalized cover letters, and prepare you for interviews - all to help you land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex items-center gap-2" asChild>
                <Link to="/resume-optimizer">
                  <Upload size={18} />
                  Upload Resume
                </Link>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link to="/job-search">
                  Start Job Search
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-8 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Person using laptop for job search"
                  className="rounded-lg shadow-2xl object-cover w-full aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

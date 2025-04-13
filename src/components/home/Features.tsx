
import { 
  Search, FileText, FileEdit, Video, MessageSquare, 
  Award, Languages, Volume2
} from "lucide-react";

const features = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Smart Job Search",
    description: "AI-powered job matching that finds opportunities aligned with your skills and experience."
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Resume Optimization",
    description: "Get instant feedback and suggestions to improve your resume for specific job applications."
  },
  {
    icon: <FileEdit className="h-8 w-8" />,
    title: "Cover Letter Generator",
    description: "Create customized cover letters in seconds using our AI, tailored to each job application."
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Interview Preparation",
    description: "Practice with mock interviews and receive real-time feedback to improve your performance."
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Career Guidance",
    description: "Get personalized advice on certifications, skills, and career paths from our AI career advisor."
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Skill Assessment",
    description: "Identify skill gaps and get recommendations for improvement to boost your employability."
  },
  {
    icon: <Languages className="h-8 w-8" />,
    title: "Language Support",
    description: "Access JobGenie in multiple languages to support job seekers around the world."
  },
  {
    icon: <Volume2 className="h-8 w-8" />,
    title: "Accessibility Features",
    description: "Inclusive design with screen reader support and other accessibility options."
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How JobGenie Helps You</h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered platform offers everything you need to find, apply for, and land your dream job.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

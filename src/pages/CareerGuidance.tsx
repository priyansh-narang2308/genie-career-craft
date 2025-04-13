
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIChat from "@/components/ui/AIChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  LineChart, 
  BarChart3, 
  Award, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

const CareerGuidance = () => {
  const [activeTab, setActiveTab] = useState("chat");

  const skillData = [
    { name: "JavaScript", level: 85, category: "Technical" },
    { name: "React.js", level: 80, category: "Technical" },
    { name: "CSS/SASS", level: 75, category: "Technical" },
    { name: "Node.js", level: 65, category: "Technical" },
    { name: "TypeScript", level: 60, category: "Technical" },
    { name: "Communication", level: 90, category: "Soft" },
    { name: "Problem Solving", level: 85, category: "Soft" },
    { name: "Collaboration", level: 80, category: "Soft" },
    { name: "Time Management", level: 70, category: "Soft" },
    { name: "Leadership", level: 65, category: "Soft" }
  ];

  const recommendedCourses = [
    {
      title: "Advanced React Patterns",
      provider: "Frontend Masters",
      level: "Intermediate",
      duration: "6 hours",
      link: "#",
      relevance: "High",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      title: "TypeScript for React Developers",
      provider: "Udemy",
      level: "Intermediate",
      duration: "10 hours",
      link: "#",
      relevance: "High",
      image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      title: "Node.js API Masterclass",
      provider: "Coursera",
      level: "Advanced",
      duration: "24 hours",
      link: "#",
      relevance: "Medium",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      title: "Leadership in Tech Teams",
      provider: "LinkedIn Learning",
      level: "Intermediate",
      duration: "4 hours",
      link: "#",
      relevance: "Medium",
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const certificates = [
    {
      name: "AWS Certified Developer",
      organization: "Amazon Web Services",
      value: "High",
      effort: "High",
      description: "Validates technical expertise in developing and maintaining applications on AWS."
    },
    {
      name: "Professional Scrum Master",
      organization: "Scrum.org",
      value: "Medium",
      effort: "Medium",
      description: "Demonstrates knowledge of Scrum framework and ability to apply it in real-world scenarios."
    },
    {
      name: "Google Analytics Certification",
      organization: "Google",
      value: "Medium",
      effort: "Low",
      description: "Shows proficiency in using Google Analytics to derive insights from website data."
    },
    {
      name: "React Developer Certification",
      organization: "Meta",
      value: "High",
      effort: "Medium",
      description: "Validates comprehensive knowledge of React concepts, patterns, and best practices."
    }
  ];

  const careerPaths = [
    {
      title: "Frontend Architect",
      description: "Lead frontend architecture decisions, implement design systems, and establish best practices for development teams.",
      skills: ["Advanced JavaScript", "React/Vue/Angular", "Performance Optimization", "Architecture Patterns"],
      salary: "$130K - $180K",
      growth: "High",
      timeframe: "3-5 years"
    },
    {
      title: "Full Stack Developer",
      description: "Develop both client and server-side applications, manage databases, and implement full application features.",
      skills: ["Frontend Technologies", "Backend (Node.js/Python/Java)", "Databases", "API Design"],
      salary: "$110K - $150K",
      growth: "High",
      timeframe: "1-3 years"
    },
    {
      title: "DevOps Engineer",
      description: "Implement CI/CD pipelines, manage infrastructure, and ensure reliability and scalability of applications.",
      skills: ["Cloud Services", "Containerization", "Automation", "Infrastructure as Code"],
      salary: "$120K - $170K",
      growth: "Very High",
      timeframe: "2-4 years"
    }
  ];

  const jobMarketInsights = [
    {
      skill: "React.js",
      demand: 95,
      supplyDemandRatio: "High Demand / Low Supply",
      trend: "Increasing",
      avgSalary: "$120K"
    },
    {
      skill: "TypeScript",
      demand: 90,
      supplyDemandRatio: "High Demand / Medium Supply",
      trend: "Rapidly Increasing",
      avgSalary: "$125K"
    },
    {
      skill: "Node.js",
      demand: 85,
      supplyDemandRatio: "High Demand / Medium Supply",
      trend: "Stable",
      avgSalary: "$115K"
    },
    {
      skill: "AWS",
      demand: 92,
      supplyDemandRatio: "Very High Demand / Medium Supply",
      trend: "Increasing",
      avgSalary: "$130K"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Career Guidance</h1>
            <p className="text-muted-foreground">
              Get personalized insights, recommendations, and advice to advance your career
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - AI Chat and Navigation */}
            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Career Assistant</h2>
                    <p className="text-sm text-muted-foreground">
                      Chat with our AI career advisor for personalized guidance
                    </p>
                  </div>
                  
                  <div className="h-[500px]">
                    <AIChat
                      initialMessage="Hello! I'm your AI career advisor. How can I help with your career planning today? You can ask about skill development, career paths, or job market trends."
                      placeholder="Ask about career advice, skills, or job market trends..."
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                  
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setActiveTab("skills")}
                    >
                      <LineChart className="mr-2 h-5 w-5" />
                      Skill Assessment
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setActiveTab("courses")}
                    >
                      <BookOpen className="mr-2 h-5 w-5" />
                      Learning Recommendations
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setActiveTab("certifications")}
                    >
                      <Award className="mr-2 h-5 w-5" />
                      Certifications
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setActiveTab("paths")}
                    >
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Career Paths
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setActiveTab("market")}
                    >
                      <BarChart3 className="mr-2 h-5 w-5" />
                      Job Market Insights
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardContent className="p-6">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
                    <TabsList className="mb-6 grid grid-cols-5 w-full">
                      <TabsTrigger value="skills">Skills</TabsTrigger>
                      <TabsTrigger value="courses">Courses</TabsTrigger>
                      <TabsTrigger value="certifications">Certifications</TabsTrigger>
                      <TabsTrigger value="paths">Career Paths</TabsTrigger>
                      <TabsTrigger value="market">Job Market</TabsTrigger>
                    </TabsList>
                    
                    {/* Skills Assessment */}
                    <TabsContent value="skills" className="mt-0 space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-2">Your Skill Assessment</h2>
                        <p className="text-muted-foreground mb-6">
                          Based on your resume and job search history, here's an assessment of your current skills
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-lg font-medium mb-4">Technical Skills</h3>
                            <div className="space-y-4">
                              {skillData
                                .filter(skill => skill.category === "Technical")
                                .map(skill => (
                                  <div key={skill.name} className="space-y-1">
                                    <div className="flex justify-between items-center">
                                      <span>{skill.name}</span>
                                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <Progress value={skill.level} className="h-2" />
                                  </div>
                                ))}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-4">Soft Skills</h3>
                            <div className="space-y-4">
                              {skillData
                                .filter(skill => skill.category === "Soft")
                                .map(skill => (
                                  <div key={skill.name} className="space-y-1">
                                    <div className="flex justify-between items-center">
                                      <span>{skill.name}</span>
                                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <Progress value={skill.level} className="h-2" />
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                          <h3 className="text-lg font-medium mb-2">Skill Gap Analysis</h3>
                          <p className="mb-4">Based on your target role as Frontend Developer, here are the key skill gaps:</p>
                          
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <div className="w-4 h-4 rounded-full bg-amber-500 mt-1 mr-2"></div>
                              <div>
                                <p className="font-medium">TypeScript</p>
                                <p className="text-sm text-muted-foreground">Intermediate knowledge suggested, currently at basic level</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-4 h-4 rounded-full bg-amber-500 mt-1 mr-2"></div>
                              <div>
                                <p className="font-medium">Testing (Jest, RTL)</p>
                                <p className="text-sm text-muted-foreground">Intermediate knowledge suggested, currently limited experience</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-4 h-4 rounded-full bg-red-500 mt-1 mr-2"></div>
                              <div>
                                <p className="font-medium">State Management (Redux)</p>
                                <p className="text-sm text-muted-foreground">Advanced knowledge suggested, currently basic understanding</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    {/* Learning Recommendations */}
                    <TabsContent value="courses" className="mt-0 space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-2">Recommended Courses</h2>
                        <p className="text-muted-foreground mb-6">
                          These courses are tailored to your skill gaps and career goals
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {recommendedCourses.map((course, index) => (
                            <div 
                              key={index} 
                              className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                            >
                              <div className="flex p-4">
                                <div className="w-16 h-16 rounded overflow-hidden mr-4 flex-shrink-0">
                                  <img 
                                    src={course.image} 
                                    alt={course.title} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <h3 className="font-medium mb-1">{course.title}</h3>
                                  <p className="text-sm text-muted-foreground mb-2">by {course.provider}</p>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">{course.level}</Badge>
                                    <Badge variant="outline">{course.duration}</Badge>
                                    <Badge variant="secondary">{course.relevance} Relevance</Badge>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-secondary p-3 flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">4.8/5 (976 reviews)</span>
                                <Button variant="default" size="sm" asChild>
                                  <a href={course.link}>View Course</a>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                          <h3 className="text-lg font-medium mb-2">Learning Path: Frontend Developer</h3>
                          <p className="mb-4 text-sm text-muted-foreground">
                            A structured learning path to advance your frontend development career
                          </p>
                          
                          <div className="space-y-4">
                            <div className="flex items-start">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="font-semibold">1</span>
                              </div>
                              <div>
                                <p className="font-medium">Master JavaScript Fundamentals</p>
                                <p className="text-sm text-muted-foreground mb-1">Focus on ES6+, asynchronous programming, and functional patterns</p>
                                <Badge variant="outline" className="mr-2">8 weeks</Badge>
                                <Badge variant="secondary">Foundation</Badge>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="font-semibold">2</span>
                              </div>
                              <div>
                                <p className="font-medium">Advanced React Techniques</p>
                                <p className="text-sm text-muted-foreground mb-1">Hooks, context, performance optimization, and design patterns</p>
                                <Badge variant="outline" className="mr-2">10 weeks</Badge>
                                <Badge variant="secondary">Intermediate</Badge>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="font-semibold">3</span>
                              </div>
                              <div>
                                <p className="font-medium">TypeScript for React Applications</p>
                                <p className="text-sm text-muted-foreground mb-1">Type systems, interfaces, generics, and React integration</p>
                                <Badge variant="outline" className="mr-2">6 weeks</Badge>
                                <Badge variant="secondary">Intermediate</Badge>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="font-semibold">4</span>
                              </div>
                              <div>
                                <p className="font-medium">State Management and Architecture</p>
                                <p className="text-sm text-muted-foreground mb-1">Redux, MobX, Zustand, and architectural patterns</p>
                                <Badge variant="outline" className="mr-2">8 weeks</Badge>
                                <Badge variant="secondary">Advanced</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    {/* Certifications */}
                    <TabsContent value="certifications" className="mt-0 space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-2">Recommended Certifications</h2>
                        <p className="text-muted-foreground mb-6">
                          Industry-recognized certifications that can boost your career prospects
                        </p>
                        
                        <div className="space-y-6">
                          {certificates.map((cert, index) => (
                            <div 
                              key={index} 
                              className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow"
                            >
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <h3 className="font-medium text-lg">{cert.name}</h3>
                                  <p className="text-muted-foreground">{cert.organization}</p>
                                </div>
                                <div className="flex gap-2">
                                  <Badge variant={cert.value === "High" ? "default" : "secondary"}>
                                    {cert.value} Value
                                  </Badge>
                                  <Badge variant="outline">
                                    {cert.effort} Effort
                                  </Badge>
                                </div>
                              </div>
                              
                              <p className="mb-4">{cert.description}</p>
                              
                              <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                  <Badge variant="outline">6 months validity</Badge>
                                  <Badge variant="outline">Online exam</Badge>
                                </div>
                                <Button variant="outline" size="sm" className="flex items-center">
                                  Learn More
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                          <h3 className="text-lg font-medium mb-2 flex items-center">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                            Certification Benefits
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-secondary/50 p-3 rounded-md">
                              <h4 className="font-medium mb-1">Salary Impact</h4>
                              <p className="text-sm">
                                Professionals with relevant certifications earn 15-20% higher salaries on average
                              </p>
                            </div>
                            <div className="bg-secondary/50 p-3 rounded-md">
                              <h4 className="font-medium mb-1">Employer Recognition</h4>
                              <p className="text-sm">
                                78% of employers prefer candidates with industry certifications
                              </p>
                            </div>
                            <div className="bg-secondary/50 p-3 rounded-md">
                              <h4 className="font-medium mb-1">Career Advancement</h4>
                              <p className="text-sm">
                                Certified professionals are 35% more likely to be promoted
                              </p>
                            </div>
                            <div className="bg-secondary/50 p-3 rounded-md">
                              <h4 className="font-medium mb-1">Job Search Advantage</h4>
                              <p className="text-sm">
                                Resume with certifications receives 40% more interview invitations
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    {/* Career Paths */}
                    <TabsContent value="paths" className="mt-0 space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-2">Potential Career Paths</h2>
                        <p className="text-muted-foreground mb-6">
                          Based on your skills and experience, here are potential career paths to consider
                        </p>
                        
                        <div className="space-y-6">
                          {careerPaths.map((path, index) => (
                            <Card key={index}>
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                  <div>
                                    <h3 className="font-semibold text-lg">{path.title}</h3>
                                    <div className="flex gap-2 mt-1">
                                      <Badge>{path.salary}</Badge>
                                      <Badge variant="outline">{path.growth} Growth</Badge>
                                      <Badge variant="secondary">{path.timeframe}</Badge>
                                    </div>
                                  </div>
                                  <Button variant="outline" size="sm">View Details</Button>
                                </div>
                                
                                <p className="mb-4">{path.description}</p>
                                
                                <div>
                                  <h4 className="text-sm font-medium mb-2">Required Skills:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {path.skills.map((skill, i) => (
                                      <Badge key={i} variant="secondary">{skill}</Badge>
                                    ))}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        
                        <Card className="mt-8">
                          <CardContent className="p-6">
                            <h3 className="text-lg font-medium mb-4">Career Progression Timeline</h3>
                            
                            <div className="relative">
                              <div className="absolute left-4 top-0 bottom-0 w-px bg-border"></div>
                              
                              <div className="space-y-8 relative">
                                <div className="relative pl-12">
                                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                    <span className="text-primary-foreground font-medium">1</span>
                                  </div>
                                  <div>
                                    <h4 className="font-medium">Frontend Developer</h4>
                                    <p className="text-sm text-muted-foreground">Current Position</p>
                                    <p className="text-sm mt-1">
                                      Build and maintain responsive web applications using JavaScript frameworks
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="relative pl-12">
                                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                    <span className="text-secondary-foreground font-medium">2</span>
                                  </div>
                                  <div>
                                    <h4 className="font-medium">Senior Frontend Developer</h4>
                                    <p className="text-sm text-muted-foreground">1-2 Years</p>
                                    <p className="text-sm mt-1">
                                      Lead development of complex features and mentor junior developers
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="relative pl-12">
                                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                    <span className="text-secondary-foreground font-medium">3</span>
                                  </div>
                                  <div>
                                    <h4 className="font-medium">Frontend Tech Lead / Architect</h4>
                                    <p className="text-sm text-muted-foreground">3-5 Years</p>
                                    <p className="text-sm mt-1">
                                      Define architecture, establish best practices, and lead multiple teams
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="relative pl-12">
                                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                    <span className="text-secondary-foreground font-medium">4</span>
                                  </div>
                                  <div>
                                    <h4 className="font-medium">Engineering Manager / Director</h4>
                                    <p className="text-sm text-muted-foreground">5+ Years</p>
                                    <p className="text-sm mt-1">
                                      Manage engineering teams, drive technical strategy, and oversee delivery
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    
                    {/* Job Market Insights */}
                    <TabsContent value="market" className="mt-0 space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-2">Job Market Insights</h2>
                        <p className="text-muted-foreground mb-6">
                          Current trends and demands for your skills in the job market
                        </p>
                        
                        <Card className="mb-6">
                          <CardContent className="p-6">
                            <h3 className="text-lg font-medium mb-4">Skill Demand Analysis</h3>
                            
                            <div className="space-y-6">
                              {jobMarketInsights.map((insight, index) => (
                                <div key={index}>
                                  <div className="flex justify-between items-center mb-1">
                                    <div className="flex items-center">
                                      <span className="font-medium">{insight.skill}</span>
                                      <Badge variant="outline" className="ml-2">{insight.trend}</Badge>
                                    </div>
                                    <span className="text-sm">{insight.avgSalary}</span>
                                  </div>
                                  <Progress value={insight.demand} className="h-2 mb-1" />
                                  <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>{insight.supplyDemandRatio}</span>
                                    <span>{insight.demand}% demand</span>
                                  </div>
                                  {index < jobMarketInsights.length - 1 && <Separator className="mt-4" />}
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card>
                            <CardContent className="p-6">
                              <h3 className="text-lg font-medium mb-4">Industry Growth</h3>
                              
                              <div className="space-y-4">
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span>Tech</span>
                                    <span className="text-sm text-muted-foreground">+15%</span>
                                  </div>
                                  <Progress value={85} className="h-2" />
                                </div>
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span>Healthcare</span>
                                    <span className="text-sm text-muted-foreground">+12%</span>
                                  </div>
                                  <Progress value={78} className="h-2" />
                                </div>
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span>Fintech</span>
                                    <span className="text-sm text-muted-foreground">+18%</span>
                                  </div>
                                  <Progress value={92} className="h-2" />
                                </div>
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span>E-commerce</span>
                                    <span className="text-sm text-muted-foreground">+10%</span>
                                  </div>
                                  <Progress value={65} className="h-2" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardContent className="p-6">
                              <h3 className="text-lg font-medium mb-4">Regional Opportunities</h3>
                              
                              <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                                  <div>
                                    <p className="font-medium">San Francisco</p>
                                    <p className="text-sm text-muted-foreground">Average Salary: $145K</p>
                                  </div>
                                  <Badge>High</Badge>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                                  <div>
                                    <p className="font-medium">New York</p>
                                    <p className="text-sm text-muted-foreground">Average Salary: $140K</p>
                                  </div>
                                  <Badge>High</Badge>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                                  <div>
                                    <p className="font-medium">Austin</p>
                                    <p className="text-sm text-muted-foreground">Average Salary: $125K</p>
                                  </div>
                                  <Badge>Very High</Badge>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                                  <div>
                                    <p className="font-medium">Remote</p>
                                    <p className="text-sm text-muted-foreground">Average Salary: $130K</p>
                                  </div>
                                  <Badge>Very High</Badge>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <Card className="mt-6">
                          <CardContent className="p-6">
                            <h3 className="text-lg font-medium mb-4 flex items-center">
                              <Briefcase className="mr-2 h-5 w-5 text-primary" />
                              Job Posting Trends
                            </h3>
                            
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <p>Frontend Developer jobs are up <span className="font-medium text-green-500">18%</span> from last year</p>
                                <Badge variant="outline">Trending Up</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <p>Remote opportunities increased by <span className="font-medium text-green-500">25%</span></p>
                                <Badge variant="outline">Trending Up</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <p>Companies requiring TypeScript skills increased by <span className="font-medium text-green-500">32%</span></p>
                                <Badge variant="outline">Hot Skill</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <p>Average interview process takes <span className="font-medium">3.2 weeks</span></p>
                                <Badge variant="outline">Stable</Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareerGuidance;


import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AlertCircle, 
  Check, 
  FileText, 
  Upload, 
  Download, 
  Wand2, 
  AlertTriangle 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const ResumeOptimizer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const fileType = selectedFile.type;
      
      if (fileType === "application/pdf" || 
          fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
          fileType === "application/msword") {
        setFile(selectedFile);
        toast({
          title: "File uploaded successfully",
          description: `${selectedFile.name} has been uploaded.`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Invalid file type",
          description: "Please upload a PDF or Word document.",
        });
      }
    }
  };

  const handleAnalyze = () => {
    if (!file) {
      toast({
        variant: "destructive",
        title: "No resume uploaded",
        description: "Please upload your resume before analyzing.",
      });
      return;
    }

    if (!jobDescription.trim()) {
      toast({
        variant: "destructive",
        title: "Job description required",
        description: "Please enter a job description to compare with your resume.",
      });
      return;
    }

    setIsAnalyzing(true);
    setProgress(0);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setAnalysisComplete(true);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  const handleDownload = () => {
    toast({
      title: "Downloading optimized resume",
      description: "Your optimized resume is being downloaded.",
    });
    // In a real app, this would trigger a download of the optimized resume
  };

  const mockAnalysisResults = {
    score: 72,
    keywordMatch: 68,
    missingKeywords: ["TypeScript", "CI/CD", "Agile methodology", "AWS"],
    skillGaps: ["Docker", "Kubernetes", "GraphQL"],
    suggestions: [
      {
        section: "Professional Experience",
        original: "Developed web applications using React",
        suggested: "Engineered scalable web applications using React.js, resulting in 40% faster load times and improved user engagement metrics"
      },
      {
        section: "Skills",
        original: "JavaScript, React, CSS",
        suggested: "JavaScript, React.js, CSS3, Redux, REST APIs, Node.js"
      },
      {
        section: "Professional Summary",
        original: "Web developer with 3 years of experience",
        suggested: "Results-driven Frontend Developer with 3+ years of experience building responsive and performant web applications with React.js and modern JavaScript frameworks"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Resume Optimizer</h1>
            <p className="text-muted-foreground">
              Upload your resume and get AI-powered suggestions to make it stand out for specific job descriptions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Upload and Input */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Resume Upload */}
                    <div>
                      <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <FileText className="mr-2 h-5 w-5" />
                        Upload Resume
                      </h2>
                      
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <input
                          type="file"
                          id="resume-upload"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                        />
                        <label
                          htmlFor="resume-upload"
                          className="cursor-pointer flex flex-col items-center justify-center"
                        >
                          <Upload className="h-10 w-10 text-muted-foreground mb-3" />
                          <p className="text-muted-foreground mb-2">
                            Drag & drop your resume here or click to browse
                          </p>
                          <p className="text-xs text-muted-foreground mb-4">
                            Supports PDF, DOC, DOCX (Max 5MB)
                          </p>
                          <Button variant="outline" size="sm">
                            Select File
                          </Button>
                        </label>
                        
                        {file && (
                          <div className="mt-4 bg-secondary/50 rounded-md p-3 flex items-center justify-between">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 mr-2 text-primary" />
                              <span className="text-sm font-medium truncate max-w-[150px]">
                                {file.name}
                              </span>
                            </div>
                            <button
                              onClick={() => setFile(null)}
                              className="text-muted-foreground hover:text-primary"
                              aria-label="Remove file"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Job Description Input */}
                    <div>
                      <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Briefcase className="mr-2 h-5 w-5" />
                        Job Description
                      </h2>
                      <p className="text-sm text-muted-foreground mb-3">
                        Paste the job description to compare with your resume
                      </p>
                      <Textarea
                        placeholder="Paste job description here..."
                        className="min-h-[200px]"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      onClick={handleAnalyze} 
                      disabled={!file || !jobDescription.trim() || isAnalyzing}
                      className="w-full"
                    >
                      {isAnalyzing ? (
                        <>Analyzing Resume...</>
                      ) : (
                        <>
                          <Wand2 className="mr-2 h-5 w-5" />
                          Optimize Resume
                        </>
                      )}
                    </Button>
                    
                    {isAnalyzing && (
                      <div className="space-y-2">
                        <Progress value={progress} className="h-2" />
                        <p className="text-xs text-center text-muted-foreground">
                          Analyzing keywords and content...
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Analysis Results */}
            <div className="lg:col-span-2">
              {!analysisComplete ? (
                <div className="h-full flex items-center justify-center bg-card rounded-lg border border-border p-12 text-center">
                  <div className="max-w-md">
                    <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
                    <h2 className="text-2xl font-bold mb-2">Resume Analysis</h2>
                    <p className="text-muted-foreground mb-6">
                      Upload your resume and paste a job description to get personalized optimization suggestions
                    </p>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center text-muted-foreground">
                        <Check className="h-5 w-5 mr-2 text-primary" />
                        <span>Keyword analysis and matching</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Check className="h-5 w-5 mr-2 text-primary" />
                        <span>Skill gap identification</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Check className="h-5 w-5 mr-2 text-primary" />
                        <span>Content enhancement suggestions</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Check className="h-5 w-5 mr-2 text-primary" />
                        <span>ATS-friendly formatting</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Tabs defaultValue="overview" className="h-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="keywords">Keywords</TabsTrigger>
                    <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-xl font-semibold">Resume Analysis</h2>
                          <Button onClick={handleDownload} className="flex items-center">
                            <Download className="mr-2 h-4 w-4" />
                            Download Optimized Resume
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                          <div className="bg-secondary/50 rounded-lg p-4 text-center">
                            <div className="text-3xl font-bold mb-1">{mockAnalysisResults.score}%</div>
                            <p className="text-muted-foreground text-sm">Overall Match</p>
                          </div>
                          <div className="bg-secondary/50 rounded-lg p-4 text-center">
                            <div className="text-3xl font-bold mb-1">{mockAnalysisResults.keywordMatch}%</div>
                            <p className="text-muted-foreground text-sm">Keyword Match</p>
                          </div>
                          <div className="bg-secondary/50 rounded-lg p-4 text-center">
                            <div className="text-3xl font-bold mb-1">{mockAnalysisResults.missingKeywords.length}</div>
                            <p className="text-muted-foreground text-sm">Missing Keywords</p>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium mb-3 flex items-center">
                              <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
                              Missing Keywords
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {mockAnalysisResults.missingKeywords.map(keyword => (
                                <div key={keyword} className="bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-full text-sm">
                                  {keyword}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3 flex items-center">
                              <AlertCircle className="mr-2 h-5 w-5 text-destructive" />
                              Skill Gaps
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {mockAnalysisResults.skillGaps.map(skill => (
                                <div key={skill} className="bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm">
                                  {skill}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">Key Recommendations</h3>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Check className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                                <span>Include relevant keywords like TypeScript and AWS in your skills section</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                                <span>Quantify your achievements with metrics and results</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                                <span>Expand your professional summary to highlight relevant experience</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                                <span>Add a projects section showcasing relevant technical work</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="keywords" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-6">Keyword Analysis</h2>
                        
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium mb-3">High-Value Keywords Found</h3>
                            <div className="flex flex-wrap gap-2">
                              {["React", "JavaScript", "CSS", "HTML5", "Redux", "Responsive Design", "Frontend Development"].map(keyword => (
                                <div key={keyword} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                  {keyword}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">Missing High-Value Keywords</h3>
                            <div className="flex flex-wrap gap-2">
                              {mockAnalysisResults.missingKeywords.map(keyword => (
                                <div key={keyword} className="bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-full text-sm">
                                  {keyword}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">Skill Frequency</h3>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">React</span>
                                  <span className="text-sm text-muted-foreground">5 mentions</span>
                                </div>
                                <Progress value={83} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">JavaScript</span>
                                  <span className="text-sm text-muted-foreground">4 mentions</span>
                                </div>
                                <Progress value={67} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">CSS</span>
                                  <span className="text-sm text-muted-foreground">3 mentions</span>
                                </div>
                                <Progress value={50} className="h-2" />
                              </div>
                              <div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-sm">TypeScript</span>
                                  <span className="text-sm text-muted-foreground">0 mentions</span>
                                </div>
                                <Progress value={0} className="h-2" />
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">Industry Buzzwords to Include</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              <div className="flex items-center">
                                <Check className="h-5 w-5 mr-2 text-primary" />
                                <span>Agile methodology</span>
                              </div>
                              <div className="flex items-center">
                                <Check className="h-5 w-5 mr-2 text-primary" />
                                <span>Cross-functional collaboration</span>
                              </div>
                              <div className="flex items-center">
                                <Check className="h-5 w-5 mr-2 text-primary" />
                                <span>CI/CD pipelines</span>
                              </div>
                              <div className="flex items-center">
                                <Check className="h-5 w-5 mr-2 text-primary" />
                                <span>Version control (Git)</span>
                              </div>
                              <div className="flex items-center">
                                <Check className="h-5 w-5 mr-2 text-primary" />
                                <span>Microservices architecture</span>
                              </div>
                              <div className="flex items-center">
                                <Check className="h-5 w-5 mr-2 text-primary" />
                                <span>Test-driven development (TDD)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="suggestions" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-6">Content Improvement Suggestions</h2>
                        
                        <div className="space-y-8">
                          {mockAnalysisResults.suggestions.map((suggestion, index) => (
                            <div key={index} className="space-y-3">
                              <h3 className="text-lg font-medium">{suggestion.section}</h3>
                              
                              <div className="space-y-2">
                                <div className="bg-secondary/50 p-4 rounded-lg">
                                  <div className="text-sm text-muted-foreground mb-1">Original</div>
                                  <div>{suggestion.original}</div>
                                </div>
                                
                                <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                                  <div className="text-sm text-primary mb-1">Suggested Improvement</div>
                                  <div>{suggestion.suggested}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                          
                          <div className="space-y-3">
                            <h3 className="text-lg font-medium">Additional Suggestions</h3>
                            
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <Check className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                                <span>Add a brief technical projects section highlighting 2-3 relevant projects</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                                <span>Include a certifications section to showcase your technical credentials</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                                <span>Use more action verbs like "engineered," "architected," and "implemented"</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                                <span>Quantify achievements with metrics where possible (e.g., "reduced load time by 40%")</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="preview" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-xl font-semibold">Optimized Resume Preview</h2>
                          <Button onClick={handleDownload} className="flex items-center">
                            <Download className="mr-2 h-4 w-4" />
                            Download Optimized Resume
                          </Button>
                        </div>
                        
                        <div className="border border-border rounded-lg p-6 bg-secondary/20">
                          <h3 className="text-xl font-bold mb-1">John Developer</h3>
                          <p className="text-muted-foreground mb-2">Frontend Developer</p>
                          <p className="text-sm mb-4">San Francisco, CA • john@example.com • (555) 123-4567</p>
                          
                          <div className="border-t border-border pt-4 mb-4">
                            <h4 className="font-semibold mb-2">Professional Summary</h4>
                            <p className="text-sm">
                              Results-driven Frontend Developer with 3+ years of experience building responsive and performant web applications with React.js and modern JavaScript frameworks. Skilled in optimizing user experiences and collaborating with cross-functional teams to deliver high-quality digital products. Passionate about clean code and continuous learning.
                            </p>
                          </div>
                          
                          <div className="border-t border-border pt-4 mb-4">
                            <h4 className="font-semibold mb-2">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              <div className="bg-secondary px-2 py-1 rounded text-xs">JavaScript</div>
                              <div className="bg-secondary px-2 py-1 rounded text-xs">React.js</div>
                              <div className="bg-secondary px-2 py-1 rounded text-xs">Redux</div>
                              <div className="bg-secondary px-2 py-1 rounded text-xs">TypeScript</div>
                              <div className="bg-secondary px-2 py-1 rounded text-xs">HTML5</div>
                              <div className="bg-secondary px-2 py-1 rounded text-xs">CSS3/SASS</div>
                              <div className="bg-secondary px-2 py-1 rounded text-xs">RESTful APIs</div>
                              <div className="bg-secondary px-2 py-1 rounded text-xs">Git</div>
                              <div className="bg-secondary px-2 py-1 rounded text-xs">Agile Methodology</div>
                              <div className="bg-secondary px-2 py-1 rounded text-xs">Testing (Jest)</div>
                              <div className="bg-secondary px-2 py-1 rounded text-xs">CI/CD</div>
                              <div className="bg-secondary px-2 py-1 rounded text-xs">AWS</div>
                            </div>
                          </div>
                          
                          <div className="border-t border-border pt-4 mb-4">
                            <h4 className="font-semibold mb-2">Professional Experience</h4>
                            
                            <div className="mb-3">
                              <div className="flex justify-between mb-1">
                                <div className="font-medium">Frontend Developer</div>
                                <div className="text-xs text-muted-foreground">2021 - Present</div>
                              </div>
                              <div className="text-sm font-medium mb-1">TechCorp Inc., San Francisco</div>
                              <ul className="text-sm space-y-1 list-disc pl-5">
                                <li>Engineered scalable web applications using React.js, resulting in 40% faster load times and improved user engagement metrics</li>
                                <li>Collaborated with designers and backend developers to implement new features and optimize existing functionality</li>
                                <li>Implemented responsive designs ensuring seamless experiences across desktop, tablet, and mobile devices</li>
                                <li>Optimized application performance through code refactoring and implementing best practices</li>
                              </ul>
                            </div>
                            
                            <div>
                              <div className="flex justify-between mb-1">
                                <div className="font-medium">Junior Web Developer</div>
                                <div className="text-xs text-muted-foreground">2019 - 2021</div>
                              </div>
                              <div className="text-sm font-medium mb-1">Web Solutions Ltd., Portland</div>
                              <ul className="text-sm space-y-1 list-disc pl-5">
                                <li>Developed and maintained client websites using HTML, CSS, and JavaScript</li>
                                <li>Built interactive UI components using jQuery and modern CSS frameworks</li>
                                <li>Collaborated with the design team to implement pixel-perfect interfaces</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="border-t border-border pt-4 mb-4">
                            <h4 className="font-semibold mb-2">Projects</h4>
                            
                            <div className="mb-2">
                              <div className="font-medium mb-1">E-commerce Platform Redesign</div>
                              <p className="text-sm">
                                Rebuilt the frontend of a client's e-commerce platform using React, Redux, and TypeScript. Implemented CI/CD pipelines using GitHub Actions and AWS.
                              </p>
                            </div>
                            
                            <div>
                              <div className="font-medium mb-1">Analytics Dashboard</div>
                              <p className="text-sm">
                                Developed a real-time analytics dashboard using React, Node.js, and Socket.io. Implemented data visualization with D3.js.
                              </p>
                            </div>
                          </div>
                          
                          <div className="border-t border-border pt-4">
                            <h4 className="font-semibold mb-2">Education</h4>
                            <div className="flex justify-between mb-1">
                              <div className="font-medium">B.S. Computer Science</div>
                              <div className="text-xs text-muted-foreground">2015 - 2019</div>
                            </div>
                            <div className="text-sm">University of Technology</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResumeOptimizer;


import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CoverLetterGenerator = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    jobTitle: "",
    company: "",
    resumeHighlights: "",
    additionalInfo: "",
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState("");
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.jobTitle || !formData.company) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description: "Please fill in all required fields.",
      });
      return;
    }

    setIsGenerating(true);

    // Simulate API call to generate cover letter
    setTimeout(() => {
      setGeneratedLetter(mockCoverLetter);
      setIsGenerating(false);
      toast({
        title: "Cover letter generated!",
        description: "Your personalized cover letter is ready to review and download.",
      });
    }, 2000);
  };

  const handleDownload = () => {
    toast({
      title: "Downloading cover letter",
      description: "Your cover letter is being downloaded as a Word document.",
    });
    // In a real app, this would trigger a download of the cover letter
  };

  const mockCoverLetter = `
${formData.fullName || "John Doe"}
${formData.email || "john.doe@example.com"}
${formData.phone || "(555) 123-4567"}
${formData.address || "San Francisco, CA"}

${new Date().toLocaleDateString()}

Hiring Manager
${formData.company || "TechCorp Inc."}

Dear Hiring Manager,

I am writing to express my interest in the ${formData.jobTitle || "Frontend Developer"} position at ${formData.company || "TechCorp Inc."} that I found on your company's careers page. With my experience in web development and passion for creating seamless user experiences, I am confident in my ability to make significant contributions to your team.

${formData.resumeHighlights || "Throughout my career, I have focused on building responsive and performant web applications using modern JavaScript frameworks, particularly React. I have a strong understanding of frontend architecture, state management, and UI/UX principles. In my previous role, I led the development of a customer-facing application that increased user engagement by 35% and reduced bounce rates by 20%."}

I am particularly drawn to ${formData.company || "TechCorp Inc."} because of your commitment to innovation and your impressive product portfolio. I admire how your company has pioneered solutions in the tech industry, and I would be thrilled to contribute to your continued success.

${formData.additionalInfo || "In addition to my technical skills, I bring strong communication abilities and a collaborative mindset. I thrive in team environments and enjoy working closely with designers, product managers, and other developers to deliver high-quality solutions."}

I welcome the opportunity to discuss how my skills and experience align with your needs for the ${formData.jobTitle || "Frontend Developer"} position. Thank you for considering my application. I look forward to the possibility of working with the talented team at ${formData.company || "TechCorp Inc."}.

Sincerely,
${formData.fullName || "John Doe"}
  `;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Cover Letter Generator</h1>
            <p className="text-muted-foreground">
              Create a customized cover letter in minutes, tailored to the job you're applying for
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Input Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleGenerate} className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Your Information</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">
                            Full Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john.doe@example.com"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="City, State"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Job Information</h2>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="jobTitle">
                            Job Title <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            placeholder="Frontend Developer"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company">
                            Company Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="TechCorp Inc."
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Content Customization</h2>
                      
                      <div className="space-y-2">
                        <Label htmlFor="resumeHighlights">Key Resume Highlights</Label>
                        <Textarea
                          id="resumeHighlights"
                          name="resumeHighlights"
                          value={formData.resumeHighlights}
                          onChange={handleChange}
                          placeholder="Briefly highlight your most relevant experience, skills, and achievements"
                          rows={4}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          placeholder="Add any other information you'd like to include in your cover letter"
                          rows={4}
                        />
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-5 w-5" />
                          Generate Cover Letter
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Preview and Download */}
            <div>
              <Card className="h-full">
                <CardContent className="p-6 h-full">
                  <Tabs defaultValue="preview" className="h-full">
                    <div className="flex items-center justify-between mb-4">
                      <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="templates">Templates</TabsTrigger>
                        <TabsTrigger value="tips">Tips</TabsTrigger>
                      </TabsList>
                      
                      {generatedLetter && (
                        <Button 
                          onClick={handleDownload} 
                          variant="outline" 
                          className="flex items-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      )}
                    </div>
                    
                    <TabsContent value="preview" className="mt-0 h-full">
                      {generatedLetter ? (
                        <div className="h-full overflow-y-auto bg-white text-black p-8 rounded-md border border-border whitespace-pre-line">
                          {generatedLetter}
                        </div>
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center p-4">
                          <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                          <h3 className="text-xl font-semibold mb-2">Your Cover Letter</h3>
                          <p className="text-muted-foreground mb-4">
                            Fill out the form and click "Generate Cover Letter" to create your personalized cover letter
                          </p>
                          <div className="max-w-md space-y-2">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <span className="font-semibold">1</span>
                              </div>
                              <p className="text-sm text-left">Enter your personal information and job details</p>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <span className="font-semibold">2</span>
                              </div>
                              <p className="text-sm text-left">Customize with your specific experiences and qualifications</p>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <span className="font-semibold">3</span>
                              </div>
                              <p className="text-sm text-left">Review, edit, and download your professional cover letter</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="templates" className="mt-0 h-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {["Professional", "Creative", "Modern", "Traditional"].map(template => (
                          <div
                            key={template}
                            className="border border-border rounded-md p-4 hover:border-primary cursor-pointer transition-colors"
                          >
                            <div className="aspect-[8.5/11] bg-secondary flex items-center justify-center mb-2">
                              <div className="w-3/4 h-3/4 flex flex-col justify-between p-4">
                                <div className="space-y-1">
                                  <div className="h-2 bg-primary/20 rounded-full w-1/2"></div>
                                  <div className="h-2 bg-primary/20 rounded-full w-1/3"></div>
                                </div>
                                <div className="space-y-1">
                                  <div className="h-1 bg-primary/10 rounded-full w-full"></div>
                                  <div className="h-1 bg-primary/10 rounded-full w-full"></div>
                                  <div className="h-1 bg-primary/10 rounded-full w-3/4"></div>
                                </div>
                                <div className="space-y-1">
                                  <div className="h-1 bg-primary/10 rounded-full w-full"></div>
                                  <div className="h-1 bg-primary/10 rounded-full w-full"></div>
                                  <div className="h-1 bg-primary/10 rounded-full w-5/6"></div>
                                </div>
                                <div className="space-y-1">
                                  <div className="h-1 bg-primary/10 rounded-full w-1/2"></div>
                                </div>
                              </div>
                            </div>
                            <h3 className="font-medium text-center">{template}</h3>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="tips" className="mt-0 h-full overflow-y-auto">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Writing an Effective Cover Letter</h3>
                          <ul className="space-y-2 list-disc pl-5">
                            <li>Keep it concise – aim for one page or less</li>
                            <li>Address the hiring manager by name if possible</li>
                            <li>Customize each letter for the specific job and company</li>
                            <li>Highlight relevant skills and experiences from your resume</li>
                            <li>Show enthusiasm for the role and knowledge about the company</li>
                            <li>End with a call to action and a thank you</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Structure Guide</h3>
                          <ol className="space-y-3 list-decimal pl-5">
                            <li>
                              <strong>Header:</strong> Include your contact information at the top
                            </li>
                            <li>
                              <strong>Date and Employer's Information:</strong> Add the date and the company's address
                            </li>
                            <li>
                              <strong>Salutation:</strong> Address the hiring manager specifically if possible
                            </li>
                            <li>
                              <strong>Opening Paragraph:</strong> State the position you're applying for and how you found it
                            </li>
                            <li>
                              <strong>Body Paragraphs:</strong> Highlight relevant experiences and skills that make you a good fit
                            </li>
                            <li>
                              <strong>Company Knowledge:</strong> Show that you've researched the company and explain why you want to work there
                            </li>
                            <li>
                              <strong>Closing Paragraph:</strong> Thank them for their consideration and express interest in an interview
                            </li>
                            <li>
                              <strong>Signature:</strong> Close professionally with "Sincerely" or similar, followed by your name
                            </li>
                          </ol>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Common Mistakes to Avoid</h3>
                          <ul className="space-y-2 list-disc pl-5">
                            <li>Using a generic template without customization</li>
                            <li>Repeating your entire resume in paragraph form</li>
                            <li>Including irrelevant information</li>
                            <li>Focusing on what the company can do for you instead of what you can offer</li>
                            <li>Grammar and spelling errors</li>
                            <li>Being too formal or too casual in tone</li>
                          </ul>
                        </div>
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

export default CoverLetterGenerator;

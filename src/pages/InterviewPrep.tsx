
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Mic, 
  Video, 
  FileText, 
  Play, 
  Pause, 
  RotateCcw, 
  ThumbsUp, 
  ThumbsDown,
  Clock, 
  CheckCircle2, 
  XCircle,
  AlertTriangle,
  BookOpen
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockQuestions = [
  {
    id: 1,
    category: "technical",
    question: "Can you explain the difference between let, const, and var in JavaScript?",
    suggestedAnswer: "Var is function-scoped, while let and const are block-scoped. Let allows reassignment, but const creates a read-only reference. However, with const objects, the properties can still be modified. Var also has hoisting behavior where declarations are moved to the top of their scope."
  },
  {
    id: 2,
    category: "technical",
    question: "How would you optimize the performance of a React application?",
    suggestedAnswer: "To optimize React performance, I'd use techniques like: implementing React.memo for component memoization, using useCallback and useMemo hooks to prevent unnecessary re-renders, implementing code splitting with React.lazy and Suspense, optimizing state management, and using production builds with proper bundling."
  },
  {
    id: 3,
    category: "technical",
    question: "Explain how you would handle API calls in a React application.",
    suggestedAnswer: "In a React application, I typically handle API calls using async/await with fetch or Axios inside useEffect hooks. For more complex state management, I implement solutions like React Query or Redux with middleware like redux-thunk or redux-saga. I always implement proper error handling and loading states."
  },
  {
    id: 4,
    category: "behavioral",
    question: "Tell me about a challenging project you worked on and how you overcame obstacles.",
    suggestedAnswer: "In my previous role, I led the migration of a legacy system to a modern React architecture. We faced challenges with data migration and ensuring zero downtime. I established a phased approach, created comprehensive testing protocols, and implemented a parallel running system during transition. Through regular communication and carefully planned sprints, we completed the migration ahead of schedule with minimal disruptions."
  },
  {
    id: 5,
    category: "behavioral",
    question: "How do you handle disagreements with team members about technical decisions?",
    suggestedAnswer: "When facing technical disagreements, I focus on data-driven discussions. I listen to understand their perspective, present my viewpoint with clear reasoning, and suggest creating prototypes to test different approaches when possible. If needed, I involve a technical lead for additional input. The goal is always finding the best solution for the project, not winning the argument."
  },
  {
    id: 6,
    category: "behavioral",
    question: "Describe how you prioritize tasks when working on multiple projects with competing deadlines.",
    suggestedAnswer: "I approach competing deadlines by first assessing each project's priority based on business impact, dependency chains, and deadlines. I communicate with stakeholders to confirm priorities, break work into manageable chunks, and create a schedule that addresses critical paths first. I maintain transparency about my bandwidth and provide regular progress updates to all involved parties."
  }
];

const InterviewPrep = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(mockQuestions[0]);
  const [recording, setRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordingTimer, setRecordingTimer] = useState<NodeJS.Timeout | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [answer, setAnswer] = useState("");
  const { toast } = useToast();

  const startRecording = () => {
    setRecording(true);
    setRecordingComplete(false);
    setRecordingTime(0);
    setFeedback(null);
    
    const timer = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
    
    setRecordingTimer(timer);
    
    // Simulate requesting microphone access
    toast({
      title: "Microphone access requested",
      description: "Please allow microphone access to continue.",
    });
    
    // In a real app, we would use the browser's MediaRecorder API here
  };

  const stopRecording = () => {
    if (recordingTimer) {
      clearInterval(recordingTimer);
    }
    
    setRecording(false);
    setRecordingComplete(true);
    
    // Generate mock feedback
    setTimeout(() => {
      generateFeedback();
    }, 1500);
  };

  const resetRecording = () => {
    if (recordingTimer) {
      clearInterval(recordingTimer);
    }
    
    setRecording(false);
    setRecordingComplete(false);
    setRecordingTime(0);
    setFeedback(null);
    setAnswer("");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const generateFeedback = () => {
    // This would be an AI analysis in a real app
    const mockFeedback = `
## Overall Assessment: Good job!

### Strengths:
- Clear explanation of core concepts
- Good use of specific examples
- Confident delivery with appropriate pacing

### Areas for Improvement:
- Consider providing more real-world applications
- Your answer could be more concise - try to keep responses under 2 minutes
- Used filler words ("um", "like") several times

### Content Analysis:
- Covered 85% of key points from the suggested answer
- Missing mention of performance implications

### Delivery:
- Maintained good eye contact
- Voice clarity: Excellent
- Speaking pace: Appropriate
- Body language: Natural and engaged

Keep practicing this and similar questions to improve your technical interview skills!
`;
    
    setFeedback(mockFeedback);
  };

  const handleSelectQuestion = (question: any) => {
    setSelectedQuestion(question);
    resetRecording();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Interview Preparation</h1>
            <p className="text-muted-foreground">
              Practice with mock interviews and receive AI-powered feedback to improve your performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Question Selection */}
            <div className="order-2 lg:order-1 lg:col-span-1">
              <Card className="h-full">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Interview Questions</h2>
                  
                  <Tabs defaultValue="technical" className="mb-6">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="technical">Technical</TabsTrigger>
                      <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="technical" className="mt-4 space-y-4">
                      {mockQuestions
                        .filter(q => q.category === "technical")
                        .map(question => (
                          <div
                            key={question.id}
                            className={`p-4 rounded-lg cursor-pointer transition-colors ${
                              selectedQuestion.id === question.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary hover:bg-secondary/80"
                            }`}
                            onClick={() => handleSelectQuestion(question)}
                          >
                            <p className="font-medium">{question.question}</p>
                          </div>
                        ))}
                    </TabsContent>
                    
                    <TabsContent value="behavioral" className="mt-4 space-y-4">
                      {mockQuestions
                        .filter(q => q.category === "behavioral")
                        .map(question => (
                          <div
                            key={question.id}
                            className={`p-4 rounded-lg cursor-pointer transition-colors ${
                              selectedQuestion.id === question.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary hover:bg-secondary/80"
                            }`}
                            onClick={() => handleSelectQuestion(question)}
                          >
                            <p className="font-medium">{question.question}</p>
                          </div>
                        ))}
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-6 space-y-4">
                    <h3 className="font-semibold">Interview Prep Tips</h3>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Preparation Checklist</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 pl-5 list-disc">
                            <li>Research the company thoroughly</li>
                            <li>Review the job description and requirements</li>
                            <li>Prepare examples of relevant experience</li>
                            <li>Practice common questions out loud</li>
                            <li>Prepare questions to ask the interviewer</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Technical Interview Structure</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">Most technical interviews follow this pattern:</p>
                          <ol className="space-y-2 pl-5 list-decimal">
                            <li>Introduction and background questions</li>
                            <li>Technical knowledge assessment</li>
                            <li>Problem-solving questions or coding challenges</li>
                            <li>System design discussions (for senior roles)</li>
                            <li>Questions for the interviewer</li>
                          </ol>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger>STAR Method for Behavioral Questions</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">Use the STAR method to structure your answers:</p>
                          <ul className="space-y-2">
                            <li><strong>S</strong>ituation: Set the context</li>
                            <li><strong>T</strong>ask: Describe your responsibility</li>
                            <li><strong>A</strong>ction: Explain what you did</li>
                            <li><strong>R</strong>esult: Share the outcome</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Practice Area */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Practice Interview</h2>
                      <p className="text-muted-foreground mb-4">
                        Answer the question as if you were in a real interview. Use the recording features to practice and get feedback.
                      </p>
                      
                      <div className="bg-secondary p-6 rounded-lg mb-6">
                        <h3 className="text-lg font-medium mb-2">{selectedQuestion.question}</h3>
                        
                        <Tabs defaultValue="audio" className="mt-4">
                          <TabsList className="grid w-full grid-cols-3 mb-4">
                            <TabsTrigger value="audio" className="flex items-center gap-2">
                              <Mic className="h-4 w-4" />
                              Audio
                            </TabsTrigger>
                            <TabsTrigger value="video" className="flex items-center gap-2">
                              <Video className="h-4 w-4" />
                              Video
                            </TabsTrigger>
                            <TabsTrigger value="text" className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              Text
                            </TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="audio" className="space-y-4">
                            <div className="flex items-center justify-center gap-4">
                              {!recording && !recordingComplete ? (
                                <Button 
                                  onClick={startRecording} 
                                  variant="default"
                                  className="flex items-center gap-2"
                                >
                                  <Play className="h-5 w-5" />
                                  Start Recording
                                </Button>
                              ) : recording ? (
                                <Button 
                                  onClick={stopRecording} 
                                  variant="destructive"
                                  className="flex items-center gap-2"
                                >
                                  <Pause className="h-5 w-5" />
                                  Stop Recording
                                </Button>
                              ) : (
                                <Button 
                                  onClick={resetRecording} 
                                  variant="outline"
                                  className="flex items-center gap-2"
                                >
                                  <RotateCcw className="h-5 w-5" />
                                  Reset
                                </Button>
                              )}
                              
                              <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                                <Clock className="h-5 w-5 text-muted-foreground" />
                                <span className="font-mono">{formatTime(recordingTime)}</span>
                              </div>
                            </div>
                            
                            {recording && (
                              <div className="text-center text-muted-foreground animate-pulse">
                                Recording in progress...
                              </div>
                            )}
                            
                            {recordingComplete && !feedback && (
                              <div className="text-center text-muted-foreground">
                                Analyzing your response...
                              </div>
                            )}
                          </TabsContent>
                          
                          <TabsContent value="video" className="text-center p-12">
                            <Video className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                            <h3 className="text-lg font-medium mb-2">Video Practice</h3>
                            <p className="text-muted-foreground mb-4">
                              Practice with video recording to improve both your verbal responses and body language.
                            </p>
                            <Button className="flex items-center gap-2">
                              <Video className="h-4 w-4" />
                              Enable Camera
                            </Button>
                          </TabsContent>
                          
                          <TabsContent value="text" className="space-y-4">
                            <Textarea
                              placeholder="Type your answer here..."
                              className="min-h-[200px]"
                              value={answer}
                              onChange={(e) => setAnswer(e.target.value)}
                            />
                            
                            <div className="flex justify-end gap-2">
                              <Button 
                                variant="outline" 
                                onClick={() => setAnswer("")}
                                disabled={!answer}
                              >
                                Clear
                              </Button>
                              <Button 
                                onClick={generateFeedback}
                                disabled={!answer}
                              >
                                Get Feedback
                              </Button>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </div>
                    
                    {feedback ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">AI Feedback</h3>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              Helpful
                            </Button>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <ThumbsDown className="h-4 w-4" />
                              Not Helpful
                            </Button>
                          </div>
                        </div>
                        
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <div className="whitespace-pre-line">{feedback}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Suggested Answer Components</h3>
                        
                        <div className="prose prose-sm dark:prose-invert max-w-none p-4 bg-secondary/50 rounded-lg">
                          <p>{selectedQuestion.suggestedAnswer}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          <div className="bg-secondary/50 p-4 rounded-lg">
                            <div className="flex items-center text-green-500 mb-2">
                              <CheckCircle2 className="h-5 w-5 mr-2" />
                              <h4 className="font-medium">Do</h4>
                            </div>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Structure your answer clearly</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Provide specific examples</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span>Relate to the job requirements</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-secondary/50 p-4 rounded-lg">
                            <div className="flex items-center text-destructive mb-2">
                              <XCircle className="h-5 w-5 mr-2" />
                              <h4 className="font-medium">Don't</h4>
                            </div>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start">
                                <span className="text-destructive mr-2">•</span>
                                <span>Ramble or go off-topic</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-destructive mr-2">•</span>
                                <span>Use technical jargon excessively</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-destructive mr-2">•</span>
                                <span>Be negative about past employers</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-secondary/50 p-4 rounded-lg">
                            <div className="flex items-center text-amber-500 mb-2">
                              <AlertTriangle className="h-5 w-5 mr-2" />
                              <h4 className="font-medium">Remember</h4>
                            </div>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Be authentic and honest</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Maintain good eye contact</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Keep answers under 2 minutes</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="border-t border-border pt-4">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <BookOpen className="mr-2 h-5 w-5" />
                        Additional Resources
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a 
                          href="#" 
                          className="block p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                        >
                          <h4 className="font-medium mb-1">Technical Interview Guide</h4>
                          <p className="text-sm text-muted-foreground">Comprehensive guide to ace technical interviews</p>
                        </a>
                        
                        <a 
                          href="#" 
                          className="block p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                        >
                          <h4 className="font-medium mb-1">Body Language Tips</h4>
                          <p className="text-sm text-muted-foreground">Improve your nonverbal communication</p>
                        </a>
                        
                        <a 
                          href="#" 
                          className="block p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                        >
                          <h4 className="font-medium mb-1">Common Interview Mistakes</h4>
                          <p className="text-sm text-muted-foreground">Pitfalls to avoid during your interview</p>
                        </a>
                        
                        <a 
                          href="#" 
                          className="block p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                        >
                          <h4 className="font-medium mb-1">Remote Interview Prep</h4>
                          <p className="text-sm text-muted-foreground">Tips for virtual interviews and technical setups</p>
                        </a>
                      </div>
                    </div>
                  </div>
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

export default InterviewPrep;

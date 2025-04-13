
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import JobSearch from "./pages/JobSearch";
import ResumeOptimizer from "./pages/ResumeOptimizer";
import CoverLetterGenerator from "./pages/CoverLetterGenerator";
import InterviewPrep from "./pages/InterviewPrep";
import CareerGuidance from "./pages/CareerGuidance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/job-search" element={<JobSearch />} />
          <Route path="/resume-optimizer" element={<ResumeOptimizer />} />
          <Route path="/cover-letter" element={<CoverLetterGenerator />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route path="/career-guidance" element={<CareerGuidance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

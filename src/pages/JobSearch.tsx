
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JobCard from "@/components/ui/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Briefcase, Filter, X } from "lucide-react";

// Mock job data
const mockJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K - $150K",
    compatibilityScore: 92,
    logo: "https://images.unsplash.com/photo-1549921296-3b0f9a35af35?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    description: "We're looking for a skilled Frontend Developer with 5+ years of experience in React, TypeScript, and modern CSS frameworks. You'll work with our team to build responsive web applications and improve our design system.",
    postedDate: "2 days ago"
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Full-time",
    salary: "$90K - $120K",
    compatibilityScore: 85,
    logo: "https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    description: "Join our creative team as a UX/UI Designer. You'll create user-friendly interfaces for web and mobile applications, conduct user research, and collaborate with product managers and developers to deliver exceptional digital experiences.",
    postedDate: "1 week ago"
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130K - $160K",
    compatibilityScore: 78,
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    description: "We are seeking a Backend Engineer to design and implement scalable server-side solutions. You'll work with databases, APIs, and cloud infrastructure to support our growing platform. Experience with Node.js, Python, or Java required.",
    postedDate: "3 days ago"
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "Analytix",
    location: "Boston, MA",
    type: "Contract",
    salary: "$65 - $85/hr",
    compatibilityScore: 80,
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80",
    description: "Analytix is looking for a Data Scientist to join our team. You'll analyze complex data sets, build predictive models, and create dashboards to help our clients make data-driven decisions. Strong Python and statistical analysis skills required.",
    postedDate: "5 days ago"
  },
  {
    id: "5",
    title: "Product Manager",
    company: "InnovateTech",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110K - $140K",
    compatibilityScore: 88,
    logo: "",
    description: "As a Product Manager at InnovateTech, you'll lead the development of new features from concept to launch. You'll work closely with design, engineering, and marketing teams to build products that solve real user problems and drive business growth.",
    postedDate: "Just now"
  }
];

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [jobs, setJobs] = useState(mockJobs);
  const [compatibilityFilter, setCompatibilityFilter] = useState([0]);

  const handleAddFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API endpoint with the search parameters
    console.log("Searching for:", { searchTerm, location, activeFilters, compatibilityFilter });
    
    // For demo purposes, just filter the mock data
    let filtered = mockJobs;
    
    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (location) {
      filtered = filtered.filter(job => 
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    if (compatibilityFilter[0] > 0) {
      filtered = filtered.filter(job => job.compatibilityScore >= compatibilityFilter[0]);
    }
    
    if (activeFilters.length > 0) {
      filtered = filtered.filter(job => {
        // This is simplified, in a real app you'd have more complex filter logic
        return activeFilters.some(filter => 
          job.type.includes(filter) || 
          job.location.includes(filter) ||
          (filter === "High Salary" && parseInt(job.salary.replace(/\D/g, '')) > 100000)
        );
      });
    }
    
    setJobs(filtered.length > 0 ? filtered : mockJobs);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Find Your Perfect Job</h1>
            <p className="text-muted-foreground">
              Browse through AI-matched job listings tailored to your skills and experience
            </p>
          </div>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-card shadow-sm rounded-lg p-6 mb-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  placeholder="Job title, keyword, or company"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  placeholder="City, state, or remote"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <Button type="submit" className="w-full md:w-auto">
                Find Jobs
              </Button>
            </div>
            
            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {activeFilters.map(filter => (
                  <Badge 
                    key={filter} 
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {filter}
                    <button 
                      onClick={() => handleRemoveFilter(filter)}
                      className="ml-1 hover:text-primary"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                
                <button 
                  onClick={() => setActiveFilters([])}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}
          </form>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="order-2 lg:order-1">
              <div className="bg-card shadow-sm rounded-lg p-6 sticky top-24 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold flex items-center">
                    <Filter className="mr-2 h-5 w-5" />
                    Filters
                  </h2>
                  <button 
                    onClick={() => setActiveFilters([])}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Reset
                  </button>
                </div>
                
                {/* Compatibility Score Filter */}
                <div className="mb-6">
                  <Label htmlFor="compatibility" className="mb-2 block">
                    Minimum Compatibility Score: {compatibilityFilter[0]}%
                  </Label>
                  <Slider
                    id="compatibility"
                    value={compatibilityFilter}
                    onValueChange={setCompatibilityFilter}
                    max={100}
                    step={5}
                    className="my-4"
                  />
                </div>
                
                <Accordion type="multiple" className="space-y-2">
                  {/* Job Type Filter */}
                  <AccordionItem value="job-type" className="border-b">
                    <AccordionTrigger>
                      <span className="flex items-center">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Job Type
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {["Full-time", "Part-time", "Contract", "Internship", "Remote"].map(type => (
                          <div key={type} className="flex items-center">
                            <Checkbox 
                              id={`job-type-${type}`} 
                              checked={activeFilters.includes(type)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleAddFilter(type);
                                } else {
                                  handleRemoveFilter(type);
                                }
                              }}
                            />
                            <label
                              htmlFor={`job-type-${type}`}
                              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Experience Level Filter */}
                  <AccordionItem value="experience" className="border-b">
                    <AccordionTrigger>Experience Level</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {["Entry Level", "Mid Level", "Senior Level", "Director", "Executive"].map(level => (
                          <div key={level} className="flex items-center">
                            <Checkbox 
                              id={`exp-${level}`} 
                              checked={activeFilters.includes(level)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleAddFilter(level);
                                } else {
                                  handleRemoveFilter(level);
                                }
                              }}
                            />
                            <label
                              htmlFor={`exp-${level}`}
                              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Salary Filter */}
                  <AccordionItem value="salary" className="border-b">
                    <AccordionTrigger>Salary Range</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {["$40K - $60K", "$60K - $80K", "$80K - $100K", "$100K - $120K", "$120K+"].map(range => (
                          <div key={range} className="flex items-center">
                            <Checkbox 
                              id={`salary-${range}`} 
                              checked={activeFilters.includes(range)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleAddFilter(range);
                                } else {
                                  handleRemoveFilter(range);
                                }
                              }}
                            />
                            <label
                              htmlFor={`salary-${range}`}
                              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {range}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  {/* Location Filter */}
                  <AccordionItem value="location" className="border-b">
                    <AccordionTrigger>Location</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {["Remote", "Hybrid", "On-site"].map(loc => (
                          <div key={loc} className="flex items-center">
                            <Checkbox 
                              id={`loc-${loc}`} 
                              checked={activeFilters.includes(loc)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleAddFilter(loc);
                                } else {
                                  handleRemoveFilter(loc);
                                }
                              }}
                            />
                            <label
                              htmlFor={`loc-${loc}`}
                              className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {loc}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <Button 
                  onClick={handleSearch} 
                  className="w-full mt-6"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Job Results</h2>
                  <p className="text-muted-foreground">
                    Showing {jobs.length} {jobs.length === 1 ? 'job' : 'jobs'}
                  </p>
                </div>
                
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="date">Most Recent</SelectItem>
                    <SelectItem value="compatibility">Highest Compatibility</SelectItem>
                    <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                    <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-6">
                {jobs.length > 0 ? (
                  jobs.map(job => (
                    <JobCard key={job.id} {...job} />
                  ))
                ) : (
                  <div className="text-center py-12 bg-card rounded-lg border border-border">
                    <p className="text-lg font-medium">No jobs found</p>
                    <p className="text-muted-foreground">Try adjusting your search or filters</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => setJobs(mockJobs)}
                    >
                      Reset Search
                    </Button>
                  </div>
                )}
              </div>
              
              {jobs.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <Button variant="outline">Load More Jobs</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobSearch;


import { useState } from 'react';
import { Bookmark, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  compatibilityScore: number;
  logo: string;
  description: string;
  postedDate: string;
}

const JobCard = ({
  id,
  title,
  company,
  location,
  type,
  salary,
  compatibilityScore,
  logo,
  description,
  postedDate
}: JobCardProps) => {
  const [saved, setSaved] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    setSaved(!saved);
    toast({
      title: saved ? "Job removed from saved list" : "Job saved successfully",
      description: saved ? "The job has been removed from your saved jobs" : "You can view it later in your saved jobs",
      duration: 3000,
    });
  };

  const handleApply = () => {
    window.open(`/apply/${id}`, '_blank');
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center overflow-hidden shrink-0">
            {logo ? (
              <img src={logo} alt={`${company} logo`} className="w-full h-full object-cover" />
            ) : (
              <span className="text-xl font-bold">{company.charAt(0)}</span>
            )}
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
            <p className="text-muted-foreground">{company}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline">{location}</Badge>
              <Badge variant="outline">{type}</Badge>
              {salary && <Badge variant="outline">{salary}</Badge>}
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-center rounded-full bg-secondary px-3 py-1 mr-2">
            <Star className="h-4 w-4 fill-primary mr-1" />
            <span className="text-sm font-semibold">{compatibilityScore}%</span>
          </div>
          <button
            onClick={handleSave}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={saved ? "Unsave job" : "Save job"}
          >
            <Bookmark className={`h-5 w-5 ${saved ? 'fill-primary' : ''}`} />
          </button>
        </div>
      </div>
      
      <p className="text-muted-foreground mt-4 line-clamp-3">{description}</p>
      
      <div className="flex items-center justify-between mt-6">
        <span className="text-sm text-muted-foreground">Posted {postedDate}</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleApply} className="flex items-center gap-1">
            <ExternalLink className="h-4 w-4" />
            Apply Now
          </Button>
          <Button size="sm">View Details</Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

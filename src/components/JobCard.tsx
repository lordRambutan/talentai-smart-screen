
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Users } from "lucide-react";

interface JobCardProps {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  postedDate: string;
  skills: string[];
  applicantCount: number;
  shortlistCount: number;
  onEdit?: (id: string) => void;
  onView?: (id: string) => void;
}

const JobCard = ({
  id,
  title,
  department,
  location,
  type,
  postedDate,
  skills,
  applicantCount,
  shortlistCount,
  onEdit,
  onView,
}: JobCardProps) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-md border-border/60">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold line-clamp-1">{title}</CardTitle>
            <CardDescription className="mt-1">
              {department} • {location} • {type}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1 rounded-md bg-secondary/80 px-2 py-1 text-sm text-muted-foreground dark:bg-secondary">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Posted {postedDate}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 pb-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Required Skills</h3>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs transition-all group-hover:bg-primary/10 dark:group-hover:bg-primary/20">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-md border p-3 text-center bg-card transition-all group-hover:bg-secondary/30 dark:group-hover:bg-secondary/60">
            <div className="text-xl font-bold">{applicantCount}</div>
            <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              <Users className="h-3 w-3" /> Total Applicants
            </div>
          </div>
          <div className="rounded-md border p-3 text-center bg-card transition-all group-hover:bg-secondary/30 dark:group-hover:bg-secondary/60">
            <div className="text-xl font-bold">{shortlistCount}</div>
            <div className="text-xs text-muted-foreground">Shortlisted</div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-0">
        <Button variant="outline" size="sm" onClick={() => onEdit?.(id)}>
          Edit
        </Button>
        <Button size="sm" onClick={() => onView?.(id)}>
          View Applicants
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;

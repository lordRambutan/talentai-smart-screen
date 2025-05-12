
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
import { Briefcase } from "lucide-react";

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
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="mt-1">
              {department} • {location} • {type}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1 rounded-md bg-muted px-2 py-1 text-sm text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Posted {postedDate}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Required Skills</h3>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-md border p-3 text-center">
            <div className="text-xl font-bold">{applicantCount}</div>
            <div className="text-xs text-muted-foreground">Total Applicants</div>
          </div>
          <div className="rounded-md border p-3 text-center">
            <div className="text-xl font-bold">{shortlistCount}</div>
            <div className="text-xs text-muted-foreground">Shortlisted</div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => onEdit?.(id)}>
          Edit
        </Button>
        <Button onClick={() => onView?.(id)}>
          View Applicants
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;

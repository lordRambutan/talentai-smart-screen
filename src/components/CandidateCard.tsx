
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
import { Separator } from "@/components/ui/separator";
import SkillMatch from "./SkillMatch";
import SpamDetector from "./SpamDetector";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface CandidateProps {
  name: string;
  email: string;
  phone: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  spamProbability: number;
  jobMatch: number;
}

const CandidateCard = ({
  name,
  email,
  phone,
  skills,
  experience,
  education,
  spamProbability,
  jobMatch,
}: CandidateProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold">{name}</CardTitle>
            <CardDescription className="mt-1">
              {experience[0]?.title} at {experience[0]?.company}
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View Full Resume
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Contact</h3>
              <p className="text-sm">{email}</p>
              <p className="text-sm">{phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Skills</h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.slice(0, 5).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {skills.length > 5 && (
                  <Badge variant="outline" className="text-xs">
                    +{skills.length - 5} more
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Experience</h3>
              <p className="text-sm font-medium">
                {experience[0]?.title} • {experience[0]?.company}
              </p>
              <p className="text-xs text-muted-foreground">
                {experience[0]?.duration}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Education</h3>
              <p className="text-sm font-medium">{education[0]?.degree}</p>
              <p className="text-xs text-muted-foreground">
                {education[0]?.institution}, {education[0]?.year}
              </p>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="grid grid-cols-2 gap-6">
          <SkillMatch jobMatch={jobMatch} skills={skills} />
          <SpamDetector spamProbability={spamProbability} />
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="text-xs text-muted-foreground">
          Processed on {new Date().toLocaleDateString()}
        </div>
        <div className="space-x-2">
          <Button variant="ghost" size="sm">
            Reject
          </Button>
          <Button variant="default" size="sm">
            Shortlist
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CandidateCard;

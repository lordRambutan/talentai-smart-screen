
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillMatchProps {
  jobMatch: number;
  skills: string[];
  requiredSkills?: string[];
}

const SkillMatch = ({ jobMatch, skills, requiredSkills = ["JavaScript", "React", "TypeScript", "CSS", "HTML", "Node.js"] }: SkillMatchProps) => {
  // Determine match color based on score
  const getMatchColor = (score: number) => {
    if (score >= 0.8) return "text-green-500";
    if (score >= 0.6) return "text-amber-500";
    return "text-red-500";
  };

  // Filter matching skills
  const matchingSkills = skills.filter(skill => 
    requiredSkills.includes(skill)
  );
  
  // Filter missing skills
  const missingSkills = requiredSkills.filter(skill => 
    !skills.includes(skill)
  );

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between">
        <h3 className="font-medium">Job Match Score</h3>
        <span className={cn("text-2xl font-bold", getMatchColor(jobMatch))}>
          {Math.round(jobMatch * 100)}%
        </span>
      </div>

      <Progress 
        value={jobMatch * 100} 
        className={cn(
          "h-2", 
          jobMatch >= 0.8 ? "bg-green-100" : jobMatch >= 0.6 ? "bg-amber-100" : "bg-red-100"
        )}
      />
      
      <div className="pt-2">
        <h4 className="text-sm font-medium mb-2">Matching Skills</h4>
        <div className="flex flex-wrap gap-2">
          {matchingSkills.map(skill => (
            <Badge key={skill} variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      
      {missingSkills.length > 0 && (
        <div className="pt-1">
          <h4 className="text-sm font-medium mb-2">Missing Skills</h4>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map(skill => (
              <Badge key={skill} variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillMatch;

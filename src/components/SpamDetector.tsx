
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface SpamDetectorProps {
  spamProbability: number;
}

const SpamDetector = ({ spamProbability }: SpamDetectorProps) => {
  // Determine spam status based on probability
  const getSpamStatus = (probability: number) => {
    if (probability < 0.3) return "Low Risk";
    if (probability < 0.7) return "Medium Risk";
    return "High Risk";
  };

  // Determine color based on probability
  const getSpamColor = (probability: number) => {
    if (probability < 0.3) return "text-green-500";
    if (probability < 0.7) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between">
        <h3 className="font-medium">Spam Detection</h3>
        <div className="text-right">
          <span className={cn("text-2xl font-bold", getSpamColor(spamProbability))}>
            {Math.round(spamProbability * 100)}%
          </span>
          <p className={cn("text-xs", getSpamColor(spamProbability))}>
            {getSpamStatus(spamProbability)}
          </p>
        </div>
      </div>

      <Progress 
        value={spamProbability * 100} 
        className={cn(
          "h-2", 
          spamProbability < 0.3 ? "bg-green-100" : spamProbability < 0.7 ? "bg-amber-100" : "bg-red-100"
        )}
        indicatorClassName={cn(
          spamProbability < 0.3 ? "bg-green-500" : spamProbability < 0.7 ? "bg-amber-500" : "bg-red-500"
        )}
      />

      <div className="text-xs text-muted-foreground">
        {spamProbability < 0.3 ? (
          "This resume appears to be legitimate with no spam indicators detected."
        ) : spamProbability < 0.7 ? (
          "Some elements of this resume may require verification."
        ) : (
          "Multiple red flags detected. This resume contains signs of auto-generation or spam."
        )}
      </div>
    </div>
  );
};

export default SpamDetector;

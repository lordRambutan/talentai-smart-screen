
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FileText } from "lucide-react";

const FileUploadZone = ({ onFileProcessed }: { onFileProcessed: (data: any) => void }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const processFile = (file: File) => {
    setIsProcessing(true);
    
    // Simulate file processing with a timeout
    setTimeout(() => {
      // In a real application, this would be an API call to parse the resume
      const mockData = {
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        phone: "555-123-4567",
        skills: ["JavaScript", "React", "Node.js", "TypeScript", "UI/UX Design"],
        experience: [
          {
            title: "Senior Frontend Developer",
            company: "TechCorp Inc.",
            duration: "2020 - Present",
            description: "Led development of company's main product dashboard using React."
          },
          {
            title: "Frontend Developer",
            company: "WebSolutions",
            duration: "2018 - 2020",
            description: "Worked on various client projects using modern JavaScript frameworks."
          }
        ],
        education: [
          {
            degree: "BSc Computer Science",
            institution: "University of Technology",
            year: "2018"
          }
        ],
        spamProbability: 0.12,
        jobMatch: 0.87
      };

      setIsProcessing(false);
      toast.success(`Successfully processed ${file.name}`);
      onFileProcessed(mockData);
    }, 2000);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf" || file.type.includes("word")) {
        processFile(file);
      } else {
        toast.error("Please upload PDF or Word documents only");
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type === "application/pdf" || file.type.includes("word")) {
        processFile(file);
      } else {
        toast.error("Please upload PDF or Word documents only");
      }
    }
  };

  return (
    <div
      className={`w-full rounded-lg border-2 border-dashed p-10 text-center transition-all ${
        isDragging ? "border-primary bg-primary/5" : "border-border"
      } ${isProcessing ? "opacity-50" : ""} bg-card text-card-foreground`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center">
        <FileText 
          size={48} 
          className="mb-4 text-muted-foreground" 
        />

        <h3 className="mb-2 text-lg font-semibold text-foreground">Upload Resume</h3>
        <p className="mb-4 text-sm text-muted-foreground max-w-md">
          Drag and drop a PDF or Word document here, or click the button below to
          select a file for AI-powered parsing and analysis
        </p>
        
        <label htmlFor="file-upload">
          <Button 
            variant="default" 
            className="relative cursor-pointer"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Select File"}
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              accept=".pdf,.doc,.docx,application/pdf,application/msword"
              onChange={handleFileSelect}
              disabled={isProcessing}
            />
          </Button>
        </label>
        <p className="mt-2 text-xs text-muted-foreground">
          Supported formats: PDF, DOC, DOCX
        </p>
      </div>
    </div>
  );
};

export default FileUploadZone;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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
      } ${isProcessing ? "opacity-50" : ""} bg-background`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4 text-muted-foreground"
        >
          <path
            d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M13.5 16.5h-1.125C11.2765 16.5 10.5 17.2765 10.5 18.375V21M4.5 16.5h4.5M6.75 19.5h2.25M4.5 12H12M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

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

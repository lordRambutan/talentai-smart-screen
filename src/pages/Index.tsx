
import { useState } from "react";
import NavBar from "@/components/NavBar";
import FileUploadZone from "@/components/FileUploadZone";
import CandidateCard from "@/components/CandidateCard";
import JobDescription from "@/components/JobDescription";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  const [resumeData, setResumeData] = useState<any>(null);

  const handleFileProcessed = (data: any) => {
    setResumeData(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <div className="flex-1">
        <div className="container py-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatsCard
              title="Active Candidates"
              value="24"
              trend="up"
              trendValue="12%"
              description="from last week"
            />
            <StatsCard
              title="Spam Detected"
              value="8"
              trend="down"
              trendValue="3%"
              description="from last week"
            />
            <StatsCard
              title="Job Match Rate"
              value="68%"
              description="average across all resumes"
            />
            <StatsCard
              title="Processing Time"
              value="1.2s"
              description="average per resume"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Upload New Resume</h2>
                <FileUploadZone onFileProcessed={handleFileProcessed} />
              </div>
              
              {resumeData && (
                <div className="animate-in fade-in duration-500">
                  <CandidateCard
                    name={resumeData.name}
                    email={resumeData.email}
                    phone={resumeData.phone}
                    skills={resumeData.skills}
                    experience={resumeData.experience}
                    education={resumeData.education}
                    spamProbability={resumeData.spamProbability}
                    jobMatch={resumeData.jobMatch}
                  />
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <JobDescription />
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">How It Works</h2>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
                    <span>Upload a resume in PDF or Word format</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
                    <span>Our AI parses and analyzes the content</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
                    <span>Resume is checked for spam/AI-generated content</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">4</span>
                    <span>Skills are matched to your job description</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">5</span>
                    <span>Qualified candidates are presented for review</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

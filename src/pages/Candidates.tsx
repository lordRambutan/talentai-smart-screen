
import { useState } from "react";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DataTable from "@/components/DataTable";
import SearchAndFilter from "@/components/SearchAndFilter";
import CandidateCard from "@/components/CandidateCard";
import { mockCandidates, Candidate } from "@/lib/mockData";
import { useToast } from "@/hooks/use-toast";

const Candidates = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    status: "all",
    spamRisk: "all",
    jobMatch: "all"
  });
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  // Filter candidates based on search query and filters
  const filteredCandidates = mockCandidates.filter(candidate => {
    // Search query filter
    if (
      searchQuery &&
      !candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !candidate.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !candidate.skills.some(skill => 
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ) {
      return false;
    }

    // Status filter
    if (filters.status !== "all" && candidate.status !== filters.status) {
      return false;
    }

    // Spam risk filter
    if (filters.spamRisk !== "all") {
      if (filters.spamRisk === "low" && candidate.spamProbability >= 0.3) {
        return false;
      } else if (filters.spamRisk === "medium" && (candidate.spamProbability < 0.3 || candidate.spamProbability >= 0.7)) {
        return false;
      } else if (filters.spamRisk === "high" && candidate.spamProbability < 0.7) {
        return false;
      }
    }

    // Job match filter
    if (filters.jobMatch !== "all") {
      if (filters.jobMatch === "high" && candidate.jobMatch < 0.8) {
        return false;
      } else if (filters.jobMatch === "medium" && (candidate.jobMatch < 0.6 || candidate.jobMatch >= 0.8)) {
        return false;
      } else if (filters.jobMatch === "low" && candidate.jobMatch >= 0.6) {
        return false;
      }
    }

    return true;
  });

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleFilter = (id: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleView = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleAction = (id: string, action: 'shortlist' | 'reject') => {
    toast({
      title: action === 'shortlist' ? "Candidate Shortlisted" : "Candidate Rejected",
      description: `Candidate ID: ${id} has been ${action === 'shortlist' ? 'shortlisted' : 'rejected'}.`,
    });
  };

  // Table columns
  const columns = [
    {
      header: "Candidate",
      accessorKey: "name" as keyof Candidate,
      cell: (row: Candidate) => (
        <div>
          <div className="font-medium">{row.name}</div>
          <div className="text-sm text-muted-foreground">{row.email}</div>
        </div>
      ),
    },
    {
      header: "Skills",
      accessorKey: "skills" as keyof Candidate,
      cell: (row: Candidate) => (
        <div className="flex flex-wrap gap-1">
          {row.skills.slice(0, 3).map(skill => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {row.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{row.skills.length - 3}
            </Badge>
          )}
        </div>
      ),
    },
    {
      header: "Status",
      accessorKey: "status" as keyof Candidate,
      cell: (row: Candidate) => (
        <Badge variant={
          row.status === "shortlisted" ? "default" :
          row.status === "rejected" ? "destructive" : "outline"
        }>
          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        </Badge>
      ),
    },
    {
      header: "Spam Risk",
      accessorKey: "spamProbability" as keyof Candidate,
      cell: (row: Candidate) => {
        const spamLevel = row.spamProbability < 0.3 
          ? "Low" 
          : row.spamProbability < 0.7 
          ? "Medium" 
          : "High";
          
        return (
          <Badge variant={
            spamLevel === "Low" ? "success" :
            spamLevel === "Medium" ? "warning" : "destructive"
          } className={
            spamLevel === "Low" ? "bg-green-100 text-green-800 hover:bg-green-200" :
            spamLevel === "Medium" ? "bg-amber-100 text-amber-800 hover:bg-amber-200" :
            "bg-red-100 text-red-800 hover:bg-red-200"
          }>
            {spamLevel} ({Math.round(row.spamProbability * 100)}%)
          </Badge>
        );
      },
    },
    {
      header: "Job Match",
      accessorKey: "jobMatch" as keyof Candidate,
      cell: (row: Candidate) => (
        <div className="font-medium">
          {Math.round(row.jobMatch * 100)}%
        </div>
      ),
    },
    {
      header: "Applied Date",
      accessorKey: "appliedDate" as keyof Candidate,
    },
    {
      header: "Actions",
      accessorKey: "id" as keyof Candidate,
      cell: (row: Candidate) => (
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" onClick={() => handleView(row)}>
            View
          </Button>
          <Button 
            size="sm" 
            variant={row.status === "shortlisted" ? "outline" : "default"}
            disabled={row.status === "shortlisted"}
            onClick={() => handleAction(row.id, 'shortlist')}
          >
            Shortlist
          </Button>
          <Button 
            size="sm" 
            variant={row.status === "rejected" ? "outline" : "destructive"}
            disabled={row.status === "rejected"}
            onClick={() => handleAction(row.id, 'reject')}
          >
            Reject
          </Button>
        </div>
      ),
    },
  ];

  const filterOptions = [
    {
      id: "status",
      name: "Status",
      options: [
        { value: "all", label: "All Status" },
        { value: "new", label: "New" },
        { value: "shortlisted", label: "Shortlisted" },
        { value: "rejected", label: "Rejected" }
      ]
    },
    {
      id: "spamRisk",
      name: "Spam Risk",
      options: [
        { value: "all", label: "All Risk Levels" },
        { value: "low", label: "Low Risk" },
        { value: "medium", label: "Medium Risk" },
        { value: "high", label: "High Risk" }
      ]
    },
    {
      id: "jobMatch",
      name: "Job Match",
      options: [
        { value: "all", label: "All Match Levels" },
        { value: "high", label: "High Match (>80%)" },
        { value: "medium", label: "Medium Match (60-80%)" },
        { value: "low", label: "Low Match (<60%)" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <div className="container py-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Candidates</h1>
          <div className="flex space-x-2">
            <Button
              variant={viewMode === "table" ? "default" : "outline"}
              onClick={() => setViewMode("table")}
            >
              Table View
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              onClick={() => setViewMode("grid")}
            >
              Grid View
            </Button>
          </div>
        </div>

        <SearchAndFilter 
          filterOptions={filterOptions}
          onSearch={handleSearch}
          onFilter={handleFilter}
        />

        {filteredCandidates.length === 0 ? (
          <div className="text-center py-8">
            <h3 className="text-lg font-medium">No candidates match your filters</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          viewMode === "table" ? (
            <DataTable 
              data={filteredCandidates} 
              columns={columns} 
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCandidates.map(candidate => (
                <CandidateCard
                  key={candidate.id}
                  name={candidate.name}
                  email={candidate.email}
                  phone={candidate.phone}
                  skills={candidate.skills}
                  experience={candidate.experience}
                  education={candidate.education}
                  spamProbability={candidate.spamProbability}
                  jobMatch={candidate.jobMatch}
                />
              ))}
            </div>
          )
        )}

        {selectedCandidate && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold">{selectedCandidate.name}</h2>
                  <Button variant="ghost" onClick={() => setSelectedCandidate(null)}>
                    Close
                  </Button>
                </div>
                <CandidateCard
                  name={selectedCandidate.name}
                  email={selectedCandidate.email}
                  phone={selectedCandidate.phone}
                  skills={selectedCandidate.skills}
                  experience={selectedCandidate.experience}
                  education={selectedCandidate.education}
                  spamProbability={selectedCandidate.spamProbability}
                  jobMatch={selectedCandidate.jobMatch}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Candidates;

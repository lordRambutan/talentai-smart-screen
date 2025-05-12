
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DataTable from "@/components/DataTable";
import SearchAndFilter from "@/components/SearchAndFilter";
import JobCard from "@/components/JobCard";
import { mockJobs, Job } from "@/lib/mockData";
import { Plus, LayoutGrid, List } from "lucide-react";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    department: "all",
    status: "all"
  });
  const [viewMode, setViewMode] = useState<"table" | "grid">("grid");

  // Filter jobs based on search query and filters
  const filteredJobs = mockJobs.filter(job => {
    // Search query filter
    if (
      searchQuery &&
      !job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !job.department.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !job.skills.some(skill => 
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ) {
      return false;
    }

    // Department filter
    if (filters.department !== "all" && job.department !== filters.department) {
      return false;
    }

    // Status filter
    if (filters.status !== "all" && job.status !== filters.status) {
      return false;
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

  const handleEditJob = (id: string) => {
    console.log(`Edit job: ${id}`);
  };

  const handleViewApplicants = (id: string) => {
    console.log(`View applicants for job: ${id}`);
  };

  // Extract unique departments for filter
  const departments = Array.from(new Set(mockJobs.map(job => job.department)));

  // Table columns
  const columns = [
    {
      header: "Job Title",
      accessorKey: "title" as keyof Job,
      cell: (row: Job) => (
        <div>
          <div className="font-medium">{row.title}</div>
          <div className="text-sm text-muted-foreground">{row.department} • {row.location}</div>
        </div>
      ),
    },
    {
      header: "Type",
      accessorKey: "type" as keyof Job,
    },
    {
      header: "Skills",
      accessorKey: "skills" as keyof Job,
      cell: (row: Job) => (
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
      accessorKey: "status" as keyof Job,
      cell: (row: Job) => (
        <Badge variant={
          row.status === "active" ? "default" :
          row.status === "closed" ? "secondary" : "outline"
        }>
          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        </Badge>
      ),
    },
    {
      header: "Posted Date",
      accessorKey: "postedDate" as keyof Job,
    },
    {
      header: "Applicants",
      accessorKey: "applicantCount" as keyof Job,
      cell: (row: Job) => (
        <div>
          {row.applicantCount} <span className="text-muted-foreground">({row.shortlistCount} shortlisted)</span>
        </div>
      ),
    },
    {
      header: "Actions",
      accessorKey: "id" as keyof Job,
      cell: (row: Job) => (
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" onClick={() => handleEditJob(row.id)}>
            Edit
          </Button>
          <Button 
            size="sm" 
            variant="default"
            onClick={() => handleViewApplicants(row.id)}
          >
            View Applicants
          </Button>
        </div>
      ),
    },
  ];

  const filterOptions = [
    {
      id: "department",
      name: "Department",
      options: [
        { value: "all", label: "All Departments" },
        ...departments.map(dept => ({ value: dept, label: dept }))
      ]
    },
    {
      id: "status",
      name: "Status",
      options: [
        { value: "all", label: "All Status" },
        { value: "active", label: "Active" },
        { value: "closed", label: "Closed" },
        { value: "draft", label: "Draft" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background animate-fade-in">
      <NavBar />
      <div className="container py-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Jobs</h1>
          <div className="flex space-x-2">
            <Button
              variant={viewMode === "table" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("table")}
              className="hidden sm:flex"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className="hidden sm:flex"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button asChild>
              <Link to="/jobs/new" className="flex items-center gap-1">
                <Plus className="h-4 w-4" /> 
                <span>New Job Post</span>
              </Link>
            </Button>
          </div>
        </div>

        <SearchAndFilter 
          filterOptions={filterOptions}
          onSearch={handleSearch}
          onFilter={handleFilter}
          className="animate-slide-in"
        />

        {filteredJobs.length === 0 ? (
          <div className="text-center py-8 animate-fade-in">
            <h3 className="text-lg font-medium">No jobs match your filters</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            <Button asChild className="mt-4">
              <Link to="/jobs/new">
                Create Your First Job Post
              </Link>
            </Button>
          </div>
        ) : (
          viewMode === "table" ? (
            <div className="animate-fade-in">
              <DataTable 
                data={filteredJobs} 
                columns={columns}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredJobs.map(job => (
                <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  department={job.department}
                  location={job.location}
                  type={job.type}
                  postedDate={job.postedDate}
                  skills={job.skills}
                  applicantCount={job.applicantCount}
                  shortlistCount={job.shortlistCount}
                  onEdit={handleEditJob}
                  onView={handleViewApplicants}
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Jobs;

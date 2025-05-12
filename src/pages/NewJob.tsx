
import React from "react";
import NavBar from "@/components/NavBar";
import JobForm from "@/components/JobForm";

const NewJob = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <div className="container py-8 space-y-6 flex-1">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Create New Job Post</h1>
        </div>
        <JobForm />
      </div>
    </div>
  );
};

export default NewJob;

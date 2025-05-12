
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TalentAI
              </span>
            </div>
          </Link>
        </div>
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            to="/candidates"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Candidates
          </Link>
          <Link
            to="/jobs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Jobs
          </Link>
          <Link
            to="/analytics"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Analytics
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="secondary">
            <span>New Job Post</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

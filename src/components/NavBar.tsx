
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Briefcase, Plus } from "lucide-react";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Briefcase className="h-6 w-6 text-primary mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TalentAI
              </span>
            </div>
          </Link>
        </div>
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              currentPath === "/" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Dashboard
          </Link>
          <Link
            to="/candidates"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              currentPath === "/candidates" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Candidates
          </Link>
          <Link
            to="/jobs"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              currentPath.startsWith("/jobs") ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Jobs
          </Link>
          <Link
            to="/analytics"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              currentPath === "/analytics" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Analytics
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link to="/jobs/new" className="flex items-center gap-1">
              <Plus className="h-4 w-4" /> 
              <span>New Job Post</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

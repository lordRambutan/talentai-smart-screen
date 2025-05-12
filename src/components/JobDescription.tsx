
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const JobDescription = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-medium">Job Description</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg">Frontend Developer</h3>
          <p className="text-sm text-muted-foreground">Full-time • Remote • Posted 5 days ago</p>
        </div>
        <p className="text-sm">
          We are seeking a talented Frontend Developer to join our growing team. 
          The ideal candidate should have experience building modern web applications 
          using React, TypeScript, and CSS frameworks.
        </p>
        <div>
          <h4 className="font-medium text-sm mb-2">Required Skills</h4>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="outline">JavaScript</Badge>
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">CSS</Badge>
            <Badge variant="outline">HTML</Badge>
            <Badge variant="outline">Node.js</Badge>
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Responsibilities:</h4>
          <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
            <li>Develop new user-facing features using React</li>
            <li>Build reusable components and libraries for future use</li>
            <li>Optimize applications for maximum speed and scalability</li>
            <li>Collaborate with back-end developers and designers</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Qualifications:</h4>
          <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
            <li>2+ years experience with JavaScript and React</li>
            <li>Familiarity with TypeScript and modern CSS</li>
            <li>Understanding of Git version control</li>
            <li>Experience with responsive design</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobDescription;

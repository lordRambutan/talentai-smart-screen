
export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  status: 'new' | 'shortlisted' | 'rejected';
  spamProbability: number;
  jobMatch: number;
  appliedDate: string;
  appliedJobId: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  postedDate: string;
  status: 'active' | 'closed' | 'draft';
  applicantCount: number;
  shortlistCount: number;
}

export const mockCandidates: Candidate[] = [
  {
    id: "c1",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "555-123-4567",
    skills: ["JavaScript", "React", "TypeScript", "CSS", "Node.js", "GraphQL"],
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        duration: "2020 - Present",
        description: "Lead the development of the company's main product using React and TypeScript."
      },
      {
        title: "Frontend Developer",
        company: "WebSolutions Ltd.",
        duration: "2017 - 2020",
        description: "Worked on various client projects using JavaScript and React."
      }
    ],
    education: [
      {
        degree: "MSc Computer Science",
        institution: "Tech University",
        year: "2017"
      }
    ],
    status: "shortlisted",
    spamProbability: 0.05,
    jobMatch: 0.92,
    appliedDate: "2023-05-10",
    appliedJobId: "j1"
  },
  {
    id: "c2",
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    phone: "555-987-6543",
    skills: ["Python", "Django", "SQL", "AWS", "Docker"],
    experience: [
      {
        title: "Backend Developer",
        company: "DataSystems LLC",
        duration: "2019 - Present",
        description: "Developing and maintaining RESTful APIs using Python and Django."
      }
    ],
    education: [
      {
        degree: "BSc Computer Engineering",
        institution: "State University",
        year: "2019"
      }
    ],
    status: "new",
    spamProbability: 0.12,
    jobMatch: 0.65,
    appliedDate: "2023-05-15",
    appliedJobId: "j2"
  },
  {
    id: "c3",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "555-567-8901",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    experience: [
      {
        title: "Full Stack Developer",
        company: "AppWorks Inc.",
        duration: "2018 - Present",
        description: "Building full-stack applications using MERN stack."
      }
    ],
    education: [
      {
        degree: "BSc Information Technology",
        institution: "Tech Institute",
        year: "2018"
      }
    ],
    status: "shortlisted",
    spamProbability: 0.08,
    jobMatch: 0.87,
    appliedDate: "2023-05-12",
    appliedJobId: "j1"
  },
  {
    id: "c4",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    phone: "555-234-5678",
    skills: ["UI/UX Design", "Figma", "Adobe XD", "HTML", "CSS"],
    experience: [
      {
        title: "UI/UX Designer",
        company: "DesignHub Co.",
        duration: "2021 - Present",
        description: "Designing user interfaces and experiences for mobile and web applications."
      }
    ],
    education: [
      {
        degree: "BA Design",
        institution: "Arts College",
        year: "2021"
      }
    ],
    status: "rejected",
    spamProbability: 0.10,
    jobMatch: 0.45,
    appliedDate: "2023-05-18",
    appliedJobId: "j3"
  },
  {
    id: "c5",
    name: "David Kim",
    email: "david.kim@example.com",
    phone: "555-345-6789",
    skills: ["JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS"],
    experience: [
      {
        title: "Frontend Developer",
        company: "WebTech Solutions",
        duration: "2020 - Present",
        description: "Developing modern web applications using React and TypeScript."
      }
    ],
    education: [
      {
        degree: "BSc Software Engineering",
        institution: "National University",
        year: "2020"
      }
    ],
    status: "new",
    spamProbability: 0.03,
    jobMatch: 0.89,
    appliedDate: "2023-05-20",
    appliedJobId: "j1"
  },
  {
    id: "c6",
    name: "Jessica White",
    email: "jessica.white@example.com",
    phone: "555-456-7890",
    skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis", "SQL"],
    experience: [
      {
        title: "Data Scientist",
        company: "Data Insights Inc.",
        duration: "2019 - Present",
        description: "Analyzing data and building machine learning models."
      }
    ],
    education: [
      {
        degree: "MSc Data Science",
        institution: "Science University",
        year: "2019"
      }
    ],
    status: "shortlisted",
    spamProbability: 0.02,
    jobMatch: 0.76,
    appliedDate: "2023-05-16",
    appliedJobId: "j4"
  },
  {
    id: "c7",
    name: "James Taylor",
    email: "james.taylor@example.com",
    phone: "555-321-6547",
    skills: ["React Native", "JavaScript", "Firebase", "Redux", "Mobile App Development"],
    experience: [
      {
        title: "Mobile App Developer",
        company: "MobileFirst Co.",
        duration: "2021 - Present",
        description: "Building cross-platform mobile applications using React Native."
      }
    ],
    education: [
      {
        degree: "BSc Mobile Computing",
        institution: "Tech Academy",
        year: "2021"
      }
    ],
    status: "new",
    spamProbability: 0.15,
    jobMatch: 0.82,
    appliedDate: "2023-05-22",
    appliedJobId: "j5"
  },
  {
    id: "c8",
    name: "Sophia Garcia",
    email: "sophia.garcia@example.com",
    phone: "555-789-1234",
    skills: ["JavaScript", "Vue.js", "Nuxt.js", "CSS", "HTML"],
    experience: [
      {
        title: "Vue.js Developer",
        company: "VueWorks LLC",
        duration: "2020 - Present",
        description: "Building web applications using Vue.js ecosystem."
      }
    ],
    education: [
      {
        degree: "BSc Web Development",
        institution: "Dev University",
        year: "2020"
      }
    ],
    status: "shortlisted",
    spamProbability: 0.07,
    jobMatch: 0.78,
    appliedDate: "2023-05-17",
    appliedJobId: "j2"
  },
  {
    id: "c9",
    name: "Robert Martin",
    email: "robert.martin@fakeemail.co",
    phone: "555-123-7777",
    skills: ["JavaScript", "React", "Node.js", "SQL", "AWS"],
    experience: [
      {
        title: "Senior Developer",
        company: "Made Up Inc.",
        duration: "2018 - Present",
        description: "Leading development teams and architecting solutions."
      }
    ],
    education: [
      {
        degree: "BSc Computer Science",
        institution: "Online University",
        year: "2016"
      }
    ],
    status: "new",
    spamProbability: 0.85,
    jobMatch: 0.62,
    appliedDate: "2023-05-21",
    appliedJobId: "j3"
  },
  {
    id: "c10",
    name: "Amanda Wilson",
    email: "amanda.wilson@example.com",
    phone: "555-234-5678",
    skills: ["Project Management", "Agile", "Scrum", "JIRA", "Team Leadership"],
    experience: [
      {
        title: "Technical Project Manager",
        company: "ManageTech Inc.",
        duration: "2017 - Present",
        description: "Managing technical projects and development teams."
      }
    ],
    education: [
      {
        degree: "MBA Technology Management",
        institution: "Business School",
        year: "2017"
      }
    ],
    status: "rejected",
    spamProbability: 0.20,
    jobMatch: 0.58,
    appliedDate: "2023-05-14",
    appliedJobId: "j4"
  }
];

export const mockJobs: Job[] = [
  {
    id: "j1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for a Senior Frontend Developer to join our team. You'll be responsible for building and maintaining our web application using React and TypeScript.",
    skills: ["JavaScript", "React", "TypeScript", "CSS", "HTML", "Redux"],
    postedDate: "2023-05-01",
    status: "active",
    applicantCount: 24,
    shortlistCount: 5
  },
  {
    id: "j2",
    title: "Backend Developer",
    department: "Engineering",
    location: "New York",
    type: "Full-time",
    description: "We're seeking a Backend Developer to join our team. You'll be responsible for building and maintaining our API using Python and Django.",
    skills: ["Python", "Django", "SQL", "API Design", "AWS"],
    postedDate: "2023-05-05",
    status: "active",
    applicantCount: 18,
    shortlistCount: 3
  },
  {
    id: "j3",
    title: "UI/UX Designer",
    department: "Design",
    location: "San Francisco",
    type: "Full-time",
    description: "We're looking for a UI/UX Designer to join our team. You'll be responsible for designing user interfaces and experiences for our web and mobile applications.",
    skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Prototyping"],
    postedDate: "2023-05-10",
    status: "active",
    applicantCount: 12,
    shortlistCount: 2
  },
  {
    id: "j4",
    title: "Data Scientist",
    department: "Data",
    location: "Boston",
    type: "Full-time",
    description: "We're seeking a Data Scientist to join our team. You'll be responsible for analyzing data and building machine learning models.",
    skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis", "SQL"],
    postedDate: "2023-05-12",
    status: "active",
    applicantCount: 9,
    shortlistCount: 2
  },
  {
    id: "j5",
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    description: "We're looking for a Mobile App Developer to join our team. You'll be responsible for building and maintaining our mobile applications using React Native.",
    skills: ["React Native", "JavaScript", "Firebase", "Redux", "Mobile App Development"],
    postedDate: "2023-05-15",
    status: "active",
    applicantCount: 7,
    shortlistCount: 1
  },
  {
    id: "j6",
    title: "DevOps Engineer",
    department: "Operations",
    location: "Seattle",
    type: "Full-time",
    description: "We're seeking a DevOps Engineer to join our team. You'll be responsible for building and maintaining our infrastructure and CI/CD pipelines.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    postedDate: "2023-05-18",
    status: "draft",
    applicantCount: 0,
    shortlistCount: 0
  }
];

// Generate application analytics data
export const analyticsData = {
  weeklyApplications: [
    { name: 'Week 1', applications: 15 },
    { name: 'Week 2', applications: 20 },
    { name: 'Week 3', applications: 25 },
    { name: 'Week 4', applications: 32 },
    { name: 'Week 5', applications: 28 },
    { name: 'Week 6', applications: 35 },
    { name: 'Week 7', applications: 42 },
    { name: 'Week 8', applications: 45 },
  ],
  skillDistribution: [
    { name: 'JavaScript', count: 32 },
    { name: 'React', count: 28 },
    { name: 'TypeScript', count: 21 },
    { name: 'Python', count: 18 },
    { name: 'Node.js', count: 15 },
    { name: 'SQL', count: 12 },
    { name: 'AWS', count: 10 },
    { name: 'CSS', count: 27 },
  ],
  spamDetection: [
    { name: 'Legitimate', value: 75 },
    { name: 'Suspicious', value: 15 },
    { name: 'Spam', value: 10 },
  ],
  hiringFunnel: [
    { name: 'Applications', value: 120 },
    { name: 'Screened', value: 80 },
    { name: 'Interviews', value: 40 },
    { name: 'Offers', value: 15 },
    { name: 'Hires', value: 12 },
  ],
  jobPerformance: [
    { name: 'Sr. Frontend Developer', applicants: 24, qualified: 18, shortlisted: 5 },
    { name: 'Backend Developer', applicants: 18, qualified: 12, shortlisted: 3 },
    { name: 'UI/UX Designer', applicants: 12, qualified: 8, shortlisted: 2 },
    { name: 'Data Scientist', applicants: 9, qualified: 6, shortlisted: 2 },
    { name: 'Mobile App Developer', applicants: 7, qualified: 5, shortlisted: 1 },
  ],
};

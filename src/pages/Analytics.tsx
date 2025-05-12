
import NavBar from "@/components/NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { analyticsData, mockCandidates, mockJobs } from "@/lib/mockData";
import { 
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  FunnelChart,
  Funnel,
  FunnelProps,
} from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Analytics = () => {
  // Calculate top statistics
  const totalApplications = mockCandidates.length;
  const totalJobs = mockJobs.length;
  const totalActiveJobs = mockJobs.filter(job => job.status === 'active').length;
  const averageSpamProbability = 
    mockCandidates.reduce((total, candidate) => total + candidate.spamProbability, 0) / 
    mockCandidates.length;
  const averageJobMatch = 
    mockCandidates.reduce((total, candidate) => total + candidate.jobMatch, 0) / 
    mockCandidates.length;
  const spamCandidates = mockCandidates.filter(candidate => candidate.spamProbability > 0.7).length;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <div className="container py-8 space-y-8">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Applications</CardTitle>
              <CardDescription>All time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalApplications}</div>
              <p className="text-muted-foreground text-sm mt-1">From {totalJobs} jobs</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Spam Detection Rate</CardTitle>
              <CardDescription>Average across all resumes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{(averageSpamProbability * 100).toFixed(1)}%</div>
              <p className="text-muted-foreground text-sm mt-1">{spamCandidates} spam candidates detected</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Average Job Match</CardTitle>
              <CardDescription>All applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{(averageJobMatch * 100).toFixed(1)}%</div>
              <p className="text-muted-foreground text-sm mt-1">Based on skill matching</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Applications</CardTitle>
              <CardDescription>Application volume over time</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={analyticsData.weeklyApplications}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="applications"
                      stroke="#0ea5e9"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skill Distribution</CardTitle>
              <CardDescription>Most common skills among candidates</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={analyticsData.skillDistribution}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#9b87f5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Spam Detection Distribution</CardTitle>
              <CardDescription>Breakdown of resume legitimacy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={analyticsData.spamDetection}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {analyticsData.spamDetection.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hiring Funnel</CardTitle>
              <CardDescription>Conversion through hiring stages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <FunnelChart>
                    <Tooltip />
                    <Funnel
                      dataKey="value"
                      data={analyticsData.hiringFunnel}
                      nameKey="name"
                    >
                      {analyticsData.hiringFunnel.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Funnel>
                  </FunnelChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Job Performance Comparison</CardTitle>
            <CardDescription>Applicants, qualified candidates, and shortlisted by job</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={analyticsData.jobPerformance}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="applicants" stackId="a" fill="#8884d8" />
                  <Bar dataKey="qualified" stackId="a" fill="#82ca9d" />
                  <Bar dataKey="shortlisted" stackId="a" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;

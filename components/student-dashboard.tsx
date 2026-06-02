"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  BookOpen,
  DollarSign,
  FileText,
  Home,
  BarChart3,
  Clock,
  Download,
  Ticket,
  UtensilsCrossed,
  Share2,
} from "lucide-react"
import StudentNav from "./student-nav"
import AttendanceCard from "./student-attendance"
import AcademicsCard from "./student-academics"
import FeesCard from "./student-fees"
import AnnouncementsCard from "./student-announcements"
import TimetableCard from "./student-timetable"
import GatePassSystem from "./gate-pass-system"
import MessSystem from "./mess-system"
import SocialFeed from "./social-feed"

interface StudentDashboardProps {
  onLogout: () => void
}

export default function StudentDashboard({ onLogout }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock student data
  const studentData = {
    name: "Raj Kumar",
    rollNo: "20CS001",
    semester: "4th",
    gpa: "8.5",
    attendance: 87,
    totalFees: 150000,
    feesPaid: 120000,
    feesRemaining: 30000,
    courses: 6,
  }

  const announcements = [
    {
      id: 1,
      title: "Semester Exam Date",
      date: "Nov 15",
      priority: "high" as const,
      content: "Final exams starting from Nov 15",
    },
    {
      id: 2,
      title: "Fee Payment Reminder",
      date: "Nov 5",
      priority: "medium" as const,
      content: "Last date for fee payment is Nov 30",
    },
    {
      id: 3,
      title: "New Library Hours",
      date: "Nov 1",
      priority: "low" as const,
      content: "Library now open 24/7 during exam season",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StudentNav studentName={studentData.name} onLogout={onLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome, {studentData.name}</h1>
          <p className="text-muted-foreground">
            Roll No: {studentData.rollNo} | Semester: {studentData.semester}
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 sm:grid-cols-5 md:grid-cols-9 bg-card border border-border overflow-x-auto">
            <TabsTrigger value="overview" className="text-xs sm:text-sm flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="attendance" className="text-xs sm:text-sm flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Attend</span>
            </TabsTrigger>
            <TabsTrigger value="academics" className="text-xs sm:text-sm flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Academics</span>
            </TabsTrigger>
            <TabsTrigger value="fees" className="text-xs sm:text-sm flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">Fees</span>
            </TabsTrigger>
            <TabsTrigger value="timetable" className="text-xs sm:text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">Timetable</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="text-xs sm:text-sm flex items-center gap-1">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Docs</span>
            </TabsTrigger>
            <TabsTrigger value="gatepass" className="text-xs sm:text-sm flex items-center gap-1">
              <Ticket className="w-4 h-4" />
              <span className="hidden sm:inline">Gate</span>
            </TabsTrigger>
            <TabsTrigger value="mess" className="text-xs sm:text-sm flex items-center gap-1">
              <UtensilsCrossed className="w-4 h-4" />
              <span className="hidden sm:inline">Mess</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="text-xs sm:text-sm flex items-center gap-1">
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Social</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Attendance Overview */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">{studentData.attendance}%</div>
                  <Progress value={studentData.attendance} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    {studentData.attendance >= 75 ? "✓ Meeting requirement" : "⚠ Below requirement"}
                  </p>
                </CardContent>
              </Card>

              {/* GPA Overview */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Current GPA</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">{studentData.gpa}</div>
                  <Progress value={(Number.parseFloat(studentData.gpa) / 10) * 100} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">Out of 10.0</p>
                </CardContent>
              </Card>

              {/* Fees Overview */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Fees Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    ₹{studentData.feesRemaining.toLocaleString()}
                  </div>
                  <Progress value={(studentData.feesPaid / studentData.totalFees) * 100} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">Remaining to pay</p>
                </CardContent>
              </Card>

              {/* Courses Overview */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Enrolled Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">{studentData.courses}</div>
                  <p className="text-xs text-muted-foreground mt-2">Active courses this semester</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Announcements and Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <AnnouncementsCard announcements={announcements} />
              </div>
              <div className="space-y-4">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Download Certificate
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <FileText className="w-4 h-4 mr-2" />
                      Request Transfer Certificate
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Home className="w-4 h-4 mr-2" />
                      Hostel Application
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Attendance Tab */}
          <TabsContent value="attendance">
            <AttendanceCard />
          </TabsContent>

          {/* Academics Tab */}
          <TabsContent value="academics">
            <AcademicsCard />
          </TabsContent>

          {/* Fees Tab */}
          <TabsContent value="fees">
            <FeesCard feeData={studentData} />
          </TabsContent>

          {/* Timetable Tab */}
          <TabsContent value="timetable">
            <TimetableCard />
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <DocumentsSection />
          </TabsContent>

          {/* Gate Pass Tab */}
          <TabsContent value="gatepass">
            <GatePassSystem />
          </TabsContent>

          {/* Mess Tab */}
          <TabsContent value="mess">
            <MessSystem />
          </TabsContent>

          <TabsContent value="social">
            <SocialFeed />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

// Documents Section Component
function DocumentsSection() {
  const documents = [
    { id: 1, name: "Admission Letter", date: "2024-01-15", type: "PDF" },
    { id: 2, name: "ID Card", date: "2024-01-20", type: "PDF" },
    { id: 3, name: "Attendance Sheet", date: "2024-11-01", type: "PDF" },
    { id: 4, name: "Fee Receipt", date: "2024-10-30", type: "PDF" },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle>Important Documents</CardTitle>
        <CardDescription>Download your official documents</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex justify-between items-center p-3 bg-input rounded-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">{doc.date}</p>
                </div>
              </div>
              <Button size="sm" variant="ghost">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export { StudentDashboard }

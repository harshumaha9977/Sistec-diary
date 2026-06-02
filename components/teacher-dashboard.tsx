"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart3, BookOpen, Users, FileText, Calendar, CheckCircle, Plus, Edit2 } from "lucide-react"
import TeacherNav from "./teacher-nav"

interface TeacherDashboardProps {
  onLogout: () => void
}

export default function TeacherDashboard({ onLogout }: TeacherDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const teacherData = {
    name: "Dr. Rajesh Kumar",
    empId: "T001",
    department: "Computer Science",
    totalClasses: 6,
    totalStudents: 180,
  }

  const classes = [
    { id: 1, code: "CS301", name: "Data Structures", students: 30, time: "9-10 AM" },
    { id: 2, code: "CS302", name: "Web Development", students: 32, time: "11 AM-1 PM" },
    { id: 3, code: "CS305", name: "Theory of Computation", students: 28, time: "2-3 PM" },
  ]

  const assignments = [
    { id: 1, classCode: "CS301", title: "Binary Tree Implementation", dueDate: "Nov 15", submitted: 24, total: 30 },
    { id: 2, classCode: "CS302", title: "React Project", dueDate: "Nov 20", submitted: 28, total: 32 },
    { id: 3, classCode: "CS305", title: "Turing Machine Problem", dueDate: "Nov 18", submitted: 22, total: 28 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <TeacherNav teacherName={teacherData.name} onLogout={onLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome, {teacherData.name}</h1>
          <p className="text-muted-foreground">
            Employee ID: {teacherData.empId} | Department: {teacherData.department}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card border border-border">
            <TabsTrigger value="overview" className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="classes" className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Classes</span>
            </TabsTrigger>
            <TabsTrigger value="assignments" className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Assignments</span>
            </TabsTrigger>
            <TabsTrigger value="marks" className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Marks</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{teacherData.totalClasses}</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{teacherData.totalStudents}</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pending Assignments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-500">3</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Average Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">87%</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Recent Classes</CardTitle>
                  <CardDescription>Your scheduled classes this week</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {classes.map((cls) => (
                    <div key={cls.id} className="p-3 bg-input rounded-lg border border-border">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-foreground">{cls.name}</p>
                          <p className="text-xs text-muted-foreground">{cls.code}</p>
                        </div>
                        <Badge variant="outline">{cls.students} students</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{cls.time}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Assignment
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="w-4 h-4 mr-2" />
                    Mark Attendance
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Class
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="classes">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>My Classes</CardTitle>
                <CardDescription>All classes assigned to you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classes.map((cls) => (
                    <div
                      key={cls.id}
                      className="p-4 bg-input rounded-lg border border-border flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold text-foreground">{cls.name}</p>
                        <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                          <span>{cls.code}</span>
                          <span>{cls.students} Students</span>
                          <span>{cls.time}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Users className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Assignments</CardTitle>
                    <CardDescription>Track assignment submissions</CardDescription>
                  </div>
                  <Button size="sm" className="gap-1">
                    <Plus className="w-4 h-4" />
                    New Assignment
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <div key={assignment.id} className="p-4 bg-input rounded-lg border border-border">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-semibold text-foreground">{assignment.title}</p>
                          <p className="text-sm text-muted-foreground">{assignment.classCode}</p>
                        </div>
                        <Badge variant="outline">Due: {assignment.dueDate}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-border rounded-full h-2">
                          <div
                            className="bg-primary h-full rounded-full"
                            style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-foreground font-medium">
                          {assignment.submitted}/{assignment.total}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="marks">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Mark Management</CardTitle>
                <CardDescription>Enter and manage student marks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classes.map((cls) => (
                    <div
                      key={cls.id}
                      className="p-4 bg-input rounded-lg border border-border flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold text-foreground">{cls.name}</p>
                        <p className="text-sm text-muted-foreground">{cls.code}</p>
                      </div>
                      <Button size="sm">Enter Marks</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, BookOpen, AlertCircle, Plus, Edit2, Trash2, Download } from "lucide-react"
import AdminNav from "./admin-nav"

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const adminData = {
    name: "Admin Panel",
    role: "System Administrator",
  }

  const stats = [
    { label: "Total Students", value: "2,450", icon: Users },
    { label: "Total Teachers", value: "125", icon: BookOpen },
    { label: "Active Classes", value: "85", icon: BookOpen },
    { label: "Pending Issues", value: "12", icon: AlertCircle },
  ]

  const recentActivities = [
    { id: 1, type: "Student Registration", name: "Raj Kumar (20CS001)", time: "2 hours ago", status: "Completed" },
    { id: 2, type: "Fee Payment", name: "₹50,000 from 20CS002", time: "4 hours ago", status: "Completed" },
    { id: 3, type: "Attendance Issue", name: "Class CS301 - Low attendance", time: "6 hours ago", status: "Pending" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AdminNav onLogout={onLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">System Administration and Management</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card border border-border">
            <TabsTrigger value="overview" className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Users</span>
            </TabsTrigger>
            <TabsTrigger value="classes" className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Classes</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Reports</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <Card key={idx} className="bg-card border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest system activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="p-3 bg-input rounded-lg border border-border">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-foreground">{activity.type}</p>
                          <p className="text-xs text-muted-foreground">{activity.name}</p>
                        </div>
                        <Badge variant={activity.status === "Completed" ? "default" : "secondary"}>
                          {activity.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
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
                    Add Student
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Teacher
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Create Class
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage all system users</CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Name</th>
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">ID</th>
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Role</th>
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Status</th>
                        <th className="text-right py-2 px-2 text-muted-foreground font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Raj Kumar", id: "20CS001", role: "Student", status: "Active" },
                        { name: "Dr. Rajesh", id: "T001", role: "Teacher", status: "Active" },
                        { name: "Priya Singh", id: "20CS002", role: "Student", status: "Active" },
                        { name: "Admin User", id: "ADM001", role: "Admin", status: "Active" },
                      ].map((user, idx) => (
                        <tr key={idx} className="border-b border-border hover:bg-input/50">
                          <td className="py-3 px-2 text-foreground">{user.name}</td>
                          <td className="py-3 px-2 text-foreground">{user.id}</td>
                          <td className="py-3 px-2">
                            <Badge variant="outline">{user.role}</Badge>
                          </td>
                          <td className="py-3 px-2">
                            <Badge variant="default">{user.status}</Badge>
                          </td>
                          <td className="py-3 px-2 text-right flex gap-1 justify-end">
                            <Button size="sm" variant="ghost">
                              <Edit2 className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="classes">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Class Management</CardTitle>
                    <CardDescription>Manage all classes and sections</CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Class
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { code: "CS301", name: "Data Structures", teacher: "Dr. Rajesh", students: 30, semester: "4th" },
                    { code: "CS302", name: "Web Development", teacher: "Prof. Sharma", students: 32, semester: "4th" },
                    {
                      code: "CS305",
                      name: "Theory of Computation",
                      teacher: "Dr. Verma",
                      students: 28,
                      semester: "4th",
                    },
                  ].map((cls, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-input rounded-lg border border-border flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold text-foreground">{cls.name}</p>
                        <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                          <span>{cls.code}</span>
                          <span>Teacher: {cls.teacher}</span>
                          <span>{cls.students} Students</span>
                          <span>Semester: {cls.semester}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Reports & Analytics</CardTitle>
                <CardDescription>Generate and view system reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Student Attendance Report", description: "Generate attendance statistics" },
                    { name: "Fee Collection Report", description: "Track fee payments and defaults" },
                    { name: "Academic Performance", description: "Class-wise grade analysis" },
                    { name: "User Activity Log", description: "System usage and activities" },
                  ].map((report, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-input rounded-lg border border-border flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold text-foreground">{report.name}</p>
                        <p className="text-sm text-muted-foreground">{report.description}</p>
                      </div>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Generate
                      </Button>
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

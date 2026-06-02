"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { UtensilsCrossed, BarChart3, Users, DollarSign, AlertCircle, Plus, Edit2 } from "lucide-react"
import MessAdminNav from "./mess-admin-nav"

interface MessAdminDashboardProps {
  onLogout: () => void
}

export default function MessAdminDashboard({ onLogout }: MessAdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const messAdminData = {
    name: "Mr. Rajesh Kumar",
    empId: "M001",
    messName: "Main Mess",
    totalStudents: 180,
  }

  const statistics = {
    totalBill: 450000,
    collected: 380000,
    pending: 70000,
    mealsServed: 1240,
    complaints: 3,
  }

  const menu = [
    {
      day: "Monday",
      breakfast: "Bread, Butter, Jam",
      lunch: "Rice, Dal, Chicken Curry",
      dinner: "Roti, Aloo Sabzi, Raita",
    },
    {
      day: "Tuesday",
      breakfast: "Poha, Tea, Samosa",
      lunch: "Biryani, Salad, Pickle",
      dinner: "Paratha, Paneer Curry, Buttermilk",
    },
  ]

  const students = [
    { id: 1, name: "Raj Kumar", rollNo: "20CS001", status: "Active", dues: 0 },
    { id: 2, name: "Priya Singh", rollNo: "20CS002", status: "Active", dues: 500 },
    { id: 3, name: "Arjun Patel", rollNo: "20CS003", status: "Inactive", dues: 1500 },
  ]

  const complaints = [
    { id: 1, date: "Nov 3", issue: "Food quality", status: "Resolved" },
    { id: 2, date: "Nov 2", issue: "Late serving", status: "Resolved" },
    { id: 3, date: "Nov 1", issue: "Expired milk", status: "Pending" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <MessAdminNav messAdminName={messAdminData.name} onLogout={onLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{messAdminData.messName}</h1>
          <p className="text-muted-foreground">
            Manager: {messAdminData.name} | Total Students: {messAdminData.totalStudents}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-card border border-border">
            <TabsTrigger value="overview" className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="menu" className="flex items-center gap-1">
              <UtensilsCrossed className="w-4 h-4" />
              <span className="hidden sm:inline">Menu</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">Billing</span>
            </TabsTrigger>
            <TabsTrigger value="students" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Students</span>
            </TabsTrigger>
            <TabsTrigger value="complaints" className="flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Issues</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-5 gap-4">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Bill</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">₹{(statistics.totalBill / 1000).toFixed(0)}K</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Collected</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">₹{(statistics.collected / 1000).toFixed(0)}K</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-500">₹{(statistics.pending / 1000).toFixed(0)}K</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Meals Served</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{statistics.mealsServed}</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Complaints</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-500">{statistics.complaints}</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-input rounded-lg">
                    <span className="text-muted-foreground">Collection Rate</span>
                    <span className="font-semibold text-foreground">
                      {Math.round((statistics.collected / statistics.totalBill) * 100)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-input rounded-lg">
                    <span className="text-muted-foreground">Active Students</span>
                    <span className="font-semibold text-foreground">176</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-input rounded-lg">
                    <span className="text-muted-foreground">Today's Meals</span>
                    <span className="font-semibold text-foreground">485</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Recent Complaints</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {complaints.slice(0, 3).map((complaint) => (
                    <div key={complaint.id} className="p-3 bg-input rounded-lg border border-border">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-foreground">{complaint.issue}</p>
                          <p className="text-xs text-muted-foreground">{complaint.date}</p>
                        </div>
                        <Badge variant={complaint.status === "Resolved" ? "default" : "secondary"}>
                          {complaint.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="menu">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Weekly Menu</CardTitle>
                    <CardDescription>Manage meal plans</CardDescription>
                  </div>
                  <Button size="sm" className="gap-1">
                    <Plus className="w-4 h-4" />
                    Add Menu
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {menu.map((day, idx) => (
                  <div key={idx} className="p-4 bg-input rounded-lg border border-border">
                    <div className="flex justify-between items-start mb-3">
                      <p className="font-semibold text-foreground">{day.day}</p>
                      <Button size="sm" variant="ghost">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-3 text-sm">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Breakfast</p>
                        <p className="text-foreground">{day.breakfast}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Lunch</p>
                        <p className="text-foreground">{day.lunch}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Dinner</p>
                        <p className="text-foreground">{day.dinner}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Billing & Collections</CardTitle>
                <CardDescription>Track financial status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-input rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Collection Summary</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Total Due</span>
                        <span className="font-semibold">₹{statistics.totalBill.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Collected</span>
                        <span className="font-semibold text-green-500">₹{statistics.collected.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-t border-border pt-2 mt-2">
                        <span>Outstanding</span>
                        <span className="font-semibold text-amber-500">₹{statistics.pending.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">Generate Billing Report</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>Manage mess subscribers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Name</th>
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Roll No</th>
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Status</th>
                        <th className="text-right py-2 px-2 text-muted-foreground font-medium">Dues</th>
                        <th className="text-right py-2 px-2 text-muted-foreground font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b border-border hover:bg-input/50">
                          <td className="py-3 px-2 text-foreground">{student.name}</td>
                          <td className="py-3 px-2 text-foreground">{student.rollNo}</td>
                          <td className="py-3 px-2">
                            <Badge variant={student.status === "Active" ? "default" : "secondary"}>
                              {student.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-right">₹{student.dues}</td>
                          <td className="py-3 px-2 text-right">
                            <Button size="sm" variant="ghost">
                              <Edit2 className="w-4 h-4" />
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

          <TabsContent value="complaints">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Complaints & Issues</CardTitle>
                <CardDescription>Manage student feedback</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {complaints.map((complaint) => (
                  <div key={complaint.id} className="p-4 bg-input rounded-lg border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium text-foreground">{complaint.issue}</p>
                      <Badge variant={complaint.status === "Resolved" ? "default" : "secondary"}>
                        {complaint.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Date: {complaint.date}</p>
                    <Button size="sm">Mark as Resolved</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { LogIn, BarChart3, AlertCircle, CheckCircle, Search } from "lucide-react"
import GuardNav from "./guard-nav"

interface GuardDashboardProps {
  onLogout: () => void
}

export default function GuardDashboard({ onLogout }: GuardDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchId, setSearchId] = useState("")

  const guardData = {
    name: "Rajesh Kumar",
    empId: "G001",
    shift: "Day Shift (8 AM - 4 PM)",
    gateStatus: "Open",
  }

  const gateEntries = [
    {
      id: 1,
      studentId: "20CS001",
      name: "Raj Kumar",
      entryTime: "8:15 AM",
      exitTime: "-",
      date: "Nov 4, 2024",
      status: "Inside",
      gatePass: "Yes",
    },
    {
      id: 2,
      studentId: "20CS002",
      name: "Priya Singh",
      entryTime: "8:30 AM",
      exitTime: "2:45 PM",
      date: "Nov 4, 2024",
      status: "Exited",
      gatePass: "Yes",
    },
    {
      id: 3,
      studentId: "20CS003",
      name: "Arjun Patel",
      entryTime: "9:00 AM",
      exitTime: "1:30 PM",
      date: "Nov 4, 2024",
      status: "Exited",
      gatePass: "No",
    },
    {
      id: 4,
      studentId: "20CS004",
      name: "Neha Verma",
      entryTime: "11:20 AM",
      exitTime: "-",
      date: "Nov 4, 2024",
      status: "Inside",
      gatePass: "Yes",
    },
  ]

  const statistics = {
    totalEntries: 134,
    totalExits: 98,
    currentInside: 36,
    withGatePass: 32,
  }

  const alerts = [
    { id: 1, type: "No Gate Pass", student: "Arjun Patel (20CS003)", time: "9:00 AM", severity: "high" },
    { id: 2, type: "Late Entry", student: "Vikram Singh (20CS005)", time: "11:45 AM", severity: "medium" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <GuardNav guardName={guardData.name} onLogout={onLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Gate Security Dashboard</h1>
          <p className="text-muted-foreground">
            Guard: {guardData.name} | Shift: {guardData.shift}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card border border-border">
            <TabsTrigger value="overview" className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="entries" className="flex items-center gap-1">
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Entries</span>
            </TabsTrigger>
            <TabsTrigger value="search" className="flex items-center gap-1">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Alerts</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Entries Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{statistics.totalEntries}</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Exits Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{statistics.totalExits}</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Currently Inside</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-500">{statistics.currentInside}</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">With Gate Pass</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{statistics.withGatePass}</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest gate entries and exits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {gateEntries.slice(0, 4).map((entry) => (
                    <div key={entry.id} className="p-3 bg-input rounded-lg border border-border">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-foreground">{entry.name}</p>
                          <p className="text-xs text-muted-foreground">{entry.studentId}</p>
                        </div>
                        <Badge variant={entry.status === "Inside" ? "default" : "secondary"}>{entry.status}</Badge>
                      </div>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>In: {entry.entryTime}</span>
                        <span>Out: {entry.exitTime}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Security Alerts</CardTitle>
                  <CardDescription>Important notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-3 rounded-lg border ${alert.severity === "high" ? "bg-red-500/10 border-red-500/20" : "bg-amber-500/10 border-amber-500/20"}`}
                    >
                      <div className="flex items-start gap-2">
                        <AlertCircle
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${alert.severity === "high" ? "text-red-500" : "text-amber-500"}`}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground">{alert.type}</p>
                          <p className="text-sm text-muted-foreground">{alert.student}</p>
                          <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="entries">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Gate Entry/Exit Log</CardTitle>
                <CardDescription>Complete record of all gate activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Student</th>
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Roll No</th>
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Entry Time</th>
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Exit Time</th>
                        <th className="text-center py-2 px-2 text-muted-foreground font-medium">Gate Pass</th>
                        <th className="text-center py-2 px-2 text-muted-foreground font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gateEntries.map((entry) => (
                        <tr key={entry.id} className="border-b border-border hover:bg-input/50">
                          <td className="py-3 px-2 text-foreground">{entry.name}</td>
                          <td className="py-3 px-2 text-foreground">{entry.studentId}</td>
                          <td className="py-3 px-2 text-foreground">{entry.entryTime}</td>
                          <td className="py-3 px-2 text-foreground">{entry.exitTime}</td>
                          <td className="py-3 px-2 text-center">
                            <Badge variant={entry.gatePass === "Yes" ? "default" : "destructive"}>
                              {entry.gatePass}
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-center">
                            <Badge variant={entry.status === "Inside" ? "default" : "secondary"}>{entry.status}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Search Student Record</CardTitle>
                <CardDescription>Look up student entry and exit history</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter Student ID or Name..."
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    className="bg-input border-border text-foreground"
                  />
                  <Button>Search</Button>
                </div>

                {searchId && (
                  <div className="space-y-3">
                    <div className="p-4 bg-input rounded-lg border border-border">
                      <h3 className="font-semibold text-foreground mb-3">Search Results</h3>
                      {gateEntries
                        .filter(
                          (e) =>
                            e.studentId.includes(searchId) || e.name.toLowerCase().includes(searchId.toLowerCase()),
                        )
                        .map((entry) => (
                          <div key={entry.id} className="p-3 bg-card rounded border border-border mb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium text-foreground">{entry.name}</p>
                                <p className="text-sm text-muted-foreground">{entry.studentId}</p>
                              </div>
                              <Badge variant="default">{entry.status}</Badge>
                            </div>
                            <div className="mt-2 text-sm text-muted-foreground space-y-1">
                              <p>
                                Entry: {entry.entryTime} | Exit: {entry.exitTime}
                              </p>
                              <p>Date: {entry.date}</p>
                              <p>Gate Pass: {entry.gatePass}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Security Alerts & Notifications</CardTitle>
                <CardDescription>Critical incidents and violations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg border ${alert.severity === "high" ? "bg-red-500/10 border-red-500/30" : "bg-amber-500/10 border-amber-500/30"}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-start gap-3">
                        <AlertCircle
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${alert.severity === "high" ? "text-red-500" : "text-amber-500"}`}
                        />
                        <div>
                          <p className="font-semibold text-foreground">{alert.type}</p>
                          <p className="text-sm text-muted-foreground">{alert.student}</p>
                        </div>
                      </div>
                      <Badge variant={alert.severity === "high" ? "destructive" : "secondary"}>
                        {alert.severity.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Time: {alert.time}</p>
                    <Button size="sm" className="mt-3 gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Mark Resolved
                    </Button>
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

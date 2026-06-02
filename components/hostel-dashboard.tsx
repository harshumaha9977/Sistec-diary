"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Home, Users, Wrench, Bell, BarChart3, Plus, Edit2, CheckCircle } from "lucide-react"
import HostelNav from "./hostel-nav"

interface HostelDashboardProps {
  role: "warden" | "student"
  onLogout: () => void
}

export default function HostelDashboard({ role, onLogout }: HostelDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

  const wardenData = {
    name: "Mr. Vikram Singh",
    empId: "W001",
    hostelName: "Rajeev Hostel",
    totalRooms: 120,
    occupiedRooms: 98,
    availableRooms: 22,
  }

  const rooms = [
    { id: "101", floor: 1, capacity: 2, occupied: 2, students: ["20CS001", "20CS002"], status: "Occupied" },
    { id: "102", floor: 1, capacity: 2, occupied: 1, students: ["20CS003"], status: "Occupied" },
    { id: "103", floor: 1, capacity: 2, occupied: 0, students: [], status: "Available" },
    { id: "201", floor: 2, capacity: 2, occupied: 2, students: ["20CS004", "20CS005"], status: "Occupied" },
    { id: "202", floor: 2, capacity: 2, occupied: 2, students: ["20CS006", "20CS007"], status: "Occupied" },
    { id: "203", floor: 2, capacity: 2, occupied: 0, students: [], status: "Available" },
  ]

  const maintenanceRequests = [
    { id: 1, room: "101", issue: "Broken AC", priority: "high", status: "Pending", date: "Nov 3" },
    { id: 2, room: "204", issue: "Water leakage", priority: "high", status: "In Progress", date: "Nov 2" },
    { id: 3, room: "305", issue: "Faulty bulb", priority: "low", status: "Completed", date: "Nov 1" },
  ]

  const amenities = [
    { name: "WiFi", status: "Active", strength: "Excellent" },
    { name: "Generator", status: "Active", strength: "Good" },
    { name: "Water Supply", status: "Active", strength: "Excellent" },
    { name: "Security System", status: "Active", strength: "Excellent" },
  ]

  const residents = [
    { id: 1, name: "Raj Kumar", rollNo: "20CS001", room: "101", batch: "2020", semester: "4th" },
    { id: 2, name: "Priya Singh", rollNo: "20CS002", room: "101", batch: "2020", semester: "4th" },
    { id: 3, name: "Arjun Patel", rollNo: "20CS003", room: "102", batch: "2020", semester: "4th" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <HostelNav wardenName={wardenData.name} onLogout={onLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{wardenData.hostelName}</h1>
          <p className="text-muted-foreground">
            Warden: {wardenData.name} | Employee ID: {wardenData.empId}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-5 bg-card border border-border">
            <TabsTrigger value="overview" className="text-xs sm:text-sm flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="rooms" className="text-xs sm:text-sm flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Rooms</span>
            </TabsTrigger>
            <TabsTrigger value="residents" className="text-xs sm:text-sm flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Residents</span>
            </TabsTrigger>
            <TabsTrigger value="maintenance" className="text-xs sm:text-sm flex items-center gap-1">
              <Wrench className="w-4 h-4" />
              <span className="hidden sm:inline">Maintenance</span>
            </TabsTrigger>
            <TabsTrigger value="amenities" className="text-xs sm:text-sm flex items-center gap-1">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Amenities</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Rooms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{wardenData.totalRooms}</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Occupied</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-500">{wardenData.occupiedRooms}</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-amber-500">{wardenData.availableRooms}</div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Occupancy Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">
                    {Math.round((wardenData.occupiedRooms / wardenData.totalRooms) * 100)}%
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Recent Maintenance Requests</CardTitle>
                  <CardDescription>Pending and ongoing repairs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {maintenanceRequests.slice(0, 3).map((req) => (
                    <div key={req.id} className="p-3 bg-input rounded-lg border border-border">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-foreground">
                            Room {req.room}: {req.issue}
                          </p>
                          <p className="text-xs text-muted-foreground">{req.date}</p>
                        </div>
                        <Badge variant={req.priority === "high" ? "destructive" : "secondary"}>{req.status}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Hostel Amenities</CardTitle>
                  <CardDescription>Current status of all amenities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-input rounded-lg border border-border flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium text-foreground">{amenity.name}</p>
                        <p className="text-xs text-muted-foreground">{amenity.strength}</p>
                      </div>
                      <Badge variant="default">{amenity.status}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rooms">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Room Allocation</CardTitle>
                <CardDescription>Manage room assignments and status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rooms.map((room) => (
                    <div
                      key={room.id}
                      className="p-4 bg-input rounded-lg border border-border cursor-pointer hover:bg-input/80 transition"
                      onClick={() => setSelectedRoom(room.id)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-semibold text-foreground">Room {room.id}</p>
                          <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                            <span>Floor: {room.floor}</span>
                            <span>Capacity: {room.capacity}</span>
                            <span>
                              Occupied: {room.occupied}/{room.capacity}
                            </span>
                          </div>
                        </div>
                        <Badge variant={room.status === "Occupied" ? "default" : "secondary"}>{room.status}</Badge>
                      </div>
                      {room.students.length > 0 && (
                        <div className="text-xs text-muted-foreground">Students: {room.students.join(", ")}</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="residents">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Hostel Residents</CardTitle>
                <CardDescription>List of current residents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Name</th>
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Roll No</th>
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Room</th>
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Batch</th>
                        <th className="text-left py-2 px-2 text-muted-foreground font-medium">Semester</th>
                        <th className="text-right py-2 px-2 text-muted-foreground font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {residents.map((resident) => (
                        <tr key={resident.id} className="border-b border-border hover:bg-input/50">
                          <td className="py-3 px-2 text-foreground">{resident.name}</td>
                          <td className="py-3 px-2 text-foreground">{resident.rollNo}</td>
                          <td className="py-3 px-2 text-foreground">{resident.room}</td>
                          <td className="py-3 px-2 text-foreground">{resident.batch}</td>
                          <td className="py-3 px-2 text-foreground">{resident.semester}</td>
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

          <TabsContent value="maintenance">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Maintenance Requests</CardTitle>
                    <CardDescription>Track and manage maintenance issues</CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    New Request
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {maintenanceRequests.map((req) => (
                  <div key={req.id} className="p-4 bg-input rounded-lg border border-border">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold text-foreground">
                          Room {req.room}: {req.issue}
                        </p>
                        <p className="text-sm text-muted-foreground">Reported: {req.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant={req.priority === "high" ? "destructive" : "secondary"}>
                          {req.priority.toUpperCase()}
                        </Badge>
                        <Badge variant="outline">{req.status}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Edit2 className="w-4 h-4 mr-1" />
                        Update
                      </Button>
                      <Button size="sm" variant="ghost">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Mark Done
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="amenities">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Hostel Amenities Management</CardTitle>
                <CardDescription>Monitor and manage hostel facilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {amenities.map((amenity, idx) => (
                  <div key={idx} className="p-4 bg-input rounded-lg border border-border">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold text-foreground">{amenity.name}</p>
                        <p className="text-sm text-muted-foreground">Condition: {amenity.strength}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="default">{amenity.status}</Badge>
                        <Button size="sm" variant="ghost">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
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

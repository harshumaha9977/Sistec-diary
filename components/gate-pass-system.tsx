"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Plus, Download, Eye } from "lucide-react"

export default function GatePassSystem() {
  const [activeTab, setActiveTab] = useState("active")
  const [showForm, setShowForm] = useState(false)

  const gatePassRequests = [
    {
      id: 1,
      passNo: "GP/2024/1001",
      purpose: "Family visit",
      destination: "Home - Delhi",
      outDate: "Nov 10, 2024",
      outTime: "3:00 PM",
      inDate: "Nov 11, 2024",
      inTime: "9:00 AM",
      status: "Approved",
      approvedBy: "Warden",
    },
    {
      id: 2,
      passNo: "GP/2024/1002",
      purpose: "Medical appointment",
      destination: "City Hospital",
      outDate: "Nov 8, 2024",
      outTime: "2:00 PM",
      inDate: "Nov 8, 2024",
      inTime: "6:00 PM",
      status: "Completed",
      approvedBy: "Warden",
    },
    {
      id: 3,
      passNo: "GP/2024/1003",
      purpose: "Personal work",
      destination: "City Center",
      outDate: "Nov 15, 2024",
      outTime: "4:00 PM",
      inDate: "Nov 15, 2024",
      inTime: "9:00 PM",
      status: "Pending",
      approvedBy: "Awaiting approval",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-500"
      case "Pending":
        return "bg-amber-500"
      case "Completed":
        return "bg-blue-500"
      case "Rejected":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Approved":
      case "Completed":
        return "default"
      case "Pending":
        return "secondary"
      case "Rejected":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Gate Pass Management</h2>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          Request Gate Pass
        </Button>
      </div>

      {showForm && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Request New Gate Pass</CardTitle>
            <CardDescription>Fill in the details for your gate pass request</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="purpose">Purpose of Visit</Label>
                  <Input
                    id="purpose"
                    placeholder="e.g., Family visit, Medical appointment"
                    className="bg-input border-border text-foreground"
                  />
                </div>
                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <Input
                    id="destination"
                    placeholder="e.g., Home, Hospital"
                    className="bg-input border-border text-foreground"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="outDate">Out Date</Label>
                  <Input id="outDate" type="date" className="bg-input border-border text-foreground" />
                </div>
                <div>
                  <Label htmlFor="outTime">Out Time</Label>
                  <Input id="outTime" type="time" className="bg-input border-border text-foreground" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="inDate">In Date</Label>
                  <Input id="inDate" type="date" className="bg-input border-border text-foreground" />
                </div>
                <div>
                  <Label htmlFor="inTime">In Time</Label>
                  <Input id="inTime" type="time" className="bg-input border-border text-foreground" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">Submit Request</Button>
                <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-card border border-border">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {gatePassRequests
            .filter((pass) => pass.status === "Approved")
            .map((pass) => (
              <Card key={pass.id} className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-foreground">{pass.purpose}</p>
                        <p className="text-sm text-muted-foreground">Pass No: {pass.passNo}</p>
                      </div>
                      <Badge variant={getStatusVariant(pass.status)}>{pass.status}</Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Destination</p>
                          <p className="text-sm text-foreground">{pass.destination}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Out Date</p>
                          <p className="text-sm text-foreground">
                            {pass.outDate} at {pass.outTime}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">Return Date</p>
                          <p className="text-sm text-foreground">
                            {pass.inDate} at {pass.inTime}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground">Approved By</p>
                        <p className="text-sm text-foreground">{pass.approvedBy}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="gap-1">
                        <Download className="w-4 h-4" />
                        Download Pass
                      </Button>
                      <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                        <Eye className="w-4 h-4" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {gatePassRequests
            .filter((pass) => pass.status === "Completed")
            .map((pass) => (
              <Card key={pass.id} className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">{pass.purpose}</p>
                      <p className="text-sm text-muted-foreground">Pass No: {pass.passNo}</p>
                    </div>
                    <Badge variant="default">{pass.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{pass.destination}</p>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {gatePassRequests
            .filter((pass) => pass.status === "Pending")
            .map((pass) => (
              <Card key={pass.id} className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-foreground">{pass.purpose}</p>
                        <p className="text-sm text-muted-foreground">Pass No: {pass.passNo}</p>
                      </div>
                      <Badge variant="secondary">{pass.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground p-3 bg-amber-500/10 border border-amber-500/20 rounded">
                      Awaiting approval from warden
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4">
          <p className="text-center text-muted-foreground py-8">No rejected requests</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

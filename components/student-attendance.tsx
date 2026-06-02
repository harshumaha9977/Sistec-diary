"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function AttendanceCard() {
  const subjects = [
    { name: "Data Structures", attended: 28, total: 32, percentage: 87.5 },
    { name: "Web Development", attended: 25, total: 32, percentage: 78.1 },
    { name: "Database Systems", attended: 29, total: 32, percentage: 90.6 },
    { name: "Software Engineering", attended: 26, total: 32, percentage: 81.2 },
    { name: "Theory of Computation", attended: 30, total: 32, percentage: 93.7 },
    { name: "Discrete Mathematics", attended: 24, total: 32, percentage: 75.0 },
  ]

  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Overall Attendance</CardTitle>
          <CardDescription>Current semester attendance record</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">Overall Attendance</span>
                <span className="text-lg font-bold text-primary">87%</span>
              </div>
              <Progress value={87} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2">Minimum required: 75%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Subject-wise Attendance</CardTitle>
          <CardDescription>Attendance breakdown by subject</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjects.map((subject, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">{subject.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{subject.percentage}%</span>
                    {subject.percentage >= 75 ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                    )}
                  </div>
                </div>
                <Progress value={subject.percentage} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {subject.attended} / {subject.total} classes attended
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

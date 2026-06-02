"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TimetableCard() {
  const timetable = [
    {
      day: "Monday",
      classes: ["Data Structures (9-10 AM)", "Web Development (11 AM-1 PM)", "Theory of Computation (2-3 PM)"],
    },
    { day: "Tuesday", classes: ["Database Systems (9-11 AM)", "Discrete Mathematics (2-4 PM)"] },
    { day: "Wednesday", classes: ["Software Engineering (9-10 AM)", "Web Development (11 AM-1 PM)"] },
    {
      day: "Thursday",
      classes: ["Data Structures (9-10 AM)", "Theory of Computation (2-3 PM)", "Database Systems (4-5 PM)"],
    },
    { day: "Friday", classes: ["Discrete Mathematics (9-11 AM)", "Software Engineering (1-3 PM)"] },
  ]

  const getColorForClass = (index: number) => {
    const colors = ["bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-orange-500", "bg-green-500"]
    return colors[index % colors.length]
  }

  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Weekly Timetable</CardTitle>
          <CardDescription>Your class schedule for this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timetable.map((daySchedule, dayIdx) => (
              <div key={dayIdx} className="border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3">{daySchedule.day}</h3>
                <div className="space-y-2">
                  {daySchedule.classes.map((cls, clsIdx) => (
                    <div key={clsIdx} className="flex items-center gap-3 p-2 bg-input rounded">
                      <div className={`w-1 h-8 rounded ${getColorForClass(clsIdx)}`}></div>
                      <span className="text-sm text-foreground">{cls}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Exam Schedule</CardTitle>
          <CardDescription>Upcoming examinations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { subject: "Data Structures", date: "Nov 20, 2024", time: "9:00 AM - 11:00 AM", room: "Lab-A1" },
              { subject: "Web Development", date: "Nov 22, 2024", time: "10:00 AM - 12:00 PM", room: "A-105" },
              { subject: "Database Systems", date: "Nov 24, 2024", time: "2:00 PM - 4:00 PM", room: "Lab-B2" },
            ].map((exam, idx) => (
              <div key={idx} className="p-3 bg-input rounded-lg border border-border">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium text-foreground">{exam.subject}</p>
                  <Badge variant="outline">{exam.date}</Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Time: {exam.time}</p>
                  <p>Room: {exam.room}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Info, CheckCircle } from "lucide-react"

interface Announcement {
  id: number
  title: string
  date: string
  priority: "high" | "medium" | "low"
  content: string
}

interface AnnouncementsProps {
  announcements: Announcement[]
}

export default function AnnouncementsCard({ announcements }: AnnouncementsProps) {
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="w-4 h-4 text-red-500" />
      case "medium":
        return <Info className="w-4 h-4 text-amber-500" />
      default:
        return <CheckCircle className="w-4 h-4 text-blue-500" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/10 border-red-500/20"
      case "medium":
        return "bg-amber-500/10 border-amber-500/20"
      default:
        return "bg-blue-500/10 border-blue-500/20"
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle>Latest Announcements</CardTitle>
        <CardDescription>Important updates and news</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {announcements.map((ann) => (
            <div key={ann.id} className={`p-3 rounded-lg border ${getPriorityColor(ann.priority)}`}>
              <div className="flex gap-3">
                {getPriorityIcon(ann.priority)}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <p className="font-medium text-foreground">{ann.title}</p>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{ann.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{ann.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

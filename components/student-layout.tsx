"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap, LogOut } from "lucide-react"
import { StudentDashboard } from "./student-dashboard"

const sidebarItems = [
  { label: "Dashboard", value: "dashboard" },
  { label: "Attendance", value: "attendance" },
  { label: "Fees", value: "fees" },
  { label: "Gate Pass", value: "gatepass" },
  { label: "Hostel", value: "hostel" },
  { label: "Mess", value: "mess" },
  { label: "SISTec Connect", value: "feed" },
  { label: "Feedback", value: "feedback" },
]

export function StudentLayout({ onLogout }: { onLogout: () => void }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`fixed lg:relative w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-sidebar-border flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-sidebar-primary" />
          <h1 className="text-xl font-bold text-sidebar-foreground">SISTec Diary</h1>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.value}
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <Button
            variant="outline"
            className="w-full justify-start text-sidebar-foreground bg-transparent"
            onClick={onLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Nav */}
        <div className="h-16 border-b border-border bg-card/50 backdrop-blur flex items-center px-6 lg:hidden">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-card rounded-lg">
            {isSidebarOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 lg:p-8 max-w-7xl mx-auto w-full">
            <StudentDashboard />
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 lg:hidden z-30" onClick={() => setIsSidebarOpen(false)} />
      )}
    </div>
  )
}

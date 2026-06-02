"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, Bell, LogOut, Menu, X } from "lucide-react"

interface HostelNavProps {
  wardenName: string
  onLogout: () => void
}

export default function HostelNav({ wardenName, onLogout }: HostelNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">SISTec Diary</h1>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-5 h-5 text-foreground" />
            </Button>
            <div className="flex items-center gap-2 px-3 py-2 bg-input rounded-lg">
              <span className="text-sm text-foreground">{wardenName}</span>
            </div>
            <Button variant="outline" size="sm" onClick={onLogout} className="gap-2 bg-transparent">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border space-y-3">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2 bg-transparent" onClick={onLogout}>
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

"use client"



import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCap, BookOpen, Users, Lock, Smartphone, Shield, Calendar } from "lucide-react"
import StudentDashboard from "@/components/student-dashboard"
import TeacherDashboard from "@/components/teacher-dashboard"
import AdminDashboard from "@/components/admin-dashboard"
import HostelDashboard from "@/components/hostel-dashboard"
import GuardDashboard from "@/components/guard-dashboard"
import MessAdminDashboard from "@/components/mess-admin-dashboard"
import EnhancedLoginForm from "@/components/enhanced-login-form"

export default function Home() {
  const [activeRole, setActiveRole] = useState<string>("student")
  const [currentPage, setCurrentPage] = useState<string>("home")

  const [showLoginDrawer, setShowLoginDrawer] = useState<boolean>(false)
  const [loginRole, setLoginRole] = useState<string | null>(null)
  const [loginMethod, setLoginMethod] = useState<"id" | "mobile">("id")
  const [carouselIndex, setCarouselIndex] = useState<number>(0)
  const [selectedSection, setSelectedSection] = useState<string>("Overview")
  const [showProfile, setShowProfile] = useState<boolean>(false)
  const [captcha, setCaptcha] = useState<string>("")
  const [captchaInput, setCaptchaInput] = useState<string>("")
  const [profileData, setProfileData] = useState<{ name: string; roll: string; semester: string; hostel?: string } | null>(
    {
      name: "Raj Kumar",
      roll: "20CS001",
      semester: "4th",
      hostel: "A-Block",
    }
  )

  const roles = [
    { id: "student", label: "Student", icon: GraduationCap },
    { id: "teacher", label: "Teacher", icon: BookOpen },
    { id: "admin", label: "Admin", icon: Lock },
    { id: "warden", label: "Warden", icon: Users },
    { id: "guard", label: "Guard", icon: Users },
    { id: "mess", label: "Mess Admin", icon: Users },
  ]

  const events = [
    { title: "Orientation Week", desc: "Welcome new students! Freshers orientation and campus tour." },
    { title: "Tech Fest 2025", desc: "Annual tech fest with workshops and hackathons." },
    { title: "Hostel Inspection", desc: "Routine hostel inspection and maintenance updates." },
  ]


  useEffect(() => {
    const id = setInterval(() => setCarouselIndex((p) => (p + 1) % events.length), 4500)
    return () => clearInterval(id)
  }, [events.length])

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setCaptcha(result)
  }

  useEffect(() => {
    generateCaptcha()
  }, [])



  const handleLogin = (role: string, formData: { 
    id?: string; 
    mobile?: string; 
    password: string; 
    dateOfBirth: string; 
    captcha: string 
  }) => {
    // Validate captcha
    if (formData.captcha !== captcha) {
      alert("Invalid captcha! Please try again.")
      generateCaptcha()
      return
    }
    
    // Validate required fields
    if (loginMethod === "id" && !formData.id) {
      alert("Please enter your ID")
      return
    }
    if (loginMethod === "mobile" && !formData.mobile) {
      alert("Please enter your mobile number")
      return
    }
    if (!formData.password) {
      alert("Please enter your password")
      return
    }
    if (!formData.dateOfBirth) {
      alert("Please enter your date of birth")
      return
    }
    
    setActiveRole(role)
    setCurrentPage("dashboard")
    setShowLoginDrawer(false)
    setLoginRole(null)
    setCaptchaInput("")
  }

  const ProfileTop = () => (
    <div className="flex items-center gap-3">
      <img src="/placeholder-user.jpg" alt="user" className="w-10 h-10 rounded-full object-cover" />
      <div>
        <div className="font-semibold">{profileData?.name || activeRole}</div>
        <div className="text-sm text-muted-foreground">@{activeRole}</div>
      </div>
    </div>
  )

  const Sidebar = ({ onSelect }: { onSelect: (s: string) => void }) => (
    <aside className="w-64 bg-white/95 border-r border-border p-4 hidden lg:block">
      <div className="mb-6">
        <h3 className="font-bold text-lg">SISTec Diary</h3>
        <p className="text-sm text-muted-foreground">{activeRole.charAt(0).toUpperCase() + activeRole.slice(1)}</p>
      </div>
      <nav className="space-y-2">
        {[
          "Overview",
          "Attend",
          "Academics",
          "Fees",
          "Timetable",
          "Docs",
          "Gate",
          "Mess",
          "Social",
        ].map((item) => (
          <button
            key={item}
            onClick={() => { onSelect(item); setShowProfile(false) }}
            className={`w-full text-left py-3 px-3 rounded-l-md text-sm font-medium ${selectedSection === item ? "bg-primary text-white" : "hover:bg-gray-100 text-foreground"}`}
          >
            {item}
          </button>
        ))}

        <div className="mt-6 border-t pt-4">
          <button onClick={() => setShowProfile(true)} className="w-full text-left py-3 px-3 rounded-l-md text-sm font-semibold hover:bg-gray-100">Profile</button>
        </div>
      </nav>
    </aside>
  )

  const ProfilePanel = () => (
    <aside className="w-80 bg-white p-4 border-l hidden lg:block">
      {profileData ? (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/placeholder-user.jpg" className="w-14 h-14 rounded-full" />
            <div>
              <div className="font-semibold">{profileData.name}</div>
              <div className="text-sm text-muted-foreground">Roll No: {profileData.roll}</div>
              <div className="text-sm text-muted-foreground">Semester: {profileData.semester}</div>
            </div>
          </div>
          <div>
            <h5 className="font-medium mb-2">Hostel</h5>
            <p className="text-sm text-muted-foreground">{profileData.hostel || "N/A"}</p>
          </div>
        </div>
      ) : (
        <div className="text-sm text-muted-foreground">No profile selected.</div>
      )}
    </aside>
  )

  // Dashboard layout
  if (currentPage === "dashboard") {
    let DashboardComponent: React.ReactNode = (
      <div className="p-6">
        <Card className="bg-white/90 border-border">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Quick summary</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Use the left menu to navigate different sections.</p>
          </CardContent>
        </Card>
      </div>
    )

    if (activeRole === "student") {
      DashboardComponent = (
        <StudentDashboard
          onLogout={() => {
            setCurrentPage("home")
            setActiveRole("student")
          }}
        />
      )
    }

    if (activeRole === "teacher") {
      DashboardComponent = (
        <TeacherDashboard
          onLogout={() => {
            setCurrentPage("home")
            setActiveRole("student")
          }}
        />
      )
    }

    if (activeRole === "admin") {
      DashboardComponent = (
        <AdminDashboard
          onLogout={() => {
            setCurrentPage("home")
            setActiveRole("student")
          }}
        />
      )
    }

    if (activeRole === "warden") {
      DashboardComponent = (
        <HostelDashboard
          role="warden"
          onLogout={() => {
            setCurrentPage("home")
            setActiveRole("student")
          }}
        />
      )
    }

    if (activeRole === "guard") {
      DashboardComponent = (
        <GuardDashboard
          onLogout={() => {
            setCurrentPage("home")
            setActiveRole("student")
          }}
        />
      )
    }

    if (activeRole === "mess") {
      DashboardComponent = (
        <MessAdminDashboard
          onLogout={() => {
            setCurrentPage("home")
            setActiveRole("student")
          }}
        />
      )
    }

    return (
      <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
        <nav className="border-b border-border" style={{ backgroundColor: "#FFDEAD" }}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold text-foreground">SISTec Diary</h1>
            </div>
            <div className="flex items-center gap-4">
              <ProfileTop />
              <Button variant="outline" onClick={() => setCurrentPage("home")}>Logout</Button>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-6">
          <Sidebar onSelect={(s) => setSelectedSection(s)} />

          <main className="flex-1 bg-transparent rounded">
            {showProfile ? (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Profile</h3>
                <div className="bg-white/90 p-4 rounded">
                  <img src="/placeholder-user.jpg" className="w-20 h-20 rounded-full mb-3" />
                  <div className="font-semibold">{profileData?.name}</div>
                  <div className="text-sm text-muted-foreground">{profileData?.roll} • {profileData?.semester}</div>
                </div>
              </div>
            ) : (
              <div className="p-6">{DashboardComponent}</div>
            )}
          </main>

          <ProfilePanel />
        </div>

        {/* Login Drawer */}
        {showLoginDrawer && (
          <div className="fixed inset-0 z-70 flex">
            <div className="flex-1" onClick={() => setShowLoginDrawer(false)} />
            <aside className="w-96 bg-white p-6 border-l shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Login</h3>
                <Button variant="ghost" onClick={() => setShowLoginDrawer(false)}>Close</Button>
              </div>

              {!loginRole ? (
                <div className="space-y-3">
                  {roles.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setLoginRole(r.id)}
                      className="w-full text-left py-3 px-4 rounded border hover:bg-gray-50 flex items-center gap-3"
                    >
                      <r.icon className="w-5 h-5" />
                      <div>
                        <div className="font-medium">{r.label}</div>
                        <div className="text-sm text-muted-foreground">Login to your {r.label} account</div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (

                <EnhancedLoginForm
                  loginRole={loginRole || ""}
                  loginMethod={loginMethod}
                  setLoginMethod={setLoginMethod}
                  captcha={captcha}
                  captchaInput={captchaInput}
                  setCaptchaInput={setCaptchaInput}
                  generateCaptcha={generateCaptcha}
                  onLogin={handleLogin}
                  onBack={() => setLoginRole(null)}
                />
              )}
            </aside>
          </div>
        )}
      </div>
    )
  }

  // Public homepage with hero + event slider + featured cards
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <nav className="fixed top-0 w-full z-50 border-b" style={{ backgroundColor: "#FFDEAD" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">SISTec Diary</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex gap-4">
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
            </div>
            <Button className="bg-primary text-white" onClick={() => setShowLoginDrawer(true)}>Login</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-foreground">College ERP &amp; Hostel Management</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Complete digital solution for college management, student portal, hostel operations, gate pass system, and mess management in one platform.</p>

          <div className="max-w-3xl mx-auto bg-white/90 rounded shadow p-6">
            <div className="relative h-40 overflow-hidden">
              {events.map((ev, i) => (
                <div key={i} className={`absolute inset-0 transition-all duration-700 ${i === carouselIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                  <h3 className="text-xl font-semibold">{ev.title}</h3>
                  <p className="text-sm text-muted-foreground">{ev.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {events.map((_, i) => (
                <button key={i} onClick={() => setCarouselIndex(i)} className={`w-2 h-2 rounded-full ${i === carouselIndex ? "bg-primary" : "bg-gray-300"}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "Student Portal", desc: "Attendance, fees, and academic tracking" },
            { title: "Academic Management", desc: "Teachers can manage marks and assignments" },
            { title: "Hostel System", desc: "Room allocation and maintenance requests" },
          ].map((feature, i) => (
            <Card key={i} className="border-border bg-white/90">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* login button moved to top-right in nav for visibility */}
      {/* Login Drawer (public page) */}
      {showLoginDrawer && (
        <div className="fixed inset-0 z-70 flex">
          <div className="flex-1" onClick={() => setShowLoginDrawer(false)} />
          <aside className="w-96 bg-white p-6 border-l shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Login</h3>
              <Button variant="ghost" onClick={() => setShowLoginDrawer(false)}>Close</Button>
            </div>

            {!loginRole ? (
              <div className="space-y-3">
                {roles.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setLoginRole(r.id)}
                    className="w-full text-left py-3 px-4 rounded border hover:bg-gray-50 flex items-center gap-3"
                  >
                    <r.icon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{r.label}</div>
                      <div className="text-sm text-muted-foreground">Login to your {r.label} account</div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (

              <EnhancedLoginForm
                loginRole={loginRole || ""}
                loginMethod={loginMethod}
                setLoginMethod={setLoginMethod}
                captcha={captcha}
                captchaInput={captchaInput}
                setCaptchaInput={setCaptchaInput}
                generateCaptcha={generateCaptcha}
                onLogin={handleLogin}
                onBack={() => setLoginRole(null)}
              />
            )}
          </aside>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border bg-white/90 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">SISTec Diary</h4>
              <p className="text-muted-foreground text-sm">Complete college management and hostel system solution.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">About</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2025 SISTec Diary. All rights reserved.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">Twitter</Button>
              <Button variant="ghost" size="sm">LinkedIn</Button>
              <Button variant="ghost" size="sm">GitHub</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

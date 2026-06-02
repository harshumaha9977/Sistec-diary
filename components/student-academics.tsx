"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function AcademicsCard() {
  const courses = [
    { code: "CS301", name: "Data Structures", credits: 3, grade: "A", marks: 92 },
    { code: "CS302", name: "Web Development", credits: 3, grade: "A-", marks: 88 },
    { code: "CS303", name: "Database Systems", credits: 4, grade: "A", marks: 90 },
    { code: "CS304", name: "Software Engineering", credits: 3, grade: "B+", marks: 85 },
    { code: "CS305", name: "Theory of Computation", credits: 4, grade: "A", marks: 91 },
    { code: "CS306", name: "Discrete Mathematics", credits: 3, grade: "A-", marks: 87 },
  ]

  const gradePoints: Record<string, number> = {
    A: 10,
    "A-": 9,
    "B+": 8,
    B: 7,
    "B-": 6,
    "C+": 5,
  }

  const calculateGPA = () => {
    let totalPoints = 0
    let totalCredits = 0
    courses.forEach((course) => {
      totalPoints += (gradePoints[course.grade] || 0) * course.credits
      totalCredits += course.credits
    })
    return (totalPoints / totalCredits).toFixed(2)
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Cumulative GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-foreground">{calculateGPA()}</div>
            <p className="text-xs text-muted-foreground mt-1">Out of 10.0</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-foreground">20</div>
            <p className="text-xs text-muted-foreground mt-1">Credits this semester</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Course Performance</CardTitle>
          <CardDescription>Current semester courses and grades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2 text-muted-foreground font-medium">Course Code</th>
                  <th className="text-left py-2 px-2 text-muted-foreground font-medium">Course Name</th>
                  <th className="text-center py-2 px-2 text-muted-foreground font-medium">Credits</th>
                  <th className="text-center py-2 px-2 text-muted-foreground font-medium">Marks</th>
                  <th className="text-center py-2 px-2 text-muted-foreground font-medium">Grade</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-input/50 transition">
                    <td className="py-3 px-2 text-foreground font-medium">{course.code}</td>
                    <td className="py-3 px-2 text-foreground">{course.name}</td>
                    <td className="py-3 px-2 text-center text-foreground">{course.credits}</td>
                    <td className="py-3 px-2">
                      <div className="flex justify-center items-center gap-2">
                        <Progress value={course.marks} className="h-2 w-16" />
                        <span className="text-foreground font-medium">{course.marks}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span className="px-2 py-1 bg-primary/20 text-primary rounded font-semibold text-xs">
                        {course.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

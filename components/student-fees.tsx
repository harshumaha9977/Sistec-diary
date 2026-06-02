"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle, DollarSign } from "lucide-react"

interface FeesData {
  totalFees: number
  feesPaid: number
  feesRemaining: number
}

interface StudentFeesProps {
  feeData: FeesData
}

export default function FeesCard({ feeData }: StudentFeesProps) {
  const payments = [
    { id: 1, date: "2024-08-15", amount: 50000, status: "Completed", reference: "REF001" },
    { id: 2, date: "2024-09-15", amount: 50000, status: "Completed", reference: "REF002" },
    { id: 3, date: "2024-10-15", amount: 20000, status: "Completed", reference: "REF003" },
  ]

  const paymentPercentage = (feeData.feesPaid / feeData.totalFees) * 100

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">₹{feeData.totalFees.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Fees Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">₹{feeData.feesPaid.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Remaining</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-500">₹{feeData.feesRemaining.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Fee Payment Progress</CardTitle>
          <CardDescription>Track your fee payment status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-foreground font-medium">Payment Status</span>
              <span className="text-primary font-semibold">{paymentPercentage.toFixed(1)}%</span>
            </div>
            <Progress value={paymentPercentage} className="h-3" />
          </div>
          <div className="mt-6">
            {feeData.feesRemaining > 0 && (
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-700">Outstanding Fees</p>
                  <p className="text-sm text-amber-600 mt-1">
                    You have ₹{feeData.feesRemaining.toLocaleString()} remaining. Please pay before the deadline.
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Recent fee payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex justify-between items-center p-3 bg-input rounded-lg border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">₹{payment.amount.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">{payment.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-foreground">{payment.status}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{payment.reference}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {feeData.feesRemaining > 0 && (
        <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
          Pay Remaining Fees
        </Button>
      )}
    </div>
  )
}

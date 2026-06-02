"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, UtensilsCrossed, Leaf, AlertCircle, Download } from "lucide-react"

export default function MessSystem() {
  const [activeTab, setActiveTab] = useState("menu")

  const messData = {
    currentBill: 2500,
    paidAmount: 2000,
    dueAmount: 500,
    billingCycle: "Monthly",
    dueDate: "Nov 30, 2024",
    messStatus: "Active",
  }

  const weeklyMenu = [
    {
      day: "Monday",
      breakfast: "Bread, Butter, Jam",
      lunch: "Rice, Dal, Chicken Curry",
      dinner: "Roti, Aloo Sabzi, Raita",
      type: "Veg & Non-Veg",
    },
    {
      day: "Tuesday",
      breakfast: "Poha, Tea, Samosa",
      lunch: "Biryani, Salad, Pickle",
      dinner: "Paratha, Paneer Curry, Buttermilk",
      type: "Veg & Non-Veg",
    },
    {
      day: "Wednesday",
      breakfast: "Idli, Chutney, Coffee",
      lunch: "Pulao, Dal, Vegetable",
      dinner: "Roti, Fish Curry, Cucumber",
      type: "Veg & Non-Veg",
    },
    {
      day: "Thursday",
      breakfast: "Cornflakes, Milk, Fruit",
      lunch: "Rice, Rajma, Spinach",
      dinner: "Naan, Butter Chicken, Yogurt",
      type: "Veg & Non-Veg",
    },
    {
      day: "Friday",
      breakfast: "Dosa, Sambhar, Tea",
      lunch: "Chapati, Chole, Onion",
      dinner: "Biryani, Raita, Salad",
      type: "Veg & Non-Veg",
    },
    {
      day: "Saturday",
      breakfast: "Upma, Chutney, Juice",
      lunch: "Tandoori Chicken, Naan, Salad",
      dinner: "Roti, Egg Curry, Vegetables",
      type: "Veg & Non-Veg",
    },
    {
      day: "Sunday",
      breakfast: "Aloo Puri, Pickle, Tea",
      lunch: "Khichdi, Aloo Fry, Raita",
      dinner: "Special - Restaurant Menu",
      type: "Holiday Special",
    },
  ]

  const paymentHistory = [
    { id: 1, date: "Nov 1, 2024", amount: 2000, status: "Paid", reference: "MSG/2024/NOV" },
    { id: 2, date: "Oct 1, 2024", amount: 2000, status: "Paid", reference: "MSG/2024/OCT" },
    { id: 3, date: "Sep 1, 2024", amount: 2000, status: "Paid", reference: "MSG/2024/SEP" },
  ]

  const complaints = [
    { id: 1, date: "Nov 3, 2024", issue: "Food quality in lunch", status: "Resolved", resolution: "Chef informed" },
    { id: 2, date: "Nov 1, 2024", issue: "Late dinner serving", status: "Resolved", resolution: "Timing adjusted" },
    { id: 3, date: "Oct 28, 2024", issue: "Expired milk", status: "Resolved", resolution: "Supplier changed" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Mess Management</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Bill</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">₹{messData.currentBill}</div>
            <p className="text-xs text-muted-foreground mt-1">{messData.billingCycle}</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Paid Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">₹{messData.paidAmount}</div>
            <p className="text-xs text-muted-foreground mt-1">Settled</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Due Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-500">₹{messData.dueAmount}</div>
            <p className="text-xs text-muted-foreground mt-1">Due by {messData.dueDate}</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Mess Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="default" className="text-lg py-1">
              {messData.messStatus}
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-card border border-border">
          <TabsTrigger value="menu" className="flex items-center gap-1">
            <UtensilsCrossed className="w-4 h-4" />
            <span className="hidden sm:inline">Menu</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span className="hidden sm:inline">Billing</span>
          </TabsTrigger>
          <TabsTrigger value="complaints" className="flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Complaints</span>
          </TabsTrigger>
          <TabsTrigger value="info" className="flex items-center gap-1">
            <Leaf className="w-4 h-4" />
            <span className="hidden sm:inline">Info</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="menu">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Weekly Menu</CardTitle>
              <CardDescription>Current week's meal plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyMenu.map((day, idx) => (
                  <div key={idx} className="p-4 bg-input rounded-lg border border-border">
                    <div className="flex justify-between items-start mb-3">
                      <p className="font-semibold text-foreground">{day.day}</p>
                      <Badge variant="outline">{day.type}</Badge>
                    </div>
                    <div className="grid md:grid-cols-3 gap-3 text-sm">
                      <div>
                        <p className="text-xs text-muted-foreground font-medium mb-1">Breakfast</p>
                        <p className="text-foreground">{day.breakfast}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium mb-1">Lunch</p>
                        <p className="text-foreground">{day.lunch}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium mb-1">Dinner</p>
                        <p className="text-foreground">{day.dinner}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Track your mess bill payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {paymentHistory.map((payment) => (
                  <div
                    key={payment.id}
                    className="p-4 bg-input rounded-lg border border-border flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium text-foreground">₹{payment.amount}</p>
                      <p className="text-xs text-muted-foreground">{payment.date}</p>
                      <p className="text-xs text-muted-foreground">Ref: {payment.reference}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">{payment.status}</Badge>
                      <Button size="sm" variant="ghost">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              {messData.dueAmount > 0 && (
                <div className="mt-6">
                  <Button className="w-full" size="lg">
                    Pay Outstanding Amount: ₹{messData.dueAmount}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="complaints">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Complaints & Feedback</CardTitle>
              <CardDescription>Submit and track your complaints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full bg-transparent" variant="outline">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  File New Complaint
                </Button>

                <div className="space-y-3">
                  {complaints.map((complaint) => (
                    <div key={complaint.id} className="p-4 bg-input rounded-lg border border-border">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-foreground">{complaint.issue}</p>
                        <Badge variant="default">{complaint.status}</Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Date: {complaint.date}</p>
                        <p>Resolution: {complaint.resolution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="info">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Mess Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Mess Incharge</p>
                <p className="text-foreground">Mr. Rajesh Kumar</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Contact Number</p>
                <p className="text-foreground">+91-9876543210</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Mess Timings</p>
                <div className="text-foreground space-y-1">
                  <p>Breakfast: 7:00 AM - 8:30 AM</p>
                  <p>Lunch: 12:00 PM - 1:30 PM</p>
                  <p>Dinner: 7:00 PM - 8:30 PM</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Monthly Charges</p>
                <p className="text-foreground">₹2,500 (Includes all meals)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">Special Diets Available</p>
                <p className="text-foreground">Vegetarian, Non-Vegetarian, Vegan, Jain</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

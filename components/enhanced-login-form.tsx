"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Smartphone, Shield, Calendar } from "lucide-react"

interface EnhancedLoginFormProps {
  loginRole: string
  loginMethod: "id" | "mobile"
  setLoginMethod: (method: "id" | "mobile") => void
  captcha: string
  captchaInput: string
  setCaptchaInput: (value: string) => void
  generateCaptcha: () => void
  onLogin: (role: string, formData: {
    id?: string
    mobile?: string
    password: string
    dateOfBirth: string
    captcha: string
  }) => void
  onBack: () => void
}

export default function EnhancedLoginForm({
  loginRole,
  loginMethod,
  setLoginMethod,
  captcha,
  captchaInput,
  setCaptchaInput,
  generateCaptcha,
  onLogin,
  onBack
}: EnhancedLoginFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = {
      id: loginMethod === "id" ? (document.getElementById(`id-${loginRole}`) as HTMLInputElement)?.value : undefined,
      mobile: loginMethod === "mobile" ? (document.getElementById(`mobile-${loginRole}`) as HTMLInputElement)?.value : undefined,
      password: (document.getElementById(`password-${loginRole}`) as HTMLInputElement)?.value,
      dateOfBirth: (document.getElementById(`dob-${loginRole}`) as HTMLInputElement)?.value,
      captcha: captchaInput
    }
    onLogin(loginRole, formData)
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-semibold text-lg">{loginRole.toUpperCase()} Login</h4>
        <Button variant="ghost" size="sm" onClick={onBack}>Back</Button>
      </div>
      
      {/* Login Method Toggle */}
      <div className="mb-6 flex bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-1 shadow-inner">
        <button
          type="button"
          onClick={() => setLoginMethod("id")}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            loginMethod === "id" 
              ? "bg-white text-blue-600 shadow-lg transform scale-105" 
              : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
          }`}
        >
          <Lock className="w-4 h-4" />
          ID Login
        </button>
        <button
          type="button"
          onClick={() => setLoginMethod("mobile")}
          className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            loginMethod === "mobile" 
              ? "bg-white text-blue-600 shadow-lg transform scale-105" 
              : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
          }`}
        >
          <Smartphone className="w-4 h-4" />
          Mobile Login
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* ID or Mobile Number Field */}
        {loginMethod === "id" ? (
          <div className="space-y-2">
            <Label htmlFor={`id-${loginRole}`} className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-500" />
              {loginRole.charAt(0).toUpperCase() + loginRole.slice(1)} ID
            </Label>
            <Input 
              id={`id-${loginRole}`} 
              placeholder={`Enter your ${loginRole} ID`}
              className="mt-1 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg transition-all duration-200"
            />
          </div>
        ) : (
          <div className="space-y-2">
            <Label htmlFor={`mobile-${loginRole}`} className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-green-500" />
              Mobile Number
            </Label>
            <Input 
              id={`mobile-${loginRole}`} 
              type="tel"
              placeholder="Enter your mobile number"
              className="mt-1 border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-lg transition-all duration-200"
            />
          </div>
        )}
        
        {/* Password Field */}
        <div className="space-y-2">
          <Label htmlFor={`password-${loginRole}`} className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Lock className="w-4 h-4 text-red-500" />
            Password
          </Label>
          <Input 
            id={`password-${loginRole}`} 
            type="password" 
            placeholder="Enter your password"
            className="mt-1 border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 rounded-lg transition-all duration-200"
          />
        </div>

        {/* Date of Birth Field */}
        <div className="space-y-2">
          <Label htmlFor={`dob-${loginRole}`} className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-500" />
            Date of Birth
          </Label>
          <Input 
            id={`dob-${loginRole}`} 
            type="date" 
            className="mt-1 border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg transition-all duration-200"
          />
        </div>

        {/* Captcha Section */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Shield className="w-4 h-4 text-orange-500" />
            Captcha Verification
          </Label>
          <div className="p-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200 rounded-xl shadow-inner">
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-xl font-bold tracking-wider text-blue-800 bg-white px-4 py-2 rounded-lg border-2 border-blue-300 shadow-sm transform rotate-1">
                {captcha}
              </div>
              <button 
                type="button"
                onClick={generateCaptcha}
                className="text-sm text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
              >
                🔄 Refresh
              </button>
            </div>
            <Input 
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
              placeholder="Enter the captcha code above"
              className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg transition-all duration-200"
            />
          </div>
        </div>
        
        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          🔐 Secure Sign In
        </Button>
      </form>
    </div>
  )
}

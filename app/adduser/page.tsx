"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function AddUserPage() {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // ✅ Validation
    if (!formData.userId || !formData.name || !formData.email) {
      alert("⚠️ Please fill in all the fields before submitting.")
      return
    }

    // ✅ Log user data (connect backend here)
    console.log("User created:", formData)

    // ✅ Success message
    alert(`🎉 User "${formData.name}" has been added successfully!`)

    // ✅ Reset form
    setFormData({ userId: "", name: "", email: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/40 to-background flex flex-col items-center justify-center p-6">
      {/* ✅ Page Header / Title */}
      <div
        className="flex items-center gap-3 mb-8 select-none pointer-events-auto"
        aria-label="Logo"
      >
        <a href="/" className="flex items-center gap-2 no-underline">
          <img
            src="/Logo.png"
            alt="Lurnexa"
            className="block mix-blend-multiply object-contain"
            draggable={false}
            width={80}
            height={80}
            style={{
              width: "clamp(40px, 6vw, 80px)",
              height: "clamp(40px, 6vw, 80px)",
            }}
          />
          <span className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-black tracking-tight">
            Lurnexa
          </span>
        </a>
      </div>

      {/* ✅ Add User Card */}
      <Card className="w-full max-w-md backdrop-blur-xl bg-white/60 border border-white/30 shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-gray-800">
            Add New User
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-2">
              <Label htmlFor="userId">User ID</Label>
              <Input
                id="userId"
                name="userId"
                placeholder="Enter user ID"
                value={formData.userId}
                onChange={handleChange}
                className="focus-visible:ring-primary/50"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter user name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter user email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 mt-4"
            >
              Add User
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

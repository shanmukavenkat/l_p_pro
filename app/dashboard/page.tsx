"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, X, Upload, Pencil, Save, XCircle } from "lucide-react"

export default function DashboardPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState({
    name: "user",
    email: "user@example.com",
    username: "username ",
    role: "user role ",
    designationId: "user-id",
    image: "https://avatars.githubusercontent.com/u/9919?v=4",
  })

  const [formData, setFormData] = useState(user)
  const [preview, setPreview] = useState(user.image)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => {
      const imageUrl = reader.result as string
      setPreview(imageUrl)
      setFormData({ ...formData, image: imageUrl })
    }
    reader.readAsDataURL(file)
  }

  const handleSave = () => {
    setUser(formData)
    setIsEditing(false)
    alert("✅ Profile updated successfully!")
  }

  const handleCancel = () => {
    setFormData(user)
    setPreview(user.image)
    setIsEditing(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/40 to-background text-foreground flex flex-col">
      {/* ✅ Glassmorphic Navbar */}
      <header className="flex items-center justify-between px-6 py-2 border-b sticky top-0 z-20 
        bg-white/30 backdrop-blur-xl supports-[backdrop-filter]:bg-white/30 shadow-sm">
        {/* Left Section - Logo + Hamburger */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:bg-white/40"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <div
            className="flex items-center gap-3 select-none pointer-events-auto"
            aria-label="Logo"
          >
            <a href="/" className="flex items-center gap-2 no-underline">
              <img
                src="/Logo.png"
                alt="Lurnexa"
                className="block mix-blend-multiply object-contain"
                draggable={false}
                width={70}
                height={70}
                style={{
                  width: "clamp(32px, 5vw, 60px)",
                  height: "clamp(32px, 5vw, 60px)",
                }}
              />
              <span className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-semibold text-black tracking-tight">
                Lurnexa
              </span>
            </a>
          </div>
        </div>

        {/* ✅ Edit Profile Button */}
        <Button
          variant="outline"
          className="hidden md:flex items-center gap-2 font-medium"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? (
            <>
              <XCircle className="h-4 w-4" /> Cancel Edit
            </>
          ) : (
            <>
              <Pencil className="h-4 w-4" /> Edit Profile
            </>
          )}
        </Button>
      </header>

      {/* ✅ Main Dashboard Layout */}
      <main className="flex-1 flex flex-col md:flex-row gap-6 p-6 transition-all">
        {/* Left Sidebar / Profile Section */}
        <aside
          className={`w-full md:w-1/3 lg:w-1/4 bg-card border rounded-2xl shadow-sm p-6 space-y-5 transform transition-transform duration-300 ease-in-out ${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0 md:translate-x-0 md:opacity-100"
          }`}
        >
          <div className="flex flex-col items-center text-center space-y-3">
            {/* Profile Image + Upload */}
            <div className="relative group">
              <Avatar className="h-28 w-28 border-4 border-primary shadow-lg transition-transform duration-300 group-hover:scale-105">
                <AvatarImage src={preview} alt={formData.name} />
                <AvatarFallback>{formData.name[0]}</AvatarFallback>
              </Avatar>

              {isEditing && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full p-2 bg-white shadow-md hover:bg-primary hover:text-white"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-4 w-4" />
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </>
              )}
            </div>

            {/* Editable Profile Info */}
            <div className="space-y-2 text-center">
              {isEditing ? (
                <div className="space-y-3">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="text-center text-sm"
                  />
                  <Input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="text-center text-sm"
                  />
                  <Input
                    name="designationId"
                    value={formData.designationId}
                    onChange={handleChange}
                    className="text-center text-sm"
                  />
                  <Input
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="text-center text-sm"
                  />
                  <Button onClick={handleSave} className="w-full mt-3">
                    <Save className="h-4 w-4 mr-2" /> Save Changes
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold">{user.name}</h2>
                  <p className="text-muted-foreground text-sm">{user.email}</p>
                  <p className="text-xs text-muted-foreground">
                    Username: <span className="font-medium">{user.username}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ID: <span className="font-medium">{user.designationId}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Role: <span className="font-medium">{user.role}</span>
                  </p>
                </>
              )}
            </div>
          </div>

          <Separator />

          {/* Static User Info */}
          <Card className="shadow-none border-none bg-transparent">
            <CardHeader className="p-0 pb-3">
              <CardTitle className="text-base font-medium text-muted-foreground">
                Account Details
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Designation ID</p>
                <p className="font-medium">{user.designationId}</p>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Right Section */}
        <section className="flex-1 bg-muted/20 rounded-2xl border border-dashed border-muted-foreground/30 flex items-center justify-center text-center transition-all">
          <p className="text-muted-foreground text-sm">
            (Right section — add analytics, widgets, or dashboard content here)
          </p>
        </section>
      </main>
    </div>
  )
}

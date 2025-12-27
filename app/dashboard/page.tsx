"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Pencil,
  Save,
  XCircle,
  LogOut,
  Upload,
  User,
  ExternalLink,
  FileText,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  
  const router = useRouter();
  const SUB_ID = "21634dda-10d1-70a2-c1ab-07a0a7b8d721";

  const accessToken =
    typeof window !== "undefined"
      ? localStorage.getItem("access_token")
      : null;

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const resumeInputRef = useRef<HTMLInputElement>(null);


  // ✅ FIX 1: image state INSIDE component
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);


  const [formData, setFormData] = useState({
    subid: "",
    id: "",
    email: "",
    name: "",
    role: "",
    created_at: "",
    college_id: "",
    organization_name: "",
    contact_no: "",
    list_of_items: "",
    recent_work: "",
    ongoing_work: "",
    description: "",
    resume: "",
  });

  const [preview, setPreview] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ================= FETCH PROFILE IMAGE ================= */
  useEffect(() => {
    if (!formData.id) return;

    const fetchImage = async () => {
      try {
        const token = localStorage.getItem("access_token");

        const response = await fetch(
          "https://api.lurnexa.in/get-image",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ id: formData.id }), // ✅ correct id
          }
        );

        if (!response.ok) {
          throw new Error("Please upload a valid image");
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } catch (error) {
        console.error("Image fetch error:", error);
      }
    };

    fetchImage();

    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [formData.id]);

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/get_users`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(accessToken
                ? { Authorization: `Bearer ${accessToken}` }
                : {}),
            },
            body: JSON.stringify({ subid: SUB_ID }),
          }
        );

        const result = await res.json();

        if (result?.data?.length > 0) {
          const user = result.data[0];

          setFormData({
            subid: user.subid || "",
            id: user.id || "",
            email: user.email || "",
            name: user.name || "",
            role: user.role || "",
            created_at: user.created_at || "",
            college_id: user.college_id || "",
            organization_name: user.organisation_name || "",
            contact_no: user.contact_no || "",
            list_of_items: user.area_of_expertise?.[0] || "",
            recent_work: user.recent_work || "",
            ongoing_work: user.ongoing_work || "",
            description: user.description || "",
            resume: user.resume || "",
          });
        }
      } catch (err) {
        console.error("Fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [accessToken]);

  /* ================= INPUT ================= */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  /* ================= LOGOUT ================= */
  const handleLogout = () => {
    localStorage.clear();
    router.push("/EditoralLogins");
  };
/* ================= IMAGE UPLOAD ================= */
const handleProfileImageUpload = async ( e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file || !formData.id) return;

  // ✅ FRONTEND VALIDATION
  const allowedTypes = ["image/jpeg", "image/jpg"];
  const allowedExtensions = ["jpg", "jpeg"];

  const fileType = file.type;
  const fileExtension = file.name.split(".").pop()?.toLowerCase();

  if (
    !allowedTypes.includes(fileType) ||
    !fileExtension ||
    !allowedExtensions.includes(fileExtension)
  ) {
    alert("Please upload a JPG or JPEG image only");
    e.target.value = ""; // reset file input
    return;
  }
  // 2. OPTIMISTIC UPDATE: Show the image immediately
  const localPreview = URL.createObjectURL(file);
  setImageUrl(localPreview);
  // 3. UPLOAD TO SERVER
  try {
    const token = localStorage.getItem("access_token");

    const fd = new FormData();
    fd.append("file", file);
    fd.append("id", formData.id);

    const res = await fetch(
      "https://api.lurnexa.in/upload-image",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      }
    );

    const result = await res.json();
    console.log("Upload result:", result);

   if (!res.ok) throw new Error("Upload failed");

    // 3. CACHE BUSTING: Force the Avatar to refresh by adding a timestamp
    const timestamp = new Date().getTime();
    const newS3Url = `https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/${formData.id}.jpg?t=${timestamp}`;
    
    // This tells the UI to use the new S3 link instead of the blob
    setImageUrl(newS3Url); 
    alert("Profile picture updated!");

  } catch (error) {
    console.error("Upload error:", error);
    alert("Image upload failed");
    setImageUrl(null); // Revert on error
  }
};


  /* ================= SAVE PROFILE ================= */
  const handleSave = async () => {
    try {
      const payload = {
        data: {
          college_id: formData.college_id || "",
          organisation_name: formData.organization_name || "",
          contact_no: formData.contact_no || "",
          area_of_expertise: formData.list_of_items
            ? [formData.list_of_items]
            : [],
          recent_work: formData.recent_work || "",
          ongoing_work: formData.ongoing_work || "",
          description: formData.description || "",
        },
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/update_users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(accessToken
              ? { Authorization: `Bearer ${accessToken}` }
              : {}),
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        alert(result?.message || "Failed to update profile");
        return;
      }

      alert("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error("Update failed:", error);
      alert("Something went wrong");
    }
  };


  /* ================= RESUME UPLOAD ================= */
const handleResumeUpload = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];
  if (!file || !formData.id) return;

  // ✅ FRONTEND VALIDATION
  const allowedType = "application/pdf";
  const fileExtension = file.name.split(".").pop()?.toLowerCase();

  if (file.type !== allowedType || fileExtension !== "pdf") {
    alert("Please upload a PDF resume only");
    e.target.value = ""; // reset input
    return;
  }

  // ✅ OPTIONAL: file size check (2MB max)
  const maxSize = 2 * 1024 * 1024;
  if (file.size > maxSize) {
    alert("Resume size must be less than 2MB");
    e.target.value = "";
    return;
  }

  try {
    const token = localStorage.getItem("access_token");

    const fd = new FormData();
    fd.append("file", file);
    fd.append("id", formData.id);

    const res = await fetch(
      "https://api.lurnexa.in/upload-cv",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      }
    );

    const result = await res.json();

    if (!res.ok) {
      alert(result?.detail || "Resume upload failed");
      return;
    }

    alert("Resume uploaded successfully");

  } catch (error) {
    console.error("Resume upload error:", error);
    alert("Resume upload failed");
  }
};









  if (loading) return <div className="p-6">Loading...</div>;

  return (
  <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-blue-50/30 flex flex-col">
  {/* HEADER */}
  <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/75 border-b border-slate-200/60">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
      {/* LEFT: LOGO */}
      <div className="flex items-center gap-2 sm:gap-3 select-none transition-opacity hover:opacity-80" aria-label="Logo">
        <a href="/" className="flex items-center gap-2 no-underline">
          <img
            src="/Logo.png"
            alt="Lurnexa"
            className="block object-contain drop-shadow-sm"
            draggable={false}
            style={{
              width: "clamp(32px, 5vw, 48px)",
              height: "clamp(32px, 5vw, 48px)",
            }}
          />
          <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Lurnexa
          </span>
        </a>
      </div>

      {/* RIGHT: ACTIONS */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          className="text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline font-medium">Logout</span>
        </Button>
      </div>
    </div>
  </header>

  {/* MAIN CONTENT */}
  <div className="flex-1 w-full">
    <main className="flex flex-col lg:flex-row gap-8 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      
      {/* LEFT PROFILE CARD */}
      <aside className="w-full lg:w-1/3 xl:w-1/4 h-fit bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5">
        <div className="relative w-fit mx-auto mb-6">
          <Avatar className="h-32 w-32 border-4 border-white shadow-xl ring-1 ring-slate-100">
           <AvatarImage 
    // Use the imageUrl from state if it exists, otherwise use default S3 path
    src={imageUrl || `https://lurnexa.s3.ap-south-1.amazonaws.com/editorial_board_photos/${formData.id}.jpg`} 
    className="object-cover"
  />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl font-bold">
              {formData.name?.[0]?.toUpperCase()}
            </AvatarFallback>
          </Avatar>

          {isEditing && (
            <div className="absolute -bottom-1 -right-1">
              <Button
                size="icon"
                variant="default"
                className="h-10 w-10 rounded-full shadow-lg hover:scale-110 transition-transform bg-indigo-600 hover:bg-indigo-700 border-2 border-white"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="h-4 w-4 text-white" />
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfileImageUpload}
              />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{formData.name}</h3>
          <p className="text-sm font-medium text-slate-500 break-all bg-slate-50 py-1 px-3 rounded-full inline-block">
            {formData.email}
          </p>
          <div className="pt-2">
             <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase bg-white border border-slate-100 px-2 py-0.5 rounded shadow-sm">
                ID: {formData.id}
             </span>
          </div>
        </div>

        {!isEditing && (
          <Button
            variant="outline"
            className="mt-8 w-full py-6 rounded-2xl border-slate-200 text-slate-700 font-semibold shadow-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
            onClick={() => setIsEditing(true)}
          >
            <Pencil className="h-4 w-4 mr-2" /> Edit Profile
          </Button>
        )}
      </aside>

      {/* RIGHT FORM SECTION */}
      <section className="flex-1 bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5">
        <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
            {isEditing ? (
              <>
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Pencil size={20} className="text-indigo-600" />
                </div>
                Edit Account Details
              </>
            ) : (
              <>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <User size={20} className="text-slate-600" />
                </div>
                Profile Overview
              </>
            )}
          </h3>
        </div>

        {/* TEXT INPUTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {[
            ["name", "Full Name"],
            ["role", "Professional Role"], 
            ["college_id", "Institutional ID"],
            ["organization_name", "Organization"],
            ["contact_no", "Phone Number"],
             ["list_of_items", "Area of Expertise"],
            ["recent_work", "Latest Projects"],
            ["ongoing_work", "Active Research"],
            ["description", "Biography / Summary"],
          ].map(([key, label]) => (
            <div key={key} className="space-y-2 group">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-indigo-600 transition-colors">
                {label}
              </label>
              <Input
                name={key}
                placeholder={`Enter your ${label.toLowerCase()}`}
                value={(formData as any)[key]}
                onChange={handleChange}
                disabled={!isEditing}
                className={`h-12 px-4 rounded-xl border-slate-200 transition-all duration-200 ${
                  isEditing 
                    ? 'focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-white shadow-sm' 
                    : 'bg-slate-50/50 border-transparent text-slate-600 cursor-not-allowed'
                }`}
              />
            </div>
          ))}
        </div>

{/* 🧩 LIST OF ITEMS – SEPARATE TEXTAREA */}
<div className="mt-8 space-y-2 group">
  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-indigo-600 transition-colors">
    Expertise Areas (List of Items)
  </label>

  <textarea
    name="list_of_items"
    placeholder="Enter only up to 500 characters"
    value={(formData as any).list_of_items || ""}
    onChange={(e) => {
      if (e.target.value.length <= 500) {
        handleChange(e as any);
      }
    }}
    disabled={!isEditing}
    rows={4}
    className={`w-full px-4 py-3 rounded-xl border-slate-200 transition-all duration-200 resize-none ${
      isEditing
        ? "focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-white shadow-sm"
        : "bg-slate-50/50 border-transparent text-slate-600 cursor-not-allowed"
    }`}
  />

  {/* Character Counter */}
  <div className="text-right text-xs text-slate-400">
    {(formData as any).list_of_items?.length || 0} / 500 characters
  </div>
</div>



        {/* ✅ ENHANCED PDF PREVIEW SECTION */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-50/50 border border-slate-200/60">
          <div className="flex items-center justify-between mb-4">
            <label className="text-sm font-bold text-slate-800">
              Curriculum Vitae (CV)
            </label>
            {!isEditing && !formData.resume && <span className="text-xs text-muted-foreground italic">No resume uploaded</span>}
          </div>
          <div className="flex flex-col gap-4">
            {/* Show Preview/Link if Resume Exists */}
            {formData.resume && (
              <div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-red-50 rounded-lg flex items-center justify-center text-red-500">
                    <FileText size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Research_Resume.pdf</p>
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tight">Portable Document Format</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                   <a 
                    href={typeof formData.resume === 'string' ? formData.resume : URL.createObjectURL(formData.resume)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="sm" className="text-indigo-600 hover:bg-indigo-50">
                      <ExternalLink size={16} className="mr-2" /> View PDF
                    </Button>
                  </a>
                </div>
              </div>
            )}
      





      
            {/* Upload Button visible only in edit mode */}
            {isEditing && (
              <div className="flex flex-wrap items-center gap-4">
                <input
                  ref={resumeInputRef}
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleResumeUpload}
                />

                <Button
                  type="button"
                  variant="outline"
                  className="bg-white border-slate-200 hover:border-indigo-400 hover:text-indigo-600 rounded-xl px-6 h-11 transition-all"
                  onClick={() => resumeInputRef.current?.click()}
                >
                  <Upload className="h-4 w-4 mr-2" /> 
                  {formData.resume ? "Change Resume" : "Upload Resume (PDF)"}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM ACTIONS */}
        {isEditing && (
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 pt-8 border-t border-slate-100">
            <Button 
              onClick={handleSave} 
              className="w-full sm:w-auto px-10 h-14 rounded-2xl bg-slate-900 text-white hover:bg-black shadow-xl shadow-slate-200 transition-all active:scale-95"
            >
              <Save className="h-5 w-5 mr-2" /> Save Profile
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setIsEditing(false)} 
              className="w-full sm:w-auto px-8 h-14 rounded-2xl text-slate-500 hover:bg-slate-100 font-medium"
            >
              Discard Changes
            </Button>
          </div>
        )}
      </section>
    </main>
  </div>
</div>
  );
}

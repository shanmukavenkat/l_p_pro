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
          throw new Error("Failed to fetch image");
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
const handleProfileImageUpload = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
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

    if (!res.ok) {
      alert(result?.detail || "Image upload failed");
      return;
    }

    // 🔄 refresh image
    setImageUrl(null);

  } catch (error) {
    console.error("Image upload error:", error);
    alert("Image upload failed");
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
   <div className="min-h-screen flex flex-col">
 <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b">
  {/* LEFT: LOGO */}
  <div
    className="flex items-center gap-2 sm:gap-3 select-none"
    aria-label="Logo"
  >
    <a href="/" className="flex items-center gap-2 no-underline">
      <img
        src="/Logo.png"
        alt="Lurnexa"
        className="block object-contain"
        draggable={false}
        style={{
          width: "clamp(36px, 6vw, 64px)",
          height: "clamp(36px, 6vw, 64px)",
        }}
      />
      <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black tracking-tight">
        Lurnexa
      </span>
    </a>
  </div>

  {/* RIGHT: ACTIONS */}
  <div className="flex items-center gap-3">
    <Button
      size="sm"
      className="text-xs sm:text-sm"
      onClick={handleLogout}
    >
      <LogOut className="h-4 w-4 mr-1 sm:mr-2" />
      <span className="hidden sm:inline">Logout</span>
    </Button>
  </div>
</header>


  <main className="flex flex-1 gap-6 p-6">
    {/* LEFT PROFILE */}
    <aside className="w-1/4 bg-card border rounded-xl p-6 text-center">
      <div className="relative w-fit mx-auto mb-4">
        <Avatar className="h-28 w-28">
          <AvatarImage src={imageUrl ?? undefined} />
          <AvatarFallback>
            {formData.name?.[0]?.toUpperCase()}
          </AvatarFallback>
        </Avatar>

        {isEditing && (
          <>
            <Button
              size="icon"
              variant="secondary"
              className="absolute bottom-0 right-0 rounded-full"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-4 w-4" />
            </Button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfileImageUpload}
            />
          </>
        )}
      </div>

      <h3 className="text-lg font-semibold">{formData.name}</h3>
      <p className="text-sm text-muted-foreground">{formData.email}</p>

      <Button
        variant="outline"
        className="mt-4 w-full"
        onClick={() => setIsEditing(true)}
      >
        <Pencil className="h-4 w-4 mr-2" /> Edit Profile
      </Button>
    </aside>

    {/* RIGHT FORM */}
    <section className="flex-1 bg-card border rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">
        {isEditing ? "Edit Details" : "Profile Details"}
      </h3>

      {/* TEXT INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          ["name", "Name"],
          ["role", "Role"],
          ["college_id", "College ID"],
          ["organization_name", "Organization Name"],
          ["contact_no", "Contact Number"],
          ["list_of_items", "Area of Expertise"],
          ["recent_work", "Recent Work"],
          ["ongoing_work", "Ongoing Work"],
          ["description", "Description"],
        ].map(([key, label]) => (
          <Input
            key={key}
            name={key}
            placeholder={label}
            value={(formData as any)[key]}
            onChange={handleChange}
            disabled={!isEditing}
          />
        ))}
      </div>

      {/* ✅ RESUME PDF UPLOAD (ADDED) */}
      {isEditing && (
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">
            Resume (PDF only)
          </label>

          <div className="flex items-center gap-3">
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
              onClick={() => resumeInputRef.current?.click()}
            >
              Upload Resume (PDF)
            </Button>

            {formData.resume && (
              <span className="text-sm text-muted-foreground">
                Resume uploaded
              </span>
            )}
          </div>
        </div>
      )}

      {isEditing && (
        <div className="flex gap-3 mt-6">
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" /> Save
          </Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            <XCircle className="h-4 w-4 mr-2" /> Cancel
          </Button>
        </div>
      )}
    </section>
  </main>
</div>

  );
}

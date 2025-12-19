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
  
  });

  const [preview, setPreview] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

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
          });

          setPreview(user.photo || "");
          // console.log("PHOTO FROM BACKEND 👉", user.photo);

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

    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("id", formData.id); // ✅ filename = id

      const res = await fetch("/api/upload", {
        method: "POST",
        headers: accessToken
          ? { Authorization: `Bearer ${accessToken}` }
          : {},
        body: fd,
      });

      const result = await res.json();
      console.log("UPLOAD RESULT 👉", result);

      if (!res.ok || !result?.url) {
        alert("Image upload failed");
        return;
      }

      // 🔥 cache-busting preview
      const freshUrl = `${result.url}?t=${Date.now()}`;
      setPreview(freshUrl);

      const key = `editorial_board_photos/${formData.id}.${file.name.split(".").pop()}`;

      // local state
      setFormData((prev) => ({
        ...prev,
        photo: key,
      }));

      // ✅ SAVE IMAGE URL TO DB
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/update_users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(accessToken
            ? { Authorization: `Bearer ${accessToken}` }
            : {}),
        },
        body: JSON.stringify({
           id: formData.id, 
          data: {
            photo: result.url,
          },
        }),
      });

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

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="flex justify-between px-6 py-3 border-b">
        <h2 className="text-xl font-semibold">Lurnexa</h2>
        <Button onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" /> Logout
        </Button>
      </header>

      {/* DASHBOARD */}
      <main className="flex flex-1 gap-6 p-6">
        {/* LEFT PROFILE */}
        <aside className="w-1/4 bg-card border rounded-xl p-6 text-center">
          <div className="relative w-fit mx-auto mb-4">
            <Avatar className="h-28 w-28" >
              <AvatarImage key={preview} src={`/api/get-image?id=${formData.id}`} />
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

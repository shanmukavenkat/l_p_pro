"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

function ResetForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [email] = useState(searchParams.get("email") || "");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.lurnexa.in/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email,
          otp: otp, 
          new_password: newPassword 
        }),
      });

      if (response.ok) {
        setSuccess(true);
        // 3 seconds taruvata login ki redirect
        setTimeout(() => router.push("/login"), 3000);
      } else {
        const data = await response.json();
        setError(data.detail || "Invalid OTP or request failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-xl border-t-4 border-t-primary">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Verify OTP & Reset</CardTitle>
        <CardDescription>Enter the code sent to your email and set a new password.</CardDescription>
      </CardHeader>
      
      <form onSubmit={onResetSubmit}>
        <CardContent className="space-y-4">
          {success && <p className="p-3 bg-green-100 text-green-700 rounded text-sm font-medium">Reset successful! Redirecting to login...</p>}
          {error && <p className="p-3 bg-red-100 text-red-700 rounded text-sm font-medium">{error}</p>}
          
          <div className="space-y-2">
            <Label>Email Address</Label>
            <Input value={email} disabled className="bg-slate-100" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="otp">OTP Code</Label>
            <Input 
              id="otp" placeholder="6-digit code" required 
              value={otp} onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <Input 
              id="password" type="password" required 
              value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </CardContent>

        <CardFooter className="m-5">
          <Button type="submit" className="w-full h-11 " disabled={loading || success}>
            {loading ? "Verifying..." : "Update Password"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <NavigationPage />
      <main className="grow flex items-center justify-center px-4 py-12 mt-12">
        <Suspense fallback={<div>Loading...</div>}>
          <ResetForm />
        </Suspense>
      </main>
      <FooterSection />
    </div>
  );
}
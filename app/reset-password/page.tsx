"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

// 1. Form component ni separate cheyali - ide main logic
function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // URL nundi email teesukuntundi: ?email=example@gmail.com
  const emailFromUrl = searchParams.get("email") || "";

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
          email: emailFromUrl,
          otp: otp, 
          new_password: newPassword 
        }),
      });

      if (response.ok) {
        setSuccess(true);
        // Password reset success
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        const data = await response.json();
        // API error message 
        setError(data.detail || "Invalid OTP or request failed.");
      }
    } catch (err) {
      setError("Server connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-xl border-t-4 border-t-primary">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
        <CardDescription>Email ki vachina code ni enter chesi kotha password pettukondi.</CardDescription>
      </CardHeader>
      
      <form onSubmit={onResetSubmit}>
        <CardContent className="space-y-4">
          {success && (
            <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm font-medium text-center">
              Password Reset Successfully! Redirecting to login...
            </div>
          )}
          
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm font-medium">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label>Email Address</Label>
            <Input 
              value={emailFromUrl} 
              disabled 
              className="bg-slate-100 font-medium cursor-not-allowed" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="otp">OTP Code</Label>
            <Input 
              id="otp" 
              placeholder="Enter Code" 
              required 
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={loading || success}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="New Password"
              required 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={loading || success}
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button 
            type="submit" 
            className="w-full h-11 text-base font-semibold" 
            disabled={loading || success}
          >
            {loading ? "Verifying..." : "Update & Go to Login"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

// 2. Ikkada <Suspense> boundary mandatory - ide error ni fix chestundi
export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <NavigationPage />
      <main className="grow flex items-center justify-center px-4 py-12 mt-12">
        <Suspense fallback={
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="text-sm text-muted-foreground">Loading form...</p>
          </div>
        }>
          <ResetPasswordForm />
        </Suspense>
      </main>
      <FooterSection />
    </div>
  );
}
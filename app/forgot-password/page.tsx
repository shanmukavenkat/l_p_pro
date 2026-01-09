"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.lurnexa.in/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        // SUCCESS: Email query param tho 2nd page ki redirect chestunnam
        router.push(`/reset-password?email=${encodeURIComponent(email)}`);
      } else {
        const errorData = await response.json();
        setError(errorData.detail?.[0]?.msg || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <NavigationPage />
      <main className="grow flex items-center justify-center px-4 py-12 mt-12">
        <Card className="w-full max-w-md shadow-xl border-t-4 border-t-primary">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Forgot Password?</CardTitle>
            <CardDescription>Enter email to receive an OTP code.</CardDescription>
          </CardHeader>
          <form onSubmit={onSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" type="email" required 
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
                {error && <p className="text-xs text-destructive font-medium">{error}</p>}
              </div>
            </CardContent>
            <CardFooter className="m-3">
              <Button type="submit" className="w-full h-11" disabled={loading}>
                {loading ? "Sending..." : "Send Reset Code"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
      <FooterSection />
    </div>
  );
};

export default ForgotPassword;
"use client";

import React, { useState } from "react";
import Link from "next/link";
// Importing your specific components
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";

// UI Components from Shadcn
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

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationPage />
      
      {/* Centered Form Section */}
      <main className="flex-grow flex items-center justify-center p-4 bg-background">
        <Card className="w-full max-w-[400px] shadow-md">
          {!submitted ? (
            <>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
                <CardDescription>
                  Enter your email address to receive a recovery link.
                </CardDescription>
              </CardHeader>
              
              <form onSubmit={onSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col gap-3">
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Reset Link"}
                  </Button>
                  <Button variant="link" asChild className="text-sm">
                    <Link href="/login">Back to Login</Link>
                  </Button>
                </CardFooter>
              </form>
            </>
          ) : (
            <CardContent className="py-10 text-center space-y-4">
              <div className="text-4xl">📧</div>
              <CardTitle>Check your inbox</CardTitle>
              <CardDescription>
                We've sent a password reset link to <br />
                <span className="font-medium text-foreground">{email}</span>
              </CardDescription>
              <Button 
                variant="outline" 
                className="w-full mt-4" 
                onClick={() => setSubmitted(false)}
              >
                Try a different email
              </Button>
            </CardContent>
          )}
        </Card>
      </main>

      <FooterSection />
    </div>
  );
};

export default ForgotPassword;
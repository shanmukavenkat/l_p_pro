"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginCopy({ className, ...props }: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false)


  // 🛡️ Terms
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // 🔐 LOGIN USING BACKEND API
  const startAuth = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://api.lurnexa.in/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      const new_data =  (!response.ok) ? data : data.data;

      console.log("Login Response:", new_data);

      if (!response.ok) {
        throw new Error(data.message || "Invalid email or password");
      } else if (data.status === "NEW_PASSWORD_REQUIRED") {
        localStorage.setItem("email", email);
        localStorage.setItem("session", data.session);
        window.location.href = "/set-password";
      }else{
      
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("id_token", data.id_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      

      // Optional expiry tracking
      if (data.expires_in) {
        localStorage.setItem(
          "token_expiry",
          (Date.now() + data.expires_in * 1000).toString()
        );
      }

        window.location.href = "/dashboard";

      }
      
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) return;
    setShowTermsModal(true);
  };

  const handleAcceptTerms = () => {
    setShowTermsModal(false);
    startAuth();
  };

  return (
    <div className={cn("flex flex-col gap-6 relative", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to log in to your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLoginClick}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>

             <Field>
  <div className="flex items-center">
    <FieldLabel htmlFor="password">Password</FieldLabel>
    <a
      href="/forgot-password"
      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
    >
      Forgot your password?
    </a>
  </div>

  <div className="relative">
    <Input
      id="password"
      type={showPassword ? "text" : "password"}
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="pr-10"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
    >
      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  </div>
</Field>


              {/* ✅ TERMS CHECKBOX */}
              <Field>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="accent-blue-600"
                  />
                  <span>
                    I have read and agree to the website{" "}
                    <span
                      className="text-blue-600 underline cursor-pointer"
                      onClick={() => setShowTermsModal(true)}
                    >
                      terms and conditions
                    </span>
                  </span>
                </label>
              </Field>

              {error && (
                <p className="text-red-600 text-sm text-center mt-2">
                  {error}
                </p>
              )}

              <Field>
                <Button
                  type="submit"
                  disabled={loading || !agreeTerms}
                  className="w-full mt-4"
                >
                  {loading ? "Processing..." : "Login"}
                </Button>

                <FieldDescription className="text-center mt-3">
                  Don&apos;t have an account?{" "}
                  <a href="/signup" className="text-blue-600 hover:underline">
                    Sign up
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      {/* 📜 TERMS MODAL */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg flex flex-col max-h-[90vh]">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">
                Terms & Conditions
              </h3>
              <p className="text-sm text-gray-500">
                Lurnexa Publications - Editorial Access
              </p>
            </div>

            <div className="p-6 overflow-y-auto text-sm text-gray-600 leading-relaxed">
              <p className="mb-4 font-medium italic">
                By clicking "I Accept", you agree to the following:
              </p>

              <div className="space-y-3 text-start">
                <div className="p-6 overflow-y-auto text-sm text-gray-600 leading-relaxed">
              <p className="mb-4 font-medium italic">By clicking "I Accept", you agree to the following Editorial Login Access terms:</p>
              
              <div className="space-y-4">
                <section>
                  <h4 className="font-bold text-gray-800 underline">1. Purpose</h4>
                  <p>Credentials are for profile verification, manuscript access, and official editorial coordination only.</p>
                </section>
                <section>
                  <h4 className="font-bold text-gray-800 underline">2. Confidentiality</h4>
                  <p>Login details are strictly confidential. Sharing with third parties is prohibited.</p>
                </section>
                <section>
                  <h4 className="font-bold text-gray-800 underline">3. Data Accuracy</h4>
                  <p>Members must ensure all submitted information is authentic and accurate.</p>
                </section>
                <section>
                  <h4 className="font-bold text-gray-800 underline">4. Privacy</h4>
                  <p>Data is used strictly for official publishing and administrative purposes.</p>
                </section>
                <section>
                  <h4 className="font-bold text-gray-800 underline">5. Ethics</h4>
                  <p>Must comply with ethical publishing standards and peer-review confidentiality.</p>
                </section>
                <section>
                  <h4 className="font-bold text-gray-800 underline">6. System Security</h4>
                  <p>Members should change temporary passwords immediately. Security monitoring is in place.</p>
                </section>
                <section>
                  <h4 className="font-bold text-gray-800 underline">7. Termination</h4>
                  <p>Access may be revoked for violations or completion of association.</p>
                </section>
                <section>
                  <h4 className="font-bold text-gray-800 underline">8. IP Rights</h4>
                  <p>All system content and workflows are the intellectual property of Lurnexa Publications.</p>
                </section>
                <section>
                  <h4 className="font-bold text-gray-800 underline">9. Liability</h4>
                  <p>Lurnexa is not liable for user negligence or compromised credentials.</p>
                </section>
                <section>
                  <h4 className="font-bold text-gray-800 underline">10. Modifications</h4>
                  <p>Terms may be updated at any time; continued use constitutes acceptance.</p>
                </section>
                <section>
                  <h4 className="font-bold text-gray-800 underline">11. Governing Law</h4>
                  <p>Governed by the laws of India and subject to its competent courts.</p>
                </section>
                <section className="bg-blue-50 p-3 rounded">
                  <h4 className="font-bold text-gray-800 underline">12. Acceptance</h4>
                  <p>By clicking the button below, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</p>
                </section>
              </div>
              </div>
              </div>
            </div>

            <div className="p-6 border-t flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowTermsModal(false);
                  setLoading(false);
                }}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAcceptTerms}
                className="flex-1 bg-blue-700 hover:bg-blue-800"
              >
                I Accept & Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

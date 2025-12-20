import React from "react";
import { Mail, Phone, User, MessageSquare, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import NavigationPage from "@/components/Home/nav/page";
import FooterSection from "@/components/Home/FooterSection";

export default function ContactPage() {
    
  return (
    <>
    <NavigationPage />
    <div className="min-h-screen bg-slate-50">
        
      {/* Hero Section with Background */}
      <div className="relative h-[450px] w-full bg-cover bg-center flex flex-col items-center justify-center text-white px-4" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}

  
  >


        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-400">
          Get in touch with us for more information
        </h1>
        <p className="text-lg opacity-90 text-center max-w-2xl ext-black drop-shadow-lg">
          If you need help or have a question, we're here for you
        </p>
      </div>

      {/* Main Content Card */}
      <div className="max-w-6xl mx-auto px-4 -mt-32 pb-20 relative z-10">
        <Card className="border-none shadow-2xl overflow-hidden rounded-3xl">
          <CardContent className="p-0 flex flex-col lg:flex-row">
            
            {/* Left Side: Form */}
            <div className="flex-[1.5] p-8 md:p-12 bg-white">
              <h2 className="text-3xl font-bold mb-8">Say hello!</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name</label>
                    <div className="relative">
                      <Input placeholder="Enter your name here..." className="pl-4 pr-10 h-12 bg-slate-50 border-none" />
                      <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Email</label>
                    <div className="relative">
                      <Input placeholder="Enter your email here.." className="pl-4 pr-10 h-12 bg-slate-50 border-none" />
                      <Mail className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <div className="relative">
                    <Input placeholder="Enter your phone number here..." className="pl-4 pr-10 h-12 bg-slate-50 border-none" />
                    <Phone className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Enter your message" 
                    className="min-h-[150px] bg-slate-50 border-none resize-none p-4"
                  />
                </div>

                <Button className="w-full h-14 bg-black text-white hover:bg-zinc-800 rounded-xl text-lg font-semibold">
                  Send Your Message
                </Button>
              </form>
            </div>

            {/* Right Side: Info Cards */}
            <div className="flex-1 p-8 md:p-12 bg-white border-l border-gray-100 flex flex-col gap-6">
              
              {/* Email/Phone Card */}
              <div className="border rounded-2xl p-8 text-center space-y-4">
                <h3 className="text-xl font-bold">Company Email/Phone</h3>
                <div className="space-y-1 text-gray-600">
                  <p>wewerwerw@gmail.com</p>
                  <p>asfsfasd</p>
                </div>
              </div>

              {/* HQ Card */}
              <div className="border rounded-2xl p-8 text-center space-y-4">
                <h3 className="text-xl font-bold">sadfas</h3>
                <div className="space-y-1 text-gray-600 leading-relaxed">
                  <p>asd</p>
                  <p>asdfas</p>
                  <p>asd</p>
                  <p>Casdasd</p>
                </div>
              </div>

             
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
    <FooterSection/>
    </>
  );
}
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
        <p className="text-lg opacity-90 text-center max-w-2xl text-black drop-shadow-lg " style={{backgroundColor:"white"}}>
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



<div className="flex-1 p-8 md:p-12 bg-linear-to-br from-slate-50 to-white border-l border-slate-200 flex flex-col gap-6">

  {/* Mail Us Card */}
  <div className="group rounded-3xl p-8 bg-white shadow-sm ring-1 ring-slate-200/60 hover:shadow-lg transition-all duration-300">
    
    {/* Icon */}
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
      <Mail className="h-6 w-6" />
    </div>

    <h3 className="text-xl font-semibold text-slate-900 text-center">
      Mail Us
    </h3>

    <p className="mt-2 text-sm text-slate-500 text-center">
      We reply within 24 hours
    </p>

    <div className="mt-4 space-y-1 text-slate-600 text-sm text-center">
      <p className="font-medium">
        lurnexapublication@gmail.com
      </p>
    </div>
  </div>

  {/* Call Us Card */}
  <div className="group rounded-3xl p-8 bg-white shadow-sm ring-1 ring-slate-200/60 hover:shadow-lg transition-all duration-300">

    {/* Icon */}
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
      <Phone className="h-6 w-6" />
    </div>

    <h3 className="text-xl font-semibold text-slate-900 text-center">
      Call Us
    </h3>

    <p className="mt-2 text-sm text-slate-500 text-center">
      Mon to Fri · 9am – 6pm
    </p>

    <div className="mt-4 space-y-1 text-slate-600 text-sm text-center">
      <p className="font-medium tracking-wide">
        +91 91335 21829
      </p>
      <p className="font-medium tracking-wide">
        +91 93473 75817
      </p>
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
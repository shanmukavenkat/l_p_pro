import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <>
    <div className=" flex items-center gap-3 select-none pointer-events-auto" aria-label="Logo">
          <a href="/" className="flex items-center gap-2 no-underline">
            <img
              src="/Logo.png"
              alt="Lurnexa"
              className=" block mix-blend-multiply object-contain opacity-100%"
              draggable={false}
              width={80}
              height={80}
               style={{
                width: "clamp(40px, 6vw, 80px)",
                height: "clamp(40px, 6vw, 80px)",
                  }} />
                <span className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-semibold text-black tracking-tight">
               Lurnexa
              </span>
          
          </a>
          </div>
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
    </>
  )
}

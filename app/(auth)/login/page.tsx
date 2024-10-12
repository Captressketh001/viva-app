'use client'
import dynamic from 'next/dynamic'

const LoginForm = dynamic(() => import("@/app/ui/login-form"), { ssr: false });
export default function LoginPage() {
  

  return (
      <div className="flex-1 flex items-center justify-center w-full h-full p-4">
        <LoginForm />
      </div>
   
  );
}

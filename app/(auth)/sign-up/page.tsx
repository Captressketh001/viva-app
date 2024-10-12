'use client'
import dynamic from 'next/dynamic'

const SignupForm = dynamic(() => import("@/app/ui/signup-form"), { ssr: false });
export default function SignupPage() {
  

  return (
      <div className="flex-1 flex items-center justify-center w-full h-full p-4">
        <SignupForm />
      </div>
   
  );
}

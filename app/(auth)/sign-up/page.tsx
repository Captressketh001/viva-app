'use client'
import dynamic from 'next/dynamic'
import { useAuth } from '@/app/context/GlobalProvider'
import { redirect } from 'next/navigation'

const SignupForm = dynamic(() => import("@/app/ui/signup-form"), { ssr: false });
export default function SignupPage() {
    const { isLoading, isLoggedIn} = useAuth()
    if (!isLoading && isLoggedIn) return redirect('/dashboard')
  return (
      <div className="flex-1 flex items-center justify-center w-full h-full p-4">
        <SignupForm />
      </div>
   
  );
}

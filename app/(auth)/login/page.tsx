'use client'
import dynamic from 'next/dynamic'
import { useAuth } from '@/app/context/GlobalProvider'
import { redirect } from 'next/navigation'

const LoginForm = dynamic(() => import("@/app/ui/login-form"), { ssr: false });
export default function LoginPage() {
  const { isLoading, isLoggedIn} = useAuth()
  if (!isLoading && isLoggedIn) return redirect('/dashboard')
  return (
      <div className="flex-1 flex items-center justify-center w-full h-full p-4">
        <LoginForm />
      </div>
   
  );
}

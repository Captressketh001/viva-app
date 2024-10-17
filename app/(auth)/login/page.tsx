'use client'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useAuth } from '@/app/context/GlobalProvider'
import { redirect } from 'next/navigation'

const LoginForm = dynamic(() => import("@/app/ui/login-form"), { ssr: false });
export default function LoginPage() {
  const { isLoading, isLoggedIn} = useAuth()
  
  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      redirect('/dashboard');
    }
  }, [isLoading, isLoggedIn]);
  return (
      <div className="flex-1 flex items-center justify-center w-full h-full p-4">
        <LoginForm />
      </div>
   
  );
}

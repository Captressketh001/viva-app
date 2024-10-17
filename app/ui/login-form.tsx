'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputForm from "@/app/ui/inputForm";
import { z } from 'zod';
import Link from 'next/link'
import { useAuth } from '@/app/context/GlobalProvider'
import { useRouter } from 'next/navigation'
import { signIn, getCurrentUser } from '@/app/lib/appWrite'
import toast from 'react-hot-toast'

const schema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .refine((val) => val.trim() !== "", { message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .refine((val) => val.trim() !== "", { message: "Password is required" }),
});

type FormValues = {
  email: string;
  password: string;
};

export default function LoginForm (){
    const router = useRouter()
    const { setisLoggedIn, setUser } = useAuth()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>({
        resolver: zodResolver(schema),
      });
      const onSubmit = async(data: FormValues) => {
        setIsSubmitting(true)
        try {
            await signIn(data.email, data.password)
            const result = await getCurrentUser()
            setUser(result)
            setisLoggedIn(true)
            router.push('/dashboard')
            toast.success('Login Successful!')
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setIsSubmitting(false)
        }
      };
    return (
        <form
          className="w-full max-w-[560px] flex flex-col gap-8 p-8 bg-white rounded-[12px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="font-bold text-3xl">Login</h2>
          <div className="flex flex-col gap-2">
            <InputForm
              register={register("email")}
              type="email"
              label="Email"
              error={errors.email?.message}
            />
            <InputForm
              register={register("password")}
              type="password"
              label="Password"
              error={errors.password?.message}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting === true}
            className="bg-pink text-white py-4 font-bold  px-4 rounded-lg"
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
          <p className="text-center text-xs">Don&apos;t have an account? <Link href="/sign-up" className="underline font-bold">Sign Up</Link></p>
        </form>
    )
}
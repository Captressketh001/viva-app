import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputForm from "@/app/ui/inputForm";
import { z } from 'zod';
import Link from 'next/link'
import { createUser } from '../lib/appWrite';
import toast from 'react-hot-toast';
import { useAuth } from '@/app/context/GlobalProvider'
import { useRouter } from 'next/navigation'

const schema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .refine((val) => val.trim() !== "", { message: "Email is required" }),
    username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .refine((val) => val.trim() !== "", { message: "Username is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .refine((val) => val.trim() !== "", { message: "Password is required" }),
});

type FormValues = {
  email: string;
  username: string;
  password: string;
};

export default function SignupForm (){
    const [isSubmitting, setIsSubmitting] = useState(false)

    const router = useRouter()

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
            await createUser(data.email, data.password, data.username)
            router.replace('/login')
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
          <h2 className="font-bold text-3xl">Create Account</h2>
          <div className="flex flex-col gap-2">
            <InputForm
              register={register("email")}
              type="email"
              label="Email"
              error={errors.email?.message}
            />
            <InputForm
              register={register("username")}
              type="text"
              label="Username"
              error={errors.username?.message}
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
            className="bg-violet text-white py-4 font-bold  px-4 rounded-lg"
          >
           {isSubmitting ? 'Creating...' : 'Create Account'} 
          </button>
          <p className="text-center text-xs">Already have an account? <Link href="/login" className="underline font-bold">Login</Link></p>
        </form>
    )
}
"use client"
import React from 'react'
import { AuthLayout } from '../components/auth-layout'
import Image from 'next/image'
import { logo } from '../../../../public/images'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { FiLogIn } from 'react-icons/fi'

const SignInPage = () => {
    const router = useRouter();
  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
          <div className="flex justify-center mb-6 mt-2">
            <Image src={logo} alt='auth logo' />
          </div>
        <div className="bg-[#FEFEFE] border border-gray-200 rounded-2xl shadow-lg px-10 py-6 w-full max-w-md flex flex-col items-center">
          <h3 className="font-bold text-[32px] leading-[20px] tracking-normal mb-2 text-center">Welcome</h3>
          <p className="font-normal text-sm leading-5 tracking-normal text-custom-gray mb-6 text-center">Welcome back! Please enter your details below.</p>
          <form className="space-y-5 w-full">
            <div className="flex flex-col gap-1">
              <Label htmlFor="email" className="font-sans font-medium text-sm leading-5 tracking-normal">Work Email<span className="text-orange-500"> *</span></Label>
              <Input placeholder='Email' className='border-gray-300 w-full rounded-lg py-2 px-3' />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="font-sans font-medium text-sm leading-5 tracking-normal">Password<span className="text-orange-500"> *</span></Label>
                <span 
                  onClick={()=> router.push('/forgot-password')}
                  className="text-[#EA4335] cursor-pointer font-medium text-[10px] leading-none tracking-tighter hover:underline"
                >Forgot Password?</span>
              </div>
              <Input placeholder='Password' className='border-gray-300 w-full rounded-lg py-2 px-3' />    
            </div>
            <div className='flex items-center justify-start gap-2'>
              <Checkbox id="remember" className="h-4 w-4" />
              <Label htmlFor="remember" className="font-medium text-xs leading-none tracking-tighter">Remember me</Label>
            </div>
            <Button onClick={() => router.push('/dashboard')} className='w-full rounded-lg bg-primary cursor-pointer hover:bg-primary/80 text-white font-semibold flex items-center justify-center gap-2 py-2'>Sign in <FiLogIn size={18}/></Button>
          </form>
          <p className="font-normal text-sm leading-none tracking-tighter text-center mt-6">Don&apos;t have an account? 
            <span 
              onClick={() => router.push('/sign-up')}
              className="underline cursor-pointer font-medium ml-1"
            >Sign up</span>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}

export default SignInPage
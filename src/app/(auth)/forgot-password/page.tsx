import React from 'react'
import { AuthLayout } from '../components/auth-layout'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

const ForgotPasswordPage = () => {
  return (
    <AuthLayout>
      <div className='flex flex-col items-center justify-center w-full min-h-screen'>
        <div className='mx-auto w-full max-w-md px-12'>
          <h3 className="font-bold text-[24px] leading-[20px] tracking-normal mb-1 text-left">I&apos;ve forgotten my password</h3>
          <p className="font-normal text-custom-gray text-xs leading-[20px] tracking-normal mb-6 text-left">Enter your email address</p>
          <form className="space-y-6">
            <div className='flex flex-col gap-2'>
              <Label htmlFor="email" className="font-medium text-sm leading-[20px] tracking-normal text-left">Email</Label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-custom-gray">
                  <Mail className='text-custom-gray' size={18} />
                </span>
                <Input
                  id="email"
                  type="email"
                  placeholder="johnmiles@example.com"
                  className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </div>
            <div className='flex items-center justify-between gap-4 mt-2'>
              <Button type="button" variant="secondary" className="w-1/2">Cancel</Button>
              <Button type="submit" className="w-1/2" >Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}

export default ForgotPasswordPage
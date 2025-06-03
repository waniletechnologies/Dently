import React from 'react'
import { AuthLayout } from '../components/auth-layout'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const PasswordResetSuccessPage = () => {
  return (
    <AuthLayout>
        <div className="space-y-6 text-center max-w-sm mx-auto p-8 bg-[#FFF9ED] rounded-lg">
            <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-primary">
              <Check className="h-8 w-8 text-white" />
            </div>
        
            <div className="space-y-2">
              <p className="font-normal text-[#808080] text-lg leading-[30px] tracking-normal text-center sm:leading-5">Your password has been successfully reset</p>
            </div>
        
            <Button className="w-full sm:w-[162.4px] h-10 cursor-pointer bg-primary hover:bg-primary/90" asChild>
              <Link href="/login">Go to Login</Link>
            </Button>
        </div>
    </AuthLayout>
  )
}

export default PasswordResetSuccessPage
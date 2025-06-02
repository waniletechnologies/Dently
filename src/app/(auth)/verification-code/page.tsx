"use client"
import React, { useRef, useState } from 'react'
import { AuthLayout } from '../components/auth-layout'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

const verificationSchema = z.object({
  code: z
    .array(z.string().min(1, "Each digit is required"))
    .length(6, "Verification code must be 6 digits"),
});

const VerificationCodePage = () => {
  const router = useRouter()
  const [activeInput, setActiveInput] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef([]);


  const form = useForm({
    resolver: zodResolver(verificationSchema),
    defaultValues: { code: ["", "", "", "", "", ""] }
  });

  const handleChange = (e, index) => {
    const value = e.target.value;
    const currentCode = form.getValues("code");
    const newCode = [...currentCode];
    newCode[index] = value;
    form.setValue("code", newCode);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
      setActiveInput(index + 1);
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveInput(index - 1);
    }
  };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
        const newCode = [...form.getValues("code")];
        pastedData.forEach((digit, index) => {
        if (index < 6) {
            newCode[index] = digit;
            inputRefs.current[index]?.focus();
        }
        });
        form.setValue("code", newCode);
    };
    const onSubmit = (data) => {
        setIsLoading(true);
        // Simulate async verification, replace with real API call
        setTimeout(() => {
            console.log("Verification Code Submitted:", data.code.join(""));
            setIsLoading(false);
        }, 1000);
    }
  return (
    <AuthLayout>
              <div className="space-y-4 max-w-md mx-auto p-6">
                <div className="space-y-2">
                  <h1 className="font-bold text-[24px] leading-[20px] tracking-normal">Enter Verification Code</h1>
                  <p className="font-normal text-xs leading-[20px] tracking-normal text-custom-gray">Enter 6-Digit Code to Retrieve password</p>
                </div>
        
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 ">
                    <div className="flex gap-4 my-4 items-center justify-center bg-[#FFF9ED] p-3 rounded-lg">
                      {[0, 1, 2, 3].map((index) => (
                        <FormField
                          key={index}
                          control={form.control}
                          name={`code.${index}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  {...field}
                                  value={form.getValues("code")[index] || ""}
                                  onChange={(e) => handleChange(e, index)}
                                  onKeyDown={(e) => handleKeyDown(e, index)}
                                  onPaste={handlePaste}
                                  ref={(el) => (inputRefs.current[index] = el)}
                                  className={`h-16 w-12 text-center text-xl bg-white font-medium ${
                                    activeInput === index ? 'border-primary' : 'border-[#CBD0DC]'
                                  }`}
                                  maxLength={1}
                                  type="text"
                                  inputMode="numeric"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
        
                    <p className="font-normal text-base leading-[24px] tracking-normal">
                      If you don&apos;t receive any code.{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Resend
                      </Link>
                    </p>
        
                    <div className="flex w-full gap-4">
                      <Button variant="outline" className="w-1/2 h-10" asChild>
                        <Link href="/forgot-password">Cancel</Link>
                      </Button>
                      <Button 
                        type="submit" 
                        className={`w-1/2 h-10 cursor-pointer bg-primary hover:bg-primary/90 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        Verify
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
    </AuthLayout>
  )
}

export default VerificationCodePage
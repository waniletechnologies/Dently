"use client"
import { AuthLayout } from "../components/auth-layout"
import { Button } from "@/components/ui/button"
import { InputWithIcon } from "../components/input-with-icon"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Label } from "@/components/ui/label";

const resetPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function ResetPasswordPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: ""
    }
  });

  const onSubmit = async (data: { password: string; confirmPassword: string }) => {
    try {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Password reset data:', data);
      
      router.push('/login');
    } catch (error) {
      console.error('Error resetting password:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6 max-w-md mx-auto px-10">
        <div className="space-y-2">
          <h1 className="font-bold text-[24px] leading-[20px] tracking-normal">Reset Password</h1>
          <p className="font-normal text-xs leading-[20px] tracking-normal text-custom-gray">Create a new password</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password" className="font-medium text-sm leading-[20px] tracking-normal">
              New Password
            </Label>
            <InputWithIcon
              name="password"
              register={register}
              type="password"
              placeholder="********"
              icon="lock"
              error={errors.password?.message}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="font-medium text-sm leading-[20px] tracking-normal">
              Confirm Password
            </Label>
            <InputWithIcon
              name="confirmPassword"
              register={register}
              type="password"
              placeholder="********"
              icon="lock"
              error={errors.confirmPassword?.message}
            />
          </div>

          <div className="flex w-full gap-4">
            <Button
              variant="outline"
              type="button"
              className="w-1/2 h-10"
              onClick={() => router.push('/login')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-1/2 h-10 cursor-pointer bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
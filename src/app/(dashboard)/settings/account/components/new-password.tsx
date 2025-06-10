/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Lock, Eye, EyeOff } from 'lucide-react';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const passwordSchema = z.object({
  currentPassword: z.string().min(8, "Password must be at least 8 characters"),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

interface NewPasswordDialogProps {
  onPasswordChange: () => void;
  onClose: () => void;
}

const NewPasswordDialog = ({
  onPasswordChange,
  onClose,
}: NewPasswordDialogProps) => {

  const form = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    }
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data: z.infer<typeof passwordSchema>) => {
    try {
      console.log('Password change data:', data);
      onPasswordChange();
    } catch (error) {
      console.log('Failed to update password');
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px] p-0">
      <DialogHeader className="px-6 pb-0 pt-5">
        <DialogTitle className="text-[18.12px] text-[#292D32] leading-[100%] text-start font-medium">
          Change Password
        </DialogTitle>
        <p className="text-[15.45px] text-start font-medium leading-[100%] text-[#A9ACB4]">
          Protect your account with a strong password
        </p>
      </DialogHeader>
      
      <hr className="my-1 border-[#CBD0DC]" />
      <div className="px-6 md:px-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 space-y-4">
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] font-medium leading-5 text-[#09090B]" >Current Password</FormLabel>
                <div className="relative">
                  <Lock className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-[#71717A]" />
                  <FormControl>
                    <Input
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="Enter current password"
                      {...field}
                      className="w-full pl-9 pr-9 text-[16px] leading-[24px] font-normal"
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#71717A]"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] font-medium leading-5 text-[#09090B]">New Password</FormLabel>
                <div className="relative">
                  <Lock className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-[#71717A]" />
                  <FormControl>
                    <Input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      {...field}
                      className="w-full pl-9 pr-9 text-[16px] leading-[24px] font-normal"
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#71717A]"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[14px] font-medium leading-5 text-[#09090B]">Confirm Password</FormLabel>
                <div className="relative">
                  <Lock className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-[#71717A]" />
                  <FormControl>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      {...field}
                      className="w-full pl-9 pr-9 text-[16px] leading-[24px] font-normal"
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#71717A]"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
            />

          <div className="flex justify-center pt-4 pb-6">
            {/* <Button 
              type="button"
              variant="outline"
              onClick={onClose}
              className="text-[14px] h-[36px]"
            >
              Cancel
            </Button> */}
            <Button 
              type="submit"
              className="text-[14px] w-full h-[36px]"
            >
              Change Password
            </Button>
          </div>
        </form>
      </Form>
      </div>
    </DialogContent>
  );
}

export default NewPasswordDialog;
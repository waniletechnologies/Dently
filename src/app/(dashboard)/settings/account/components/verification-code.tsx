/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import type React from "react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FiRotateCcw } from "react-icons/fi";


const verificationSchema = z.object({
  code: z.string().length(4, "Verification code must be 6 digits"),
});

interface VerificationCodeDialogProps {
  email: string;
  onVerify: () => void;
  onResend: () => void;
  onBack?: () => void;
}

export function VerificationCodeDialog({ onVerify, onResend }: VerificationCodeDialogProps) {
  const [isResending, setIsResending] = useState(false);
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const form = useForm({
    resolver: zodResolver(verificationSchema),
    defaultValues: { code: "" }});

  const handleVerify = async () => {
    try {
      console.log("Verification code submitted:",);
      onVerify();
    } catch (error) {
      console.log(error);
    }
  };

  const handleResend = async () => {
    try {
      await onResend();
    } catch (error) {
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    // Update form value
    const currentCode = form.getValues("code") || "";
    const newCode = currentCode.split("");
    newCode[index] = value;
    form.setValue("code", newCode.join(""));

    // Auto-focus next input
    if (value && index < 3) {
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
        setActiveInput(index + 1);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveInput(index - 1);
    }
  };

  const handleFocus = (index: number): void => {
    setActiveInput(index);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").slice(0, 4);
    form.setValue("code", pasteData);

    // Focus the last input box
    if (pasteData.length === 4) {
      if (inputRefs.current[3]) inputRefs.current[3]?.focus();
      setActiveInput(3);
    } else if (pasteData.length > 0) {
      const ref = inputRefs.current[pasteData.length - 1];
      if (ref) ref.focus();
      setActiveInput(pasteData.length - 1);
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px] p-0">
      <DialogHeader className="px-6 pb-0 pt-5">
        <DialogTitle className="text-[18.12px] text-[#292D32] leading-[100%] text-start font-medium">
          Check your email
        </DialogTitle>
        <p className="text-[15.45px] text-start font-medium leading-[100%] text-[#A9ACB4]">
          Please Enter the code that we sent to your email
        </p>
      </DialogHeader>

      <hr className="my-1 border-[#CBD0DC] mx-0" />
      <div className="px-6 ">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(handleVerify)} className="mt-6">
          <div className="flex justify-center space-x-3 mb-8">
            {[0, 1, 2, 3,].map((index) => (
              <FormField
                key={index}
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        value={form.getValues("code")?.[index] || ""}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        ref={(el: HTMLInputElement | null) => { inputRefs.current[index] = el; }}
                        className={`w-[50px] h-[68px] text-center text-[22px] md:text-[26px] font-semibold text-[#000000] border-2 ${
                          activeInput === index
                            ? "border-primary"
                            : "border-[#CBD0DC]"
                        } rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0`}
                        maxLength={1}
                        type="text"
                        inputMode="numeric"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
          </div>
          <div className="flex justify-center px-6" >
            <Button
              type="submit"
              className="w-full h-[36px] text-[14px] font-medium leading-5 bg-primary hover:bg-primary/90"
            >
              Continue
            </Button>
          </div>
        </form>
      </Form>
      </div>
      <div className="mt-3 mb-5 text-center text-sm text-[#71717A]">
        {isResending ? (
          <div className="flex items-center justify-center">
            <FiRotateCcw className="h-4 w-4 mr-2 animate-spin" />
            Sending code...
          </div>
        ) : (
          <span className="text-[#000000]">
            If you don&apos;t receive any code.
            <button
              type="button"
              onClick={handleResend}
              className="text-primary font-medium hover:underline"
            >
              Resend
            </button>
          </span>
        )}
      </div>
    </DialogContent>
  );
}

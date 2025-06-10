"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { user } from "../../../../../public/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { InputWithIcon } from "@/app/(auth)/components/input-with-icon";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { FiChevronRight } from "react-icons/fi";
import {PasswordResetFlow} from "./components/password-reset-flow"
import type { StaticImageData } from "next/image";
import { Label } from "@/components/ui/label";

export default function Account() {
    const[isDialogOpen, setIsDialogOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { register, handleSubmit } = useForm();

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('File selected:', file);
        }
    };

    const onSubmit = (data: unknown) => {
        console.log('Form submitted:', data);
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-4">
            <div className="mx-auto w-full sm:py-6 sm:px-8 p-4 rounded-2xl bg-[#FFFFFF]">
                <div className="mb-6">
                    <h4 className="text-lg font-semibold">Personal Information</h4>
                    <p className="text-sm text-[#8E919F]">
                        Update your personal details and contact information.
                    </p>
                </div>
                <hr className="border-gray-200 my-4" />

                <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20 rounded-full bg-gray-100 overflow-hidden">
                            <AvatarImage
                                src={typeof user === "string" ? user : (user as StaticImageData).src}
                                alt="Profile picture" 
                            />
                            <AvatarFallback className="bg-primary text-white md:text-3xl">
                                U
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="sm:text-lg font-semibold">Profile Picture</h3>
                            <p className="sm:text-sm text-xs text-gray-500">PNG, JPEG under 1MB</p>
                        </div>
                    </div>

                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/jpeg,image/png"
                        onChange={handleImageUpload}
                    />

                    <Button 
                        type="button"
                        variant="outline" 
                        onClick={triggerFileInput}
                        className="border-gray-300 sm:w-[136px] text-[13px] text-[#8E919F] bg-[#F8F8F8] h-10"
                    >
                        Upload new picture
                    </Button>
                </div>

                <div className="grid gap-6 p-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">Full Name</Label>
                        <Input {...register('fullName')} placeholder="John" />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">Practice Name</Label>
                        <Input {...register('practiceName')} placeholder="Miles" />
                    </div>
                </div>

                <div className="grid gap-6 p-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">Password</Label>
                        <InputWithIcon
                            type="password"
                            icon="lock"
                            register={register}
                            name="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">Work mail</Label>
                        <InputWithIcon
                            type="email"
                            icon="mail"
                            register={register}
                            name="workMail"
                            placeholder="Enter your work email"
                        />
                    </div>
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                    <div className="mx-auto w-full px-2 bg-[#FFFFFF] rounded-lg cursor-pointer hover:bg-gray-50">
                        <div className="flex p-4 justify-between">
                        <h4 className="text-[16px] font-semibold leading-5">Change Password</h4>
                        <FiChevronRight />
                        </div>
                    </div>
                </DialogTrigger>
                <PasswordResetFlow
                  open={isDialogOpen} 
                  onOpenChange={setIsDialogOpen} 
                />
            </Dialog>

            {/* <div className="flex justify-end p-4">
                <Button 
                    type="submit"
                    className="bg-primary text-white"
                >
                    Save Changes
                </Button>
            </div> */}
        </form>
    )
}
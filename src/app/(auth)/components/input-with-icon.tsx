"use client"

import type React from "react"

import { forwardRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react"
import { UseFormRegister } from "react-hook-form"
import { FieldValues } from "react-hook-form"

export interface InputWithIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: "mail" | "user" | "lock"
  register?: UseFormRegister<FieldValues>
  name?: string
  error?: string
}

const InputWithIcon = forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ className, register, name, type, icon, ...props },) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === "password"
    const inputType = isPassword && showPassword ? "text" : type

    const getIcon = () => {
      switch (icon) {
        case "mail":
          return <Mail className="h-5 w-5 text-muted-foreground" />
        case "user":
          return <User className="h-5 w-5 text-muted-foreground" />
        case "lock":
          return <Lock className="h-5 w-5 text-muted-foreground" />
        default:
          return null
      }
    }

    return (
      <div className="relative">
        <div className="absolute left-3 top-[50%] -translate-y-1/2 flex items-center pointer-events-none">
          {getIcon()}
        </div>
        <input
          {...(register && name ? register(name) : {})}
          {...props}
          type={inputType}
          className={cn(
            "block w-full  sm:text-sm rounded-md h-10",
            "border border-input bg-background px-3 py-2",
            "pl-10", // 🛠️ Add padding-left to prevent overlap with icon
            "focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]",
            className
          )}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[50%] -translate-y-1/2 flex items-center pointer-events-auto"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
          </button>
        )}
      </div>
    )
  }
)
InputWithIcon.displayName = "InputWithIcon"

export { InputWithIcon }


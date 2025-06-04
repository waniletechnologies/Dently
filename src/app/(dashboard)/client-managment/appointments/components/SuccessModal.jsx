"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { success } from "../../../../../../public/images"
import Image from "next/image"

export function SuccessModal({ isOpen, onClose, message }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center text-center gap-3 p-3">
                <Image src={success} alt="success" className="w-10 h-10" />
          <p className="text-gray-900 font-[500]">{message}</p>
          <Button onClick={onClose} className="w-full bg-primary cursor-pointer hover:bg-primary/8- text-white">
            OK
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

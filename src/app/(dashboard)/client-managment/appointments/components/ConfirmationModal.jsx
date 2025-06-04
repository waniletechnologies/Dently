"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cancel } from "../../../../../../public/images"
import Image from "next/image"


export function ConfirmationModal({ isOpen, onClose, onConfirm, message }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center text-center p-3">
          <Image src={cancel} alt="cancel" className="w-16 h-16" />

          <p className="text-gray-900 mb-6">{message}</p>

          <div className="flex gap-3 w-full">
            <Button variant="outline" onClick={onClose} className="flex-1">
              No
            </Button>
            <Button onClick={onConfirm} className="flex-1 bg-primary cursor-pointer hover:bg-primary/80 text-white">
              Yes, cancel it
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

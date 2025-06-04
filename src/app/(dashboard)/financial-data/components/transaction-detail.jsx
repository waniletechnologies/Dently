"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { financialData } from "@/lib/db"
import { MdCalendarToday } from "react-icons/md"

export function TransactionDetail({ isOpen, onClose, transactionId }) {
  const transaction = financialData.data.find((t) => t.id === transactionId)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[95vh] bg-[#FAFAFA] overflow-x-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-[#171717]">Transaction Details</DialogTitle>
          <p className="text-sm text-custom-gray">Viewing details for {transaction?.patient}</p>
        </DialogHeader>
        <hr className="my-2 text-[#EAE7E7]" />
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-custom-gray mb-1">Amount</p>
              <p className="text-[#151515] font-medium">{transaction?.amount}</p>
            </div>
            <div>
              <p className="text-sm text-custom-gray mb-1">Method</p>
              <p className="text-[#171717] font-medium">{transaction?.method}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            
            <div>
              <p className="text-sm text-custom-gray mb-1">Status</p>
              <p className="text-[#171717] font-medium">{transaction?.status}</p>
            </div>
            <div>
              <p className="text-sm text-custom-gray mb-1">Date</p>
              <div className="flex items-center gap-1">
                <MdCalendarToday className="w-5 h-4" />
                  <p className="text-[#171717] font-medium">{transaction?.date}</p>
              </div>
            </div>
          </div>
            
            <div>
              <p className="text-sm text-custom-gray mb-1">Description</p>
              <p className="text-[#171717] font-medium">{transaction?.description}</p>
            </div>
            {transaction?.notes && (
            <div>
              <p className="text-sm text-custom-gray mb-1">Note</p>
                <p className="text-[#171717] font-medium">{transaction?.notes}</p>
            </div>
            )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
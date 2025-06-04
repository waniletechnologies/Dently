import React from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
const MedicalHistory = () => {
  return (
    <div className=''>
    <h3 className="text-lg font-medium text-[#171717] mb-4">Medical History</h3>
    <div className="space-y-4 ">
      <div className="flex gap-4 bg-[#f4f5f7] text-md font-[500] rounded-md sm:p-4  p-2 flex-col">
          Add Notes
        <span className='flex items-center font-[400] cursor-pointer gap-2'>
        <Button className="bg-primary w-6 h-6 text-white ">
            <Plus className="" />
        </Button>
        Add Prescription
        </span>
      </div>
      <div className="w-full flex justify-end">
      <Button className="bg-primary  text-white">Submit</Button>
      </div>
    </div>
  </div>
  )
}

export default MedicalHistory
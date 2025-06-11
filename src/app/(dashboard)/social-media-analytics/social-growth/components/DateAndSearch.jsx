import { Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"

const DateAndSearch = () => {
  return (
    <div className="flex sm:items-center items-start sm:flex-row flex-col gap-4 ">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Calendar className="w-4 h-4" />
        <span>Apr 1, 2025 - Apr 25, 2025</span>
      </div>
      <div className="flex-1 max-w-xs">
        <Input 
          type="text" 
          placeholder="Search Campaigns"
          className="bg-white"
        />
      </div>
    </div>
  )
}

export default DateAndSearch 
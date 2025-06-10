import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "lucide-react"

const DataEntryModal = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Manual Data Entry</DialogTitle>
          <p className="text-sm text-gray-600">
            Enter campaign performance data manually when API data is unavailable.
          </p>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <Label htmlFor="conversions">Conversions</Label>
            <Input id="conversions" defaultValue="254" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="impressions">Impressions</Label>
              <Input id="impressions" defaultValue="3322" />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <div className="relative">
                <Input id="date" defaultValue="15 May, 2025" className="pr-10" />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="clicks">Clicks</Label>
              <Input id="clicks" defaultValue="654" />
            </div>
            <div>
              <Label htmlFor="spend">Spend (£)</Label>
              <Input id="spend" defaultValue="259.00" />
            </div>
          </div>

          <Button className="w-full bg-orange-500 hover:bg-orange-600">Save Data</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DataEntryModal 
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Social Growth</h1>
      <div className="flex items-center gap-2">
        <Button variant="ghost" className="text-gray-600 hover:text-gray-900">Facebook</Button>
        <Button variant="ghost" className="text-gray-600 hover:text-gray-900">Instagram</Button>
      </div>
    </div>
  )
}

export default Header 
import Image from "next/image"

const TopPerformingPost = ({ data }) => {
  return (
    <div className="bg-white rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Top Performing Post</h2>
        <div className="flex items-center gap-2">
          <Image 
            src="/instagram-icon.png" 
            alt="Instagram" 
            width={20} 
            height={20}
          />
          <span className="font-medium">Instagram</span>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="relative w-40 h-40 rounded-lg overflow-hidden">
          <Image
            src="/dental-clinic.jpg"
            alt="Dental Clinic"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-gray-600">Total Share</p>
                <p className="text-xl font-semibold">9,431</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Likes</p>
                <p className="text-xl font-semibold">12,314</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Comments</p>
              <p className="text-xl font-semibold">2,314</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPerformingPost 
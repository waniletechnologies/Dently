import { Button } from "@/components/ui/button";
import { FiCheck } from "react-icons/fi";


export default function AccountSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFBFC]">
    <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-6 w-full max-w-sm">
      <div className="bg-[#FFF9ED] rounded-2xl p-12 flex flex-col items-center w-full max-w-sm">
        <div className="bg-[#F68A1E] rounded-full mb-2">
        <FiCheck size={56} className="text-white" />
        </div>
        <div className="mb-6 text-[#808080] font-normal text-[18px] leading-[29px] tracking-normal text-center">
        Congratulations, your account has been successfully setup
        </div>
        <Button
          className="bg-[#F68A1E] text-white px-8 py-2 rounded font-semibold text-sm"
          // onClick={() => router.push("/dashboard")} // Uncomment and set your route
        >
          Continue
        </Button>
      </div>
    </div>
    </div>
  );
}

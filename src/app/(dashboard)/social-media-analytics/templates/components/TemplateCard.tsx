import Image from "next/image";
import type { StaticImageData } from "next/image";
import { template } from "../../../../../../public/images";
import { Button } from "@/components/ui/button";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface TemplateCardProps {
  image?: string | StaticImageData;
  title: string;
  description: string;
  onEdit: () => void;
}

export default function TemplateCard({ image, title, description, onEdit }: TemplateCardProps) {
  return (
    <div className="bg-white rounded h-72 flex flex-col justify-between">
      <div className="bg-gray-100 h-36 rounded flex items-center justify-center overflow-hidden">
        <Image src={image ?? template} alt="tempplate img" className="object-cover object-top h-full w-full" />
      </div>
      <div className="p-4">
        <h3 className="font-inter font-medium text-[14.01px] leading-[21.55px] tracking-[-3%] mb-1">{title}</h3>
        <p className="font-inter font-normal text-[10.78px] leading-[21.55px] tracking-[-3%] text-[#8D8D8D] mb-3">{description}</p>
        <Button className="w-full bg-orange py-2 rounded text-sm transition" onClick={onEdit}>
          Edit in Canva
          <FaArrowUpRightFromSquare />
        </Button>
      </div>
    </div>
  );
} 
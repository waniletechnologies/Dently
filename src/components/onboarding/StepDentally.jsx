import { MdCheck, MdChevronRight, MdChevronLeft, MdX } from "react-icons/md";

            <div className="flex items-center gap-2">
              <MdCheck className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-500">Connected</span>
            </div>

            <div className="flex items-center gap-2">
              <MdX className="h-4 w-4 text-red-500" />
              <span className="text-sm text-red-500">Not Connected</span>
            </div>

            <MdChevronLeft className="h-4 w-4" />
            <span>Back</span>

            <span>Next</span>
            <MdChevronRight className="h-4 w-4" /> 

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FiMail } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

interface ChangePasswordDialogProps {
  onEmailSubmit: (email: string) => Promise<void>;
}

export function ChangePasswordDialog({ onEmailSubmit }: ChangePasswordDialogProps){

    const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" }
    });

    const handleSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await onEmailSubmit(data.email);
            form.reset();
        } catch (error) {
            console.error("Error submitting email:", error);
        }
    }

    return(
        <DialogContent className="sm:max-w-[425px] p-0">
      <DialogHeader className="px-6 pb-0 pt-5">
        <DialogTitle className="text-[18.12px] text-[#292D32] leading-[100%] text-start font-medium">
          Change Password
        </DialogTitle>
        <p className="text-[15.45px] text-start font-medium leading-[100%] text-[#A9ACB4]">
          Please enter your email.
        </p>
      </DialogHeader>
      <hr className="my-1 border-[#CBD0DC]" />

      <div className="mt-1 px-6 space-y-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="md:px-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="text-sm leading-5">Email</FormLabel>
                    <div className="relative">
                      <FiMail className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-[#71717A]" />
                      <FormControl>
                        <Input 
                          placeholder="johnmiles@example.com" 
                          {...field} 
                          className="w-full pl-9 text-[16px] leading-[24px] font-normal"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex pt-2 pb-6">
                <Button className="w-full text-sm font-medium leading-5" type="submit">
                  Get Code
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </DialogContent>
    )
}
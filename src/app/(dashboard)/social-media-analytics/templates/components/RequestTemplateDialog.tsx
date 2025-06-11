import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface RequestTemplateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: { name: string; description: string }) => void;
}

export default function RequestTemplateDialog({ open, onOpenChange, onSubmit }: RequestTemplateDialogProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!name.trim() || !description.trim()) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    onSubmit({ name, description });
    setName("");
    setDescription("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-[#FAFAFA]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-xl leading-5 tracking-[-3%]">Request a New Template</DialogTitle>
          <p className="font-medium text-xs leading-4 tracking-[-3%] text-custom-gray">Describe the template you need and our team will create it for you.</p>
        </DialogHeader>
        <hr className="my-1" />
        <div className="space-y-4 mt-2">
          <div>
            <Label className="font-geist font-normal text-xs leading-[150%] tracking-[-2%] mb-1">Template Name</Label>
            <Input
              className="w-full border-none bg-white font-inter font-normal text-xs leading-none tracking-normal rounded px-3 py-2"
              placeholder="e.g Seasonal Promotion Banner"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <Label className="font-geist font-normal text-xs leading-[150%] tracking-[-2%] mb-1">Description</Label>
            <Textarea
              className="w-full border-none rounded px-3 py-2 bg-white font-inter font-normal text-xs leading-none tracking-normal resize-none"
              placeholder="Describe how you'd like the template to look..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <Button
            className="bg-orange w-full py-2 rounded text-sm transition cursor-pointer"
            onClick={handleSave}
            type="button"
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 
"use client";
import { useState } from "react";
import RequestTemplateDialog from "./components/RequestTemplateDialog";
import TemplateCard from "./components/TemplateCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { template } from "../../../../../public/images";
import { FiSearch } from "react-icons/fi";

const mockTemplates = [
  {
    id: 1,
    title: "Before & After - Single Image",
    description: "A sleek side-by-side layout for before & after shots.",
    image: template,
  },
  {
    id: 2,
    title: "Before & After - Single Image",
    description: "A sleek side-by-side layout for before & after shots.",
    image: template,
  },
  {
    id: 3,
    title: "Before & After - Single Image",
    description: "A sleek side-by-side layout for before & after shots.",
    image: template,
  },
  {
    id: 4,
    title: "Before & After - Single Image",
    description: "A sleek side-by-side layout for before & after shots.",
    image: template,
  },
];

const filters = [
  "All",
  "Before and After",
  "Testimonials",
  "Offers",
  "Stories",
];

export default function TemplatePage() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [templates, setTemplates] = useState(mockTemplates);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [search, setSearch] = useState("");

    const handleRequestTemplate = (data: { name: string; description: string }) => {
      setTemplates([
        ...templates,
        {
          id: templates.length + 1,
          title: data.name,
          description: data.description,
          image: template,
        },
      ]);
    };

    return (
        <div className="p-8 bg-[#F4F5F7]">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="font-semibold text-[20px] leading-[17px] tracking-[-3%] mb-2">Editable Templates for Your Practice</h2>
                    <p className="font-inter font-medium text-sm leading-[16px] tracking-[-3%] text-[#595858]">Customise these Canva templates for testimonials, before and after transformations and more.</p>
                </div>
                <button
                    type="button"
                    className="bg-orange text-white px-5 py-2 rounded transition"
                    onClick={() => setDialogOpen(true)}
                >
                    Request a new template
                </button>
            </div>
            <div className="mb-4 flex justify-between items-center gap-4">
                <div className="relative w-72">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FiSearch size={18} />
                  </span>
                  <Input
                    type="text"
                    placeholder="Search template"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="border bg-[#EFEFEF] rounded shadow-none border-none px-3 py-2 w-72 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div className="flex gap-2">
                  {filters.map((filter) => (
                    <Button
                      key={filter}
                      variant="outline"
                      className={`px-3 py-1 rounded text-sm transition ${selectedFilter === filter ? "bg-orange text-white" : "bg-transparent text-[#848484]"}`}
                      onClick={() => setSelectedFilter(filter)}
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {templates.map((tpl) => (
                  <TemplateCard
                    key={tpl.id}
                    image={tpl.image}
                    title={tpl.title}
                    description={tpl.description}
                    onEdit={() => {}}
                  />
                ))}
            </div>
            <RequestTemplateDialog
              open={dialogOpen}
              onOpenChange={setDialogOpen}
              onSubmit={handleRequestTemplate}
            />
        </div>
    );
}
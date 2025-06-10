"use client";
import { useState } from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Inter } from "next/font/google";
import { Switch } from "@/components/ui/switch"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


export default function SyncPreference() {
  const [autoSync, setAutoSync] = useState(false);
  const [syncNotes, setSyncNotes] = useState(true);
  const [frequency, setFrequency] = useState("Hourly");

  return (
    <div className={`flex bg-[#F4F5F7] w-full ${inter.className}`}>
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full">
        <h2 className="font-semibold text-[20px] leading-[20px] tracking-normal text-[#000000] mb-1">General Sync Settings</h2>
        <p className="font-normal text-base leading-[20px] tracking-normal text-[#8E919F] mb-6">Configure automated synchronization options and frequency.</p>

        <div className="space-y-7">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-base">Auto-sync patient data</h3>
                <p className="text-gray-400 text-sm">Automatically sync patient information between Dentally and CRM</p>
              </div>
              <Switch checked={autoSync} onCheckedChange={setAutoSync} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-base">Sync call notes with Dentally</h3>
                <p className="text-gray-400 text-sm">Automatically transfer call notes to patient records</p>
              </div>
              <Switch checked={syncNotes} onCheckedChange={setSyncNotes} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-base">Data sync frequency</h3>
                <p className="text-gray-400 text-sm">How often to automatically sync data between services</p>
              </div>
              <Select value={frequency} onValueChange={setFrequency}>
                <SelectTrigger className="w-32 bg-[#F4F5F7] border-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hourly">Hourly</SelectItem>
                  <SelectItem value="Daily">Daily</SelectItem>
                  <SelectItem value="Weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
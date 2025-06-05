"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Account from './account/page';
import SyncPreference from './sync-preference/page';
import Integrations from "./integrations/page";

export default function SettingsPage(){
    return(
        <div className="md:p-4 lg:p-16 min-h-screen bg-[#F4F5F7] w-full">
            <Tabs defaultValue="account" className="w-full">
                <div className="flex mb-6 sm:mb-0">
                    <div className="md:bg-white rounded-lg md:border border-[#E4E4E7] p-1 w-full sm:w-auto">
                        <TabsList className="grid grid-cols-2 gap-2 bg-transparent p-0 sm:flex sm:flex-row">
                            <TabsTrigger 
                                value="account"
                                className="px-4 py-2 cursor-pointer text-sm font-medium transition-all
                                text-gray-500 hover:text-gray-900
                                sm:data-[state=active]:bg-[#F9F9F9]
                                data-[state=active]:bg-white
                                hover:bg-gray-50 rounded-md"
                            >
                                Account
                            </TabsTrigger>
                            <TabsTrigger 
                                value="sync"
                                className="px-4 py-2 cursor-pointer text-sm font-medium transition-all
                                text-gray-500 hover:text-gray-900
                                sm:data-[state=active]:bg-[#F9F9F9]
                                data-[state=active]:bg-white
                                hover:bg-gray-50 rounded-md"
                            >
                                Sync Preferences
                            </TabsTrigger>
                            <TabsTrigger 
                                value="integrations"
                                className="px-4 py-2 cursor-pointer text-sm font-medium transition-all
                                text-gray-500 hover:text-gray-900
                                sm:data-[state=active]:bg-[#F9F9F9]
                                data-[state=active]:bg-white
                                hover:bg-gray-50 rounded-md"
                            >
                                Integrations
                            </TabsTrigger>
                        </TabsList>
                    </div>
                </div>
                <div className="py-2 mt-5 rounded-lg w-full">
                    <TabsContent value="account" className="focus-visible:outline-none">
                        <Account />
                    </TabsContent>

                    <TabsContent value="sync" className="focus-visible:outline-none">
                        <SyncPreference />
                    </TabsContent>

                    <TabsContent value="integrations" className="focus-visible:outline-none">
                        <Integrations />
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}
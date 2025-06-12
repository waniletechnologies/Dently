import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, FileText, Mail, Phone, Plus } from 'lucide-react';
import React from 'react';

const Profile = ({ patient }) => {
	return (
		<div className="max-w-4xl">
			<div className="w-full flex md:flex-row flex-col gap-4">
				{/* Left Column */}
				<div className="md:w-[50%] space-y-4">
					<div className="">
						<h2 className="text-lg font-semibold text-gray-900 mb-6">
							Personal Information
						</h2>

						<div className="space-y-4">
							{/* Phone */}
							<div className="flex justify-between bg-[#f4f5f7]  rounded-md p-2 items-center">
								<div className="flex items-center gap-3 justify-center">
									<Phone className="w-4 h-4 text-primary" />
									<p className="text-sm text-gray-600 mb-1">Phone</p>
								</div>
								<div>
									<p className="text-gray-900 font-medium">+44 7123 456789</p>
								</div>
							</div>

							{/* Email */}
							<div className="flex justify-between bg-[#f4f5f7] rounded-md p-2 items-center">
								<div className="gap-3 flex items-center justify-center">
									<Mail className="w-4 h-4 text-primary" />
									<p className="text-sm text-gray-600 mb-1">Email</p>
								</div>
								<div>
									<p className="text-gray-900 font-medium">
										sarah.j@example.com
									</p>
								</div>
							</div>

							{/* View Financial Data */}
							<div className="flex justify-between items-center  bg-[#f4f5f7] rounded-md p-2  gap-4">
								<div className=" flex items-center gap-3 justify-center">
									<FileText className="w-5 h-5 text-primary" />
									<p className="text-gray-900 sm:text-base text-sm font-medium">
										View Financial Data
									</p>
								</div>
								<Button className="bg-primary text-white sm:px-6 w-fit">
									View
								</Button>
							</div>
						</div>
					</div>

					{/* Dentally Integration */}
					<div>
						<h3 className="text-lg font-medium text-[#171717] mb-4">
							Dentally Integration
						</h3>
						<div className="">
							<Button className="bg-primary text-white mb-2">Synced</Button>
							<p className="text-sm text-[#848484] mb-1">
								Dentally ID: {patient.dentallyId}
							</p>
							<p className="text-sm text-[#848484]">
								Last synced: {patient.lastSync}
							</p>
						</div>
					</div>
				</div>

				{/* Right Column */}
				<div className="md:w-[50%]">
					<div className="flex flex-col gap-4 bg-[#f4f5f7] rounded-md p-4 items-center justify-center">
						<div className="block text-sm font-medium text-gray-700 mb-2">
							Enrolled in Dentist Gold Card?
						</div>
						<Select defaultValue="yes">
							<SelectTrigger className="w-[200px]">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="yes">Yes</SelectItem>
								<SelectItem value="no">No</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;

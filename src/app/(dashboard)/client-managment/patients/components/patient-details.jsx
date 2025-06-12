'use client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { patientManagementData } from '@/lib/db';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Appointments from './appointments';
import BillingHistory from './billing-history';
import Calls from './calls';
import GoldCard from './gold-card';
import MedicalHistory from './medical-history';
import Profile from './profile';
export function PatientDetails({ patientId }) {
	const patient = patientManagementData.patientDetails[patientId];

	if (!patient) {
		return <div>Patient not found</div>;
	}
	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex sm:items-center justify-between sm:flex-row flex-col gap-3">
				<div className="flex items-center gap-4">
					<Link href="/client-management/patients">
						<Button
							variant="ghost"
							className="flex items-center gap-2 cursor-pointer text-[#848484] hover:text-[#171717]"
						>
							<ArrowLeft className="h-4 w-4" />
							Back to Patients list
						</Button>
					</Link>
				</div>
				<Button className="bg-primary cursor-pointer text-white">
					Book Appointment
				</Button>
			</div>

			{/* Patient Info Header */}
			<div className="bg-white rounded-lg border border-[#e1e1e1] p-6">
				<div className="flex sm:items-center justify-between mb-4 flex-col sm:flex-row gap-4">
					<div>
						<h1 className="text-xl font-semibold text-[#171717]">
							Patient Details
						</h1>
						<p className="text-sm text-[#848484]">
							Viewing details for {patient.name} (ID: {patient.dentallyId})
						</p>
					</div>
					<Button variant="outline" className="text-[#171717]">
						Edit Profile
					</Button>
				</div>
				{/* Tabs */}
				<Tabs defaultValue="profile" className="w-full">
					<div className="overflow-x-auto pb-2">
						<TabsList className="w-full flex gap-2 bg-white border border-[#e1e1e1] rounded-lg  min-w-max">
							<TabsTrigger
								value="profile"
								className="flex-1 min-w-[100px] p-2 data-[state=active]:bg-[#F4F4F5] whitespace-nowrap"
							>
								Profile
							</TabsTrigger>
							<TabsTrigger
								value="medical"
								className="flex-1 min-w-[100px] p-2 data-[state=active]:bg-[#F4F4F5] whitespace-nowrap"
							>
								Medical
							</TabsTrigger>
							<TabsTrigger
								value="appointments"
								className="flex-1 min-w-[110px] p-2 data-[state=active]:bg-[#F4F4F5] whitespace-nowrap"
							>
								Appointments
							</TabsTrigger>
							<TabsTrigger
								value="billing"
								className="flex-1 min-w-[100px] p-2 data-[state=active]:bg-[#F4F4F5] whitespace-nowrap"
							>
								Billing
							</TabsTrigger>
							<TabsTrigger
								value="calls"
								className="flex-1 min-w-[100px] p-2 data-[state=active]:bg-[#F4F4F5] whitespace-nowrap"
							>
								Calls
							</TabsTrigger>
							<TabsTrigger
								value="gold-card"
								className="flex-1 min-w-[130px] p-2 data-[state=active]:bg-[#F4F4F5] whitespace-nowrap"
							>
								Dentist Gold Card
							</TabsTrigger>
						</TabsList>
					</div>

					<div className="overflow-x-hidden mt-6">
						{/* Profile Tab */}
						<TabsContent value="profile" className="space-y-6">
							<Profile patient={patient} />
						</TabsContent>

						{/* Medical Tab */}
						<TabsContent value="medical" className="space-y-6">
							<MedicalHistory />
						</TabsContent>

						{/* Appointments Tab */}
						<TabsContent value="appointments" className="space-y-6">
							<Appointments patient={patient} />
						</TabsContent>

						{/* Billing Tab */}
						<TabsContent value="billing" className="space-y-6">
							<BillingHistory patient={patient} />
						</TabsContent>

						{/* Calls Tab */}
						<TabsContent value="calls" className="space-y-6">
							<Calls patient={patient} />
						</TabsContent>

						{/* Dentist Gold Card Tab */}
						<TabsContent value="gold-card" className="space-y-6">
							<GoldCard patient={patient} />
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</div>
	);
}

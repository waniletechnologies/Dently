'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { callTrackingData } from '@/lib/db';
import {
	ArrowLeft,
	Calendar,
	Clock,
	Edit,
	MessageSquare,
	Phone,
	TrendingUp,
	User,
} from 'lucide-react';
import Link from 'next/link';

export function CallDetail({ callId }: { callId: string }) {
	const callDetail = callTrackingData.callDetails[callId];

	if (!callDetail) {
		return <div>Call not found</div>;
	}

	const getStatusBadge = (status: string, type: string) => {
		const baseClasses = 'text-xs font-medium';

		switch (type) {
			case 'booking':
				switch (status) {
					case 'Booked':
						return (
							<Badge
								className={`${baseClasses} bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]`}
							>
								✓ Booked
							</Badge>
						);
					case 'Not Booked':
						return (
							<Badge
								className={`${baseClasses} bg-[#fef2f2] text-[#dc2626] hover:bg-[#fef2f2]`}
							>
								✗ Not Booked
							</Badge>
						);
					default:
						return (
							<Badge
								className={`${baseClasses} bg-[#f0f0f0] text-[#848484] hover:bg-[#f0f0f0]`}
							>
								{status}
							</Badge>
						);
				}
			case 'followup':
				switch (status) {
					case 'Done':
						return (
							<Badge
								className={`${baseClasses} bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]`}
							>
								✓ Done
							</Badge>
						);
					case 'Pending':
						return (
							<Badge
								className={`${baseClasses} bg-[#fef3cd] text-[#92400e] hover:bg-[#fef3cd]`}
							>
								<Clock className="h-3 w-3 mr-1" /> Pending
							</Badge>
						);
					default:
						return (
							<Badge
								className={`${baseClasses} bg-[#f0f0f0] text-[#848484] hover:bg-[#f0f0f0]`}
							>
								{status}
							</Badge>
						);
				}
			default:
				return (
					<Badge
						className={`${baseClasses} bg-[#f0f0f0] text-[#848484] hover:bg-[#f0f0f0]`}
					>
						{status}
					</Badge>
				);
		}
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center gap-4">
				<Link href="/call-tracking">
					<Button
						variant="ghost"
						className="flex items-center gap-2 text-[#848484] hover:text-[#171717]"
					>
						<ArrowLeft className="h-4 w-4" />
						Back to call list
					</Button>
				</Link>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Left Column */}
				<div className="lg:col-span-2 space-y-6">
					{/* Call Details */}
					<Card className="bg-white border-[#e1e1e1]">
						<CardContent className="p-6">
							<div className="flex items-center justify-between mb-4">
								<div>
									<h2 className="text-xl font-semibold text-[#171717]">
										Call with {callDetail.phoneNumber}
									</h2>
									<p className="text-sm text-[#848484]">{callDetail.date}</p>
								</div>
								<Badge className="bg-[#effaf6] text-[#114439] hover:bg-[#effaf6]">
									<TrendingUp className="h-3 w-3 mr-1" />
									Outbound
								</Badge>
							</div>

							<div className="grid grid-cols-3 gap-6 mb-6">
								<div>
									<p className="text-sm text-[#848484] mb-1">Phone Number</p>
									<p className="text-[#171717] font-medium">
										{callDetail.phoneNumber}
									</p>
								</div>
								<div>
									<p className="text-sm text-[#848484] mb-1">Duration</p>
									<p className="text-[#171717] font-medium">
										{callDetail.duration}
									</p>
								</div>
								<div>
									<p className="text-sm text-[#848484] mb-1">Agent</p>
									<p className="text-[#171717] font-medium">
										{callDetail.agent}
									</p>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-6">
								<div>
									<div className="flex items-center gap-2 mb-2">
										<Calendar className="h-4 w-4 text-[#848484]" />
										<p className="text-sm text-[#848484]">Booking Status</p>
									</div>
									{getStatusBadge(callDetail.bookingStatus, 'booking')}
								</div>
								<div>
									<div className="flex items-center gap-2 mb-2">
										<User className="h-4 w-4 text-[#848484]" />
										<p className="text-sm text-[#848484]">Follow-up Status</p>
									</div>
									{getStatusBadge(callDetail.followUpStatus, 'followup')}
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Comments */}
					<Card className="bg-white border-[#e1e1e1]">
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-[#171717]">
								<MessageSquare className="h-5 w-5" />
								Comments
							</CardTitle>
						</CardHeader>
						<CardContent>
							{callDetail.comments.length === 0 ? (
								<p className="text-[#848484] mb-4">No comments Yet</p>
							) : (
								<div className="space-y-4 mb-4">
									{callDetail.comments.map((comment: any) => (
										<div
											key={`${comment.author}-${comment.timestamp}`}
											className="border-l-4 border-[#ffa048] pl-4"
										>
											<div className="flex items-center gap-2 mb-1">
												<span className="font-medium text-[#171717]">
													{comment.author}
												</span>
												<span className="text-sm text-[#848484]">
													{comment.timestamp}
												</span>
											</div>
											<p className="text-[#171717]">{comment.content}</p>
										</div>
									))}
								</div>
							)}

							<Textarea placeholder="Add a comment" className="mb-4" />
							<Button className="bg-[#ffa048] hover:bg-[#f68a15] text-white">
								Post Comment
							</Button>
						</CardContent>
					</Card>

					{/* Calls History */}
					<Card className="bg-white border-[#e1e1e1]">
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-[#171717]">
								<Phone className="h-5 w-5" />
								Calls History
							</CardTitle>
						</CardHeader>
						<CardContent className="p-0">
							<Table>
								<TableHeader>
									<TableRow className="border-b border-[#e1e1e1]">
										<TableHead className="text-[#848484] font-medium px-6 py-4">
											Caller Name
										</TableHead>
										<TableHead className="text-[#848484] font-medium">
											Number
										</TableHead>
										<TableHead className="text-[#848484] font-medium">
											Date & Time
										</TableHead>
										<TableHead className="text-[#848484] font-medium">
											Duration
										</TableHead>
										<TableHead className="text-[#848484] font-medium">
											Booking
										</TableHead>
										<TableHead className="text-[#848484] font-medium">
											Follow-up
										</TableHead>
										<TableHead className="text-[#848484] font-medium">
											Staff Member
										</TableHead>
										<TableHead className="text-[#848484] font-medium w-20" />
									</TableRow>
								</TableHeader>
								<TableBody>
									{callDetail.callsHistory.map((call: any) => (
										<TableRow
											key={`${call.dateTime}-${call.number}`}
											className="border-b border-[#f0f0f0]"
										>
											<TableCell className="px-6 py-4 text-[#171717]">
												{call.callerName}
											</TableCell>
											<TableCell className="text-[#171717]">
												{call.number}
											</TableCell>
											<TableCell className="text-[#171717]">
												{call.dateTime}
											</TableCell>
											<TableCell className="text-[#171717]">
												{call.duration}
											</TableCell>
											<TableCell>
												{getStatusBadge(call.bookingStatus, 'booking')}
											</TableCell>
											<TableCell>
												{getStatusBadge(call.followUpStatus, 'followup')}
											</TableCell>
											<TableCell>
												<div className="flex items-center gap-2">
													<Avatar className="h-6 w-6">
														<AvatarFallback className="bg-[#10b981] text-white text-xs">
															{call.staffMember
																.split(' ')
																.map((n: any) => n[0])
																.join('')}
														</AvatarFallback>
													</Avatar>
													<span className="text-[#171717] text-sm">
														{call.staffMember}
													</span>
												</div>
											</TableCell>
											<TableCell>
												<div className="flex items-center gap-1">
													<Button
														variant="ghost"
														size="sm"
														className="h-8 w-8 p-0 text-[#ffa048] hover:text-[#f68a15]"
													>
														<Phone className="h-4 w-4" />
													</Button>
													<Button
														variant="ghost"
														size="sm"
														className="h-8 w-8 p-0 text-[#848484] hover:text-[#171717]"
													>
														<Edit className="h-4 w-4" />
													</Button>
												</div>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</div>

				{/* Right Column - Update Call Status */}
				<div>
					<Card className="bg-white border-[#e1e1e1]">
						<CardHeader>
							<CardTitle className="text-[#171717]">
								Update Call Status
							</CardTitle>
							<p className="text-sm text-[#848484]">
								Update booking and follow-up information for this call.
							</p>
						</CardHeader>
						<CardContent className="space-y-6">
							<div>
								<div className="text-sm font-medium text-[#171717] mb-2">
									Booking Status
								</div>
								<div className="grid grid-cols-2 gap-2">
									<Button
										variant={
											callDetail.bookingStatus === 'Booked'
												? 'default'
												: 'outline'
										}
										className={
											callDetail.bookingStatus === 'Booked'
												? 'bg-[#effaf6] text-[#114439] hover:bg-[#effaf6] border-[#10b981]'
												: ''
										}
									>
										✓ Booked
									</Button>
									<Button
										variant={
											callDetail.bookingStatus === 'Not Booked'
												? 'default'
												: 'outline'
										}
										className={
											callDetail.bookingStatus === 'Not Booked'
												? 'bg-[#fef2f2] text-[#dc2626] hover:bg-[#fef2f2] border-[#dc2626]'
												: ''
										}
									>
										✗ Not Booked
									</Button>
								</div>
							</div>

							<div>
								<div className="text-sm font-medium text-[#171717] mb-2">
									Follow-up Status
								</div>
								<div className="grid grid-cols-2 gap-2">
									<Button
										variant={
											callDetail.followUpStatus === 'Done'
												? 'default'
												: 'outline'
										}
										className={
											callDetail.followUpStatus === 'Done'
												? 'bg-[#effaf6] text-[#114439] hover:bg-[#effaf6] border-[#10b981]'
												: ''
										}
									>
										✓ Done
									</Button>
									<Button
										variant={
											callDetail.followUpStatus === 'Pending'
												? 'default'
												: 'outline'
										}
										className={
											callDetail.followUpStatus === 'Pending'
												? 'bg-[#fef3cd] text-[#92400e] hover:bg-[#fef3cd] border-[#f59e0b]'
												: ''
										}
									>
										⚠ Pending
									</Button>
								</div>
							</div>

							<div>
								<div className="text-sm font-medium text-[#171717] mb-2">
									Follow-up Notes
								</div>
								<Textarea
									placeholder="Enter follow-up notes or action items"
									defaultValue={callDetail.followUpNotes}
									className="min-h-[80px]"
								/>
							</div>

							<Button className="w-full bg-[#ffa048] hover:bg-[#f68a15] text-white">
								Save Notes
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

const integrations = [
	{
		id: 1,
		name: 'Dentally',
		description: 'Patient data connected',
		status: 'connected',
	},
	{
		id: 2,
		name: 'Aircall',
		description: 'Set up your call system',
		status: 'connected',
	},
	{
		id: 3,
		name: 'Calendly',
		description: 'Manage your appointments',
		status: 'connect',
		info: 'Connect your account to easily manage and access your data',
	},
	{
		id: 4,
		name: 'Meta Ads',
		description: 'Boost Your online Presence',
		status: 'connected',
	},
	{
		id: 5,
		name: 'Kajabi',
		description: 'Grow with smart course',
		status: 'connected',
	},
];

export default function Integrations() {
	return (
		<div
			className={`mx-auto bg-white rounded-2xl w-full py-10 px-4 ${inter.className}`}
		>
			<div className="sm:px-10">
				<h2 className="font-semibold text-[20px] leading-[20px] tracking-normal mb-1">
					Accounts Connected
				</h2>
				<p className="font-normal text-base leading-[20px] tracking-normal text-[#8E919F] mb-6">
					Manage your Accounts
				</p>
				<div className="space-y-4">
					{integrations.map((integration) => (
						<Card
							key={integration.id}
							className={`flex flex-col p-0 gap-3 shadow-none ${
								integration.status === 'connected' ? 'bg-[#EAFFF5]' : ''
							}`}
						>
							{integration.info && (
								<div className="bg-[#DBEBFF] text-xs text-blue-700 px-4 py-1 rounded-t-md">
									{integration.info}
								</div>
							)}
							<CardContent className="flex items-center justify-between py-4 px-4">
								<div>
									<div className="font-semibold text-sm leading-none tracking-[-0.03em]">
										Connect {integration.name}
									</div>
									<div className="font-normal text-xs leading-none tracking-tighter text-[#595858] mt-1">
										{integration.description}
									</div>
								</div>
								{integration.status === 'connected' ? (
									<Button
										variant="secondary"
										className="bg-[#09924F] cursor-pointer text-white hover:bg-green-600"
									>
										Connected
									</Button>
								) : (
									<Button variant="default" className="bg-primary">
										Connect
									</Button>
								)}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

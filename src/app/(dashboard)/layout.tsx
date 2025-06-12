'use client';

import { Header } from '@/components/Header';
import { Sidebar } from '@/components/sidebar';
import { SidebarProvider } from '@/contexts/SidebarContext';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider>
			<div className="flex h-screen">
				<Sidebar />
				<div className="flex-1 flex flex-col overflow-hidden">
					<Header />
					<main className="flex-1 overflow-auto">{children}</main>
				</div>
			</div>
		</SidebarProvider>
	);
}

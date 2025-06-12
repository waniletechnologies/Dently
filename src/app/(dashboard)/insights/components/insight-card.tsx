import { Card, CardContent } from '@/components/ui/card';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

type InsightCardProps = {
	title: string;
	bullets: string[];
	tags: string[];
	subtext: string;
};

export default function InsightCard({
	title,
	bullets,
	tags,
	subtext,
}: InsightCardProps) {
	return (
		<Card className={`mb-4 ${inter.className}`}>
			<CardContent className="px-6 py-3">
				<h3 className="font-semibold text-base leading-[16px] tracking-normal mb-2">
					{title}
				</h3>
				<ul className="mb-3 list-disc list-inside font-normal text-[13px] leading-[13px] tracking-normal space-y-2 text-[#636363]">
					{bullets.map((b) => (
						<li key={b}>{b}</li>
					))}
				</ul>
				<div className="flex flex-wrap gap-2 mb-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="bg-[#F1F5F9] px-2 py-1 rounded font-normal text-xs leading-none tracking-normal text-[#2A2828]"
						>
							{tag}
						</span>
					))}
				</div>
				<div className="font-light text-[10px] leading-[22px] tracking-normal text-[#636363]">
					{subtext}
				</div>
			</CardContent>
		</Card>
	);
}

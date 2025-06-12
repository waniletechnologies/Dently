import Image from 'next/image';
import { auth } from '../../../../public/images';
import { TestimonialCarousel } from './testimonial-carousel';

interface AuthLayoutProps {
	children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<div className="flex min-h-screen">
			{/* Content on the left */}
			<div className="flex items-center justify-center min-h-screen w-full lg:w-1/2 px-6">
				<div className="w-full max-w-md">{children}</div>
			</div>
			{/* Image on the right with margin, border, and rounded corners */}
			<div className="hidden lg:flex items-start justify-center w-1/2 mt-4">
				<div className="relative w-[90%] max-h-screen h-full border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
					<Image
						src={auth}
						alt="Auth background"
						fill
						className="object-cover"
						priority
					/>
					<TestimonialCarousel />
				</div>
			</div>
		</div>
	);
}

import Image from 'next/image';
import { dental, instagramIcon } from '../../../../../../public/images';

const TopPerformingPost = () => {
	return (
		<div className="bg-white rounded-lg h-full p-6 space-y-4">
			<h2 className="text-lg font-medium border-b border-[#F1F1F4] pb-4">
				Top Performing Post
			</h2>
			<div className="flex  gap-6">
				<Image
					src={dental}
					alt="Dental Clinic"
					className="object-contain max-w-40 max-h-40 rounded-lg"
				/>
				<div className="space-y-4">
					<div className="flex items-center gap-2">
						<Image src={instagramIcon} alt="Instagram" width={20} height={20} />
						<span className="font-medium">Instagram</span>
					</div>
					<div className="space-y-2">
						<div className="flex items-center gap-4">
							<div>
								<p className="text-xs text-gray-600">Total Share</p>
								<p className="text-md font-semibold">9,431</p>
							</div>
							<div>
								<p className="text-xs text-gray-600">Total Likes</p>
								<p className="text-md font-semibold">12,314</p>
							</div>
						</div>
						<div>
							<p className="text-xs text-gray-600">Comments</p>
							<p className="text-md font-semibold">2,314</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopPerformingPost;

import { Button } from '@/components/ui/button';

const Header = ({ onAddData }) => {
	return (
		<div className="flex flex-col sm:flex-row sm:items-center justify-between">
			<h1 className="text-2xl font-semibold">Ad Performance</h1>
			<div className="flex flex-col sm:flex-row sm:items-center gap-4">
				<div className="flex sm:flex-row flex-col sm:items-center items-start ">
					<Button variant="ghost" className="text-gray-600 hover:text-gray-900">
						Facebook
					</Button>
					<Button variant="ghost" className="text-gray-600 hover:text-gray-900">
						Instagram
					</Button>
				</div>
				<Button
					onClick={onAddData}
					className="bg-primary hover:bg-primary/90 text-white"
				>
					+ Add Data
				</Button>
			</div>
		</div>
	);
};

export default Header;

import { Button } from '@/components/ui/button';

const Header = () => {
	return (
		<div className="flex sm:items-center justify-between sm:flex-row flex-col gap-2">
			<h1 className="sm:text-2xl text-xl font-semibold">Social Growth</h1>
			<div className="flex sm:items-center items-start sm:flex-row flex-col gap-[-10px]">
				<Button variant="ghost" className="text-gray-600 hover:text-gray-900">
					Facebook
				</Button>
				<Button variant="ghost" className="text-gray-600 hover:text-gray-900">
					Instagram
				</Button>
			</div>
		</div>
	);
};

export default Header;

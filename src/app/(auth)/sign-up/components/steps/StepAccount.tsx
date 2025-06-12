import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { z } from 'zod';

const schema = z.object({
	name: z.string().min(2, 'Name is required'),
	practice: z.string().min(2, 'Practice name is required'),
	email: z.string().email('Enter a valid email'),
	password: z.string().min(10, 'Password must be at least 10 characters'),
});

type FormValues = z.infer<typeof schema>;

export function StepAccount({ onNext }: { onNext: () => void }) {
	const [show, setShow] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		mode: 'onTouched',
	});

	const password = watch('password') || '';

	const getStrength = (pwd: string) => {
		if (pwd.length >= 10 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd))
			return 'strong';
		if (pwd.length >= 10) return 'medium';
		if (pwd.length > 0) return 'weak';
		return '';
	};
	const strength = getStrength(password);

	const onSubmit = () => {
		onNext();
	};

	return (
		<form
			className="flex flex-col justify-center min-h-screen"
			onSubmit={handleSubmit(onSubmit)}
			autoComplete="off"
		>
			<div className="w-full max-w-md mx-auto">
				<h2 className="font-semibold text-[32px] leading-[40px] tracking-[-0.03em] mb-2">
					Create Your Account
				</h2>
				<p className="font-medium text-[20px] leading-[40px] tracking-[-0.03em] text-[#222222B2] mb-8">
					It only takes a few steps!
				</p>
				{/* Name */}
				<div className="mb-4">
					<Label className="block font-medium text-sm leading-[20px] tracking-normal mb-1">
						Your Name <span className="text-[#F68A1E]">*</span>
					</Label>
					<Input
						className="w-full border font-normal text-base leading-[24px] tracking-normal rounded px-3 py-2 placeholder:text-[#B0B0B0]"
						placeholder="Dr. Alex"
						{...register('name')}
					/>
					{errors.name && (
						<span className="text-xs text-red-600 mt-1 block">
							{errors.name.message}
						</span>
					)}
				</div>
				{/* Practice Name */}
				<div className="mb-4">
					<Label className="block font-medium text-sm leading-[20px] tracking-normal mb-1">
						Practice Name <span className="text-[#F68A1E]">*</span>
					</Label>
					<Input
						className="w-full border font-normal text-base leading-[24px] tracking-normal rounded px-3 py-2 placeholder:text-[#B0B0B0]"
						placeholder="Brightside Dental"
						{...register('practice')}
					/>
					{errors.practice && (
						<span className="text-xs text-red-600 mt-1 block">
							{errors.practice.message}
						</span>
					)}
				</div>
				{/* Email */}
				<div className="mb-4">
					<Label className="block font-medium text-sm leading-[20px] tracking-normal mb-1">
						Work Email <span className="text-[#F68A1E]">*</span>
					</Label>
					<Input
						className="w-full border font-normal text-base leading-[24px] tracking-normal rounded px-3 py-2 placeholder:text-[#B0B0B0]"
						placeholder="brighsidedental@ex.com"
						type="email"
						{...register('email')}
					/>
					{errors.email && (
						<span className="text-xs text-red-600 mt-1 block">
							{errors.email.message}
						</span>
					)}
				</div>
				{/* Password */}
				<div className="mb-2">
					<Label className="block font-medium text-sm leading-[20px] tracking-normal mb-1">
						Password (at least 10 characters){' '}
						<span className="text-[#F68A1E]">*</span>
					</Label>
					<div className="relative">
						<Input
							className="w-full border font-normal text-base leading-[24px] tracking-normal rounded px-3 py-2 pr-10 placeholder:text-[#B0B0B0]"
							placeholder="Password"
							type={show ? 'text' : 'password'}
							minLength={10}
							{...register('password')}
						/>
						<button
							type="button"
							className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
							onClick={() => setShow((s) => !s)}
							tabIndex={-1}
						>
							{show ? (
								<MdVisibilityOff size={18} />
							) : (
								<MdVisibility size={18} />
							)}
						</button>
					</div>
					{errors.password && (
						<span className="text-xs text-red-600 mt-1 block">
							{errors.password.message}
						</span>
					)}
					{/* Password strength bar */}
					{password && (
						<div className="mt-2">
							<div className="w-full h-1 rounded bg-gray-200">
								<div
									className={`h-[10px] rounded transition-all duration-300 ${
										strength === 'strong'
											? 'bg-[#09924F] w-full'
											: strength === 'medium'
												? 'bg-yellow-500 w-2/3'
												: 'bg-red-500 w-1/3'
									}`}
								/>
							</div>
							<span
								className={`text-xs mt-2 block ${
									strength === 'strong'
										? 'text-[#09924F]'
										: strength === 'medium'
											? 'text-yellow-600'
											: 'text-red-600'
								}`}
							>
								{strength === 'strong'
									? 'Strong'
									: strength === 'medium'
										? 'Medium'
										: strength === 'weak'
											? 'Weak'
											: ''}
							</span>
						</div>
					)}
				</div>
				<button
					type="submit"
					className="w-full mt-6 bg-orange-500 text-white py-2 rounded font-semibold text-lg"
				>
					Create Account
				</button>
			</div>
		</form>
	);
}

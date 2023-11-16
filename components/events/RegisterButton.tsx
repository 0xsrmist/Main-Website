import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

type RegisterButtonProps = React.ComponentProps<'button'> & {
	url: EventData['url'];
};

const RegisterButton: React.FC<RegisterButtonProps> = ({ url }) => {
	return (
		<Button
			asChild
			className='bg-app-primary hover:bg-app-primary/80 transition-all duration-300 mt-8 w-full rounded-2xl'
		>
			<Link
				href={url}
				target='_blank'
				className='flex items-center gap-2 uppercase'
			>
				<Star size={20} strokeWidth={1.5} />
				Register now
			</Link>
		</Button>
	);
};

export default RegisterButton;

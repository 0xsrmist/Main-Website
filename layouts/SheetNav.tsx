'use client';

import React, { useState } from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';
import Link from 'next/link';

const SheetNav = () => {
	const [open, setOpen] = useState(false);

	const handleCloseSheet = () => {
		setOpen(false);
	};

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild className='flex md:hidden'>
				<Button
					variant={'secondary'}
					size={'icon'}
					className='font-semibold'
				>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side={'top'} className='block md:hidden'>
				<SheetHeader>
					<SheetTitle className='text-center'>
						TPH X SRMIST
					</SheetTitle>
					<SheetDescription className='flex flex-col items-center justify-center'>
						<ul className='flex items-center gap-8 flex-wrap justify-center'>
							{NAVBAR_NAVIGATION.map((item) => (
								<li key={`sheet-nav-${item.url}`}>
									<Link
										href={item.url}
										target={item.target}
										className='font-medium text-lg hover:text-app-primary transition-all duration-300'
										onClick={handleCloseSheet}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
						<Button
							className='font-semibold rounded-2xl mt-4'
							onClick={handleCloseSheet}
							asChild
						>
							<Link href={'/contact'}>Collab with us</Link>
						</Button>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default SheetNav;

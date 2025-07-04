import { assets } from '../../assets/assets';

const NavBar = () => {
	return (
		<div className='flex items-center justify-between p-4'>
			{/* SEARCH BAR */}
			<div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
				<img src={assets.search} width={14} height={14} alt='' />
				<input
					type='text'
					placeholder='Search...'
					className='w-[200px] p-2 bg-transparent outline-none'
				/>
			</div>
			{/* ICONS AND USER */}
			<div className='flex items-center gap-6 justify-end w-full'>
				<div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
					<img src={assets.announcement} alt='' width={20} height={20} />
					<div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full textxs'>
						1
					</div>
				</div>
				<div className='flex flex-col'>
					<span className='text-xs leading-3 font-medium'>H Mo' Hausawi</span>
					<span className='text[10px] text-gray-500 text-right'>Admin</span>
				</div>
				<img
					src={assets.avatar}
					width={36}
					height={36}
					className='rounded-full'
					alt=''
				/>
			</div>
		</div>
	);
};

export default NavBar;

import { assets } from '../../assets/assets';

const UserCard = () => {
	return (
		<div className='rounded-2xl odd:bg-hmoGreen even:bg-hmoLightPurple p-4 flex-1 min-w-[130px]'>
			<div className='flex justify-between items-center'>
				<span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>
					2025/25
				</span>
				<img width={20} height={20} src={assets.more} alt='' />
			</div>
			<h1 className='text-2xl font-semibold my-4'>1,234</h1>
			<h2 className='capitalize text-sm font-medium text-gray-500'>s</h2>
		</div>
	);
};

export default UserCard;

import { useContext, useState } from 'react';
import { ListContext } from '../../ListContext';
import { assets } from '../../assets/assets';

const DeleteFormModel = () => {
	const { deleteType } = useContext(ListContext);
	const size = deleteType === 'plus' ? 'w-8 h-8' : 'w-7 h-7';
	const bgColor =
		deleteType === 'plus'
			? 'bg-blue-300'
			: deleteType === 'delete'
			? 'bg-red-300'
			: 'bg-yellow-300';
	const [open, setOpen] = useState(false);
	return (
		<>
			<button
				className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
				onClick={() => setOpen(true)}>
				<img src={`/${deleteType}.png`} alt='' width={16} height={16} />
			</button>
			{open && (
				<div className='w-screen h-screen absolute left-0 top-0 bg-black opacity-90 z-90 flex items-center justify-center'>
					<div className='bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] opacity-100 '>
						<form action='' className='p-4 flex flex-col gap-4 bg-white'>
							<span className='text-center font-medium'>
								All data will be lost. Are you sure you want to delete this
							</span>
							<button className='bg-red-700 text-white py-2 px-4 rounded-md border-none w-full'>
								Delete
							</button>
						</form>
						<div
							className='absolute top-4 right-4 cursor-pointer'
							onClick={() => setOpen(false)}>
							<img src={assets.close} alt='' width={14} height={14} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DeleteFormModel;

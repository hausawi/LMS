import { useContext, useState } from 'react';
import { ListContext } from '../../ListContext';
import { assets } from '../../assets/assets';

const UpdateFormModel = () => {
	const { editType, table } = useContext(ListContext);
	const size = editType === 'plus' ? 'w-8 h-8' : 'w-7 h-7';
	const bgColor =
		editType === 'plus'
			? 'bg-blue-300'
			: editType === 'delete'
			? 'bg-red-300'
			: 'bg-yellow-200';
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
				onClick={() => setOpen(true)}>
				<img src={`/${editType}.png`} alt='' width={16} height={16} />
			</button>
			{open && (
				<div className='w-screen h-screen absolute left-0 top-0 bg-black opacity-90 z-50 flex items-center justify-center'>
					<div className='bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'>
						<h1>update Parent account</h1>
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

export default UpdateFormModel;

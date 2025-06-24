import { useContext, useState } from 'react';
import { ListContext } from '../ListContext';
import { assets } from '../assets/assets';
import CreateTeacherForm from './CreateTeacherForm';

const CreateFormModel = ({table}) => {
	const { createType } = useContext(ListContext); 
	const size = createType === 'plus' ? 'w-8 h-8' : 'w-7 h-7';
	const bgColor =
		createType === 'plus'
			? 'bg-blue-300'
			: createType === 'delete'
			? 'bg-green-300'
			: 'bg-yellow-300';

	const [open, setOpen] = useState(false);
	return (
		<>
			<button
				className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
				onClick={() => setOpen(true)}>
				<img src={`/${createType}.png`} alt='' width={16} height={16} />
			</button>
			{open && (
				<div className='w-screen h-screen absolute left-0 top-0 bg-black opacity-90 z-50 flex items-center justify-center'>
					<div className='bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'>
						<CreateTeacherForm />
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

export default CreateFormModel;

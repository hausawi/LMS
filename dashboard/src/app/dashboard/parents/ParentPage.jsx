
import Announcements from '../../../components/dashboard/Announcements';
import Events from '../../../components/dashboard/Events';
import BigCalendar from '../../../components/dashboard/BigCalendar';

const ParentPage = () => {
	return (
		<div className='p-4 flex gap-4 flex-col xl:flex-row flex-1'>
			{/* LEFT */}
			<div className='w-full xl:w-2/3'>
				<div className='h-full bg-white p-4 rounded-md'>
					<h1 className='text-xl font-semibold'>Schedule (Tijani) </h1>
					<BigCalendar />
				</div>
			</div>
			{/* RIGHTK */}
			<div className='w-full xl:w-1/3 flex flex-col gap-8'>
				<Events />
				<Announcements />
			</div>
		</div>
	);
};

export default ParentPage;

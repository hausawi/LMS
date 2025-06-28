import { Link } from 'react-router-dom';
import EventCalendar from '../../../components/dashboard/EventCalendar';
import Announcements from '../../../components/dashboard/Announcements';
import Events from '../../../components/dashboard/Events';
import BigCalendar from '../../../components/dashboard/BigCalendar';
import { Outlet } from 'react-router-dom';
import { assets } from '../../../assets/assets';
import Menu from '../../../components/dashboard/Menu';
import NavBar from '../../../components/dashboard/NavBar';

const StudentPage = () => {
	return (
		<div className='h-screen flex'>
			{/* LEFT */}
			<div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4'>
				<Link
					href='/'
					className='flex items-center justify-center lg:justify-start gap-2'>
					<img src={assets.logo} alt='' className='w-15 h-15' />
					<span className='hidden lg:block '>LMS</span>
				</Link>
				<Menu />
			</div>
			{/* RIGHT */}
			<div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col'>
				<NavBar />
				<div className='p-4 flex gap-4 flex-col xl:flex-row'>
					{/* LEFT */}
					<div className='w-full xl:w-2/3'>
						<div className='h-full bg-white p-4 rounded-md'>
							<h1 className='text-xl font-semibold'>Schedule (4A)</h1>
							<BigCalendar />
						</div>
					</div>
					{/* RIGHTK */}
					<div className='w-full xl:w-1/3 flex flex-col gap-8'>
						<EventCalendar />
						<Events />
						<Announcements />
					</div>
				</div>
			</div>
		</div>
	);
};

export default StudentPage;

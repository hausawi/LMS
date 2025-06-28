import NavBar from '../../../components/dashboard/NavBar';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import EducatorMenu from '../../../components/dashboard/EducatorMenu';

const EducatorDashboard = () => {
	return (
		<div className='h-screen flex'>
			{/* LEFT */}
			<div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4'>
				<Link
					href='/'
					className='flex items-center justify-center lg:justify-start gap-2'>
					<img src='/sudemy.svg' alt='' className='w-15 h-15' />
					<span className='hidden lg:block '>Sudemy</span>
				</Link>
				<EducatorMenu />
			</div>
			{/* RIGHT */}
			<div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col'>
				<NavBar />
				{<Outlet />}
			</div>
		</div>
	);
};

export default EducatorDashboard;

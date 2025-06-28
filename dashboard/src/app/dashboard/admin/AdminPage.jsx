
import CountChart from '../../../components/dashboard/CountChart';
import AttendanceChart from '../../../components/dashboard/AttendanceChart';
import FinanceChart from '../../../components/dashboard/FinanceChart';
import EventCalendar from '../../../components/dashboard/EventCalendar';
import Events from '../../../components/dashboard/Events';
import Announcements from '../../../components/dashboard/Announcements';
import UserCard from '../../../components/dashboard/UserCard';

const AdminPage = () => {
	return (
		<div className='p-4 flex gap-4 flex-col md:flex-row'>
			{/* LEFT */}
			<div className='w-full lg:w-2/3 flex flex-col gap-8'>
				{/* USER CARD */}
				<div className='flex gap-4 justify-between flex-wrap'>
					<UserCard type='student' />
					<UserCard type='teacher' />
					<UserCard type='parent' />
					<UserCard type='staff' />
				</div>
				{/* MIDDLE CHARTS */}
				<div className='flex gap-4 flex-col lg:flex-row'>
					{/* COUNT CHART */}
					<div className='w-full lg:w-1/3 h-[450px]'>
						<CountChart />
					</div>
					{/* ATTENDANCE CHART */}
					<div className='w-full lg:w-2/3 h-[450px]'>
						<AttendanceChart />
					</div>
				</div>
				{/* BOTTOM CHARTS */}
				<div className='w-full h-[500]'>
					<FinanceChart />
				</div>
			</div>
			{/* RIGHT */}
			<div className='w-full lg:w-1/3 flex flex-col gap-8'>
				<EventCalendar />
				<Events />
				<Announcements />
			</div>
		</div>
	);
};

export default AdminPage;

import React from 'react';
import { assets } from '../../../assets/assets';
import BigCalendar from '../../../components/BigCalendar';
import Announcements from '../../../components/Announcements';
import { Link } from 'react-router-dom';
import Performance from '../../../components/Performance';

const StudentSinglePage = () => {
	return (
		<div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
			{/* LEFT */}
			<div className='w-full xl:w-2/3'>
				{/* TOP */}
				<div className='flex flex-col lg:flex-row gap-4'>
					{/* USER INFO CARD */}
					<div className='bg-hmoLightBlue py-6 px-4 rounded-md flex-1 flex gap-4'>
						<div className='w-1/3'>
							<img
								src='https://www.uwindsor.ca/supportuwindsor/sites/uwindsor.ca.supportuwindsor/files/styles/full/public/impact_story_image_new.jpg?itok=r8ng6XEP'
								alt=''
								width={144}
								height={144}
								className='w-36 h-36 rounded-full object-cover'
							/>
						</div>
						<div className='w-2/3 flex flex-col justify-between gap-4'>
							<h1 className='text-xl font-semibold '>Tijani Hausawi</h1>
							<p className='text-sm text-gray-500'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							<div className='flex items-center justify-between gap-3 flex-wrap text-xs font-medium'>
								<div className='w-full md:w-1/3 lg:w-full flex items-center gap-2'>
									<img src={assets.blood} alt='' width={14} height={14} />
									<span>A+</span>
								</div>
								<div className='w-full md:w-1/3 lg:w-full flex items-center gap-2'>
									<img src='/date.png' alt='' width={14} height={14} />
									<span>Jan 2025</span>
								</div>
								<div className='w-full md:w-1/3 lg:w-full flex items-center gap-2'>
									<img src={assets.mail} alt='' width={14} height={14} />
									<span>user@gmail.com</span>
								</div>
								<div className='w-full md:w-1/3 lg:w-full flex items-center gap-2'>
									<img src={assets.phone} alt='' width={14} height={14} />
									<span>+1 123 4567</span>
								</div>
							</div>
						</div>
					</div>
					{/* SMALL CARDS */}
					<div className='flex-1 flex gap-4 justify-between flex-wrap'>
						{/* CARD */}
						<div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[42%] xl:w-[42%] 2xl:w-[46%]'>
							<img
								src='/singleAttendance.png'
								alt=''
								width={24}
								height={24}
								className='w-6 h-6'
							/>
							<div>
								<h1 className='text-xl font-semibold'>90%</h1>
								<span className='text-sm text-gray-400'>Attendance</span>
							</div>
						</div>
						{/* CARD */}
						<div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[42%] xl:w-[42%] 2xl:w-[46%]'>
							<img
								src='/singleClass.png'
								alt=''
								width={24}
								height={24}
								className='w-6 h-6'
							/>
							<div>
								<h1 className='text-xl font-semibold'>6A</h1>
								<span className='text-sm text-gray-400'>Class</span>
							</div>
						</div>
						{/* CARD */}
						<div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%]   lg:w-[42%] xl:w-[42%] 2xl:w-[46%]'>
							<img
								src='/singleBranch.png'
								alt=''
								width={24}
								height={24}
								className='w-6 h-6'
							/>
							<div>
								<h1 className='text-xl font-semibold'>6</h1>
								<span className='text-sm text-gray-400'>Grade</span>
							</div>
						</div>
						{/* CARD */}
						<div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[42%] xl:w-[42%] 2xl:w-[46%]'>
							<img
								src='/singleLesson.png'
								alt=''
								width={24}
								height={24}
								className='w-6 h-6'
							/>
							<h1 className='text-xl font-semibold'>6</h1>
							<span className='text-sm text-gray-400'>Lessons</span>
						</div>
					</div>
				</div>
				{/* BOTTOM */}
				<div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
					<h1 className=''>Teacher&apos;s Schedule</h1>
					<BigCalendar />
				</div>
			</div>
			{/* RIGHT */}
			<div className='w-full xl:w-1/3 flex flex-col gap-4'>
				<div className='bg-white p-4 rounded-md'>
					<h1 className='text-xl font-semibold'>ShortCuts</h1>
					<div className='mt-4 flex gap-2 flex-wrap text-xs text-gray-500'>
						<Link className='p-3 rounded-md bg-hmoGreen' href='/'>
							Student&apos;s Lessons
						</Link>
						<Link className='p-3 rounded-md bg-hmoLightBlue' href='/'>
							Student&apos;s Teachers
						</Link>
						<Link className='p-3 rounded-md bg-hmoLightPurple' href='/'>
							Student&apos;s Results
						</Link>
						<Link className='p-3 rounded-md bg-hmoLightGreen' href='/'>
							Student&apos;s Exams
						</Link>
						<Link className='p-3 rounded-md bg-yellow-200' href='/'>
							Student&apos;s Assignments
						</Link>
					</div>
				</div>
				<Performance />
				<Announcements />
			</div>
		</div>
	);
};

export default StudentSinglePage;

import { Link } from 'react-router-dom';

const menuItems = [
	{
		title: 'MENU',
		items: [
			{
				icon: '/home.png',
				label: 'Home',
				href: 'list/educators/:${id}',
				visible: ['admin','educator', 'teacher', 'educator', 'student', 'parent'],
			},
			{
				icon: '/student.png',
				label: 'Students',
				href: 'list/students',
				visible: ['admin', 'teacher', 'educator'],
			},
			{
				icon: '/parent.png',
				label: 'Parents',
				href: 'list/parents',
				visible: ['admin', 'teacher', 'educator'],
			},
			{
				icon: '/lesson.png',
				label: 'Lessons',
				href: 'list/lessons',
				visible: ['admin', 'teacher', 'educator'],
			},
			{
				icon: '/exam.png',
				label: 'Exams',
				href: 'list/exams',
				visible: ['admin', 'teacher', 'educator', 'student', 'parent'],
			},
			{
				icon: '/assignment.png',
				label: 'Assignments',
				href: 'list/assignments',
				visible: ['admin', 'teacher', 'educator', 'student', 'parent'],
			},
			{
				icon: '/result.png',
				label: 'Results',
				href: 'list/results',
				visible: ['admin', 'teacher', 'educator', 'student', 'parent'],
			},
			{
				icon: '/attendance.png',
				label: 'Attendance',
				href: 'list/attendance',
				visible: ['admin', 'teacher', 'educator', 'student', 'parent'],
			},
			{
				icon: '/message.png',
				label: 'Messages',
				href: '/list/messages',
				visible: ['admin', 'teacher', 'educator', 'student', 'parent'],
			},
		],
	},
	{
		title: 'OTHER',
		items: [
			{
				icon: '/profile.png',
				label: 'Profile',
				href: '/profile',
				visible: ['admin', 'teacher', 'educator', 'student', 'parent'],
			},
			{
				icon: '/setting.png',
				label: 'Settings',
				href: '/settings',
				visible: ['admin', 'teacher', 'educator', 'student', 'parent'],
			},
			{
				icon: '/logout.png',
				label: 'Logout',
				href: '/logout',
				visible: ['admin', 'teacher', 'educator', 'student', 'parent'],
			},
		],
	},
];
//import Link from "next/link";
const EducatorMenu = () => {
	return (
		<div className='mt-4 text-sm'>
			{menuItems.map((i) => (
				<div className='flex flex-col gap-2' key={i.title}>
					<span className='hidden lg:block text-grey-400 my-4'>{i.title}</span>
					{i.items.map((item) => (
						<Link
							to={item.href}
							key={item.label}
							className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'>
							<img
								src={item.icon}
								alt=''
								width={20}
								height={20}
							/>
							<span className='hidden lg:block'>{item.label}</span>
						</Link>
					))}
				</div>
			))}
		</div>
	);
};

export default EducatorMenu;

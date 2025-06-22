import { Link, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { assets } from './assets/assets';
import TeachersList from './app/list/TeachersList';
import StudentsList from './app/list/StudentsList';
import ParentsList from './app/list/ParentsList';
import SubjectsList from './app/list/SubjectsList';
import ClassesList from './app/list/ClassesList';
import LessonsList from './app/list/LessonsList';
import ExamsList from './app/list/ExamsList';
import AssignmentsList from './app/list/AssignmentsList';
import ResultsList from './app/list/ResultsList';
import EventsList from './app/list/EventsList';
import AnnouncementsList from './app/list/AnnouncementsList';
import AdminPage from './app/dashboard/admin/AdminPage';
import TeacherPage from './app/dashboard/teachers/TeacherPage';
import ParentPage from './app/dashboard/parents/ParentPage';
import StudentPage from './app/dashboard/students/StudentPage';
import SinglePage from './app/dashboard/teachers/SinglePage';
import StudentSinglePage from './app/dashboard/students/StudentSinglePage';

function App() {
	return (
		<>
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
					<Navbar />
					<Routes>
						<Route path='/' element={<AdminPage />} />
						<Route path='/teachers' element={<TeacherPage />} />
						<Route path='/parents' element={<ParentPage />} />
						<Route path='/students' element={<StudentPage />} />
						<Route path='/list/teachers' element={<TeachersList />} />
						<Route path='/list/students' element={<StudentsList />} />
						<Route path='/list/parents' element={<ParentsList />} />
						<Route path='/list/subjects' element={<SubjectsList />} />
						<Route path='/list/classes' element={<ClassesList />} />
						<Route path='/list/lessons' element={<LessonsList />} />
						<Route path='/list/exams' element={<ExamsList />} />
						<Route path='/list/assignments' element={<AssignmentsList />} />
						<Route path='/list/results' element={<ResultsList />} />
						<Route path='/list/events' element={<EventsList />} />
						<Route path='/list/announcements' element={<AnnouncementsList />} />
						{/* SIGNLE PAGES */}
						<Route path='/list/teachers/:id' element={<SinglePage />} />
						<Route path='/list/students/:id' element={<StudentSinglePage />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;

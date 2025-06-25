import { Link } from 'react-router-dom';
import TableSearch from '../../components/TableSearch';
import { assets } from '../../assets/assets';
import Pagination from '../../components/Pagination';
import Table from '../../components/Table';
import { role, studentsData } from '../../lib/data';

import React, { useContext, useEffect, useState } from 'react';
import { ListContext } from '../../ListContext';
import DeleteFormModel from '../../components/DeleteFormModel';
import CreateFormModel from '../../components/CreateFormModel';

export const columns = [
	{
		header: 'Info',
		accessor: 'info',
	},
	{
		header: 'Student ID',
		accessor: 'studentId',
		className: 'hidden md:table-cell ',
	},
	{
		header: 'Grades',
		accessor: 'grades',
		className: 'hidden md:table-cell ',
	},
	{
		header: 'Phone',
		accessor: 'phone',
		className: 'hidden md:table-cell ',
	},
	{
		header: 'Address',
		accessor: 'address',
		className: 'hidden md:table-cell ',
	},
	{
		header: 'Actions',
		accessor: 'action',
	},
];

const StudentsList = () => {
	const { studentsData } = useContext(ListContext);
	const [listItem, setListItem] = useState([]);
	useEffect(() => {
		setListItem(studentsData.slice());
		console.log(studentsData);
	}, []);
	return (
		<>
			<div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
				{/* TOP */}
				<div className='flex items-center justify-between'>
					<h1 className='hidden md:block text-lg font-semibold'>
						All Students
					</h1>
					<div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto '>
						<TableSearch />
						<div className='flex items-center gap-4 self-end'>
							<button className='w-8 h-8 flex items-center justify-center rounded-full bg-hmoGreen'>
								<img src={assets.filter} width={14} height={14} alt='' />
							</button>
							<button className='w-8 h-8 flex items-center justify-center rounded-full bg-hmoGreen'>
								<img src={assets.sort} width={14} height={14} alt='' />
							</button>

							{role === 'admin' && <CreateFormModel createType='plus' />}
						</div>
					</div>
				</div>
				{/* LIST*/}
				<Table columns={columns} data={studentsData} />
				<table className='w-full mt-4'>
					<tbody>
						{listItem.map((item, index) => (
							<tr
								key={index}
								className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-hmoLightPurple'>
								<td className='flex items-center gap-4 py-4 '>
									<img
										src={item.photo}
										alt=''
										width={40}
										height={40}
										className='md:hidden xl:block w-10 h-10 rounded-full object-cover'
									/>
									<div className='flex flex-col'>
										<h3 className='font-semibold'>{item.name}</h3>
										<p className=' text-xs text-gray-500'>{item.class}</p>
									</div>
								</td>
								<td className='hidden md:table-cell '>{item.studentId}</td>
								<td className='hidden md:table-cell'>{item.grade}</td>
								<td className='hidden md:table-cell'>{item.phone}</td>
								<td className='hidden md:table-cell'>{item.address}</td>
								<td>
									<div className='flex items-center gap-2'>
										<Link to={`/list/students/${item.id}`}>
											<button className='w-7 h-7 flex items-center justify-center rounded-full bg-hmoLightBlue'>
												<img src={assets.view} alt='' width={16} height={16} />
											</button>
										</Link>
										{role === 'admin' && (
											<DeleteFormModel deleteType='delete' id={item.id} />
										)}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{/* PAGINATION */}
				<Pagination />
			</div>
		</>
	);
};

export default StudentsList;

import { Link } from 'react-router-dom';
import TableSearch from '../../components/TableSearch';
import { assets } from '../../assets/assets';
import Pagination from '../../components/Pagination';
import Table from '../../components/Table';
import { role, subjectsData } from '../../lib/data';

import React, { useContext, useEffect, useState } from 'react';
import { ListContext } from '../../ListContext';

export const columns = [
	{
		header: 'Subject Name',
		accessor: 'name',
		className: 'text-left md:table-cell ',
	},
	{
		header: 'Teachers',
		accessor: 'teachers',
		className: 'hidden text-left md:table-cell ',
	},
	{
		header: 'Actions',
		accessor: 'action',
		className: 'text-left md:table-cell ',
	},
];

const SubjectsList = () => {
	const { subjectsData } = useContext(ListContext);
	const [listItem, setListItem] = useState([]);
	useEffect(() => {
		setListItem(subjectsData.slice());
		console.log(subjectsData);
	}, []);
	return (
		<>
			<div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
				{/* TOP */}
				<div className='flex items-center justify-between'>
					<h1 className='hidden md:block text-lg font-semibold'>All Subjects</h1>
					<div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto '>
						<TableSearch />
						<div className='flex items-center gap-4 self-end'>
							<button className='w-8 h-8 flex items-center justify-center rounded-full bg-hmoGreen'>
								<img src={assets.filter} width={14} height={14} alt='' />
							</button>
							<button className='w-8 h-8 flex items-center justify-center rounded-full bg-hmoGreen'>
								<img src={assets.sort} width={14} height={14} alt='' />
							</button>

							{role === 'admin' && (
								<button className='w-8 h-8 flex items-center justify-center rounded-full bg-hmoGreen'>
									<img src={assets.plus} width={14} height={14} alt='' />
								</button>
							)}
						</div>
					</div>
				</div>
				{/* LIST*/}
				<Table columns={columns} data={subjectsData} />
				<table className='w-full mt-4'>
					<tbody>
						{listItem.map((item, index) => (
							<tr
								key={index}
								className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-hmoLightPurple'>
								<td className='flex items-center gap-4 py-4 '>{item.name}</td>

								<td className='hidden md:table-cell'>
									{item.teachers.join(',')}
								</td>
								<td>
									<div className='flex items-center gap-2'>
										<Link href={`/list/teachers/${item.id}`}>
											<button className='w-7 h-7 flex items-center justify-center rounded-full bg-hmoLightBlue'>
												<img src={assets.edit} alt='' width={16} height={16} />
											</button>
										</Link>
										{role === 'admin' && (
											<button className='w-7 h-7 flex items-center justify-center rounded-full bg-hmoLightBlue'>
												<img src='/delete.png' alt='' width={16} height={16} />
											</button>
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

export default SubjectsList;

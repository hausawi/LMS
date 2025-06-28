import { Link } from 'react-router-dom';
import TableSearch from '../../components/dashboard/TableSearch';
import { assets } from '../../assets/assets';
import Pagination from '../../components/dashboard/Pagination';
import Table from '../../components/dashboard/Table';
import { role, announcementsData } from '../../lib/data';

import React, { useContext, useEffect, useState } from 'react';
import { ListContext } from '../../ListContext';
import CreateFormModel from '../../components/dashboard/CreateFormModel';
import UpdateFormModel from '../../components/dashboard/UpdateFormModel';
import DeleteFormModel from '../../components/dashboard/DeleteFormModel';

export const columns = [
	{
		header: 'Title',
		accessor: 'title',
	},
	{
		header: 'Class',
		accessor: 'class',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Date',
		accessor: 'date',
		className: 'hidden md:table-cell',
	},
	{
		header: 'Actions',
		accessor: 'action',
	},
];

const AnnouncementsList = () => {
	const { announcementsData } = useContext(ListContext);
	const [listItem, setListItem] = useState([]);
	useEffect(() => {
		setListItem(announcementsData.slice());
		console.log(announcementsData);
	}, []);
	return (
		<>
			<div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
				{/* TOP */}
				<div className='flex items-center justify-between'>
					<h1 className='hidden md:block text-lg font-semibold'>
						All Assignments
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
				<Table columns={columns} data={announcementsData} />
				<table className='w-full mt-4'>
					<tbody>
						{listItem.map((item, index) => (
							<tr
								key={index}
								className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-hmoLightPurple'>
								<td className='flex items-center gap-4 p-4'>{item.title}</td>
								<td className='hidden md:table-cell'>{item.class}</td>
								<td className='hidden md:table-cell'>{item.date}</td>
								<td>
									<div className='flex items-center gap-2'>
										{role === 'admin' && (
											<>
												<Link href={`/list/teachers/${item.id}`}>
													<UpdateFormModel editType='edit' data={item} />
												</Link>

												<DeleteFormModel deleteType='delete' id={item.id} />
											</>
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

export default AnnouncementsList;

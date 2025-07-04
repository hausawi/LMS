import { Link, Outlet } from 'react-router-dom';
import TableSearch from '../../components/dashboard/TableSearch';
import { assets } from '../../assets/assets';
import Pagination from '../../components/dashboard/Pagination';
import Table from '../../components/dashboard/Table';
import { role, parentsData } from '../../lib/data';

import React, { useContext, useEffect, useState } from 'react';
import { ListContext } from '../../ListContext';
import CreateFormModel from '../../components/dashboard/CreateFormModel';
import DeleteFormModel from '../../components/dashboard/DeleteFormModel';
import UpdateFormModel from '../../components/dashboard/UpdateFormModel';

export const columns = [
	{
		header: 'Info',
		accessor: 'info',
	},
	{
		header: 'Student Names',
		accessor: 'students',
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

const ParentsList = () => {
	const { parentsData } = useContext(ListContext);
	const [listItem, setListItem] = useState([]);
	useEffect(() => {
		setListItem(parentsData.slice());
	}, []);
	return (
		<>
			<div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
				{/* TOP */}
				<div className='flex items-center justify-between'>
					<h1 className='hidden md:block text-lg font-semibold'>All Parents</h1>
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
				<Table columns={columns} data={parentsData} />

				<table className='w-full mt-4'>
					<tbody>
						{listItem.map((item, index) => (
							<tr
								key={index}
								className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-hmoLightPurple'>
								<td className='flex items-center gap-4 py-4 '>
									<div className='flex flex-col'>
										<h3 className='font-semibold'>{item.name}</h3>
										<p className=' text-xs text-gray-500'>{item?.email}</p>
									</div>
								</td>
								<td className='hidden md:table-cell '>
									{item.students.join(',')}
								</td>
								<td className='hidden md:table-cell'>{item.phone}</td>
								<td className='hidden md:table-cell'>{item.address}</td>
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

export default ParentsList;

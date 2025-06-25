import React from 'react';

const Table = ({ columns, renderRow, data, header, accessor, className }) => {
	return (
		<table className='w-full mt-4'>
			<thead>
				<tr className=' text-gray-500 text-sm '>
					{columns.map((col) => (
						<th key={col.accessor} className={col.className}>
							{col.header}
						</th>
					))}
				</tr>
			</thead>
		</table>
	);
};

export default Table;

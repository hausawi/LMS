import React, { PureComponent } from 'react';
import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { assets } from '../assets/assets';

const data = [
	{
		name: 'Mon',
		present: 400,
		absent: 200,
	},
	{
		name: 'Tue',
		present: 250,
		absent: 300,
	},
	{
		name: 'Wed',
		present: 200,
		absent: 100,
	},
	{
		name: 'Thu',
		present: 400,
		absent: 200,
	},
	{
		name: 'Fri',
		present: 500,
		absent: 400,
	},
	{
		name: 'Sat',
		present: 100,
		absent: 120,
	},
];

const AttendanceChart = () => {
	return (
		<div className='bg-white rounded-lg p-4 h-full '>
			<div className='flex justify-between items-center'>
				<h1 className='text-lg font-semibold'>Attendance</h1>
				<img src={assets.moreDark} alt='' width={20} height={20} />
			</div>
			<ResponsiveContainer width='100%' height='90%'>
				<BarChart width={500} height={300} data={data} barSize={20}>
					<CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#ddd' />
					<XAxis
						dataKey='name'
						axisLine={false}
						tick={{ fill: '#d1d5db' }}
						tickLine={false}
					/>
					<YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
					<Tooltip
						contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
					/>
					<Legend
						align='left'
						verticalAlign='top'
						wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
					/>
					<Bar
						dataKey='present'
						fill='#C0A9BC'
						legendType='circle'
						radius={[10, 10, 0, 0]}
					/>
					<Bar
						dataKey='absent'
						fill='#1E80C1'
						legendType='circle'
						radius={[10, 10, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default AttendanceChart;

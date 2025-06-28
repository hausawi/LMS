import { assets } from '../../assets/assets';

// TEMPARARY DATA
const events = [
	{
		id: 1,
		title: 'Lorem ipsum dolor',
		time: '12:00 PM -2:00 M',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	},
	{
		id: 2,
		title: 'Lorem ipsum dolor',
		time: '12:00 PM -2:00 M',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	},
	{
		id: 3,
		title: 'Lorem ipsum dolor',
		time: '12:00 PM -2:00 M',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	},
];

const Events = () => {
	return (
		<div className='bg-white p-4 rounded-md'>
			<div className='flex items-center justify-between'>
				<h1 className=' text-xl font-semibold my-4'>Events</h1>
				<img src={assets.moreDark} alt='' width={20} height={20} />
			</div>
			{events.map((event) => (
				<div
					className=' p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-hmoLightGreen even:border-t-hmoLightPurple'
					key={event.id}>
					<div className='flex items-center justify-between'>
						<h1 className='font-semibold text-gray-600 '>{event.title}</h1>
						<span className='text-gray-300 text-xs '>{event.time}</span>
						<div />
					</div>
					<p className='mt-2 text-gray-400 text-sm '>{event.description}</p>
				</div>
			))}
		</div>
	);
};

export default Events;

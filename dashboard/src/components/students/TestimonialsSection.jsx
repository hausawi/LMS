import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {
	return (
		<div className='pb-14 px-8 md:px-0 '>
			<h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
			<p className='md:text-base text-gray-500 mt-3'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo
				impedit ea, natus voluptate facere quia error magni id expedita, <br />
				dolore ducimus. Non, officiis. Eos suscipit debitis ex rerum dolorum?
			</p>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 p-4  '>
				{dummyTestimonial.map((testimonail, index) => (
					<div
						key={index}
						className='text-sm text-left border border-gray-500/30 m-4 pb-6 rounded-lg bg-white shadow-[0px_4px_15px] shadow-black/5 overflow-hidden'>
						<div className='flex items-center p-2 gap-4 bg-gray-500/10'>
							<img
								className='h-12 w-12 rounded-full'
								src={testimonail.image}
								alt=''
							/>
							<div>
								<h1 className='text-lg font-medium text-gray-800'>
									{testimonail.name}
								</h1>
								<p className='text-gray-800/80'>{testimonail.role}</p>
							</div>
						</div>
						<div className='p-5 pb-7'>
							<div className='flex gap-0.5'>
								{[...Array(5)].map((_, i) => (
										<img
											className='h-5'
											key={i}
											src={
												i < Math.floor(testimonail.rating)
													? assets.star
													: assets.blankStar
											}
											alt='star'
										/>
									))
								}
							</div>
							<p className='text-gray-500 mt-5'>{testimonail.feedback}</p>
            </div>
            <a className='text-blue-500 underline px-5' href="#">Read More</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default TestimonialsSection;

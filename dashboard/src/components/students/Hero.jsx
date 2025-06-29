import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 cacee-y-7 text-center bg-gradiant-to-b from-cyan-100/70'>
			<h1 className='md:text-[48px] text-[28px] relative font-bold text-gray-800 max-w-3xl mx-auto'>
				Empower your future with the courses designed to
				<span className='text-blue-600'>fit your choice</span>
				<img width={90} height={65}
					src='/scetch.png'
					className='md:block hidden absolute -bottom-17 right-22'
					alt=''
				/>
			</h1>
			<p className='md:block hidden text-gray-500 max-w-sm mx-auto'>
				We bring together world-class instructors, interactive content, and
				supportive community to help you achieve your personal and professional
				goals.
      </p>
      <SearchBar/>
		</div>
	);
};

export default Hero;

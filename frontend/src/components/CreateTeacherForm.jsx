import React from 'react';

const CreateTeacherForm = ({ table, teacher, student, parent }) => {
	return (
		<form className='flex flex-col gap-8'>
			<h1 className='text-xl font-semibold'>Create a new teacher</h1>
			<span className='text-xs text-gray-400 font-medium '>
				Authentication Information
			</span>
			<div className='flex flex-col gap-2 w-full md:w-1/4'>
				<label htmlFor='' className='text-xs text-gray-500'>
					Username
				</label>
				<input
					className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'
					type='text'
				/>
			</div>
			<span className='text-xs text-gray-400 font-medium'>
				Personal Information
			</span>
			<button className='bg-blue-400 text-white p-2 rounded-md'>Create</button>
		</form>
	);
};

export default CreateTeacherForm;

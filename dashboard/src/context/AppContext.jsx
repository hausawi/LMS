import { createContext, useEffect, useState } from 'react';
import { dummyCourses } from '../assets/assets';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
	const [allCourses, setAllCourses] = useState([]);
	// Fetch all courses
	const fetchAllCourses = async () => {
		setAllCourses(dummyCourses);
	};

	const currency = '$';

	useEffect(() => {
		fetchAllCourses(dummyCourses);
	}, []);

	const value = {
		currency,
		allCourses,
	};

	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
};

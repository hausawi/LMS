import { createContext } from 'react';
import { announcementsData, assignmentsData, calendarEvents, classesData, eventsData, examsData, lessonsData, parentsData, resultsData, studentsData, subjectsData, teachersData } from './lib/data';

export const ListContext = createContext();

const ListContextProvider = (props) => {
	const value = {
		teachersData,
		studentsData,
		parentsData,
		subjectsData,
		classesData,
		lessonsData,
		examsData,
		assignmentsData,
		resultsData,
		eventsData,
		announcementsData,
		calendarEvents,
	};

	return (
		<ListContext.Provider value={value}>{props.children}</ListContext.Provider>
	);
};

export default ListContextProvider;

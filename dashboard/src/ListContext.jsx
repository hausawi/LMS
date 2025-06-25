import { createContext } from 'react';
import {
	announcementsData,
	assignmentsData,
	calendarEvents,
	classesData,
	eventsData,
	examsData,
	lessonsData,
	parentsData,
	resultsData,
	studentsData,
	subjectsData,
	teachersData,
} from './lib/data';

export const ListContext = createContext();

const ListContextProvider = (props) => {
	const table =['teacher', 'student', 'parent']
	const createType = 'plus'
	const editType = 'edit'
	const deleteType = 'delete'
	
	const data = {};
	const id = Number;
	const value = {
		table,
		createType,
		editType,
		deleteType,
		data,
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

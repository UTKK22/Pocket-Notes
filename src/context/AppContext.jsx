
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({
	notes: [],
	setNotes: () => { },
	select:'',
	setSelect: () => { },
	title: {},
	setTitles: () => { },
});

export const AppProvider = ({ children }) => {
	const [select, setSelect] = useState(()=>{
		const saveSelect=localStorage.getItem('select')
		return saveSelect!==null||saveSelect!==undefined?saveSelect:''
	})
	const [notes, setNotes] = useState(()=>{
        const saveNotes=localStorage.getItem('notes')
		return saveNotes ? JSON.parse(saveNotes):[]
	})
	const [titles, setTitles] = useState(()=>{
		const saveTitle=localStorage.getItem('titles')
		return saveTitle ? JSON.parse(saveTitle):[]
		
	})
	useEffect(()=>{
		localStorage.setItem('notes',JSON.stringify(notes))
	},[notes])
	useEffect(()=>{
		localStorage.setItem('select',select)
	},[select])
	useEffect(()=>{
		localStorage.setItem('titles',JSON.stringify(titles))
	},[titles])
	
	return (
		<AppContext.Provider value={{
			notes,
			setNotes,
			select,
			setSelect,
			titles,
			setTitles,
		}
		}>
			{children}
		</AppContext.Provider>
	);
}


import { useState, createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) =>{
	
	const [theme, setTheme] = useState('dark')

	return(
	<ThemeContext.Provider value={{ theme, setTheme }}>
		{children}
	</ThemeContext.Provider>
	)
}


export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
	const [answers, setAnswers] = useState({})
	const saveAnswers = (newAnswers) => {
	setAnswers({ ...answers, ...newAnswers })
	}

	return (
		<SurveyContext.Provider value= {{ answers, saveAnswers }}>
			{children}
		</SurveyContext.Provider>
	)
}

export default ThemeProvider
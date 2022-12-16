import {useState, useContext, useEffect} from 'react'
import {SurveyContext} from '../../utils/context'
import {ThemeContext} from '../../utils/context'



function formatQueryParams (answers) {

	const answersNumbers = Object.keys (answers)

	return answersNumbers.reduce ((previousNumber, currentNumber, index) => {

		const seperator = index === 0 ? '': '&'
		 
		 return `${previousNumber}${seperator}a${currentNumber}=${answers[currentNumber]}`
	}, '')
}





function Results() {
	const {answers} = useContext (SurveyContext)
	const {theme} = useContext (ThemeContext)
    const [data, setData] = useState ({})
    const [isLoading, setLoading] = useState (true)
    const [error, setError] = useState (false)
    
  


	useEffect(() => {
		async function fetchResults() {
			try {
				const response = await fetch(`http://localhost:8000/results?${answers}`)
				const { data } = await response.json()
				setData(data)
				console.log(JSON.stringify(response))
			} catch (err) {
				console.log(err)
				setError(true)
			} finally {
				setLoading(false)
			}
		}

		fetchResults()
	}, [])



	if (error) {
		return <div> Something went wrong </div>
	}

	
	return (
		<div>
			{data && 
			<h1> {data[0]} </h1> 

			}
		</div>
	)
}

export default Results

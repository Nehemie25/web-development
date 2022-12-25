
import {useContext} from 'react'
import {SurveyContext} from '../../utils/context'
import {useFetch,useTheme} from '../../utils/Hooks'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Loader } from '../../utils/Atoms'

const ResultsDiv = styled.div`
    width: 90%;
    margin: auto;
    background-color: ${({$isDark}) => $isDark ? colors.backgroundDark: colors.backgroundLight};
    color:  ${({$isDark}) => $isDark ? 'white' : colors.secondary } !important;
    height:700px;
    display: flex;
    justify-content:center;
    align-items: center;
    `
 const ResultsSubdiv = styled.div`
 width: 35%;
    margin: auto;
`
    const Entete = styled.div`
    text-align:center;
    width:100%;
    `
    const Jobs = styled.em`
    color:${colors.primary};
    `
    


const SelectedLink = styled(Link)`
    background-color: ${colors.primary};
    display: inline-block;
    color: white;
    text-decoration: none;
    border: 1px solid ${colors.primary};
    border-radius: 25px;
    width:40%;
    height: 30px;
    line-height: 30px;
    `

function formatFetchParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}




function Results() {
	const { theme } = useTheme()
  const { answers } = useContext(SurveyContext)
  const fetchParams = formatFetchParams(answers)
  

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  )

const {resultsData} = data


	if (error) {
		return <div> Something went wrong </div>
	}

	
	return (
		<ResultsDiv $isDark = {theme ==='light'}>
    {
      isLoading ?
    <Loader/>
    :
    <ResultsSubdiv>
			
			
      <Entete>
     
      
      <h2> Les competences dont vous avez besoin: <Jobs>{resultsData && resultsData.reduce ((previous, current, index) => {

      


       return  (`${previous}${ (index === resultsData.length || index ===0) ? '' : ','}${current.title}`)
      }, '')} 
      </Jobs>
      </h2> 

      <SelectedLink to="/survey/1"> &nbsp; Decouvrez nos profiles &nbsp;</SelectedLink>

      </Entete>
    
			<div>
      { resultsData && resultsData.map((value)=> (
        <div>
        <h3 style = {{marginBottom: '2px'}}><Jobs> {value.title}</Jobs> </h3>
        <p  style = {{marginTop: '2px'}}> {value.description} </p>
        </div>
        )
        
      )
    }
		</div>
    </ResultsSubdiv>
}
    </ResultsDiv>
)
	
}

export default Results

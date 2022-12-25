import {useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Loader } from '../../utils/Atoms'
import colors from '../../utils/style/colors'
import {useFetch, useTheme} from '../../utils/Hooks'
import styled from 'styled-components'
import { SurveyContext } from '../../utils/context'

const ResponseDiv = styled.div`
		width: 25%;
		margin: auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 100px;
		margin-bottom: 25px;
		margin-top: 25px;
	`
	const ResponseButton = styled.a`
		width: 45%;
		height: 70px;
		line-height: 70px;
		border-radius: 25px;
		border: 1px solid
			${(props) => (props.isSelected ? `${colors.primary}` : `transparent`)};
		background-color: ${({$isDark}) => $isDark ? colors.backgroundDark: colors.backgroundLight};
        color:  ${({$isDark}) => $isDark ? 'white' : colors.secondary } !important;
	`

	const SurveyDiv = styled.div`
		text-align: center;
		color:  ${({$isDark}) => $isDark ? 'white' : colors.secondary };
	`
	const SurveyTitle = styled.h2`
		text-decoration: underline ${colors.primary};
	`
	const SurveyContent = styled.p``
	const NavLink = styled(Link)`
		margin: 20px;
		text-decoration: underline ${({$isDark}) => $isDark ? 'white' : colors.secondary };;
		color:  ${({$isDark}) => $isDark ? 'white' : colors.secondary };
	`

function Survey() {
	let isFirst = false
	let isLast = false
	const {theme} = useTheme()
	const { questionNumber } = useParams()
	let questionNumberInt = parseInt(questionNumber)
	const { saveAnswers, answers } = useContext(SurveyContext)
	

	

	function saveReply(answer) {
		saveAnswers({ [questionNumberInt]: answer })
		
	}

	if (questionNumberInt === 1) {
		isFirst = true
	} else if (questionNumberInt === 6) {
		isLast = true
	}


		const {data, isLoading, error } = useFetch('http://localhost:8000/survey')
		const {surveyData} = data
        console.log( data)
	
		


	if (error) {
	
		return <div> Something went wrong </div>
	}

	return (
		<SurveyDiv $isDark ={theme ==='light'}>
			<SurveyTitle> Question {questionNumberInt} </SurveyTitle>
			{isLoading ? (
				<Loader />
			) : (
				<SurveyContent>
					{' '}
					hello {surveyData && surveyData[questionNumberInt]}{' '}
				</SurveyContent>
			)}

			<ResponseDiv >
				<ResponseButton  $isDark ={theme ==='light'}
					onClick={() => {
						saveReply(true)
					}}
					isSelected={answers[questionNumberInt] === true}
				>
					OUI
				</ResponseButton>
				<ResponseButton  $isDark ={theme ==='light'}
					onClick={() => {
						saveReply(false)
					}}
					isSelected={answers[questionNumberInt] === false}
				>
					NON
				</ResponseButton>
			</ResponseDiv>

			{!isFirst && (
				<NavLink to={`/survey/${questionNumberInt - 1}`} $isDark ={theme ==='light'}> Precedent </NavLink>
			)}
			{isLast ? (
				<NavLink to="/results" $isDark ={theme ==='light'}> Results </NavLink>
			) : (
				<NavLink to={`/survey/${questionNumberInt + 1}`} $isDark ={theme ==='light'}> Suivant </NavLink>
			)}
		</SurveyDiv>
	)
}
export default Survey

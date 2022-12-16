import { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Loader } from '../../utils/Atoms'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import { SurveyContext } from '../../utils/context'
function Survey() {
	let isFirst = false
	let isLast = false
	const { questionNumber } = useParams()
	let questionNumberInt = parseInt(questionNumber)
	const { saveAnswers, answers } = useContext(SurveyContext)
	const [error, setError] = useState(false)
	const [surveyData, setData] = useState({})
	const [isLoading, setLoading] = useState(true)

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
		background-color: ${colors.backgroundLight};
		color: ${colors.secondary};
	`

	const SurveyDiv = styled.div`
		text-align: center;
	`
	const SurveyTitle = styled.h2`
		text-decoration: underline ${colors.primary};
	`
	const SurveyContent = styled.p``
	const NavLink = styled(Link)`
		margin: 20px;
		text-decoration: underline ${colors.primary};
	`

	function saveReply(answer) {
		saveAnswers({ [questionNumberInt]: answer })
		console.log(answers)
	}

	if (questionNumberInt === 1) {
		isFirst = true
	} else if (questionNumberInt === 6) {
		isLast = true
	}

	useEffect(() => {
		async function fetchSurvey() {
			try {
				const response = await fetch('http://localhost:8000/survey')
				const { surveyData } = await response.json()
				setData(surveyData)
			} catch (err) {
				console.log(err)
				setError(true)
			} finally {
				setLoading(false)
			}
		}

		fetchSurvey()
	}, [])



	if (error) {
		return <div> Something went wrong </div>
	}

	return (
		<SurveyDiv>
			<SurveyTitle> Question {questionNumberInt} </SurveyTitle>
			{isLoading ? (
				<Loader />
			) : (
				<SurveyContent>
					{' '}
					hello {surveyData && surveyData[questionNumberInt]}{' '}
				</SurveyContent>
			)}

			<ResponseDiv>
				<ResponseButton
					onClick={() => {
						saveReply(true)
					}}
					isSelected={answers[questionNumberInt] === true}
				>
					OUI
				</ResponseButton>
				<ResponseButton
					onClick={() => {
						saveReply(false)
					}}
					isSelected={answers[questionNumberInt] === false}
				>
					NON
				</ResponseButton>
			</ResponseDiv>

			{!isFirst && (
				<NavLink to={`/survey/${questionNumberInt - 1}`}> Precedent </NavLink>
			)}
			{isLast ? (
				<NavLink to="/results"> Results </NavLink>
			) : (
				<NavLink to={`/survey/${questionNumberInt + 1}`}> Suivant </NavLink>
			)}
		</SurveyDiv>
	)
}
export default Survey

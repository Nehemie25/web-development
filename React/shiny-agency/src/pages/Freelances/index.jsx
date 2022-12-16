import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useState, useEffect } from 'react'
import { Loader } from '../../utils/Atoms'

function Freelances() {
	const [freelanceProfiles, setFreelanceProfiles] = useState([])
	const [isDataLoading, setDataLoading] = useState(true)

	const FreelanceDiv = styled.div`
		width: 90%;
		margin: auto;
		height: 700px;
		text-align: center;
	`

	const FreelanceSubDiv = styled.div`
		width: 80%;
		margin: auto;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 70px;
	`
	const FreelanceText = styled.p`
		color: ${colors.secondary};
	`

	useEffect(() => {
		async function fetchProfiles() {
			try {
				const response = await fetch('http://localhost:8000/freelances')
				const profiles = await response.json()
				setFreelanceProfiles(profiles.freelancersList)
			} catch (err) {
				console.log(err)
			} finally {
				setDataLoading(false)
			}
		}
		fetchProfiles()
	}, [])

	return (
		<FreelanceDiv>
			<h2> Trouvez votre prestataire </h2>
			<FreelanceText>
				Chez Shiny nous reunissons les meilleurs profils pour vous
			</FreelanceText>
			{isDataLoading ? (
				<Loader />
			) : (
				<FreelanceSubDiv>
					{freelanceProfiles.map((prof) => (
						<Card
							key={prof.id}
							label={prof.name}
							title={prof.job}
							picture={prof.picture}
						/>
					))}
				</FreelanceSubDiv>
			)}
		</FreelanceDiv>
	)
}
export default Freelances

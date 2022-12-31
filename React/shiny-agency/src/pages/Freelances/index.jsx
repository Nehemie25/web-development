import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/Atoms'
import {useFetch, useTheme} from '../../utils/Hooks'

function Freelances() {
	const {theme} = useTheme()
	
	const FreelanceDiv = styled.div`
     color: ${({$isDark}) => $isDark ? 'white': colors.secondary};
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

				const {data, isLoading} =  useFetch('http://localhost:8000/freelances')
				const {freelancersList} = data
				
			

	return (
		<FreelanceDiv $isDark ={theme ==='light'}>
			<h2> Trouvez votre prestataire </h2>
			<FreelanceText>
				Chez Shiny nous reunissons les meilleurs profils pour vous
			</FreelanceText>
			{isLoading ? (
				<Loader />
			) : (
				<FreelanceSubDiv >
					{freelancersList.map((prof) => (
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

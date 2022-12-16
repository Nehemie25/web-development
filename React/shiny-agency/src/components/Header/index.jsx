import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/logo.png'
function Header() {
	const HomeHeader = styled.header`
		width: 95%;
		margin: auto;
		margin-top: 25px;
		height: 75px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`
	const HeaderLogo = styled.img`
		width: 10%;
		height: 50px;
	`
	const HeaderNav = styled.nav`
		width: 20%;
		height: 30px;
		display: flex;
		flwx-direction: row;
		justify-content: space-between;
	`
	const SelectedLink = styled(Link)`
		background-color: ${colors.primary};
		color: white;
		text-decoration: none;
		border: 1px solid  ${colors.primary};
		border-radius:25px;
	`
	const HeaderLink = styled(Link)`
		text-decoration: none;
		color: ${colors.secondary};
	`

	return (
		<HomeHeader>
			<HeaderLogo src={logo} alt="logo" />
			<HeaderNav>
				<HeaderLink to="/"> Accueil </HeaderLink>
				<HeaderLink to="/freelances"> Profils </HeaderLink>
				<SelectedLink  to="/survey/1" > &nbsp; &nbsp;  Faire le test &nbsp; &nbsp;  </SelectedLink>
			</HeaderNav>
		</HomeHeader>
	)
}

export default Header

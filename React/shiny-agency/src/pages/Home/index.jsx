import styled from 'styled-components'
import illustration from '../../assets/home-illustration.svg'
import colors from '../../utils/style/colors'
import {Link} from 'react-router-dom'
function Home() {
  const HomeDiv = styled.div`
    width: 90%;
    margin: auto;
    background-color: ${colors.backgroundLight};
    display: flex;
    justify-content: center;
    height:700px;
  `
  const HomeDescription = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    vertical-align: sup;
    line-height: 1.5;
  `
  const SelectedLink = styled(Link)`
    background-color: ${colors.primary};
    color: white;
    text-decoration: none;
    border: 1px solid ${colors.primary};
    border-radius: 25px;
    width:170px;
    height: 30px;
    line-height: 30px;

  `
  const HomeSvg = styled.img`
    width: 45%;
    height: 400px;
    margin-top: 100px;
  `
  return (
    <HomeDiv>
      <HomeDescription>
        <h1>
          Reperez vos besoin, <br /> On s'occupe du reste, <br /> avec les
          meilleurs <br/>talents <br />{' '}
        </h1>

        <SelectedLink to="/survey/1"> &nbsp; &nbsp; &nbsp; Faire le test &nbsp; &nbsp; &nbsp;</SelectedLink>
      </HomeDescription>

      <HomeSvg src={illustration} alt="illustration" />
    </HomeDiv>
  )
}

export default Home

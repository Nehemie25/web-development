import { PropTypes } from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import {useTheme} from '../../utils/Hooks'
function Card({ label, title, picture }) {
  const CardDiv = styled.div`
     width: 30%;
     margin: 10px;
     height: 230px;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     background-color: ${({$isDark}) => $isDark ? colors.backgroundDark: colors.backgroundLight};
     color: ${({$isDark}) => $isDark ? 'white': colors.secondary};
     border-radius: 30px;
     transition: 200ms;
     &: hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
     }
`
    const LabelText = styled.span`
    text-align: center;
    `
    const TitleText = styled.span`
    color: ${colors.primary};
    `

  const {theme} = useTheme();

     
   

  return (
    <CardDiv $isDark = {theme ==='light'}>
      <TitleText>{title}</TitleText>
      <img src={picture} alt="freelance" height={80} width={80} border-radius = "50px"/>
      <LabelText>{label}</LabelText>
    </CardDiv>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}
Card.defaultProps = {
  label: '',
  title: '',
  picture: {DefaultPicture},
}
export default Card

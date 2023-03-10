import styled from 'styled-components'
import colors from '../../utils/style/colors'
import {useTheme} from '../../utils/Hooks'

 
const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`
 
const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`
 
function Footer() {
    const {theme, setTheme} = useTheme()
    return (
        <FooterContainer>
            <NightModeButton onClick= {() =>{ setTheme ((theme === 'light') ? 'dark': 'light') } }>Changer de mode { theme === 'light' ?  '☀️' : '🌙'}</NightModeButton>
        </FooterContainer>
    )
}
 
export default Footer
import styled from 'styled-components'
import error from '../../assets/error.png'
import colors from '../../utils/style/colors'
function Error() {

    const ErrorDiv = styled.div`
    width: 90%;
    margin: auto;
    background-color: ${colors.backgroundLight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
    height:800px;
    `
    const ErrorJpg = styled.img`
    width: 60%;
    margin: auto;
    height: 400px;
    margin-top: 100px;
    margin-top: 10px;
    margin-bottom: 10px;

  `
    const ErrorDescription = styled.h2`
    text-align: center;
    `
    return (
        <ErrorDiv>
        <ErrorDescription>Oups...</ErrorDescription>
        <ErrorJpg src={error} />
            <ErrorDescription>Il semblerait qu'il yait une erreur</ErrorDescription>
        </ErrorDiv>
    )
}
 
export default Error
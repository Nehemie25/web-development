import sun from '../assets/sun.svg'
import water from '../assets/water.svg'
import '../styles/Care.css'

function CareScale (props)
{
     const {scaleValue, careType} = props;


     const scaleType = careType ==="light" ? <img src ={sun} className="lmj-sun" /> : <img src ={water} className="lmj-water" />;


     const range = [1, 2, 3];

     const quantityLabel = {

     1: 'peu',
     2: 'moderement',
     3: 'beaucoup'
     };

     function handleClick ()
     {
         
        alert(
          `cette plante requiert ${quantityLabel [scaleValue]} ${(careType == 'light') ? 'de lumiere' : "d'arrosage"}`
          );

     }

     

     return (

        <div onClick ={handleClick}> 
        {
             range.map ((rangeElem) =>
                 scaleValue >= rangeElem ? <span key ={rangeElem.toString()}> {scaleType} </span> : null
             	)
        }
        </div>
     	)
}

export default CareScale;
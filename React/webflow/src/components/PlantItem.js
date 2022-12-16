import '../styles/PlantItem.css';
import CareScale from './CareScale';

function PlantItem (props)
{
	const {name, cover, id, light, water, price} = props;

	

	return(
		<div className ="lmj-plant-item">
		
		 <img src ={cover}  className="lmj-plant-item-cover"/> 
		 <span className='lmj-plant-item-price'>{price}€</span>
		 <div>{name} </div>
		 <CareScale careType ="light" scaleValue={light} />
		 <CareScale careType ="water" scaleValue={water} />
		 
		 </div>
     
		);

}

export default PlantItem;
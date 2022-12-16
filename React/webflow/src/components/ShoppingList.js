import {plantList} from '../data/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem';
import '../styles/Layout.css'


function ShoppingList({cart, updateCart, category, setCategory})
{
	
function addToCart (name, price)
{
   
    const currentAddedPlant = cart.find ((plant) => plant.name === name);
   
   
    if (currentAddedPlant)
    {
        const newCart = cart.filter ((plant) => plant.name !== name);
        updateCart ([...newCart,{name, price, amount: currentAddedPlant.amount + 1}]);
    }
    else
    {
        updateCart ([...cart, {name, price, amount:1}]);
    }
       


}

 let plantListDOM = plantList.map (
    (plant) =>
    <li  
        key ={'plant.id'}> 

        <PlantItem name ={plant.name}  category = {plant.category}  id ={plant.id}  light ={plant.light} water ={plant.water}  cover ={plant.cover}  price = {plant.price} />
        
        <button onClick = {() => addToCart (plant.name, plant.price)}> Ajouter </button>
    </li>
    );


    if (category !== "all")
    {

     
    plantListDOM = plantList.filter ( (plant) => plant.category !== category);
    plantListDOM = plantListDOM.map ((plant) => (
    <li  className= "lmj-plant-element"
        key ={'plant.id'}> 
        
        <PlantItem name ={plant.name}  category = {plant.category}  id ={plant.id}  light ={plant.light} water ={plant.water}  cover ={plant.cover}  price = {plant.price} />
        <a className ="ouvrir" onClick = {() => addToCart (plant.name, plant.price)}> retirer </a>
    </li> : null )
    );
}


     
    

    return (
        <div className = "lmj-shopping-list">
        <ul className = "lmj-plant-list"> 
        {plantListDOM}
        </ul>

          </div>
        
        
        );
}

export default ShoppingList;
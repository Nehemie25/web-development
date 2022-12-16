import '../styles/Cart.css'
import {useState} from 'react'
function Cart ({cart, updateCart})
  {
  
    const [isOpen, setIsOpen] = useState (false);
     
    const total = cart.reduce ((acc, plant) => acc + (plant.price * plant.amount), 0);
    const panier = cart.length > 0 ? cart.map (
      (cat) => 
      <li> {cat.name} {cat.price} * {cat.amount} 
      </li> 
      ) 
      : <h3> votre panier est vide </h3>;
     


    return ( isOpen ?

      <div className = "lmj-cart">
      <button  className = "lmj-cart-toggle-button" onClick = { ()=> setIsOpen (false)}> Fermer </button>
      <h2> Panier </h2>
      <ul>
      {panier}

      </ul>
      
     <h3> Total: {total} </h3>

      <a className="vider" onClick = {()=> updateCart ([])}> vider le panier </a>

     
  </div>
  :  
  <div className = "lmj-cart-closed"> 
     <a className = "ouvrir" onClick = {()=> setIsOpen (true)}> Ouvrir le panier </a>
  </div>
      );
  }
  export default Cart;
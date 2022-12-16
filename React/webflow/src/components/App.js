import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Category from './Category';
import Footer from './Footer';
import {useState, useEffect} from 'react'
import './App.css'
import '../styles/Layout.css'

function App() {
  
const savedCart = localStorage.getItem ("panier");
const [cart, updateCart] = useState (savedCart ? JSON.parse (savedCart) : []);
const [category, setCategory] = useState ("all");


useEffect (() =>{
     localStorage.setItem ("panier", JSON.stringify (cart));

},[])


  return (
    <div> 
    <Banner />
    <Category  category = {category} setCategory = {setCategory}/> 
     <div className ="lmj-layout-inner">
     <Cart  cart ={cart} updateCart={updateCart}/>
     <ShoppingList cart={cart} updateCart={updateCart}  category = {category} setCategory = {setCategory}/> 
     </div>
     <Footer />
      </div>
      );
}

export default App;

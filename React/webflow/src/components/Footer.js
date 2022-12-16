import {useState, useEffect} from 'react'
import '../styles/Footer.css'

function Footer ()
{
	const [inputValue, setInputValue] = useState ("saisissez votre adresse email");



function handleOnChange (e)
{
	setInputValue (e.target.value);
}

function handleOnBlur ()
{
 
	if (!inputValue.includes ('@'))
	{
		alert ("ce caractere ne contient pas le caractere @");
	
		
	}

    
	
	
}

useEffect (() =>{
     return () => 
          console.log ("the footer has been removed");

});
 
return (<footer className ='lmj-footer'>
	<div className ='lmj-footer-elem'>
	Pour les passionné·e·s de plantes 🌿🌱🌵
	</div>
    
    <div className ='lmj-footer-elem'>
    <input className ="lmj-footer-field" type= "text"  value ={inputValue}  onBlur ={handleOnBlur} onChange ={handleOnChange} />
    <a  href="www.google.com" className="lmj-footer-je-minscris"> je m'inscris </a>                                                                                             
    </div>
    </footer>
   );

}

export default Footer;
const productCart = document.getElementById("productCart");
const shoppingCart = document.getElementById("shoppingCart");
const panierRetour = document.getElementById("panier-retour");
const cartContenu = document.getElementById("cartContenu");
const commander = document.getElementById("commander");
const calque = document.getElementById("calque");
const body = document.getElementsByTagName("body");
const retourLink = document.getElementById("retour-link");

shoppingCart.addEventListener('click', ()=>{

	
	
	productCart.style.width = "90%";
	calque.style.display= "block";
	body[0].style.overflow= "hidden";
	setTimeout (()=>{
		panierRetour.style.display="block";
		
	}, 750);

	setTimeout (()=>{
		cartContenu.style.display="block";
	}, 850);

	setTimeout (()=>{
	
		commander.style.display="block";
	}, 950);
	isClick4 = true;


});

retourLink.addEventListener('click', ()=>{
	productCart.style.width = "0%";
	calque.style.display= "none";
	body[0].style.overflow= "auto";
	setTimeout (()=>{
		panierRetour.style.display="none";
		cartContenu.style.display="none";
		commander.style.display="none";
	}, 150);


})
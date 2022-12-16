const realHeader = document.getElementById("real-header");
const headerBand = document.getElementById("header-band");
const dropDownLivraison = document.getElementById("dropDown-livraison");
const dropDownRembourse = document.getElementById("dropDown-rembourse");
const dropDownSupport = document.getElementById("dropDown-support");
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");
const sousDiv1 = document.getElementById("sousDiv1");
const sousDiv2 = document.getElementById("sousDiv2");
const sousDiv3 = document.getElementById("sousDiv3");
const control1 = document.getElementById("control1");
const control2 = document.getElementById("control2");
const control3 = document.getElementById("control3");
const imageScroll = document.getElementById("imageScroll");
const gridBlock1Calque = document.getElementById("gridBlock1Calque");
const gridBlock2Calque = document.getElementById("gridBlock2Calque");
const gridBlock3Calque = document.getElementById("gridBlock3Calque");
const gridBlock4Calque = document.getElementById("gridBlock4Calque");


const ajouterAuPanier = document.getElementById("ajouter-au-panier");
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");
const icon4 = document.getElementById("icon4");
const cti1 = document.getElementById("CTI-1");



let scrollPos = 0;
let isClick1 = false;
let isClick2 = false;
let isClick3 = false;

window.addEventListener("scroll", () =>{
	if(window.scrollY > 0)
	{

        realHeader.id = "real-header-scroll";
        headerBand.style.position = "fixed";
      
	}
	else
	{
	     realHeader.id = "real-header";
	}
});


dropDownLivraison.addEventListener("click", () => {
	if (isClick1 === false) {
        sousDiv1.style.height = "60px";
		arrow1.style.transform ="rotate(180deg)";
		setTimeout( () => {
		const newP1 = document.createElement('p');
		newP1.id = "newP1";
		newP1.innerText = "Votre commande sera livree gratuitement a votre domicile et sera expediee en 24H/48H";
		sousDiv1.appendChild(newP1);
		isClick1 = true;



	}, 250);
	}
	else {
		sousDiv1.style.height = "0px";
		arrow1.style.transform ="rotate(0deg)";
		setTimeout( () => {

const newP1 = document.getElementById("newP1");
		
		sousDiv1.removeChild(newP1);
		isClick1 = false;
	}, 250);
}

})

dropDownRembourse.addEventListener("click", () => {
	if (isClick2 === false) {
		sousDiv2.style.height = "60px";
		arrow2.style.transform ="rotate(180deg)";
		setTimeout( () => {
		const newP2 = document.createElement('p');
		newP2.id = "newP2";
		newP2.innerText = "Nous proposons le Satisfait ou Remboursé pendant 14 jours après réception des articles !";
		sousDiv2.appendChild(newP2);
		isClick2 = true;

	}, 250);
	}
	else {
		sousDiv2.style.height = "0px";
		arrow2.style.transform ="rotate(0deg)";
		setTimeout( () => {

const newP2 = document.getElementById("newP2");
		
		sousDiv2.removeChild(newP2);
		isClick2 = false;
	}, 250);
}

})

dropDownSupport.addEventListener("click", () => {
	if (isClick3 === false) {
		sousDiv3.style.height = "60px";
		arrow3.style.transform ="rotate(180deg)";
		setTimeout( () => {
		const newP3 = document.createElement('p');
		newP3.id = "newP3";
		newP3.innerText = "Nous proposons le Satisfait ou Remboursé pendant 14 jours après réception des articles !";
		sousDiv3.appendChild(newP3);
		isClick3 = true;

	}, 250);
	}
	else {
		sousDiv3.style.height = "0px";
		arrow3.style.transform ="rotate(0deg)";
		setTimeout( () => {

const newP3 = document.getElementById("newP3");
		
		sousDiv3.removeChild(newP3);
		isClick3 = false;
	}, 250);
}

})

control1.addEventListener('click', ()=> {
	 let id = setInterval(myTimer, 100);

function myTimer() {
	
		if (scrollPos <50)
		{
		scrollPos += 10;
		imageScroll.scrollBy(scrollPos, 0);
	}

		else  {
			clearInterval(id);
		}
		
}
	
});


 const id = setInterval(stickyButton, 5000);
	function stickyButton ()
	{
		setTimeout (()=>{
			ajouterAuPanier.style.padding = "4px";
		}, 1000);

		setTimeout (()=>{
			ajouterAuPanier.style.padding = "0px";
		}, 1500);
	}



	
		gridBlock1Calque.style.opacity = "1";
		gridBlock2Calque.style.opacity = "1";
		gridBlock3Calque.style.opacity = "1";
		gridBlock4Calque.style.opacity = "1";

  
  function myFunction(x) {
  if (x.matches) { // If media query matches
    icon1.id = "icon1M";
    icon2.id = "icon2M";
    icon3.id = "icon3M";
    icon4.id = "icon4M";
  } else {

 
   
setTimeout (()=>{
	
	icon2.style.display = "inline-block";

},985);

setTimeout (()=>{
	
	icon2.style.left = "25%";
},1000);

setTimeout (()=>{
	
	icon1.style.display = "inline-block";
},2485);

setTimeout (()=>{
	
	icon1.style.left = "5%";
},2500);


setTimeout (()=>{
	
	icon3.style.display = "inline-block";
},4485);

setTimeout (()=>{
	
	icon3.style.right = "25%";
},4500);

setTimeout (()=>{
	
	icon4.style.display = "inline-block";
},7485);

setTimeout (()=>{

	icon4.style.right = "5%";
},7500);


  }
}

const x = window.matchMedia("(max-width: 900px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
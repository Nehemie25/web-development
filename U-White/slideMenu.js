
const container = document.getElementById("container");
const slideMenu = document.getElementById("slideMenu");
const menu1 = document.getElementById("menu1");
const gridBlock1 = document.getElementById("grid-block1");


container.addEventListener('click', ()=>{

	slideMenu.style.width = "70%";
	menu1.id ="menu1Clone";
	setTimeout (()=>{

		slideMenu.appendChild(menu1);
		
	}, 750);
});

gridBlock1.addEventListener('click', ()=>{
	slideMenu.style.width = "0%";
    setTimeout (()=>{
    	
		slideMenu.removeChild(menu1);

	}, 150);

});
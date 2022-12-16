// GET DOM Elements
const enjoy = document.getElementById('youEnjoy');
const sports = document.getElementById('sports');
const videoGames = document.getElementById('videoGames');
const music = document.getElementById('music');

const transport = document.getElementsByName('transportMode');
const transportContent = document.getElementById('favouriteT');

const musics = document.getElementById('musicKind');
const musicContent = document.getElementById('favouriteM');

//modify the content of our #music element and assigned to it the value selected by the user in the select form
musicContent.textContent = 'your favourite music is:' + musics.value;



/* change listener to modify the color of the first  child of our #youEnjoy element to white
   if the #sport element is checked and to black if not
*/
sports.addEventListener('change', ($event) => {  

    if($event.target.checked) {                  
		enjoy.children[0].style.color = "white";
	}
	else {
		enjoy.children[0].style.color = "black"
	}
} );

/* change listener to modify the color of the second  child of our #youEnjoy element to white
   if the #videoGames element is checked and to black if not
*/
videoGames.addEventListener('change', ($event) => {    
	if($event.target.checked) {
		enjoy.children[1].style.color = "white";
	}
	else {
		enjoy.children[1].style.color = "black"
	}
} );

/* change listener to modify the color of the third  child of our #youEnjoy element to white
   if the #music element is checked and to black if not
*/
music.addEventListener('change', ($event) => {
	if($event.target.checked) {
		enjoy.children[2].style.color = "white";
	}
	else {
		enjoy.children[2].style.color = "black"
	}
} );

musics.addEventListener('change', ($event) => {  // change listener to modify the content of our #favouriteM element with the value of #musicKind element

	
		musicContent.textContent = 'your favourite music is:' + $event.target.value;

	
});
/* a for loop to allow us to listen to the change event of all the
 elements with the transport name  and add the value of the checked option to our #favouriteT element content
*/
for(let i = 0; i < transport.length; i++) {

	transport[i].addEventListener('change', ($event) => {

		if($event.target.checked) {
			
			transportContent.textContent ='Your favourite transport is:' + $event.target.value;
		}
	});
}
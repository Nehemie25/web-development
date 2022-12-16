//GET DOM elements
const header = document.getElementById('entete');
const blueButton = document.getElementById('blue');
const brownButton = document.getElementById('brown');
const greenButton = document.getElementById('green');
const noneButton = document.getElementById('none');
const main = document.getElementById('principal');
const add = document.getElementById('ajouter');
const remove = document.getElementById('supprimer');

// click listener to remove the .fond-marron and .fond-vert classes and add the .fond-bleu class 
blueButton.addEventListener('click', () => { 
	header.classList.remove('fond-marron', 'fond-vert');
    header.classList.add('fond-bleu'); 
 });

// click listener to remove the .fond-bleu and .fond-vert classes and add the .fond-marron class 
brownButton.addEventListener('click', () => { 
	header.classList.remove('fond-bleu', 'fond-vert'); 
	header.classList.add('fond-marron'); 
});

// click listener to remove the .fond-bleu and .fond-marron classes and add the .fond-vert class 

greenButton.addEventListener('click', () => { 
	header.classList.remove('fond-marron', 'fond-bleu'); 
	header.classList.add('fond-vert'); 
});

// click listener to remove the .fond-bleu, .fond-marron and fond-vert classes

noneButton.addEventListener('click', () => { 
	header.classList.remove('fond-marron','fond-bleu','fond-vert'); 
});

// click listener to add a new post

ajouter.addEventListener('click', () => { main.appendChild(createNewPost()); });

// click listener to remove a the last post

supprimer.addEventListener('click', () => { main.removeChild(removePost()); });

// function to add a new post
const createNewPost = () => {
	const article = document.createElement('article');
	const title = document.createElement('h5');
	const paragraph = document.createElement('p');
	title.textContent = 'A Blog Post';
	paragraph.textContent = 'Hide at bottom of staircase to trip human. Ask for petting. Roll on the floor purring your whiskers off. Trip on catnip nap all day, eat too much then proceed to regurgitate all over living room carpet while humans eat dinner nya nya nyan. Attack the child groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked playing with balls of wool.';
	article.appendChild(title);
	article.appendChild(paragraph);
	return article;
}
 // function to remove the last post
const removePost = () => { 
	const numberOfChildren = main.childElementCount;
	if(numberOfChildren > 1) {

	const articles = document.getElementsByTagName('article');
	const lastArticles = articles[numberOfChildren - 1];
	return lastArticles;
    }
    else {
    	return 0;
    }

}



const newLink1 = document.createElement('a');
newLink1.id = "link4";
newLink1.href = link1.href;
newLink1.innerText = link1.innerText;
baniereScroll.appendChild(newLink1);
baniereScroll.removeChild(link1);
baniereScroll.scrollBy(-2000, 0);


clearInterval(id);
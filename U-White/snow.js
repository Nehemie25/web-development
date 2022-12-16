

const flakeNumber = Math.floor(Math.random() * (500 - 100) ) + 100; // choose randomly the number of snow flakes between 10 and 100 in order to simulate the real snow fall

 for(let i = 0; i < flakeNumber; i++) {  // define for each snow flake its size, initial and final position and therefore the trajectoty 

    const snowSize = Math.floor(Math.random() * (25 - 15) ) + 10; // select randomly the size of each snow flake
    let leftStart = Math.floor(Math.random() * (1500 -1 ) ) + 1; // select randomly the left start position : the top start position will be o since the snow flake animation begins at the top of the page
    const delay = Math.floor(Math.random() * (10 - 1) ) + 1; // select randomly the delay of each snow flake animation 
    const duration = Math.floor(Math.random() * (30 - 20) ) + 20; // select randomly the duration of each snow flake animation
    let topEnd = document.getElementById("footer-last-row").offsetTop;// final  top position from the origin 
    let leftEnd = Math.floor(Math.random() * (1500 - 1) ) + 1; // final  left position from the origin 
    const newImage = document.createElement('img');  // create a a new image representing the snow flake

    const x = window.matchMedia("(max-width:900px)");  // x stores the viewport of our device
    myFunction(x);      // Call listener function at run time
    x.addListener(myFunction);  // Attach listener function on state changes

    function myFunction(x)  
    {
      if (x.matches)
      {
         leftStart = Math.floor(Math.random() * (350 -1 ) ) + 1; // select randomly the left start position : the top start position will be o since the snow flake animation begins at the top of the page
         leftEnd = Math.floor(Math.random() * (350 - 1) ) + 1; // final  left position from the origin 
      }
    }


   newImage.src = "images/snow.png"; // location of the image file 
   newImage.id = "snow"; // add an id property
   newImage.width = snowSize; // define the width of the image
   newImage.height = snowSize; // define the height of the image 
   newImage.style.setProperty('--leftstart', leftStart + 'px'); //  set the value of the css leftstart variable to our JS leftStart variable
   newImage.style.setProperty('--topstart', '0px'); //  set the value of the css topstart variable to 0
   newImage.style.setProperty('--leftend', leftEnd + 'px'); //  set the value of the css leftend variable to our JS finalLeft variable
   newImage.style.setProperty('--topend', topEnd + 'px'); //  set the value of the css topend variable to our JS finalTop variable
   newImage.style.setProperty('animation-delay', - delay + "s"); //  set the value of the css delay variable to our JS delay variable
   newImage.style.setProperty('animation-duration', duration + "s"); //  set the value of the css duration variable to our JS duration variable
   
   document.body.appendChild(newImage); // add the new create image to our page
   




}  // repeat this process for all snowflakes


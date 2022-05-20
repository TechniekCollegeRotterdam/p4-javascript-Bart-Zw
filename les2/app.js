//Oefening angry-birds
//. is voor class 
//# is voor id
//niks is voor html-tags
//de img ophalen uit html

const bird = document.querySelector(".bird")
let px = 0;

bird.addEventListener("click", function(){
   // voeg styeling toe aan de bird class als property
   px = px + 50;
   //left 50 px
    bird.style.left = px + "px";
   

})

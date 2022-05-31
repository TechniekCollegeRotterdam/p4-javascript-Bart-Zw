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


window.addEventListener("keydown", function(e){
    console.log(e.key);

    if(e.key =="ArrowRight"){
        px = px + 50;
        bird.style.left = px + "px";
        bird.src = "img/b-right.svg";

    }
    if(e.key =="ArrowLeft"){
        px = px - 50;
        bird.style.left = px + "px";
        bird.src = "img/b-left.svg";

    }

    if(e.key =="ArrowUp"){
        px = px + 50;
        bird.style.bottom = px + "px";
        bird.src = "img/b-up.svg";

    }
    
    if(e.key =="ArrowDown"){
        px = px - 50;
        bird.style.bottom = px + "px";
        bird.src = "img/b-down.svg";

    }

})

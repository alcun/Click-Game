/* on click adds animate to class and then removes it */
var character =
document.getElementById("character");
var block = document.getElementById("block");
function jump() {
  if(character.classList!= "animate"){
  character.classList.add("animate")
  setTimeout(function(){
    character.classList.remove("animate");
    },500);
}
}



/* checks top poistion of character and left position of block values to see if character is higher than block as it reachs*/

var checkDead = setInterval(function(){
  var characterTop =
  parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft =
  parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft < 20 && blockLeft > 0 && characterTop>=130){
    block.style.animation= "none"
    block.style.display= "none"

    alert("You Lose.")
  }
},10);



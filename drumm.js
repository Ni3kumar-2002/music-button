var number = document.querySelectorAll(".drum").length; 

for (var  i =0 ; i< number ; i++) {
    
    document.querySelectorAll("button")[i].addEventListener("click", listener);
}

function listener() {
  this.style.color= "white";
  var value = this.innerHTML;
  buttonanimation(value);

  makesound(value);
}


document.addEventListener("keypress", function(event) {
    console.log(event)
    makesound(event.key);
});


function makesound(value) {
    switch(value){
            
            case 'w':
                var luci = new Audio("sounds/lucifer_theme_ringto.mp3");
                luci.play();
                break;
        
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
          
              case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
          
              case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
          
              case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
          
              case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
          
              case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
          
          
              default: console.log(key);
              
                    
    }
        

}

function buttonanimation(currentkey) {
  var activebutton = document.querySelector("."+ currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function() {
    activebutton.classList.remove("pressed");
  }, 1000);
}

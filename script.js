const dino = document.querySelector('.dino');
const background = document.quaryselector("background");
let isjumping = false;

function addEventListener(event); {
if (event,keycode === 32) {
    if (!isjumping) {
        jump();
      }
   }
}
function jump() {
    let position = 0;

    isjumping = true

   let upinterval= setInterval(()=> {
        if (position >= 150) {
            clearInterval(upinterval)
       //descendo
      let downInterval= setInterval(() => {
            if (position <= 0) {
               clearInterval(downinterval);
               isjumping = false;
            } else {
               position -= 20;
               dino.style.botton = position + 'px';
            }
         }, 20);
    } else {
        //subindo
        position += 20;
        dino.style.botton = position + 'px';
     }     
   }, 20);


function createCactus() {
 const cactus= document.createElement("div");
 let cactusPosition = 1000;
 let randomtime = Math.random() = 6000;

 cactus.classList.add('cactus');
 cactus.style.left = 1000 +'px';
 background.appendchild(cactus);

let interval = setInterval(() => {
  if (cactusposition < -60) {
    clearInterval(leftinterval);
    background.removechild(cactus);
  } else if (cactusPosition > 0 && cactusPosition < 60  && position < 60) {
     // Game Over
     clearInterval(leftinterval);
     document.body.innerHTML = <h1 class="game-over">Fim de jogo</h1>;
  } else {
     cactusposition -= 10;
     cactus.style.left = cactusPosition + 'px'
  }
 },20);
 setTimeout(createCactus,randomtime);
}

createCactus();
document.addEventListener('keyup',handleKeyUp)}

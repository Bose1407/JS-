const btn = document.getElementById("mybtn");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown",(event)=>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            
            case"ArrowUp":
              y-=moveAmount;
              break;

              case"ArrowDown":
              y+=moveAmount;
              break;

              case"ArrowLeft":
              x-=moveAmount;
              break;

              case"ArrowRight":
              x+=moveAmount;
              break;

        }
        btn.style.marginTop=`${y}px`;
        btn.style.marginLeft=`${x}px`;
    }

    
});
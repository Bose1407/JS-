const mybtn=document.getElementById("emoji");

mybtn.addEventListener("mouseover",(event)=>{
    event.target.style.backgroundColor="green";
    event.target.textContent="click here😂";

})
mybtn.addEventListener("mouseout",(event)=>{
    event.target.style.backgroundColor="red";
    event.target.textContent="Opps!😥";

})

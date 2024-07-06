/*// Select the <div> with id "fruits"
const fruitsDiv = document.getElementById("fruits");

// Get the children of the <div> (which includes <ul> and <h1>)
const children = fruitsDiv.children;

// Loop through each child element and apply the style
const arr = Array.from(children);
arr.forEach((ele)=>{
    ele.style.backgroundColor="red";
})

const fruitsDiv = document.querySelector("ul");
const parent = fruitsDiv.parentElement;
parent.style.backgroundColor="blue";

let paragraph = document.createElement("p");
paragraph.textContent="Madhu";

let existing_p = document.getElementById("para");
existing_p.appendChild(paragraph);

existing_p.removeChild(paragraph);


let new_ele = document.createElement("h2");
new_ele.textContent="This is Box";

let box = document.getElementById("box1");
document.body.insertBefore(new_ele,box);

*/

const list_ele = document.getElementsByTagName("li");
const firstele = list_ele.firstElementChild;
firstele.style.backgroundColor="Blue";
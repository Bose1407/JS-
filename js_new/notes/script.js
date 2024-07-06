function addNote(){
    let text = document.getElementById("text").value;
    let paragraph = document.createElement("h4");
    paragraph.textContent=text;
    let notes = document.getElementById("notes");
    notes.appendChild(paragraph);
    document.getElementById("text").value=" ";
    
}
let textC = document.getElementById("display");
function appendtodisp(input){
    textC.value += input;

}
function calc(){
    try{
        let res=eval(textC.value);
        textC.value=res;
    }
    catch{
        textC.value="Syntax Error!!!";
    }
    
}
function clearit(){
    textC.value="";
}
let a=window.prompt("enter A value:");
let b = window.prompt("enter B value:");
try{
    if(isNaN(a) || isNaN(b)){
        throw new Error("Enter valid no");
    }
    let c=a/b;
    console.log(c);
}
catch(error){
    console.error(error.message);
}

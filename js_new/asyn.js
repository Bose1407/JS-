function something(callback){
    setTimeout(()=>{console.log("Task1");callback()},3000);

}
function tasks(){
    console.log("Task3");
    console.log("Task4");
    console.log("Task5");
    console.log("Task2");
}

something(tasks);
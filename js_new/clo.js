function out(){
    let c=0;
    function inc(){
        c++;
        console.log(`${c}`);
    }
    return{inc};
}
let obj=out();
obj.inc();
obj.inc();
obj.inc();
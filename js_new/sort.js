fruits=[1,56,3,76,35,7,8,9];

console.log(fruits.sort((a,b)=>a-b));

//This algorithm used to swap numbers or elements...

fruits=["apple","banana","papaya","jackfruit","mango"];

function swap(fruits){
    for(let i=fruits.length - 1;i>0;i--){
        let random = Math.floor(Math.random()*(i+1));
        console.log(random);
        [fruits[i],fruits[random]] = [fruits[random],fruits[i]];
    }
}
let res = swap(fruits);

console.log(fruits);


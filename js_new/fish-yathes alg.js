//This algorithm used to swap numbers or elements...

fruits=["apple","banana","papaya","jackfruit","mango"];

function swap(fruits){
    for(let i=fruits.length()-1;i>0;i--){
        let random = Math.floor(Math.random()*(i+1));
        [fruits[i],fruits[random]] = [fruits[random],fruits[i]];
    }
}
let res = swap();

console.log(fruits);
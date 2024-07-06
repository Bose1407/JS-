student=[{name:"Bose",age: 9},
    {name:"NJ",age:87},
    {name:"NJ12",age:76},
    {name:"NJ98",age:8}
];
const max_age = student.reduce((max,stu)=>stu.age > max.age ? stu:max);
console.log(max_age);
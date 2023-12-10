const numbers=[14,2,34,4,5];
// for(let number of numbers){
//     console.log(number);
// }

// const object1 ={
//     name: "Prottoy Biswas",
//     age: 23,
//     id:221
// }
// for(let ob in object1){
//    console.log(`${ob}: ${object1[ob]}`);
// }

const newNumbers=[];
numbers.forEach((x)=>{
    newNumbers.push(x*x);
});
console.log(newNumbers);

const NewNumbers=numbers.map((y)=>  y*y*y);
    
console.log(NewNumbers);

const filteredNumbers=numbers.filter((z)=> z>10);
console.log(filteredNumbers);


let Age=parseInt(prompt("Enter the age you want to compare :"))

const studentInfo =[
    {
        name : "Prottoy",
        age:23,
        id:221
    },
    {
        name : "Kopil",
        age:29,
        id:222
    },
    {
        name : "Rakib",
        age:24,
        id:223
    }

];
console.log(studentInfo.age);

const studentName=studentInfo.filter(function(x){
    return x.age>Age;
}).map(function(y){
    return y.name ;
});
console.log(studentName);
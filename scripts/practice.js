let myArray = [1,2,3];
let theSameArray = new Array(1,2,3);

//Change the value of the array element
myArray[1] = 30;

//You can mix and match data types in arrays
myArray=["string",10,false];

console.log(myArray);
console.log(theSameArray);

/*
You must define an array with the following 3 variables:
    1.A string which has the value of "What is the meaning of life"
    2.A number which has the value of 42
    3.A boolean which has the value of true
*/ 
let arrayExercise=["What is the meaning of life", 42, true];
console.log(arrayExercise);

const numbers = [10,20,30,40,50];
console.table(numbers);

console.log(numbers[2]); //access element at index 2
console.log(numbers.length); //array dimension

const months=["Jan", "Feb", "Mar", "Apr", "May"];
console.table(months);

for(let i=0;i<months.length;i++){
    console.log(months[i]);
}
numbers.push(60,70,80);
numbers.unshift(-10,-20,-30);
console.table(numbers);

months.pop(); //Deletes May
months.shift(); //deletes Jan
months.splice(1,1); //deletes Mar
console.table(months);
/*
let example = "Leo";
example = "Bella";



let example1 = false;
let example2 = true;
let example3 = null;
let example4 = undefined;
let example5 = '';
let example6 = NaN;
let example7 = -5;
let example8 = 0;

console.log(example1);


Array


let example = [3,4,5];
console.log(example.length)

let example1 = ['Dylan', 5, true];

let example2 = example1.map((element) => {
    return element;
})
example2.push(11);

 
console.log(example1);
console.log(example2);



function sayHiNTimes(n){
    for(let i = 0; i < n; i++){
        console.log('hi');
    }
}

sayHiNTimes();

function arrayOfHiNTimes(n){
    const hiArray = [];
    for(let i = 0; i < n; i++){
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes();

let numbers = [4,66,7,89,44,33];

let peopele = [

]


let multiplyNumnbers = numbers.map(number => number * 2);

console.log(multiplyNumnbers);
function getIthItemInLinkedList(head, i) {

    if (i < 0) {
        throw new Error("i can't be negative: " + i);
    }

    var currentPosition = 0;
    var currentNode = head;

    while (currentNode) {

        if (currentPosition === i) {
            // found it!
            return currentNode;
        }

        // move on to the next node
        currentNode = currentNode.next;
        currentPosition++;
    }

    throw new Error("List has fewer than i + 1 (" + (i + 1) + ") nodes");

let filterNumbers = numbers.filter(number => number >= 66);
console.log(filterNumbers);


let reduceNumbers = numbers.reduce((acc,count) => acc + count);
console.log(reduceNumbers);



    function square(x){
       return x * x;
    }
  
    console.log(square(4));

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

  var city = "paris";
  var capital = capitalize(city);
  console.log(capital);


// Is even
function isEven(x){
    return x % 2 === 0;
}
console.log(isEven(16));



//Factorial 
function factorial(num){
// define a result variable 
let result = 1; 
// calculate factorial and store value in result
for(let i = 2; i <= num; i++){
    result *= i;
}
//return the result variable
    return result;
}
console.log(factorial(0)); // example 4 x 4 x 3 x 2 x 1

function kebabToSnake(str){
    //replace all '-' with "_"s
    let newStr = str.replace(/-/g, "_");
    return newStr;

}
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));

function nextInLine(arr, item) {
    // Your code here
    arr.push(item)

    return arr.shift();  // Change this line
}

// Test Setup
var testArr = [1, 2, 3, 4, 5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

*/

// function sing(){

//     console.log('twinkle', 'twinkle...')
//     console.log('how i wonder....')
 
// }
// sing();

// setInterval(sing, 1000)


//Factorial 
// function factorial(num) {
//     // define a result variable 
//     let result = 1;
//     // calculate factorial and store value in result
//     for (let i = 2; i <= num; i++) {
//         result *= i;
//     }
//     //return the result variable
//     return result;
// }
// console.log(factorial(5));


// let colors = ["red","orange","yellow","blue","black"];
// colors.push("light-blue");
// console.log(colors);
// colors.pop()
// console.log(colors)
// colors.shift();
// console.log(colors)
// console.log(colors.indexOf("green"));


// let fruits = ["apple","banana", "oranges","pinapple", "peach"];
// let newFruits = fruits.slice(1,4)
// console.log(newFruits);
// newFruits.push("mango");
// console.log(newFruits);
// newFruits.push(55);
// console.log(newFruits);
// console.log(newFruits.indexOf(44));

// let nums = [1,2,3, "a", "b", 445, 34];

// let letters = nums.slice(3,5);
// console.log(letters);



// let todos = ["Buy new Tesla"];

// let input = prompt("What would you like todo?")

// while(input !== "quit"){
// //handle input 
//     if (input === "list") {
//         console.log(todos)
//     } else if (input === "new") {
//         //ask for new tood
//     let newTodo = prompt("Enter new todo")
//         todos.push(newTodo)
//     }
//     //ask again for the new input
//     input = prompt("What would you like todo?")

// }
// console.log("OK, YOU QUIT THE APP")



// let colors = ["red", "orange", "yellow", "green"];
// colors.push("blue")
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);

// }
// const newColros = colors.forEach(function(color){
//     console.log(color);
// });

/* Print reverse

printReverse([1,2,3,4])
4
3
2
1

printReverse(['a','b','c']);

// "C"
// "b"
// "A"
*/
// function printReverse(num){
//     for(let i = num.length - 1; i >= 0; i--)
//     console.log(num[i])
// }
// printReverse([3,6,2,5]);

// // isUnniform() ***

// function isUniform(arr){
//     let first = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] !== first){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isUniform([1,1,1,1]));

// console.log(isUniform([1, 1, 12, 1]));

// console.log(isUniform([1, 1, 1, 3]));



///Sum Array

// function sumArray(arr){
//     //need empty arry to store values
//     // need a loop to iterate 
//   let total = 0;
//   arr.forEach(element => {
//       total += element;
//   });
//   return total;

// }
// console.log(sumArray([1,2,3,4]));


///------ Max number

// function max(arr){
// // create a variable to store maxium number
//         let max = arr[0];
//         // loop to itereate through array
//             for(let i = 0; i < arr.length; i++){
//             // if compare 
//             if(arr[i] > max){
//                 max = arr[i]
//                 }
//             }
//             // return value
//         return max;

//         }
// console.log(max([1,2,3,4]));

// let posts = [
//     {
//         title: "Cats are mediocre",
//         author: "Leo",
//         comments: ["Awesome post", "terrible post"]
//     },
//     {
//         title: "Cats are actually awesome",
//         author: "Cat Luvr",
//         comments: ["<3", "Go to hell I hate you"]
//     }
// ];

// console.log(posts[0].comments[0]);

// let someObject = {
//     friends: [
//         {name: "Malfoy"},
//         {name: "Crabbe"},
//         {name: "Goyle"}
//     ],
//     color: "baby blue",
//     isEvil: true
// }

// console.log(someObject.friends[0].name)

// console.log(someObject)

// let movies = [
   
//     {
//         title: "In Burges",
//         hasWatched: true, 
//         rating: 5
//     },
//     {
//         title: "Frozen",
//         hasWatched: false,
//         rating: 4.5
//     }

// ]
// console.log(movies);

// movies.forEach(function(movie){
//     let results = "You Have ";
//     if(movie.hasWatched){
//         results += "Watched ";
//     }else{
//         results += "not seen ";
//     }
//     results += "\"" + movie.title + "\" - ";
//     results += movie.rating + " stars"
//     console.log(results)

// })


// function badAssMovies(){
// movies.forEach(function(movie){
//     //variable to store text
//     let results = "You have ";
//     if(movie.hasWatched){
//         results += "watched "
//     }else{
//         results += "not seen "
//     }
//         results += "\"" + movie.title + "\" - ";
//         results += movie.rating + " stars"
//         console.log(results)
// })
// }
// badAssMovies();

// let firstName = prompt("What is your name? ");
// let lastName = prompt("What is your last name? ");
// let userAge = prompt("What is your age? ");
// console.log("Your full name is " + firstName + " " + lastName );
// console.log("You are " + userAge + " yrs old!");


// let yourAge = prompt("How old are you ? ");
// console.log( "You are roughly " + yourAge + " " + Math.floor(yourAge * 365.25) + " days old");


//if age is negative
// print error message 
// create a prompt with user age
// let userAge = prompt("How old are you");
// if (userAge < 0){
//     console.log("You are just a baby!!")
// }if(userAge === 21 ){
//     console.log("Happy 21st Birthday, Have a drink on us!")
// }if(userAge % 2 !== 0){
//     console.log("You age is odd!")
// }if(userAge % Math.sqrt(userAge) === 0){
//     console.log("Your age is a perfect square!")
// }

//if age is 21`
//print "happy 21st birthday!!"

// if age is odd
// print "your age is odd!"

//super bonus if age is a perfec squre print perfect squre


///-------------------


//create secret number

// let secretNumber = 4;
// //ask user for guess
// let strinGuess = prompt("Guess a number");
// //check if guess is right
// // Variable to convert string to number
// let guess = Number(strinGuess);

// if(guess === secretNumber){
//     alert("You guessed the secret number!!!")
// }else if(guess > secretNumber){
//     alert("You guessed to high!!")
  
// }else{
//     alert("You guessed to low!!")
// }

// let str = "hello-world";

// let count = 0;

// while(count < str.length){
// console.log(str[count])
// count++
// }

// let num = 1;
// while(num <= 10){
//     console.log(num)
//     num += 2;
// }

// let nums = 1;

// while(num <= 20){
//     if(num % 4 === 0){
//     console.log(num)
//     }
//   num++;
// }

//print all numbers between -10 and 19

// varible start at -10 
// let num = -10;

// while loop to count 
// while(num <= 20){
//     console.log(num);
//     num++; // counter
// }

/*-------------------------------------*/
// print all even numbers between 10 and 40
// let even = 10;

// while(even <= 40){
//     if(even % 2 === 0){
//         console.log(even)
//     }
//     even+=1;
// }


// print all odd numbers between 300 and 333

// let odd = 300;

// while(odd <= 333){
//     if(odd % 2 !== 0){
//         console.log(odd)
//     }
    
//  odd+=1
// }




// print all numbers divisible by 5 and 3 between 5 and 50 

// let div = 5;

// while(div <= 50){
//     if(div % 3 === 0 && div % 5 === 0){
//         console.log(div);
//     }
//     div+=1;
// }


// let answer = prompt("Are we there yet?");
// //create a loop to repeat the are we there yet question
// while(answer !== "yes" && answer !== "yeah"){
//    let answer = prompt("Are we there yet?")
// }
// alert("Yay, We made it!!!")

//version 2

// let answer = prompt("Are we there yet?");

// while(answer.indexOf("yes") === -1) {
//     let answer = prompt("Are we there yet?");
// }
// alert("YAY, WE MADE IT!!")


// let str = "Leo";

// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }

// let strs = "leo";
// let count = 0;

// while(count < strs.length){
//     console.log(str[count])
//     count++;
// }


// print all numbers between -10 and 19

// creat a variable to start the count
// for loop 
for(let count = -10; count < 19; count++){
    console.log(count);
}

// print all even numbers between 10 and 40

for(let even = 10; even < 40; even++){
    // if statement for the condition
    if(even % 2 === 0){
        console.log(even);
    }
}

//print all odd numbers between 300 and 333
for(let odd = 300; odd < 333; odd++){
    if(odd % 2 !== 0){
        console.log(odd);
    }
}

// print all numbers devisible by 5 and 3 between 5 and 50 

for(let modulo = 5; modulo < 50; modulo++){
    if(modulo % 3 === 0 && modulo % 5 === 0){
        console.log(modulo)
    }
}
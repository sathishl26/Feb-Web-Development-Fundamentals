// declaration of function
function sum(num1,num2){            //arguments
    let sumOfResult = num1 + num2
    // console.log(sumOfResult)
    return sumOfResult
}

function subtract(){
    let subtractOfResult = 5-2
    console.log(subtractOfResult)
}

function multiply(){
    let productOfResult = 5 * 2
    console.log(productOfResult)
}

function divide (num1, num2){
    let divisionResult = num1/num2
    return divisionResult
}
// calling the function
let result = sum(2,3);
console.log("Result from function is" , result);
subtract();
multiply();

let div = divide(15,2)
console.log(div)

//Arrow function
const multiply1 = (num1,num2) => {
    productOfResult = num1*num2
    return productOfResult
}

let res = multiply1(1,2);
console.log(res);

// function add(n){
//     for(let i=0; i<=n; i++){

//     }
//     console.log (res1)
// }

// add(10)


 
// Assignment - 16.03.2022
//  Create function for 4 arthimetic operation 
// then create a function which takes a and b parameters and return value of (a+b)2 using above mentioned functions.

// Assignment - 17.03.2022
// Write a function to print first n fibonaci numbers
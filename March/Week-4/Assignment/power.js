// Question 3:
// Create a function which returns power of number for provided exponential value using for loop.
// The function will take two input, number and power.
// Return: number ^ power.

function input(n,p){
    let res = 1
    while (p !=0) {
         res = res*n 
         --p      
    }
    return(res)
}

let r = input(2,10)
console.log(r)
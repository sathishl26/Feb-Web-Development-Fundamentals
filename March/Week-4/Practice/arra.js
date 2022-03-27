//Write a function to check whether the number in the array is even or odd

function checkEven (arr){
    let result = []
    for (var i = 0; i<=4; i++){
        if (arr[i]%2==0)
        result.push("even")
        else
        result.push("odd")
    }
    return(result)
}

checkEven ([1,2,4,5,8])
let r = result
console.log(r)


// Question 1:
// create a function which takes an array as input and returns the maximum number from an array of 5 elements.

// Question 2:
// create a function which takes an array of marks as input and returns the average of the 
// numbers.
// Also, console log the Grade according to the average
// <60	F
// <70	D
// <80	C
// <90 	B
// <100	A


// Question 3:
// Create a function which returns power of number for provided exponential value using for loop.
// The function will take two input, number and power.
// Return: number ^ power.
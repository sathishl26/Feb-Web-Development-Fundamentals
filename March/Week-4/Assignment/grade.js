// Question 2:
// create a function which takes an array of marks as input and returns the average of the 
// numbers.
// Also, console log the Grade according to the average
// <60	F
// <70	D
// <80	C
// <90 	B
// <100	A

function marks(m1,m2,m3,m4,m5){
    var average = (m1+m2+m3+m4+m5)/5
    if (average <60) {
        grade = 'E'
        return("Your average mark is " + average + " & grade is " + grade)}
    else if (average <70){
        grade = 'D'
        return("Your average mark is " + average + " & grade is " + grade)
    }
    else if (average <80){
        grade = 'C'
        return("Your average mark is " + average + " & grade is " + grade)
    }
    else if (average <90){
        grade = 'B'
        return("Your average mark is " + average + " & grade is " + grade)
    }    
    else (average <100)
    grade = 'A'
    return("Your average mark is " + average + " & grade is " + grade)
}

let result = marks(90,85,60,70,55)
console.log(result)
// this program allows the user to grade the score obtained in a test 

let input=Number(prompt("Enter Student grade")) // prompts the user to enter student grade

function grading(mark) {
    if (mark <0 || mark>100){
        return "Invalid grade"             // checks if the number is between 0 and 100 
    }
    if (mark > 79){                        // the score between 0-100  is assigned a grade A- E
        return "A";
    }
    else if (mark>=60 && mark<=79) {
        return "B";
    }
    else if(mark>=49 && mark<=59) {
        return "C";
    }
    else if(mark>=40 && mark<=49 ) {
        return "D";
    }
    else {
        return "E";
    }

}

// testing different scores to check whether the program works 
console.log(grading(65))
console.log(grading(55))
console.log(grading(45))
console.log(grading(35))
console.log(grading(10))
console.log(grading(100))

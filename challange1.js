function grading(mark) {
    if (mark > 79){
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
let mark= Number(prompt("Enter Student grade"));
if (mark=>0 && mark<=100){
    console.log(" grade is: ${grading(mark)}")
}
else{
    console.log ("Invalid")
}

console.log(grading(65))
console.log(grading(55))
console.log(grading(45))
console.log(grading(35))
console.log(grading(10))
console.log(grading(100))

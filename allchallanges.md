# code challange 1
create a function named grading that contains argument named (mark)
then used the if function to ensure the argument was gradded 
function grading(mark) {
   # grading marks >79
    if (mark > 79){
        return "A";
    }
       # grading marks between 60 and 79 with them inclusive

    else if (mark>=60 && mark<=79) {
        return "B";
    }
           # grading marks between 49 and 59 with them inclusive

    else if(mark>=49 && mark<=59) {
        return "C";
    }
           # grading marks between 40 and 49 with them inclusive

    else if(mark>=40 && mark<=49 ) {
        return "D";
    }
           # grading marks less than 40 

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

This code asks the user to enter a student's grade and converts it to a number. If the number is between 0 and 100, it calculates the grade using the grading function and displays it. If the input is invalid (not a number or outside the range), it shows "Invalid."


console.log(grading(65)) expected output "B
console.log(grading(55)) expected output "C"
console.log(grading(45)) expected output "D"
console.log(grading(35)) expected output "E"
console.log(grading(10)) expected output "E"


# code challange 2
create a function named Checkspeed that contains argument named (speed)

function Checkspeed(speed){
    if (speed<=70) {   - speed should be equal or less than 70
        return "OK"; then it prints OK
    }
    else if (speed>70){  if speed is greater than 70 then a certain operation is performed 

       let x=((speed-70)/5) to get the excess speed speed - speed limit of 70 ; to get points it is divided by 5

        if (x>12){
            return"License suspended"; if total points obtained after operation is greater than 12 then print license suspended 
        }
        else{
            return `Points: ${x}`; if the points are less than 12 print those points 
        }
        
        
    }
}
console.log(Checkspeed(100))- prints 6
console.log(Checkspeed(70))- print OK
console.log(Checkspeed(130))- print licence suspended 

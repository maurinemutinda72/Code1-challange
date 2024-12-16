// this program prompts the user to input speed
// 70 is the speed limit - if the spped is 70 it is regarded as okay
// suspension for speed more than 70
// any number greater than 0 and less and equal to 70 are valid 


let userinput= parseInt(prompt("Enter Speed")) // prompts user to enter speed which is passed as interger

function checkSpeed(speed) {
    const speedLimit = 70; // Speed limit
    const demeritInterval = 5; // Interval for each demerit point
    if (isNaN(speed) || speed<0){
        return "Input a valid speed"     // checks if speed is  valid - number greater than 0
    }
       

    // If speed is within the limit
    if (speed <= speedLimit) {
        return "OK";
    }

    // Calculate demerit points
    const points = Math.floor((speed - speedLimit) / demeritInterval);  // calculates the demerit points by taking the speed above speed limit dividing by 5 

    // Check for license suspension
    if (points >= 12) {
        return "License suspended";   // points greater or equal to 12 gets the license suspended
    }

    // Return the demerit points
    return `Points: ${points}`;  // returns points less than 12 
}

// Example calls to test the function - calls the function checkspeed and passes speed as argument
console.log(checkSpeed(100)); // Output: Points: 6
console.log(checkSpeed(70));  // Output: OK
console.log(checkSpeed(130)); // Output: License suspended
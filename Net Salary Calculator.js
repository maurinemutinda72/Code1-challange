//  this prgram calculates the gross salary, nhif, nssf and kra 
function NetSalary( basicSalary,benefits){
    const grosSalary= basicSalary+ benefits;
    
   // Function to calculate NHIF Deduction
function calculateNHIF(grossSalary) {
    const nhifRates = [
        { max: 5999, deduction: 150 }, // NHIF deduction for salaries up to 5,999
        { max: 7999, deduction: 300 }, // NHIF deduction for salaries up to 7,999
        { max: 11999, deduction: 400 }, // NHIF deduction for salaries up to 11,999
        { max: 14999, deduction: 500 }, // NHIF deduction for salaries up to 14,999
        { max: 19999, deduction: 600 }, // NHIF deduction for salaries up to 19,999
        { max: 24999, deduction: 750 }, // NHIF deduction for salaries up to 24,999
        { max: 29999, deduction: 850 }, // NHIF deduction for salaries up to 29,999
        { max: 34999, deduction: 900 }, // NHIF deduction for salaries up to 34,999
        { max: 39999, deduction: 950 }, // NHIF deduction for salaries up to 39,999
        { max: 44999, deduction: 1000 }, // NHIF deduction for salaries up to 44,999
        { max: 49999, deduction: 1100 }, // NHIF deduction for salaries up to 49,999
        { max: 59999, deduction: 1200 }, // NHIF deduction for salaries up to 59,999
        { max: 69999, deduction: 1300 }, // NHIF deduction for salaries up to 69,999
        { max: 79999, deduction: 1400 }, // NHIF deduction for salaries up to 79,999
        { max: 89999, deduction: 1500 }, // NHIF deduction for salaries up to 89,999
        { max: 99999, deduction: 1600 }  // NHIF deduction for salaries up to 99,999
    ];

    let nhif = 1700; // Default deduction for salaries above 99,999
    for (let rate of nhifRates) {
        if (grossSalary <= rate.max) { // Find the correct bracket for NHIF deduction
            nhif = rate.deduction;
            break; // Stop the loop once the correct rate is found
        }
    }
    return nhif; // Return the calculated NHIF deduction
}

// Function to calculate PAYE (Tax)
function calculatePAYE(grossSalary) {
    let tax = 0; // Initialize tax to 0
    if (grossSalary > 800000) { // Tax for salaries above 800,000
        tax += (grossSalary - 800000) * 0.35;
        grossSalary = 800000;
    }
    if (grossSalary > 500000) { // Tax for salaries between 500,001 and 800,000
        tax += (grossSalary - 500000) * 0.325;
        grossSalary = 500000;
    }
    if (grossSalary > 32333) { // Tax for salaries between 32,334 and 500,000
        tax += (grossSalary - 32333) * 0.3;
        grossSalary = 32333;
    }
    if (grossSalary > 24000) { // Tax for salaries between 24,001 and 32,333
        tax += (grossSalary - 24000) * 0.25;
        grossSalary = 24000;
    }
    if (grossSalary > 0) { // Tax for salaries up to 24,000
        tax += grossSalary * 0.1;
    }
    return Math.floor(tax); // Return the rounded-down tax value
}

// Function to calculate NSSF Deduction
function calculateNSSF(grossSalary) {
    const tier1Limit = 6000; // Upper limit for Tier 1 contributions
    const tier2Limit = 18000; // Upper limit for Tier 2 contributions
    let nssf = 0; // Initialize NSSF deduction to 0

    if (grossSalary <= tier1Limit) { // NSSF for salaries within Tier 1
        nssf = grossSalary * 0.06;
    } else if (grossSalary <= tier2Limit) { // NSSF for salaries within Tier 2
        nssf = tier1Limit * 0.06 + (grossSalary - tier1Limit) * 0.06;
    } else { // NSSF for salaries exceeding Tier 2 limit
        nssf = tier1Limit * 0.06 + (tier2Limit - tier1Limit) * 0.06;
    }

    return Math.floor(nssf); // Return the rounded-down NSSF value
}

// Main function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits; // Calculate gross salary
    const nhif = calculateNHIF(grossSalary); // Calculate NHIF Deduction
    const nssf = calculateNSSF(grossSalary); // Calculate NSSF Deduction
    const paye = calculatePAYE(grossSalary); // Calculate PAYE Tax

    // Calculate Net Salary
    const netSalary = grossSalary - (nhif + nssf + paye);

    // Return all results as an object
    return {
        basicSalary, // Original basic salary
        benefits, // Additional benefits
        grossSalary, // Total gross salary
        paye, // PAYE Tax deduction
        nhif, // NHIF Deduction
        nssf, // NSSF Deduction
        netSalary // Final net salary
    };
}

// Function to display results in a formatted way
function displayResults(results) {
    console.log("================ Net Salary Breakdown ================");
    console.log(`Basic Salary: KES ${results.basicSalary}`); // Display basic salary
    console.log(`Benefits: KES ${results.benefits}`); // Display benefits
    console.log(`Gross Salary: KES ${results.grossSalary}`); // Display gross salary
    console.log(`PAYE (Tax): KES ${results.paye}`); // Display PAYE tax
    console.log(`NHIF Deduction: KES ${results.nhif}`); // Display NHIF deduction
    console.log(`NSSF Deduction: KES ${results.nssf}`); // Display NSSF deduction
    console.log(`Net Salary: KES ${results.netSalary}`); // Display final net salary
    console.log("=======================================================");
}
// Function to prompt user input
function getUserInput() {
    console.log("Enter Basic Salary and Benefits:"); // Log instruction
    const basicSalary = 50000; // Example basic salary input
    const benefits = 10000; // Example benefits input

    console.log(`Basic Salary: ${basicSalary}`); // Log basic salary input
    console.log(`Benefits: ${benefits}`); // Log benefits input

    const results = calculateNetSalary(Number(basicSalary), Number(benefits)); // Calculate results
    displayResults(results); // Display the calculated results
}

// Run the program
getUserInput(); // Start the user input process

}

   
console.log(NetSalary(1000000, 20000000))

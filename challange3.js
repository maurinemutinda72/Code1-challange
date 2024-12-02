function NetSalary(basicSal,benefits){
    const grosssal=basicSal+ benefits;
    
    let nhif=0;
    const nssf=(grosssal*0.06);
    let ratepay;

    if (grosssal<= 24000){
        ratepay= grosssal*0.1;
    }
    else if (grosssal>=24001 && grosssal<=32333) {
        ratepay= 0.25;
    }
    else if(grosssal>=32334 && grosssal<=500000) {
        ratepay= 0.30;
    }
    else if(grosssal>=500001 && grosssal<=800000 ) {
         ratepay= 0.325;
    }
    else {
        ratepay= 0.325 ;
    }

   
    if (grosssal <= 5999) {
        nhif = 150;
    } else if (grosssal >= 6000 && grosssal <= 7999) {
         nhif = 300;
    } else if (grosssal >= 8000 && grosssal <= 11999) {
        nhif = 400;
    } else if (grosssal >= 12000 && grosssal <= 14999) {
        nhif = 500;
    } else if (grosssal >= 15000 && grosssal <= 19999) {
        nhif = 600;
    } else if (grosssal >= 20000 && grosssal <= 24999) {
        nhif = 750;
    } else if (grosssal >= 25000 && grosssal <= 29999) {
        nhif = 850;
    } else if (grosssal >= 30000 && grosssal <= 34999) {
        nhif = 900;
    } else if (grosssal >= 35000 && grosssal <= 39999) {
        nhif = 950;
    } else if (grosssal >= 40000 && grosssal <= 44999) {
        nhif = 1000;
    } else if (grosssal >= 45000 && grosssal <= 49999) {
        nhif = 1100;
    } else if (grosssal >= 50000 && grosssal <= 59999) {
        nhif = 1200;
    } else if (grosssal >= 60000 && grosssal <= 69999) {
        nhifDeduction = 1300;
    } else if (grosssal >= 70000 && grosssal <= 79999) {
        nhif = 1400;
    } else if (grosssal >= 80000 && grosssal <= 89999) {
        nhifDeduction = 1500;
    } else if (grosssal >= 90000 && grosssal <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    const paye= ratepay*grosssal;
    const netSalary=grosssal-(nhif + nssf+paye );
    return netSalary;
}
   
console.log(NetSalary(1000000, 20000000))

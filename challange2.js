function Checkspeed(speed){
    if (speed<=70) {
        return "OK";
    }
    else if (speed>70){
       let x=((speed-70)/5)
        if (x>=12){
            return"License suspended";
        }
        else{
            return `Points: ${x}`;
        }
        
        
    }
}
console.log(Checkspeed(100))
console.log(Checkspeed(70))
console.log(Checkspeed(130))
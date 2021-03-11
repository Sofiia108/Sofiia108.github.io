let numberN;
let numberM;
let numN;
let numM;

while (true) {
    numberN = prompt("Enter number N", "");
    numN = parseInt(numberN);
    if (numN.toString() === numberN) {
        break;
    }
    else alert("It should be a number, darling!");
}

while (true) {
    numberM = prompt("Enter number M", "");
    numM = parseInt(numberM);
    if (numM.toString() === numberM) {
        break;
    }
    else alert("It should be a number, darling!");
}

const includeEvenNumbers = confirm("Would you like to include even numbers due addition?");

const biggerNum = Math.max(numN,numM);
const smallerNum = Math.min(numN,numM);

let resultSum = 0;

for (var i = smallerNum; i <= biggerNum; i++) {
    if(i % 2 == 0){
        if (includeEvenNumbers){
            resultSum +=i;
        }
        else{
            continue;
        }
    }
    else{
        resultSum += i; 
    }
}

const result = alert(resultSum);
console.log(resultSum);

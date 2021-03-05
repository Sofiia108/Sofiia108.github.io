var numberN;
var numberM;
var numN;
var numM;

while (true) {
    numberN = prompt("Enter number N", "");
    var numN = parseInt(numberN);
    if (numN.toString() === numberN) {
        break;
    }
    else alert("It should be a number, darling!");
}

while (true) {
    numberM = prompt("Enter number M", "");
    var numM = parseInt(numberM);
    if (numM.toString() === numberM) {
        break;
    }
    else alert("It should be a number, darling!");
}

var includeEvenNumbers = confirm("Would you like to include even numbers due addition?");
const isIncludedEvenNumbers = alert(includeEvenNumbers);

var resultSum=0;

for (var i = numN; i <= numM; i++) {
    if (isIncludedEvenNumbers) {
        if (numN % 2 == 0) {
            continue;
        }
    }
    resultSum += i;
}

console.log(resultSum);

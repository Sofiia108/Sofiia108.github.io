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
var isIncludedEvenNumbers = alert(includeEvenNumbers);

var biggerNum = Math.max(numN,numM);
var smallerNum = Math.min(numN,numM);

var resultSum = 0;

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

console.log(resultSum);

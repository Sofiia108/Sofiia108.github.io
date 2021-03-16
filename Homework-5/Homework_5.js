//1
function getRandomArray(length, min, max){

    var min = Math.ceil(min);
    var max = Math.floor(max);

    //Включно з мінімальним та виключаючи максимальне значення:
    //var randomArr = Array.from({length: length}, () => (Math.floor(Math.random() * (max - min)) + min)*length);

    //Включно з мінімальним і максимальним значенням:
    var randomArr = Array.from({length: length}, () => Math.floor(Math.random() * (max - min + 1)) + min);
    return randomArr; 
}


function skipNotIntegers(element, index, target){
    return Number.isInteger(element);
}
//2
function getModa(...numbers){
    
    var modes = [], count = [], i, number, maxIndex = 0;
    var onlyIntegers = numbers.filter(skipNotIntegers);

    for (i = 0; i < onlyIntegers.length; i += 1) {
        number = onlyIntegers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return modes;
}


//3
function getAverage(...numbers){
    var onlyIntegers = numbers.filter(skipNotIntegers);
    var avarage = onlyIntegers.reduce((acc, val) => acc + val, 0) / onlyIntegers.length;
    return avarage;
}


//4
function getMedian(...numbers) {

    var onlyIntegers = numbers.filter(skipNotIntegers);
    var median = 0, numsLen = onlyIntegers.length;
    onlyIntegers.sort();
 
    if (numsLen % 2 === 0) {
        median = (onlyIntegers[numsLen / 2 - 1] + onlyIntegers[numsLen / 2]) / 2;
    }
    else {
        median = onlyIntegers[(numsLen - 1) / 2];
    }
 
    return median;
}


//5
function filterEvenNumbers(...numbers) {
    var onlyEvenNumbers = numbers.filter(x => x % 2 === 0);
    return onlyEvenNumbers;
}


//6
function countPositiveNumbers(...numbers){
    var onlyPositiveNumbers = numbers.filter(x => x > 0);
    var sumOfPositiveNumbers = onlyPositiveNumbers.reduce((acc, val) => acc + val, 0);
    return sumOfPositiveNumbers;
}



//7
function getDividedByFive(...numbers){
    var dividedByFive = numbers.filter(x => x % 5 === 0);
    return dividedByFive;
}


//8
function replaceBadWords(string){

    var strArr = string.toLowerCase().split(' ');
    var badWords = ['fuck','shit'];
    var filtered = [];
    
   
        for(var i = 0; i < strArr.length; i++){
            var newStr = "";
            for(var j = 0; j < badWords.length; j++){
            if (strArr[i].includes(badWords[j])){
                newStr = strArr[i].replace(badWords[j],'****');
                break;
            }
            else {newStr = strArr[i];}
            }
            filtered.push(newStr);
            }
        
    return filtered.join(" ");   
}


//9 
function divideByThree(word){
    var letters = word.toLowerCase().replaceAll(" ","");

    // використовуючи regex: https://regexr.com/
    // return letters.match(/.{1,3}/g)

    var chunks = [];

    for (var i = 0 ; i < letters.length; i += 3) {
        chunks.push(letters.substring(i, i + 3));
    }
    return chunks;
}


//10

var combinationsArr = [];
var usedChars = [];
function generateCombinations(word){

    var i, ch;
    var letters = Array.from(word);

    for (i = 0; i < letters.length; i++) {
        ch = letters.splice(i, 1)[0];
        usedChars.push(ch);
        if (letters.length == 0) {
            combinationsArr.push(usedChars.slice().join(''));
        }   
        generateCombinations(letters);
        letters.splice(i, 0, ch);
        usedChars.pop();
    }

    return combinationsArr
}


var numbers = [1, 2, 3, 4.5, 5.6, 4.5, 4.5, 3, 4, 5, -2, -3, 10];
var string1 = "Fucking holy shit";
var string2 = "Divide  THIS string";
var string3 = "man";


console.log(`Функція 1: ${getRandomArray(3, 2, 6)}
Функція 2: ${getModa(...numbers)}
Функція 3: ${getAverage(...numbers)}
Функція 4: ${getMedian(...numbers)}
Функція 5: ${filterEvenNumbers(...numbers)}
Функція 6: ${countPositiveNumbers(...numbers)}
Функція 7: ${getDividedByFive(...numbers)}
Функція 8: ${replaceBadWords(string1)}
Функція 9: ${divideByThree(string2)}
Функція 10: ${generateCombinations(string3)}`);
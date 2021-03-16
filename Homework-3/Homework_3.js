// 1
function getMaxDigit(number){
    return Math.max(...Array.from(String(number), Number));
}


//2
function getPower(number, power) 
{
    if (power === 0) { return 1 }
    else{ 
        return number * getPower(number, power-1);
    }
}


//3
function formatName(name){
    let result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return result;
}


//4
function getSalaryAfterTax(tax1, tax2, salaryWithoutTax){
    var taxFirst = tax1;
    var taxSecond = tax2;
    var notTaxedSalary = salaryWithoutTax;
    return (notTaxedSalary * (1-((taxFirst+taxSecond)/100))).toFixed(2);
}


//5
function getRandomNumber(number1, number2) {
    let result = (Math.random() * (number2 - number1) + number1).toFixed(0);
    return (result);
}


//6
function countLetter(letter, stringToCheck){
    let character = letter;
    let strToCheck = stringToCheck;
    return strToCheck.split(character).length - 1;
}


//7
function convertCurrency(quantityOfMoney){

    let amountOfMoney = quantityOfMoney;
    if(amountOfMoney.includes("$")){
    return (parseFloat(amountOfMoney)*25).toLocaleString('en-US', {
            style: 'currency',
            currency: 'UAH',
        });
    }

    else if(amountOfMoney.includes("UAH") || amountOfMoney.includes("UAH".toLowerCase())){
        return (parseFloat(amountOfMoney)/25).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }
    else throw new Error (`Sorry, we cannot convert this currency`)
}


//8
function getRandomPassword(passwordLength = 8){
    var lengthOfPassword = passwordLength;
    return Array.from({length: lengthOfPassword}, () => Math.floor(Math.random() * 9)).join('')
}


//9
function deleteCertainCharacter(character, strWithIneligibleLetter){
    let letter = character;
    let stringWithIneligibleLetter = strWithIneligibleLetter
    return stringWithIneligibleLetter.replaceAll(letter,'');
}


//10
function isEqual(anyString) {
    let str = anyString;
    return str === str.split("").reverse().join("")
}


//11
function deleteDuplicateLetter(anyString){
        var str = anyString;
        var unique = '';
        for (var i = 0; i < str.length; i++) {
            if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
                unique += str[i];
            }
        }
        return unique;
}



        console.log(`        Функція №1: ${getMaxDigit(1234567)} 
        Функція №2: ${getPower(2, 5)}
        Функція №3: ${formatName("SOFIa")}
        Функція №4: ${getSalaryAfterTax(18, 1.5, 1000)}
        Функція №5: ${getRandomNumber(3,56)}
        Функція №6: ${countLetter("s","string to check")}
        Функція №7: ${convertCurrency("2500UAH")} або ${convertCurrency("100$")} або ${convertCurrency("2500uah")}
        Функція №8: ${getRandomPassword()} або ${getRandomPassword(12)} 
        Функція №9: ${deleteCertainCharacter('e', "ejjed")}
        Функція №10: ${isEqual("emme")} або ${isEqual("jkkklk")}
        Функція №11: ${deleteDuplicateLetter("amazzing")}`)

    
const ukraine = { tax: 0.195,
                  middleSalary: 1789, 
                  vacancies: 11476 };
const latvia = { tax: 0.25,
                 middleSalary: 1586, 
                 vacancies: 3921 };
const litva = { tax: 0.15, 
                middleSalary: 1509, 
                vacancies: 1114 };


function getMyTaxes(salary){
    return this.tax * salary;
}

function getMiddleTaxes(){
    return this.tax * this.middleSalary;
}

function getTotalTaxes(){

    return this.tax * this.middleSalary * this.vacancies;
}

function getMySalary(country){

    const max = 2000;
    const min = 1500;

    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    const myTaxes = (getMyTaxes.call(country, randomNumber)).toFixed(2);
    const myProfit = (randomNumber - myTaxes).toFixed(2);

    const result = {salary : randomNumber,
                    taxes : myTaxes,
                    profit : myProfit, 
                }

    return JSON.stringify(result);
}

//const MySalaryUkraine = () => {};
//const MySalaryLatvia = () => {};
/*
console.log(`Функція 1: ${getMyTaxes.call(ukraine, 1780).toFixed(2)}
Функція 2: ${getMiddleTaxes.call(ukraine).toFixed(2)}
Функція 3: ${getTotalTaxes.call(ukraine).toFixed(2)}`);
*/

//let timerId = setInterval(console.log(getMySalary(ukraine)), 5000, latvia, litva)
const countries = [ukraine, latvia, litva]
let timeInterval = 5000;

function go() {
for(let i = 0 ; i < countries.length; i++)
setTimeout(() => {
    let timeInterval = 3000;
    console.log(getMySalary(countries[i]));
    timeInterval += 3000;
}, timeInterval)
};
go();
/*
function printCountries(from, to) {
for(let i = 0; i < countries.length; i++){
    let current = from;
   
  }
}+
printCountries(countries[0], countries[countries.length])
for(let i = 0; i < countries.length; i++){
    setInterval(() => console.log(getMySalary(countries[i])), timeInterval);
    timeInterval += 5000;
}

let timer2 = setInterval(() => console.log(getMySalary(latvia)), 2000);
let timer3 = setInterval(() => console.log(getMySalary(litva)), 2000);

console.log(`${timer1}
${timer2}
${timer3}`);
setTimeout(() => { console.log(getMySalary())}, 5000, "ukraine");
setTimeout(() => { console.log(getMySalary())}, 5000, "latvia");

function getSalaryWithTimer(country) {
    return setTimeout(() => { console.log(getMySalary(country))}, 10000);
}//${MySalaryUkraine}
//${MySalaryLatvia});

//${getMySalary(litva)}
*/
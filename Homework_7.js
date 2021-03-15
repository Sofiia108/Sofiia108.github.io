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

console.log(`Функція 1: ${getMyTaxes.call(ukraine, 1780).toFixed(2)}
Функція 2: ${getMiddleTaxes.call(ukraine).toFixed(2)}
Функція 3: ${getTotalTaxes.call(ukraine).toFixed(2)}
Функція 4: ${getMySalary(ukraine)}`);

setTimeout(getMySalary(ukraine), 10000);
setTimeout(getMySalary(latvia), 10000);
setTimeout(getMySalary(litva), 10000);

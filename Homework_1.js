function result() {

    const prices = new Map([
        ['price1', 15.678],
        ['price2', 123.965],
        ['price3', 90.2345]
    ]);

    const values = [...prices.values()];

    const maxPrice = Math.max(...values);

    const minPrice = Math.min(...values);

    const sumOfPrices = values.reduce((a, c) => a + c, 0);

    const sumOfParsedToIntPrices = values.reduce((a, c) => a + Math.floor(c), 0);

    const roundedToHundredsSumOfPrices = Math.round(sumOfPrices / 100) * 100;

    const isEvenNumSumOfCastedPrices = sumOfParsedToIntPrices % 2 == 0;

    const sumWithoutChange = 500;

    const changeFrom500UAH = (sumWithoutChange - sumOfPrices).toFixed(2);

    const middlePrice = (sumOfPrices / prices.size).toFixed(2);

    const maxDiscount = 100;

    const minDiscount = 0;

    const randomDiscount = Math.floor(Math.random() * (maxDiscount - minDiscount + 1)) + minDiscount;

    const price1WithDiscount = parseInt(prices.get('price1')) * (100 - randomDiscount) / 100;

    const price2WithDiscount = parseInt(prices.get('price2')) * (100 - randomDiscount) / 100;

    const price3WithDiscount = parseInt(prices.get('price3')) * (100 - randomDiscount) / 100;

    const clearIncomeOfProduct1 = (prices.get('price1') / 2 - (parseInt(prices.get('price1')) * (randomDiscount) / 100)).toFixed(2);

    const clearIncomeOfProduct2 = (prices.get('price2') / 2 - (parseInt(prices.get('price2')) * (randomDiscount) / 100)).toFixed(2);

    const clearIncomeOfProduct3 = (prices.get('price3') / 2 - (parseInt(prices.get('price3')) * (randomDiscount) / 100)).toFixed(2);


    return `    Максимальна ціна: ${maxPrice},
    Мінімальна ціна: ${minPrice}
    Вартість всіх товарів: ${sumOfPrices}
    Ціла частина вартості товарів: ${sumOfParsedToIntPrices}
    Округлена до сотень вартість всіх товарів: ${roundedToHundredsSumOfPrices}
    ${isEvenNumSumOfCastedPrices ? "Вартість всіх товарів є парним числом" : "Вартість всіх товарів є непарним числом"}
    Решта із 500 грн: ${changeFrom500UAH}
    Середнє знаечння цін: ${middlePrice}
    Випадкова знижка становить: ${randomDiscount}
    Ціна зі знижкою для товару 1: ${price1WithDiscount}
    Ціна зі знижкою для товару 2: ${price2WithDiscount}
    Ціна зі знижкою для товару 3: ${price3WithDiscount}
    Собівартість товару 1: ${clearIncomeOfProduct1}
    Собівартість товару 2: ${clearIncomeOfProduct2}
    Собівартість товару 3: ${clearIncomeOfProduct3} `
    
}
console.log(result())

/*
Інформація для перевіряючих осіб

    Об'єкт Map використовується у програмі для більшої наглядності у рядках 29-39
    Альтернативою є Array

     ... - деструкторизація

     reduce - функція для ітерування об'єктів типу Array
     a - результат попередніх операцій, с - поточна ітераційна змінна, 0 - початкове значення
     1 ітерація: a = 0, c = 15.678; 2 ітерація a = 15.678 c = 123.965; ітд..
    
*/

function getPromice() {

    return new Promise((resolve) => {
        setTimeout(() => { 
            let signStr = new Date().getTime().toString();
            let sign = signStr.substr(signStr.length - 5); 
            resolve(String.fromCharCode(sign)); 
        }, 50);
    });
};

async function getRandomChinese(length)
{
    let arr = [];
    await new Promise((resolve) => 
    {
        setTimeout(async () => 
        {  
            counter = 0;
            while (counter < length) {
                arr.push(await getPromice());
                counter++;
            }
            resolve();
            console.log(arr.join(' '));
        }, length*50);
    });
}

getRandomChinese(4);
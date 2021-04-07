function* createIdGenerator() {

    let index = 1;
    while (true)
        yield console.log(index++);

    // also possible:
    /*
    let start = 1;
    let end = Infinity;
    let step = 1;
    let iterationCount = 0;

    for (let index = start; index < end; index += step) {
        iterationCount++;
        yield console.log(index);
    }

    return iterationCount;
    */
}

const idGenerator = createIdGenerator();

console.log("Task 1: ");
idGenerator.next().value;
idGenerator.next().value;
idGenerator.next().value;
idGenerator.next().value;


function* fontRegulator(start) {

    let currentValue = start;
    let step = 2;


    while (true) {

        console.log(currentValue);
        const reply = yield currentValue;
        if (reply == 'up') { currentValue += step; }
        else if (reply == 'down') { currentValue -= step; }
    }
};

const fontSize = fontRegulator(14);

console.log("Task 2: ");
fontSize.next().value;
fontSize.next('up').value;
fontSize.next().value;
fontSize.next('down').value;
fontSize.next().value;
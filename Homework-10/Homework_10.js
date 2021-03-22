function generateBlocks() {

    const container = document.createElement('div');
    container.className = 'container';
    document.body.append(container);

    let square;
    for (let i = 0; i < 25; i++) {

        square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
    }
    return container;
}

generateBlocks();

function getRandomColor(){

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}


function generateBlocksInterval(){

    let elements = document.getElementsByClassName("square");
    let elementsArr = [...elements];

    return elementsArr.forEach(element => {
        element.style.backgroundColor = "#" + getRandomColor();
    });
}

generateBlocksInterval();
setInterval(generateBlocksInterval,1000);



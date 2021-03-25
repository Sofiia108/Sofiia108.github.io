const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const chordNames = ['C','D','E','F','G','A','H'];

function generateButtons() {

    let button;

    for (let i = 0; i < 7; i++) {

        button = document.createElement('button');
        button.className = chordNames[i];
        button.innerHTML = chordNames[i];
        container.appendChild(button);
    }
    return container;
}


function eventListener(){

    container.addEventListener("click", function(event){
        
        new Audio(`./Sounds/${event.target.className}.m4a`).play(); 
    })
    document.addEventListener("keydown", function(event){

        if(chordNames.includes(event.key.toUpperCase())){

            new Audio(`./Sounds/${event.key.toUpperCase()}.m4a`).play();
        }
    })

}

generateButtons();
eventListener();




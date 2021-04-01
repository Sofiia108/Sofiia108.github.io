
const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const buttonNames = ['character', 'next'];

for (let i = 0; i < 2; i++) {

    button = document.createElement('button');
    button.className = buttonNames[i];
    button.innerHTML = buttonNames[i];
    container.appendChild(button);
}

document.getElementsByClassName('next')[0].addEventListener('click', getCharacters);

function getCharacters(){
    
    let result;
    axios.get('https://swapi.dev/api/films/2/')
        .then((res) => {
            const { characters }  = res.data;  
            return Promise.all(characters.map(item => axios.get(item))); 
    })
    .then((characters) => characters.map((name) => { 
    
        return result = {
        Name : name.data.name,
        Birth_year: name.data.birth_year,
        Gender: name.data.gender}
    }));
    return result;
}

document.getElementsByClassName('next')[0].addEventListener('click', getPlanets);

function getPlanets() {

    window.location.assign('Planets.html');

    axios.get('https://swapi.dev/api/planets/')
        .then((res) => {

            const { results } = res.data;
            return Promise.all(results.map(item => item))
        })
        .then((results) => {
            results.forEach(item => console.log(item.name))
        });
}
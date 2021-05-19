const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const contentContainer = document.createElement('div');
contentContainer.className = 'content-Container';
document.body.append(contentContainer);

const buttonNames = ['character', 'next'];

for (let i = 0; i < 2; i++) {

    button = document.createElement('button');
    button.className = buttonNames[i];
    button.innerHTML = buttonNames[i];
    container.appendChild(button);
}

document.getElementsByClassName('character')[0].addEventListener('click', getCharacters);

function getCharacters() {

    function htmlToElement(html) {

        let template = document.createElement('template');
        html = html.trim(); 
        template.innerHTML = html;
        return template.content.firstChild;
    }

    axios
        .get('https://swapi.dev/api/films/2/')
        .then((res) => {
            const { characters } = res.data;
            return Promise.all(characters.map(item => {
                let url = item.replace("http","https");
                return axios.get(url);
            }));
        })
        .then((characters) => {

            let a = characters.map((item) => ({

                Name: item.data.name,
                Birth_year: item.data.birth_year,
                Gender: item.data.gender
            }))
            a.forEach((item) => {
                
                let genderIcon;
                if(item.Gender === 'male')  genderIcon = "♂"; 
                else if(item.Gender === 'female')  genderIcon = "♀"; 
                else genderIcon = "⚪";
                let childStr = `<div> <img src="Pictures/${item.Name}.jpg";>
                <p>${item.Name} ${genderIcon} </p>
                <p>birth year: ${item.Birth_year} </p> </div>`;
                contentContainer.appendChild(htmlToElement(childStr));    
            })
            
        });

}

document.getElementsByClassName('next')[0].addEventListener('click', getPlanets);

function getPlanets() {


    axios.get('https://swapi.dev/api/planets/')
        .then((res) => {

            const { results } = res.data;
            return Promise.all(results.map(item => item))
        })
        .then((results) => {

            let a = results.map((item) => ({
                Name: item.name,   
            }))

            localStorage.setItem("Planet-names",JSON.stringify(a))
            window.location.assign('Planets.html');
        });  
}
    

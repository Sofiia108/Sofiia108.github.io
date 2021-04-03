const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const planetsJSON = JSON.parse(localStorage.getItem("Planet-names"));

planetsJSON.forEach(element => {
    
    let paragraph = document.createElement("P");                       
    paragraph.innerHTML = `${Object.values(element)}`; 
    container.appendChild(paragraph);           
});
const footer = document.getElementById('footer');
const section = document.createElement('section');
section.classList.add('secciones');

const team = 
{
    caja:"caja1",
    color:"rojo",
    titulo:"Team Builder",
    desc:"  Scans our talent network to create the optimal team for your project",
    img:"./images/icon-team-builder.svg",
}


const supervisor= 
{
    caja:"caja2",
    color:"verde",
    titulo:"Supervisor",
    desc:" Monitors activity to identify project roadblocks",
    img:"./images/icon-supervisor.svg",
}

const karma = 
{
    caja:"caja4",
    color:"amarillo",
    titulo:"Karma",
    desc:"Regularly evaluates our talent to ensure quality",
    img:"./images/icon-karma.svg",
}

const calculator= 
{
    caja:"caja3",
    color:"azul",
    titulo:"Calculator",
    desc:"Uses data from past projects to provide better delivery estimates",
    img:"./images/icon-calculator.svg",
}


function crearTemplate(servicio)
{
    
    const template= document.getElementById("template").content;
    const clonTemplate = template.cloneNode(true);// true  toda la estructura del template
    clonTemplate.querySelector('div').classList.add(`${servicio.caja}`,`${servicio.color}`);
    clonTemplate.querySelector('h1').classList.add("titulo");
    clonTemplate.querySelector('h1').innerText = `${servicio.titulo}`;
    clonTemplate.querySelector('p').classList.add("desc");
    clonTemplate.querySelector('p').innerText=`${servicio.desc}`;
    clonTemplate.querySelector('img').classList.add("imagen"); 
    clonTemplate.querySelector('img').src=`${servicio.img}`; 
    section.appendChild(clonTemplate);
    document.body.appendChild(section);
    document.body.insertAdjacentElement("beforeend",footer);
    
     
}

crearTemplate(team);
crearTemplate(supervisor);
crearTemplate(karma);
crearTemplate(calculator);


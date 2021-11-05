const cabecera = document.getElementById('header');
let plantilla = document.createElement('section');
plantilla.classList.add('secciones')
cabecera.insertAdjacentElement('afterend',plantilla);

function template(caja,color,titulo,desc,imagen)
{
    return(
    `<div class="${caja} ${color}">
        <h1 class="titulo">${titulo}</h1>
        <p class="desc">${desc}</p>
        <img class="imagen" src="${imagen}"></img>
    </div>`
    );

}

let team=template("caja1","rojo","Team Builder","  Scans our talent network to create the optimal team for your project","./images/icon-team-builder.svg");
let supervisor=template("caja2","verde","Supervisor","Monitors activity to identify project roadblocks","./images/icon-supervisor.svg");
let karma=template("caja4","amarillo","Karma","  Regularly evaluates our talent to ensure quality","./images/icon-karma.svg");
let calculator=template("caja3","azul","Calculator","Uses data from past projects to provide better delivery estimates","./images/icon-calculator.svg");
plantilla.insertAdjacentHTML('afterbegin',team);
plantilla.insertAdjacentHTML('beforeend',supervisor);
plantilla.insertAdjacentHTML('beforeend',karma);
plantilla.insertAdjacentHTML('beforeend',calculator);
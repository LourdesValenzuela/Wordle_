let intentos= 6;
let diccionario = ['BREAK', 'SPEAK', 'WRITE', 'SLEEP']
const BOTON= document.getElementById('guess-button');
BOTON.addEventListener('click', intentar);
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
  
function seleccionarPalabra(){
    let diccionario=['Apple','house',]
}
function leerIntento(){
    let intento= document.getElementById('guess-input').value;
    return intento.toUpperCase();
}

function intentar(){
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
    if(INTENTO=== palabra){
        terminar("<h1> GANASTE! :D </h1>");
        return INTENTO
    }
    if (intentos==0){
        terminar("<h1>PERDISTE! :C </h1>")
    }
    return
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
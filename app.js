
//Variables
let maxNumber = 10;
let secretNumber = 0;
let tries = 0;
let maxTries = 3;
let listGeneratedNumbers = [];
console.log(secretNumber);

//Functions
function assignInfoElement(element,info) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = info;
    return;
}

function initialConditions() {
    assignInfoElement('h1', 'Secret Number Game');
    assignInfoElement('p', `Elige un número del 1 al ${maxNumber}`);
    document.querySelector('#btry').removeAttribute('disabled');
    secretNumber = generateNumberSecret();
    tries = 1;
    return;
}

function generateNumberSecret() {
    let generateNumber = Math.floor(Math.random()*maxNumber)+1;
    console.log(generateNumber);
    console.log(listGeneratedNumbers);
    // Si ya sorteamos todos los números
    if (listGeneratedNumbers.length == maxNumber) {
        // assignInfoElement('p',`¡Increíble! superaste todos los niveles.`)
        // document.querySelector('#btry').setAttribute('disabled','true');
        alert(`¡Increíble! Superaste todos los niveles. Para seguir jugando, espera mientras mejoro mis skills en programación o actualiza tu página.`)
    } else { 
            // Si el número generado está incluido en la lista
        if (listGeneratedNumbers.includes(generateNumber)) {
            return generateNumberSecret();
        } else {
            listGeneratedNumbers.push(generateNumber);
            return generateNumber;
        }
    }
}

function clearCache() {
    document.querySelector('#userValue').value = '';
}

function verifyTry() {
    let userNumber = parseInt(document.getElementById('userValue').value);
    while (tries <= maxTries) {
        if (userNumber === secretNumber) {
            assignInfoElement('p', `¡Adivinaste! Lo hiciste en ${tries} ${(tries === 1) ? 'intento' : 'intentos'}`);
            document.getElementById('restart').removeAttribute('disabled');
            document.querySelector('#btry').setAttribute('disabled','true');
            return;
        } else {
            // El usuario no acertó.
            if (userNumber > secretNumber) {
                assignInfoElement('p', 'Es menor');
            } else {
                assignInfoElement('p', 'Es mayor');
            }
            tries++;
            if (tries > maxTries) {
                assignInfoElement('h1', 'GAME OVER');
                assignInfoElement('p', `¡Oh no! Llegaste al límite de intentos 🎲`);
                alert(`Para intentar de nuevo, actualiza la página.`);
                document.querySelector('#btry').setAttribute('disabled','true');
                break;
            } else {
                clearCache();
                return;
            }
        }
    }
}

function restartGame() {
    //Limpiar caja
    clearCache();
    //Indicar mensaje inicial de elección de número
    //Generar número aleatorio
    //Inicializar el número de intentos
    initialConditions();
    //Deshabilitar botón de nuevo juego
    document.querySelector('#restart').setAttribute('disabled','true');
    document.querySelector('#btry').removeAttribute('disabled');
}

initialConditions();

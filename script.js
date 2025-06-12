
let segundos = 0;
let intervalo = null;
//============================================//
const display = document.getElementById("display")
const btnI = document.getElementById("btnI")
const btnP = document.getElementById("btnP")
const btnR = document.getElementById("btnR")
//============================================//
btnI.addEventListener("click", iniciarCronometro);
function iniciarCronometro() {
    if (intervalo) return; //evita que exista múltiplos intervalos

    intervalo = setInterval (() => {
        segundos++;
        atualizaDisplay();
    }, 1000);
}

btnP.addEventListener("click", pausarCronometro);
function pausarCronometro() {
    clearInterval(intervalo);
    intervalo = null
}

btnR.addEventListener("click", resetarCronometro);
function resetarCronometro() {
    pausarCronometro();
    segundos = 0;
    atualizaDisplay();
}
//============================================//
// definindo as funções internas//
function formatarTempo(segundosTotais){
    const minutos = Math.floor(segundosTotais/60);
    const segundos = segundosTotais % 60;
    return `${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}` //padstart substitui 
}

function atualizaDisplay(){
    display.textContent = formatarTempo(segundos)
}
//============================================//
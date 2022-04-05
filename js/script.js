let botonDiez = document.getElementById('btnDiez');
botonDiez.addEventListener('click', calculoDiez);

let botonVeinte = document.getElementById('btnVeinte');
botonVeinte.addEventListener('click', calculoVeinte);

let botonTreinta = document.getElementById('btnTreinta');
botonTreinta.addEventListener('click', calculoTreinta);

let botonCuarenta = document.getElementById('btnCuarenta');
botonCuarenta.addEventListener('click', calculoCuarenta);

function calculoDiez(){
    let cantPorDiez = Number(document.querySelector('#total').value);
    const diezPor = 0.10;
    const porcentaje = "10%"
    let total = cantPorDiez * diezPor;
    let totalPagar = cantPorDiez + total
    document.getElementById('totalPropina').value = total;
    document.getElementById('porcentaje').value = porcentaje;
    document.getElementById('totalPagar').value = totalPagar;
    document.getElementById('totalFinal').value = cantPorDiez;
    console.log(calculoDiez)
    document.getElementById("formPor").reset()
} 

function calculoVeinte(){
    let cantPorVeinte = Number(document.querySelector('#total').value);
    const veintePor = 0.20;
    const porcentaje = "20%"
    let total = cantPorVeinte * veintePor;
    let totalPagar = cantPorVeinte + total
    document.getElementById('totalPropina').value = total;
    document.getElementById('porcentaje').value = porcentaje;
    document.getElementById('totalPagar').value = totalPagar;
    document.getElementById('totalFinal').value = cantPorDiez;
} 

function calculoTreinta(){
    let cantPorTreinta = Number(document.querySelector('#total').value);
    const treintaPor = 0.30;
    const porcentaje = "30%"
    let total = cantPorTreinta * treintaPor;
    let totalPagar = cantPorTreinta + total
    document.getElementById('totalPropina').value = total;
    document.getElementById('porcentaje').value = porcentaje;
    document.getElementById('totalPagar').value = totalPagar;
    document.getElementById('totalFinal').value = cantPorDiez;
} 

function calculoCuarenta(){
    let cantPorCuarenta = Number(document.querySelector('#total').value);
    const cuarentaPor = 0.40;
    const porcentaje = "40%"
    let total = cantPorCuarenta * cuarentaPor;
    let totalPagar = cantPorCuarenta + total
    document.getElementById('totalPropina').value = total;
    document.getElementById('porcentaje').value = porcentaje;
    document.getElementById('totalPagar').value = totalPagar;
    document.getElementById('totalFinal').value = cantPorDiez;
} 
let form = document.getElementById('formPorcentaje');

form.addEventListener('submit', formSumbit);

function formSumbit(e) {
    e.preventDefault();
}
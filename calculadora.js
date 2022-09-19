function escribirUno() {
    let resultado = document.getElementById("resultado");
    resultado.value += 1;
    return resultado;
}

function escribirDos() {
    let resultado = document.getElementById("resultado");
    resultado.value += 2;
    return resultado;
}

function escribirTres() {
    let resultado = document.getElementById("resultado");
    resultado.value += 3;
    return resultado;
}

function escribirCuatro() {
    let resultado = document.getElementById("resultado");
    resultado.value += 4;
    return resultado;
}

function escribirCinco() {
    let resultado = document.getElementById("resultado");
    resultado.value += 5;
    return resultado;
}

function escribirSeix() {
    let resultado = document.getElementById("resultado");
    resultado.value += 6;
    return resultado;
}

function escribirSiete() {
    let resultado = document.getElementById("resultado");
    resultado.value += 7;
    return resultado;
}

function escribirOcho() {
    let resultado = document.getElementById("resultado");
    resultado.value += 8;
    return resultado;
}

function escribirNueve() {
    let resultado = document.getElementById("resultado");
    resultado.value += 9;
    return resultado;
}

function escribirCero() {
    let resultado = document.getElementById("resultado");
    resultado.value += 0;
    return resultado;
}

function escribirBorrar() {
    let resultado = document.getElementById("resultado");
    resultado.value = "";
    return resultado;
}

function escribirMas() {
    let resultado = document.getElementById("resultado");
    resultado.value += "+";
    return resultado;
}

function escribirRestar() {
    let resultado = document.getElementById("resultado");
    resultado.value += "-";
    return resultado;
}

function escribirRaiz() {
    let resultado = document.getElementById("resultado");
    resultado.value = Math.sqrt(resultado.value);
    return resultado;
}

function escribirPorcentaje() {
    let resultado = document.getElementById("resultado");
    resultado.value = 100 / resultado.value;
    return resultado;
}

function escribirDivisor() {
    let resultado = document.getElementById("resultado");
    resultado.value += "/";
    return resultado;
}

function escribirPI() {
    let resultado = document.getElementById("resultado");
    resultado.value += Math.PI;
    return resultado;
}

function escribirMulti() {
    let resultado = document.getElementById("resultado");
    resultado.value += "*";
    return resultado;
}

function escribirCubo() {
    let resultado = document.getElementById("resultado");
    resultado.value = Math.cbrt(resultado.value);
    return resultado;
}

function escribirIgual() {
    let resultado = document.getElementById("resultado");
    resultado.value = eval(resultado.value);
    return resultado;
}
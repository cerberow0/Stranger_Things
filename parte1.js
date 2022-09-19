function total() {

    let ciudades = document.getElementById("lugares").value;
    let cantidades = document.getElementById("cantidad").value;
    let pesoEquipaje = document.getElementById("peso").value;
    let tipoSilla = document.getElementById("silla").value;

    if (ciudades == 1 && tipoSilla == 1) {
        valorCiudad = 90000;
    }
    if (ciudades == 1 && tipoSilla == 2) {
        valorCiudad = 90000 + 20000;
    }
    if (ciudades == 1 && tipoSilla == 3) {
        valorCiudad = 90000 + 40000;
    }
    if (ciudades == 2 && tipoSilla == 1) {
        valorCiudad = 110000;
    }
    if (ciudades == 2 && tipoSilla == 2) {
        valorCiudad = 110000 + 20000;
    }
    if (ciudades == 2 && tipoSilla == 3) {
        valorCiudad = 110000 + 40000;
    }
    if (ciudades == 3 && tipoSilla == 1) {
        valorCiudad = 150000;
    }
    if (ciudades == 3 && tipoSilla == 2) {
        valorCiudad = 150000 + 20000;
    }
    if (ciudades == 3 && tipoSilla == 3) {
        valorCiudad = 150000 + 40000;
    }
    if (ciudades == 4 && tipoSilla == 1) {
        valorCiudad = 205000;
    }
    if (ciudades == 4 && tipoSilla == 2) {
        valorCiudad = 205000 + 20000;
    }
    if (ciudades == 4 && tipoSilla == 3) {
        valorCiudad = 205000 + 40000;
    }
    if (ciudades == 5 && tipoSilla == 1) {
        valorCiudad = 180000;
    }
    if (ciudades == 5 && tipoSilla == 2) {
        valorCiudad = 180000 + 20000;
    }
    if (ciudades == 5 && tipoSilla == 3) {
        valorCiudad = 180000 + 40000;
    }
    if (pesoEquipaje > 50) {
        totalKilos = (pesoEquipaje - 50) * 15000;
    }
    total = (valorCiudad * cantidades) + totalKilos;
    let resultadoIndex = document.getElementById('totalIndex');
    resultadoIndex.innerHTML = (
        "Valor de Ciudad : " + valorCiudad + "<br>" +
        "total kilos extra por peso: " + totalKilos + "<br>" +
        "tipo se silla : " + tipoSilla + "<br>" +
        "Total del Ticket : " + total
    )

}
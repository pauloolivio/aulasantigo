//Potência Projetada (W ou cavalos) 
function calcPot() {
    var potMotor = document.getElementById("potMotor").value;
    var fatorServico = document.getElementById("fatorServico").value;
    var result = potMotor * fatorServico;
    document.getElementById("potProjetada").innerHTML = result.toFixed(3);
}

//Calculo da relação de transmissão (diametro) 
function calcRel() {
    var dMaior = document.getElementById("dMaior").value;
    var dMenor = document.getElementById("dMenor").value;
    var result = dMaior / dMenor;
    document.getElementById("RelacaoTrans1").innerHTML = result.toFixed(3);
}

//Calculo da relação de transmissão (rotação) 
function calcRel1() {
    var rMaior = document.getElementById("rMaior").value;
    var rMenor = document.getElementById("rMenor").value;
    var result = rMaior / rMenor;
    document.getElementById("RelacaoTrans2").innerHTML = result.toFixed(3);
}

//Distancia Entre Centros
function calcDistanciaCentros() {
    var dMaior1 = parseFloat(document.getElementById("dMaior1").value);
    var dMenor1 = parseFloat(document.getElementById("dMenor1").value);
    var result = ((3 * dMenor1) + dMaior1) / 2;
    document.getElementById("dCentros").innerHTML = result.toFixed(3);
}

//Comprimento da Correia
function calcCompCorreia() {
    var dMaior2 = parseFloat(document.getElementById("dMaior2").value);
    var dMenor2 = parseFloat(document.getElementById("dMenor2").value);
    var dCentro = parseFloat(document.getElementById("dCentro").value);
    var result = ((2 * dCentro) + (1.57 * (dMaior2 + dMenor2)) + ((dMaior2 - dMenor2) ** 2 / (4 * dCentro)));
    document.getElementById("cCorreia").innerHTML = result.toFixed(3);
}

//Comprimento Ajustado da Correia
function calcCompCorreiaAjust() {
    var dMaior3 = parseFloat(document.getElementById("dMaior3").value);
    var dMenor3 = parseFloat(document.getElementById("dMenor3").value);
    var cCorreiaPadrao = parseFloat(document.getElementById("cCorreiaPadrao").value);
    var result = cCorreiaPadrao - (1.57 * (dMaior3 + dMenor3));
    document.getElementById("cCorreiaAJ").innerHTML = result.toFixed(3);
}

//Distancia Entre Centros Ajustada
function calcDistanciaCentrosAj() {
    var dMaior4 = parseFloat(document.getElementById("dMaior4").value);
    var dMenor4 = parseFloat(document.getElementById("dMenor4").value);
    var cCorreiaAj = parseFloat(document.getElementById("cCorreiaAjust").value);
    var fatorH = parseFloat(document.getElementById("fatorH").value);
    var result = (cCorreiaAj - (fatorH * (dMaior4 - dMenor4))) / 2;
    document.getElementById("dCentroAJ").innerHTML = result.toFixed(3);
}

//fazer
//Capacidade de Transmissão por Correia
function calcCapTransmPorCorreia() {
    var pBasico = parseFloat(document.getElementById("pBasico").value);
    var pAdicional = parseFloat(document.getElementById("pAdicional").value);
    var fComp = parseFloat(document.getElementById("fatorComprimento").value);
    var fcArco = parseFloat(document.getElementById("fatorCorrecaoArco").value);
    var result = (pBasico + pAdicional) * fComp * fcArco;
    document.getElementById("capTransmissao").innerHTML = result.toFixed(3);
}

//Número mínimo de correias
function calcNumeroCorreias() {
    var potProjetada = parseFloat(document.getElementById("pProjetada").value);
    var capTransmissaoCorreia = parseFloat(document.getElementById("capTransmissaoCorreia").value);
    var result = potProjetada / capTransmissaoCorreia
    document.getElementById("nCorreias").innerHTML = result.toFixed(3);
}

//Momento Torçor
function calcMomentoTorçor() {
    var potMotor = parseFloat(document.getElementById("potMotor1").value);
    var rotacaoPolia = parseFloat(document.getElementById("nPoliaMotora").value);
    var result = (30 * potMotor) / (Math.PI * rotacaoPolia);
    document.getElementById("mTorque").innerHTML = result.toFixed(3);
}


//Força Tangencial
function calcforçatangencial() {
    var momentoTorçor = parseFloat(document.getElementById("mTorque1").value);
    var diametroPolia = parseFloat(document.getElementById("dPoliaMotora").value);
    var result = (2 * momentoTorçor) / (diametroPolia * 10 ** -3);
    document.getElementById("fTangencial").innerHTML = result.toFixed(3);
}
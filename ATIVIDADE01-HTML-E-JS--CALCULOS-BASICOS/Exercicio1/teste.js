function Calcular() {
    //VARIAVEIS LOCAIS
    let numero1 = Number(document.getElementById("numero1").value), numero2 = Number(document.getElementById("numero2").value), numero3 = Number(document.getElementById("numero3").value);
    let op = (numero1 + numero2) * numero3;
    document.getElementById("resultado").innerHTML = "O resultado é: " + op;
    //console.log("O resultado é: " + op);

}







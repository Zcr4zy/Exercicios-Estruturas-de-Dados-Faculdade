let vetor = [];

function Calcular(){
    lerVetor();
    //alert("Insira um numero: ");

    let displayString = "Vetor ==> ";
    for (let i = 0; i < vetor.length; i++) {
        displayString += vetor[i];
        if (i < vetor.length - 1) {
            displayString += " + ";
        }
    }

    document.getElementById("resultado").innerHTML += `<br>${displayString}`;
    document.getElementById("resultado").innerHTML += `<br>A soma de todos os elementos eh: ${somaVetor()}`
}

function lerVetor(){
    for(let i = 0; i < 15;i++){
        let x = Number(prompt(`Insira o ${i+1}° elemento: `));
        vetor.push(x);
    }
}

function somaVetor(){
    let soma = 0;
    for(let i = 0; i < 15;i++){
        soma += vetor[i];
    }
    return soma;
}





let botao = document.querySelector("button");
botao.addEventListener('click', () => {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let h1 = document.querySelector("h1");
    
    if(numero1 > numero2){
       h1.innerHTML = `O número 1 (${numero1}) é maior que o número 2 (${numero2})`
    }
    else if(numero2 > numero1){
       h1.innerHTML = `O número 2 (${numero2}) é maior que o número 1 (${numero1})`
    }
    else {
        h1.innerHTML = `Os números são iguais!!`
    }
})




let botao = document.querySelector("button");
botao.addEventListener('click', () => {
    let numero1 = Number(document.getElementById("numero1").value);
    let h1 = document.querySelector("h1");
    
    for(let n = numero1; n >= 0;n--){
        h1.innerHTML += n + `<br>`
    }
})




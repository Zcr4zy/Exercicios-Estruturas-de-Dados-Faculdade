let textoAtual = ""; 
let pilhaUndo = [];   

function AdicionarTexto(novoTexto) {
    textoAtual += novoTexto;
    pilhaUndo.push(textoAtual);
    MostrarTexto();
}

function Desfazer() {
    if (pilhaUndo.length > 1) {
        pilhaUndo.pop();  
        textoAtual = pilhaUndo[pilhaUndo.length - 1];  
        MostrarTexto();
    } else {
        alert("Nada para desfazer.");
    }
}

function MostrarTexto() {
    document.getElementById("resultado").innerHTML = textoAtual;
}

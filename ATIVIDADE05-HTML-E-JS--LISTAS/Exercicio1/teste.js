let vetor01 = [];

function MostrarTarefas() {
    opcao = prompt("Insira uma das opções a seguir:  1-Adicionar Tarefas   2-Remover Tarefas");
    switch(opcao) {
        case '1':
            document.getElementById("inpADD").style.display = "flex";
            document.getElementById("butADD").style.display = "flex";
            break;
        case '2':
            document.getElementById("inpREM").style.display = "flex";
            document.getElementById("butREM").style.display = "flex";
            break;
        default:
            alert("Opção inválida");
            break;
    }
}

function AdicionarTarefas() {
    let novaTarefa = document.getElementById("inpADD").value;
    vetor01.push(novaTarefa);
    document.getElementById("resultado").innerHTML = vetor01.join(', ');

}

function RemoverTarefas() {
    let indice_remover = document.getElementById("inpREM").value;
    vetor01.splice(indice_remover - 1, 1); // Remove 1 elemento a partir do índice especificado
    document.getElementById("resultado").innerHTML = vetor01.join(', ');

    document.getElementById("inpADD").style.display = "none";
    document.getElementById("butADD").style.display = "none";
}


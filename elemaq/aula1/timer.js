var tempoDecorrido = 00; // variável que representa o tempo decorrido
var intervaloId; // variável para armazenar o ID do intervalo de tempo

// função que atualiza o tempo decorrido e exibe na tela
function atualizaTempo() {
    tempoDecorrido++;
    document.getElementById("timer").innerHTML = tempoDecorrido;
}

// função que inicia a contagem de tempo
function iniciaTempo() {
    intervaloId = setInterval(atualizaTempo, 1000); // inicia a contagem de tempo
    document.removeEventListener("click", iniciaTempo); // remove o evento após o primeiro clique
}

// adiciona um evento de escuta ao primeiro movimento do jogo
document.addEventListener("click", iniciaTempo);

// função que para a contagem de tempo
function paraTempo() {
    clearInterval(intervaloId); // para a contagem de tempo
}

// adiciona um evento de escuta ao botão "Finalizar"
document.getElementById("finalizar").addEventListener("click", function() {
    paraTempo(); // para a contagem de tempo
    alert("Tempo total: " + tempoDecorrido + " segundos"); // exibe o tempo decorrido
});
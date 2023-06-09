let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let progresso = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto = document.querySelector('#somAcerto')
let somErro = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img') // ADICIONE
let pergunta = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
    // ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao: 0 + '.',
    imagem: '0.png', // ADICIONE
    pergunta: "Pergunta",
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    alternativaC: "Alternativa C",
    alternativaD: "Alternativa D",
    correta: "0",
}
const q1 = {
    numQuestao: 1 + '.',
    imagem: '1.png', // ADICIONE
    pergunta: "A antropometria é a ciência que estuda o quê?",
    alternativaA: "As características físicas do ambiente de trabalho.",
    alternativaB: "As dimensões e medidas do corpo humano.",
    alternativaC: "A iluminação adequada para o ambiente de trabalho.",
    alternativaD: "A relação entre temperatura e conforto térmico.",
    correta: "As dimensões e medidas do corpo humano.",

}
const q2 = {
    numQuestao: 2 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "A biomecânica é o estudo das leis do movimento e da...",
    alternativaA: "Anatomia humana.",
    alternativaB: "Iluminação no ambiente de trabalho.",
    alternativaC: "Ventilação adequada para o ambiente de trabalho.",
    alternativaD: "Fisiologia do corpo humano.",
    correta: "Anatomia humana.",

}
const q3 = {
    numQuestao: 3 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "A ergonomia física busca adequar o ambiente de trabalho às características...",
    alternativaA: "Psicológicas do trabalhador.",
    alternativaB: "Luminosas do ambiente.",
    alternativaC: "Físicas do trabalhador.",
    alternativaD: "Climáticas do ambiente.",
    correta: "Físicas do trabalhador.",

}
const q4 = {
    numQuestao: 4,
    imagem: '4.png', // ADICIONE
    pergunta: "O que estuda a fisiologia humana",
    alternativaA: "As dimensões do corpo humano.",
    alternativaB: "A relação entre temperatura e conforto térmico.",
    alternativaC: "Os efeitos do ambiente luminoso no desempenho do trabalhador.",
    alternativaD: "As funções e processos do corpo humano.",
    correta: "As funções e processos do corpo humano.",
}
const q5 = {
    numQuestao: 5,
    imagem: '5.png', // ADICIONE
    pergunta: "Qual o nome do estudo das dimensões e proporções do corpo humano em ergonomia?",
    alternativaA: "Biomecânica.",
    alternativaB: "Anatomia.",
    alternativaC: "Antropometria.",
    alternativaD: "Fisiologia.",
    correta: "Preservar a saúde e o bem-estar dos trabalhadores.",
}
const q6 = {
    numQuestao: 6 + '.',
    imagem: '1.png', // ADICIONE
    pergunta: "A ergonomia física visa melhorar",
    alternativaA: "O conforto térmico no ambiente de trabalho.",
    alternativaB: "A iluminação no ambiente de trabalho.",
    alternativaC: "A saúde e segurança do trabalhador.",
    alternativaD: "A ventilação no ambiente de trabalho.",
    correta: "A saúde e segurança do trabalhador.",
}
const q7 = {
    numQuestao: 7 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "O conforto térmico refere-se ao estado de satisfação de uma pessoa em relação à ...",
    alternativaA: "Iluminação do ambiente.",
    alternativaB: "Ventilação adequada.",
    alternativaC: "Temperatura do ambiente.",
    alternativaD: "Anatomia do corpo humano.",
    correta: "Temperatura do ambiente.",
}
const q8 = {
    numQuestao: 8 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "A iluminação adequada no ambiente de trabalho é importante para:",
    alternativaA: "O conforto térmico.",
    alternativaB: "Facilitar o trabalho",
    alternativaC: "O conforto organizacional",
    alternativaD: "A saúde visual.",
    correta: "A saúde visual.",
}
const q9 = {
    numQuestao: 9,
    imagem: '4.png', // ADICIONE
    pergunta: "Qual alternativa melhor completa a frase. A ventilação adequada no ambiente de trabalho contribui para ...",
    alternativaA: "A ergonomia física.",
    alternativaB: "O conforto térmico.",
    alternativaC: "A redução de temperatura.",
    alternativaD: "A melhora fisiologia.",
    correta: "O conforto térmico.",
}
const q10 = {
    numQuestao: 10,
    imagem: '5.png', // ADICIONE
    pergunta: "Qual alternativa melhor completa a frase. A ergonomia busca promover um ambiente de trabalho que proporcione bem-estar e ...",
    alternativaA: "Eficiência produtiva.",
    alternativaB: "Luminosidade adequada.",
    alternativaC: "Condições climáticas estáveis",
    alternativaD: "Ventilação mecânica.",
    correta: "Eficiência produtiva.",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length) - 1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', 'images/' + q1.imagem) // ADICIONE
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/' + questoes[nQuestao].imagem) // ADICIONE
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao + 'A')
    b.setAttribute('value', nQuestao + 'B')
    c.setAttribute('value', nQuestao + 'C')
    d.setAttribute('value', nQuestao + 'D')
    progresso.value = parseInt(progresso.value) + 1
        //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if (numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
        //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
        //console.log("RespC " + certa)

    if (respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if (nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos" + " " +
        placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao + 1

        if (proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()

}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto" + s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
            //location.reload();
        instrucoes.classList.remove('placar')
            // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
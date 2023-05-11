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
    pergunta: "Qual a Norma regulamentadora (NR) que estabelece os tipos e usos de equipamentos de protenção individual (EPI) e equipamentos de proteção coletiva (EPC)",
    alternativaA: "NR 05",
    alternativaB: "NR 06",
    alternativaC: "NR 04",
    alternativaD: "NR 07",
    correta: "NR 06",
}
const q2 = {
    numQuestao: 2 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "Cabe à CIPA junto com o SESMT identificar os riscos e propor medidas de controle para situações de risco. Quais as medidas de controle dada que priorizam a proteção coletiva.",
    alternativaA: "Previsão, Reconhecimento, Avaliar e Agir.",
    alternativaB: "Prever o Futuro, Encontrar Elementos Perigosos, Avaliar e Agir.",
    alternativaC: "Antecipação, Reconhecimento, Avaliação e Controle.",
    alternativaD: "Antecipação, Encontrar Elementos Perigosos, Avaliação, Controlar e Agir.",
    correta: "Antecipação, Reconhecimento, Avaliação e Controle.",
}
const q3 = {
    numQuestao: 3 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "Qual das alternativas abaixo não é uma medida de de controle alternativa a ser adotada.",
    alternativaA: "Sinalização do risco",
    alternativaB: "Neutralização do risco",
    alternativaC: "Correção do risco",
    alternativaD: "Eliminação do risco",
    correta: "Correção do risco",
}
const q4 = {
    numQuestao: 4,
    imagem: '4.png', // ADICIONE
    pergunta: "Das afirmativas baixo, qual não apresenta somente equipamentos de proteção coletiva",
    alternativaA: "Placas de sinalização, barreiras, cones de sinalização, isolamentos acustico ",
    alternativaB: "Detectores de tensão, sistemas de renovação de ar, placas, cones de sinalização,",
    alternativaC: "Extintores, recipientes descartáveis, luvas, placas de sinalização",
    alternativaD: "Lanternas, Guarda-corpo, extintores, recipientes descartáveis ",
    correta: "Extintores, recipientes descartáveis, luvas, placas de sinalização",
}
const q5 = {
    numQuestao: 5,
    imagem: '5.png', // ADICIONE
    pergunta: "Qual das afirmativas melhor representa a divisão correta dos equipamentos de proteção individual.",
    alternativaA: "Proteção da cabeça, Proteção auditiva, Proteção respiratória, Proteção visual, Proteção de membros, Proteção contra quedas",
    alternativaB: "Proteção da cabeça, Proteção respiratória, Proteção visual, Proteção do Tronco, Proteção de membros, Proteção de articulações",
    alternativaC: "Proteção da cabeça, Proteção respiratória, Proteção auditiva, Proteção do Tronco, Proteção de membros, Proteção de articulações",
    alternativaD: "Proteção da cabeça, Proteção respiratória, Proteção auditiva, Proteção de costas, Proteção de membros, Proteção de articulações",
    correta: "Proteção da cabeça, Proteção auditiva, Proteção respiratória, Proteção visual, Proteção de membros, Proteção contra quedas",
}
const q6 = {
    numQuestao: 6 + '.',
    imagem: '1.png', // ADICIONE
    pergunta: "Quando devo ligar para 192?",
    alternativaA: "Crises convulsivas",
    alternativaB: "Tentativa de suicídio",
    alternativaC: "Queda de alturas",
    alternativaD: "Acidentes com choques elétricos",
    correta: "Crises convulsivas",
}
const q7 = {
    numQuestao: 7 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "Assinale a afirmativa que apresenta todas as condições de urgência ou emergência?",
    alternativaA: "Nível de consciência alterado, vômitos com sangue, dores no peito, alterações de oufato",
    alternativaB: "Dores no peito, alterações na visão, dificuldade para respirar, nível de consciência não alterado",
    alternativaC: "Fala normal, dores no peito, vômitos com sangue, dificuldade para respirar",
    alternativaD: "Nível de consciência alterado, fala prejudicada, dores no peito, alterações na visão",
    correta: "Nível de consciência alterado, fala prejudicada, dores no peito, alterações na visão",
}
const q8 = {
    numQuestao: 8 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "Quando devo ligar para 193?",
    alternativaA: "Crises convulsivas",
    alternativaB: "Dores no peito",
    alternativaC: "Queda de alturas",
    alternativaD: "Desmaios",
    correta: "Queda de alturas",
}
const q9 = {
    numQuestao: 9,
    imagem: '4.png', // ADICIONE
    pergunta: "Em um caso de acidente, você e sua equipe da CIPA está no local. Qual desse procedimentos não é correto?",
    alternativaA: "Evite que os observadores fiquem em volta da vítima",
    alternativaB: "Nenhuma das alternativas",
    alternativaC: "Proteja a vítima de tudo que possa piorar seu estado ou causar ferimentos adicionais",
    alternativaD: "Garanta a sua proteção e a do resto dos membros da equipe",
    correta: "Nenhuma das alternativas",
}
const q10 = {
    numQuestao: 10,
    imagem: '5.png', // ADICIONE
    pergunta: "Qual das afirmativas é o correto para se identificar Hemorragias?",
    alternativaA: "Na Hemorragia arterial o sangue está jorrando de uma artéria. O sangramento é vermelho vivo, em jatos, pulsando em sincronia com as batidas do coração. A perda de sangue é  rápida e abundante",
    alternativaB: "Na hemoragia venosa o sangue está saindo de uma veia. O sangramento é em jatos uniforme e de cor escura.",
    alternativaC: "Na hemoragia capilar o sangue está escoando de uma rede de capilares. A cor é vermelha,  normalmente menos viva que o sangue arterial e o fluxo é lento",
    alternativaD: "Todas as alternativas",
    correta: "Na hemoragia venosa o sangue está saindo de uma veia. O sangramento é em jatos uniforme e de cor escura.",
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
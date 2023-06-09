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
    pergunta: "O que a segurança e higiene do trabalho visam? Assinale a alternativa ",
    alternativaA: "Aumentar os riscos ambientais no ambiente de trabalho.",
    alternativaB: "Prejudicar a saúde e o bem-estar dos trabalhadores.",
    alternativaC: "Preservar a saúde e o bem-estar dos trabalhadores.",
    alternativaD: "Ignorar os acidentes de trabalho.",
    correta: "Preservar a saúde e o bem-estar dos trabalhadores.",
}
const q2 = {
    numQuestao: 2 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "Qual é o objetivo da segurança do trabalho? Assinale a alternativa correta",
    alternativaA: "Promover acidentes de trabalho.",
    alternativaB: "Estudar as causas e consequências dos acidentes de trabalho.",
    alternativaC: "Ignorar os riscos ambientais no ambiente de trabalho.",
    alternativaD: "Prejudicar a saúde dos trabalhadores.",
    correta: "Estudar as causas e consequências dos acidentes de trabalho.",
}
const q3 = {
    numQuestao: 3 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "O que a higiene do trabalho busca reconhecer, avaliar e controlar? Assinale a alternativa correta",
    alternativaA: "Os riscos ambientais presentes no ambiente de trabalho.",
    alternativaB: "Os benefícios para os trabalhadores.",
    alternativaC: "As doenças relacionadas ao trabalho.",
    alternativaD: "As condições sanitárias nos locais de trabalho.",
    correta: "Os riscos ambientais presentes no ambiente de trabalho.",
}
const q4 = {
    numQuestao: 4,
    imagem: '4.png', // ADICIONE
    pergunta: "Qual foi a primeira fase da evolução do trabalho mencionada na aula 1? Assinale a alternativa correta",
    alternativaA: "Produção em série.",
    alternativaB: "Automação tecnológica.",
    alternativaC: "Produção industrial.",
    alternativaD: "Produção de subsistência.",
    correta: "Produção de subsistência.",
}
const q5 = {
    numQuestao: 5,
    imagem: '5.png', // ADICIONE
    pergunta: "O que aconteceu durante a Revolução Industrial? Assinale a alternativa correta",
    alternativaA: "A produção artesanal substituiu o trabalho nas fábricas.",
    alternativaB: "A atividade agrícola foi desenvolvida.",
    alternativaC: "Grandes concentrações de trabalhadores surgiram nas fábricas.",
    alternativaD: "Não houve mudanças significativas no processo de produção.",
    correta: "Grandes concentrações de trabalhadores surgiram nas fábricas.",

}
const q6 = {
    numQuestao: 6 + '.',
    imagem: '1.png', // ADICIONE
    pergunta: "Qual é o objetivo das normas regulamentadoras (NRs)? Conforme texto da aula 1, assinale a alternativa correta",
    alternativaA: "Estabelecer diretrizes para a terceirização de serviços.",
    alternativaB: "Garantir a segurança e saúde do trabalhador.",
    alternativaC: "Reduzir o uso de tecnologia na produção.",
    alternativaD: "Proibir a automação industrial.",
    correta: "Garantir a segurança e saúde do trabalhador.",
}
const q7 = {
    numQuestao: 7 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "O que são convenções trabalhistas? Assinale a alternativa correta",
    alternativaA: "Normas de segurança no trabalho.",
    alternativaB: "Leis específicas para a indústria da construção.",
    alternativaC: "Acordos firmados entre sindicatos, confederações e empresas.",
    alternativaD: "Legislações complementares sobre segurança e medicina do trabalho.",
    correta: "Acordos firmados entre sindicatos, confederações e empresas.",
}
const q8 = {
    numQuestao: 8 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "O que é perigo? Assinale a alternativa correta",
    alternativaA: "A exposição a uma fonte geradora.",
    alternativaB: "A probabilidade de lesão ou morte.",
    alternativaC: "Uma situação que provoca danos ao meio ambiente.",
    alternativaD: "Um conjunto de circunstâncias que aumenta os riscos no local de trabalho.",
    correta: "A probabilidade de lesão ou morte.",
}
const q9 = {
    numQuestao: 9,
    imagem: '4.png', // ADICIONE
    pergunta: "Qual é a relação entre perigo e risco? Assinale a alternativa correta",
    alternativaA: "Perigo é a probabilidade de ocorrência de um evento perigoso.",
    alternativaB: "Risco é a exposição a uma fonte geradora.",
    alternativaC: " Perigo é a exposição a uma fonte geradora.",
    alternativaD: "Risco é uma situação que provoca danos ao meio ambiente.",
    correta: "Risco é a exposição a uma fonte geradora.",
}
const q10 = {
    numQuestao: 10,
    imagem: '5.png', // ADICIONE
    pergunta: "O que devemos fazer em relação ao perigo? Assinale a alternativa correta",
    alternativaA: "Ignorá-lo e continuar o trabalho normalmente.",
    alternativaB: "Evitar colocar-se em perigo e não permitir que outras pessoas se coloquem em perigo.",
    alternativaC: "Aumentar a exposição ao perigo para testar os limites.",
    alternativaD: "Aceitar os riscos e não considerar a segurança.",
    correta: "Evitar colocar-se em perigo e não permitir que outras pessoas se coloquem em perigo.",
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
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
    pergunta: "Quais são as principais abordagens da ergonomia? Assinale a alternativa correta.",
    alternativaA: "Ergonomia física e ergonomia mental.",
    alternativaB: "Ergonomia social e ergonomia cognitiva.",
    alternativaC: "Ergonomia física e ergonomia cognitiva",
    alternativaD: "Ergonomia organizacional e ergonomia ambiental.",
    correta: "Ergonomia física e ergonomia cognitiva",
}
const q2 = {
    numQuestao: 2 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "Qual oração melhor completa a frase. A ergonomia física está relacionada a...",
    alternativaA: "Problemas psicológicos do trabalhador.",
    alternativaB: "Lesões musculares e fadiga.",
    alternativaC: "Aspectos organizacionais da empresa.",
    alternativaD: "Ações preventivas no ambiente de trabalho.",
    correta: "Lesões musculares e fadiga.",
}
const q3 = {
    numQuestao: 3 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "Qual é o objetivo básico da Ergonomia? Assinale a alternativa correta.",
    alternativaA: "Aumentar a fadiga e o estresse no ambiente de trabalho.",
    alternativaB: "Reduzir a segurança e a saúde dos trabalhadores.",
    alternativaC: "Proporcionar satisfação e saúde aos trabalhadores.",
    alternativaD: "Ignorar os aspectos físicos e cognitivos do trabalho.",
    correta: "Proporcionar satisfação e saúde aos trabalhadores.",
}
const q4 = {
    numQuestao: 4,
    imagem: '4.png', // ADICIONE
    pergunta: "Quem são os praticantes da ergonomia? Assinale a alternativa correta.",
    alternativaA: "Engenheiros de segurança.",
    alternativaB: "Ergonomistas.",
    alternativaC: "Psicólogos.",
    alternativaD: "Fisioterapeutas.",
    correta: "Ergonomistas.",

}
const q5 = {
    numQuestao: 5,
    imagem: '5.png', // ADICIONE
    pergunta: "O que a ergonomia física busca adequar? Assinale a alternativa correta.",
    alternativaA: "As exigências do trabalho às limitações e capacidades do corpo.",
    alternativaB: "As preferências pessoais dos trabalhadores.",
    alternativaC: "A carga de trabalho aos recursos disponíveis.",
    alternativaD: "A organização do trabalho às normas governamentais.",
    correta: "As exigências do trabalho às limitações e capacidades do corpo.",
}
const q6 = {
    numQuestao: 6 + '.',
    imagem: '1.png', // ADICIONE
    pergunta: "Como a ergonomia física pode reduzir a fadiga? Assinale a alternativa correta.",
    alternativaA: "Aumentando o número de tarefas repetitivas.",
    alternativaB: "Criando postos de trabalho desconfortáveis.",
    alternativaC: "Ignorando os aspectos ambientais do trabalho.",
    alternativaD: "Proporcionando pausas adequadas e organização do trabalho respeitando os limites individuais.",
    correta: "Proporcionando pausas adequadas e organização do trabalho respeitando os limites individuais.",
}
const q7 = {
    numQuestao: 7 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "Qual é o objetivo da ergonomia cognitiva? Assinale a alternativa correta.",
    alternativaA: "Estudar os aspectos físicos do trabalho.",
    alternativaB: "Melhorar a segurança no ambiente de trabalho.",
    alternativaC: "Analisar os processos mentais e a interação entre o trabalhador e o sistema.",
    alternativaD: "Reduzir a satisfação dos trabalhadores.",
    correta: "Analisar os processos mentais e a interação entre o trabalhador e o sistema.",
}
const q8 = {
    numQuestao: 8 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "Qual é o objetivo da ergonomia física? Assinale a alternativa correta.",
    alternativaA: "Estudar os fatores sociais no ambiente de trabalho.",
    alternativaB: "Melhorar a comunicação entre os trabalhadores.",
    alternativaC: "Analisar as características da anatomia humana relacionadas com a atividade física.",
    alternativaD: "Prevenir acidentes de trabalho.",
    correta: "Analisar as características da anatomia humana relacionadas com a atividade física.",
}
const q9 = {
    numQuestao: 9,
    imagem: '4.png', // ADICIONE
    pergunta: "O que a ergonomia cognitiva estuda? Assinale a alternativa correta.",
    alternativaA: "As características da anatomia humana.",
    alternativaB: "As exigências mentais envolvidas no trabalho.",
    alternativaC: "Os aspectos físicos do ambiente de trabalho.",
    alternativaD: "A fisiologia do corpo humano.",
    correta: "As demandas cognitivas do trabalho.",
}
const q10 = {
    numQuestao: 10,
    imagem: '5.png', // ADICIONE
    pergunta: "Qual é o objetivo da ergonomia organizacional? Assinale a alternativa correta.",
    alternativaA: "Aumentar a eficiência do trabalho.",
    alternativaB: "Reduzir a satisfação dos trabalhadores.",
    alternativaC: "Ignorar os aspectos sociais do trabalho.",
    alternativaD: "Melhorar a comunicação entre os trabalhadores.",
    correta: "Melhorar a comunicação entre os trabalhadores.",
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
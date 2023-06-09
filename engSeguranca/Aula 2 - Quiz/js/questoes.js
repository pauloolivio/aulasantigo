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
    pergunta: "O que é um ato inseguro?",
    alternativaA: "Exposição consciente ao perigo",
    alternativaB: "Exposição inconsciente ao perigo",
    alternativaC: "Exposição circunstancial ao perigo",
    alternativaD: "Exposição segura ao perigo",
    correta: "Exposição consciente ao perigo",
}
const q2 = {
    numQuestao: 2 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "O que é um incidente?",
    alternativaA: "Um acidente com danos causados",
    alternativaB: "Uma situação perigosa com potencial para causar danos",
    alternativaC: "Um erro humano cometido no trabalho",
    alternativaD: "Uma doença ocupacional",
    correta: "Uma situação perigosa com potencial para causar danos",
}
const q3 = {
    numQuestao: 3 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "O que são acidentes relacionados à segurança do trabalho?",
    alternativaA: "Condições perigosas",
    alternativaB: "Incidentes",
    alternativaC: "Erros humanos",
    alternativaD: "Agentes físicos, químicos, biológicos",
    correta: "Erros humanos",
}
const q4 = {
    numQuestao: 4,
    imagem: '4.png', // ADICIONE
    pergunta: "O que são doenças relacionadas à higiene ocupacional?",
    alternativaA: "Condições perigosas",
    alternativaB: "Incidentes",
    alternativaC: "Erros humanos",
    alternativaD: "Agentes físicos, químicos, biológicos",
    correta: "Agentes físicos, químicos, biológicos",
}
const q5 = {
    numQuestao: 5,
    imagem: '5.png', // ADICIONE
    pergunta: "Qual é a relação entre HST (higiene e segurança do trabalho) e produtividade?",
    alternativaA: "HST prejudica a produtividade.",
    alternativaB: "HST não tem relação com a produtividade.",
    alternativaC: "HST melhora a produtividade.",
    alternativaD: "HST é irrelevante para a produtividade.",
    correta: "HST melhora a produtividade.",

}
const q6 = {
    numQuestao: 6 + '.',
    imagem: '1.png', // ADICIONE
    pergunta: "Qual a relação de iluminação e segurança no trabalho?",
    alternativaA: "Diminui a produção.",
    alternativaB: "Aumenta o número de acidentes.",
    alternativaC: "Não tem efeito na produtividade.",
    alternativaD: "Melhora o ambiente geral.",
    correta: "Melhora o ambiente geral.",

}
const q7 = {
    numQuestao: 7 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "O que é uma condição perigosa?",
    alternativaA: "Uma exposição consciente ao perigo.",
    alternativaB: "Uma exposição inconsciente ao perigo.",
    alternativaC: "Uma exposição segura ao perigo.",
    alternativaD: "Uma exposição que pode causar perigo ou risco.",
    correta: "Uma exposição que pode causar perigo ou risco.",

}
const q8 = {
    numQuestao: 8 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "Quem está envolvido no Serviço Especializado em Engenharia de Segurança e Medicina do  Trabalho (SESMT)?",
    alternativaA: "Engenheiro de Segurança do Trabalho e Médico do Trabalho",
    alternativaB: "Técnico de Segurança do Trabalho e Enfermeiro do Trabalho",
    alternativaC: "Todos os funcionários da empresa",
    alternativaD: "Engenheiro de Segurança do Trabalho, Técnico de Segurança do Trabalho, Enfermeiro do Trabalho e Médico do Trabalho",
    correta: "Engenheiro de Segurança do Trabalho, Técnico de Segurança do Trabalho, Enfermeiro do Trabalho e Médico do Trabalho",
}
const q9 = {
    numQuestao: 9,
    imagem: '4.png', // ADICIONE
    pergunta: "Qual é o objetivo do PCMSO?",
    alternativaA: "Prevenir acidentes de trabalho",
    alternativaB: "Controlar as estatísticas de acidentes",
    alternativaC: "Preservar a saúde e integridade dos trabalhadores",
    alternativaD: "Elaborar relatórios mensais de acidentes",
    correta: "Preservar a saúde e integridade dos trabalhadores",
}
const q10 = {
    numQuestao: 10,
    imagem: '5.png', // ADICIONE
    pergunta: "Quem está obrigado a fazer o PPRA?",
    alternativaA: "Apenas empresas de pequeno porte",
    alternativaB: "Todas as empresas e instituições com empregados",
    alternativaC: "Apenas empresas com alto grau de risco",
    alternativaD: "Apenas empresas do setor industrial",
    correta: "Todas as empresas e instituições com empregados",
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
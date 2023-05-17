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
    pergunta: " Qual a norma que estabelece os requisitos mínimos para prevenção de acidentes e doenças do trabalho  desde o projeto até a utilização das máquinas e equipamentos.",
    alternativaA: "NR 13",
    alternativaB: "NR 15",
    alternativaC: "NR 12",
    alternativaD: "NR 23",
    correta: "NR 12",
}
const q2 = {
    numQuestao: 2 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "Assinale a afirmativa abaixo não é uma das principais premissas de segurança em máquinas e equipamentos.",
    alternativaA: "Todos os pontos de perigo devem ser protegidos",
    alternativaB: "As proteções fixas e móveis devem ser dimensionadas de acordo com o ANEXO I da NR-13.",
    alternativaC: "As proteções móveis devem possuir sistema de segurança com categoria adequada.",
    alternativaD: "As proteções fixas e móveis devem ser dimensionadas.",
    correta: "As proteções fixas e móveis devem ser dimensionadas de acordo com o ANEXO I da NR-13.",
}
const q3 = {
    numQuestao: 3 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "Assinale a afirmativa que contém elementos não adequados a norma de segurança em máquinas e equipamentos.",
    alternativaA: "Cortina de luz, barreira física, botão de duplo comando, barreiras opticas, contator de segurança.",
    alternativaB: "Cortina de luz, pedal de acionamento, comando manual, barreiras opticas, contator de segurança.",
    alternativaC: "Cortina de luz, botão de emergência, comando bi-manual, barreiras opticas, relé de segurança.",
    alternativaD: "Cortina de luz, barreira física, botão de duplo comando, calço de segurança, sensor indutivo.",
    correta: "Cortina de luz, pedal de acionamento, comando manual, barreiras opticas, contator de segurança.",
}
const q4 = {
    numQuestao: 4,
    imagem: '4.png', // ADICIONE
    pergunta: "Das afirmativas abaixo, apresenta requisitos aplicáveis a norma de segurança em máquinas e equipamentos.",
    alternativaA: "Movidos ou impulsionados por força humana ou animal e eletrodométicos",
    alternativaB: "Eletrodométicos e máquinas e equipamentos expostos em museus, feiras e eventos, para fins históricos.",
    alternativaC: "Antiguidades que não sejam mais empregados com fins produtivos, desde que sejam adotadas medidas que garantam a preservação da integridade física dos visitantes e expositores",
    alternativaD: "Eletrodométicos e máquinas antigas que estejam em funcionamento.",
    correta: "Eletrodométicos e máquinas antigas que estejam em funcionamento.",
}
const q5 = {
    numQuestao: 5,
    imagem: '5.png', // ADICIONE
    pergunta: "Segundo requisitos da norma de segurança em máquinas e equipamentos. Qual afirmativa está incorreta.",
    alternativaA: "Em máquinas onde for possível o acesso de corpo inteiro entre a proteção e a área do molde, ou na  própria área do molde, deve ser aplicado dispositivo de retenção mecânica.",
    alternativaB: "Em máquinas onde for possível o acesso de corpo inteiro entre a proteção e a área do molde, ou na  própria área do molde, deve ser aplicado dispositivo de protenção mecânica.",
    alternativaC: "Ficam dispensadas da instalação do dispositivo mecânico de segurança autorregulável as máquinas fabricadas ou importadas que atendam aos requisitos da norma ABNT NBR 13536:2016 ou da EN 201.",
    alternativaD: "As máquinas fabricadas a partir de 1º de junho de 2017 devem atender aos  requisitos da norma ABNT NBR 13536:2016 e suas alterações, observado o disposto no item 12.5.1 desta Norma",
    correta: "As máquinas fabricadas a partir de 1º de junho de 2017 devem atender aos  requisitos da norma ABNT NBR 13536:2016 e suas alterações, observado o disposto no item 12.5.1 desta Norma",
}
const q6 = {
    numQuestao: 6 + '.',
    imagem: '1.png', // ADICIONE
    pergunta: "Segundo requisitos da norma de segurança em máquinas e equipamentos. Qual afirmativa está incorreta.",
    alternativaA: "Os sinais elétricos devem ser gerados por chaves de segurança com  canal simples e ruptura positiva, monitoradas por interface de segurança",
    alternativaB: "Nos sistemas de válvulas com monitoramento dinâmico por micro-switches ou sensores de proximidade podem ser utilizados por interface de segurança",
    alternativaC: "Nas prensas mecânicas excêntricas com freio-embreagem, com zona de prensagem não enclausurada por proteção fixa, proteções móveis com  intertravamento com bloqueio ou cujas ferramentas não sejam fechadas, a posição do martelo deve ser monitorada por sinais elétricos produzidos por equipamento acoplado mecanicamente ao eixo da máquina.",
    alternativaD: "As prensas hidráulicas devem possuir bloco hidráulico de segurança ou sistema hidráulico equivalente, que possua a mesma característica e eficácia.",
    correta: "Os sinais elétricos devem ser gerados por chaves de segurança com  canal simples e ruptura positiva, monitoradas por interface de segurança",
}
const q7 = {
    numQuestao: 7 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "O que todos os locais de trabalho devem possuir para combate ao incêndio. Qual dos itens apresenta afirmativas incorretas?",
    alternativaA: "Sistemas de proteção contra incêndio. Saídas suficientes para a rápida retirada do pessoal em serviço, em caso de incêndio. Equipamento suficiente para combater o fogo em seu início",
    alternativaB: "Saídas suficientes para a rápida retirada do pessoal em serviço, em caso de incêndio. Equipamento suficiente para combater o fogo em seu início. Pessoas treinadas no uso correto dos equipamentos de combate ao incêndio",
    alternativaC: "Placas de sinalização. Equipamento suficiente para combater o fogo em seu início. Pessoas treinadas no uso correto dos equipamentos de combate ao incêndio",
    alternativaD: "Extintores da Classe D. Sistemas de proteção contra incêndio. Saídas suficientes para a rápida retirada do pessoal em serviço, em caso de incêndio. Equipamento suficiente para combater o fogo em seu início",
    correta: "Extintores da classe D. Sistemas de proteção contra incêndio. Saídas suficientes para a rápida retirada do pessoal em serviço, em caso de incêndio. Equipamento suficiente para combater o fogo em seu início",
}
const q8 = {
    numQuestao: 8 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "Sobre o responsável pela análise de risco na empresa. Assinale a afirmativa incorreta.",
    alternativaA: "Engenheiro responsável por manutenção de equipamentos ou projetos.",
    alternativaB: "Engenheiro, proprietário e médico de segurança no trabalho.",
    alternativaC: "Engenheiro ou Técnico de Segurança.",
    alternativaD: "Engenheiro, proprietário e responsável técnico pela área de suprimentos.",
    correta: "Engenheiro, proprietário e médico de segurança no trabalho.",
}
const q9 = {
    numQuestao: 9,
    imagem: '4.png', // ADICIONE
    pergunta: "Qual extintor serve para uso em equipamentos elétricos",
    alternativaA: "Extintor de classe A",
    alternativaB: "Extintor de classe B",
    alternativaC: "Extintor de classe C",
    alternativaD: "Extintor de classe D",
    correta: "Extintor de classe C",
}
const q10 = {
    numQuestao: 10,
    imagem: '5.png', // ADICIONE
    pergunta: "Qual dos itens apresenta elementos que não são de combate ao incêndio.",
    alternativaA: "Portas corta fogo, sinalização, extintores, hidrantes, sistemas de alarmes, saidas de emergênciam.",
    alternativaB: "Areia, limalha de ferro fundido, extintores, hidrantes, sistemas de alarmes, saidas de emergênciam.",
    alternativaC: "Portas corta fogo, sinalização, extintores, hidrantes, portas corta fogo, sinalização.",
    alternativaD: "Areia, limalha de aluminio e magnésio, extintores, hidrantes.",
    correta: "Areia, limalha de aluminio e magnésio, extintores, hidrantes.",
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
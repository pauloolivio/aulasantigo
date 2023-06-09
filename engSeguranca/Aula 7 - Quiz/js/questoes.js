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
    pergunta: "Qual é o conceito legal de insalubridade segundo a CLT?",
    alternativaA: "Exposição a agentes nocivos à saúde.",
    alternativaB: "Condições adequadas de trabalho.",
    alternativaC: "Ausência de riscos no ambiente de trabalho.",
    alternativaD: "Prevenção de acidentes de trabalho.",
    correta: "Exposição a agentes nocivos à saúde.",
}
const q2 = {
    numQuestao: 2 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "O que acontece quando é comprovado o exercício de trabalho em condições insalubres?",
    alternativaA: "O empregado recebe uma promoção.",
    alternativaB: "O empregado recebe um adicional de 20% sobre o salário mínimo.",
    alternativaC: "O empregado recebe um adicional de 30% sobre o salário base. ",
    alternativaD: "O empregado recebe um adicional de acordo com o grau de insalubridade.",
    correta: "O empregado recebe um adicional de acordo com o grau de insalubridade.",
}
const q3 = {
    numQuestao: 3 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "O que acontece se houver mais de um fator de insalubridade?",
    alternativaA: "São somados os graus de insalubridade.",
    alternativaB: "São considerados todos os fatores de insalubridade cumulativamente.",
    alternativaC: "A insalubridade é eliminada ou neutralizada.",
    alternativaD: "É considerado apenas o fator de grau mais elevado para efeito de acréscimo salarial.",
    correta: "É considerado apenas o fator de grau mais elevado para efeito de acréscimo salarial.",
}
const q4 = {
    numQuestao: 4,
    imagem: '4.png', // ADICIONE
    pergunta: "Como é determinada a eliminação ou neutralização da insalubridade?",
    alternativaA: "Por meio de medidas de ordem geral que conservam o ambiente de trabalho dentro dos limites de tolerância.",
    alternativaB: "Por meio da utilização de equipamentos de proteção individual ao trabalhador que diminuem a intensidade do agente agressivo a limites de tolerância.",
    alternativaC: "Por meio de avaliação pericial por órgão competente.",
    alternativaD: "Por meio da notificação das empresas pelas Delegacias Regionais do Trabalho.",
    correta: "Por meio da utilização de equipamentos de proteção individual ao trabalhador que diminuem a intensidade do agente agressivo a limites de tolerância.",
}
const q5 = {
    numQuestao: 5,
    imagem: '5.png', // ADICIONE
    pergunta: "Quais critérios são adotados pelo Ministério do Trabalho na aprovação do quadro de atividades insalubres?",
    alternativaA: "Critérios de caracterização da insalubridade, limites de tolerância aos agentes agressivos, meios de proteção e tempo máximo de exposição.",
    alternativaB: "Critérios de avaliação dos riscos ambientais, procedimentos de segurança, medidas de prevenção e controle.",
    alternativaC: "Critérios de remuneração dos trabalhadores, carga horária de trabalho, benefícios trabalhistas e férias.",
    alternativaD: "Critérios de seleção de pessoal, treinamento de funcionários, políticas de saúde e segurança no trabalho.",
    correta: "Critérios de caracterização da insalubridade, limites de tolerância aos agentes agressivos, meios de proteção e tempo máximo de exposição.",
}
const q6 = {
    numQuestao: 6 + '.',
    imagem: '1.png', // ADICIONE
    pergunta: "Quais são as medidas de controle de ruído sugeridas para reduzir o nível de emissão de ruído de máquinas e equipamentos?",
    alternativaA: "Instalar motores e transmissões elétricas mais silenciosas.",
    alternativaB: "Evitar ou reduzir o choque entre os componentes das máquinas.",
    alternativaC: "Substituir partes metálicas por partes plásticas, mais silenciosas.",
    alternativaD: "Todas as opções anteriores.",
    correta: "Todas as opções anteriores.",
}
const q7 = {
    numQuestao: 7 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "Como deve ser avaliada a exposição ao calor?",
    alternativaA: "Através do Índice de Bulbo Úmido Termômetro de Globo (IBUTG).",
    alternativaB: "Através da temperatura de bulbo úmido natural.",
    alternativaC: "Através da temperatura de globo.",
    alternativaD: "Através da temperatura de bulbo seco.",
    correta: "Através do Índice de Bulbo Úmido Termômetro de Globo (IBUTG).",
}
const q8 = {
    numQuestao: 8 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "O que são considerados tempos de serviço para todos os efeitos legais no regime de trabalho intermitente com períodos de descanso no próprio local de prestação de serviço?",
    alternativaA: "Os tempos de exposição ao calor.",
    alternativaB: "Todos os tempos de trabalho e descanso.",
    alternativaC: "Os tempos de descanso no local de trabalho.",
    alternativaD: "Os tempos de descanso em outro local.",
    correta: "Todos os tempos de trabalho e descanso.",
}
const q9 = {
    numQuestao: 9,
    imagem: '4.png', // ADICIONE
    pergunta: "Quais atividades estão sujeitas ao adicional de periculosidade?",
    alternativaA: "Armazenamento de explosivos",
    alternativaB: "Transporte de explosivos",
    alternativaC: "Todas as alternativas estão corretas.",
    alternativaD: "Verificação de denotações falhadas",
    correta: "Todas as alternativas estão corretas.",
}
const q10 = {
    numQuestao: 10,
    imagem: '5.png', // ADICIONE
    pergunta: "O que é uma Doença do trabalho.",
    alternativaA: "Doença produzida ou desencadeada pelo exercício do trabalho peculiar a determinada atividade e constante da respectiva relação elaborada pelo Ministério do Trabalho e da Previdência Social",
    alternativaB: "Doença produzida ou desencadeada pelo exercício do trabalho peculiar a determinada atividade e sem a respectiva relação elaborada pelo Ministério do Trabalho e da Previdência Social",
    alternativaC: "Doença adquirida ou desencadeada em função de condições  especiais em que o trabalho é realizado e com ele se relacione diretamente.",
    alternativaD: "Doença adquirida ou desencadeada em função de condições  especiais em que o trabalho é realizado e com ele se relacione diretamente ou indiretamente.",
    correta: "Doença adquirida ou desencadeada em função de condições  especiais em que o trabalho é realizado e com ele se relacione diretamente.",
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
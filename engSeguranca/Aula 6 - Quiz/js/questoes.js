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
    pergunta: "Quais os requisistos estabelecidos pela norma regulamentadora NR 10?",
    alternativaA: "Estabelece requisitos mínimos para a prevenção de acidentes e doenças do trabalho nas fases de projeto e de utilização de máquinas e equipamentos de todos os tipos",
    alternativaB: "Estabelece requisitos mínimos para gestão da integridade estrutural de caldeiras a vapor, vasos de pressão e suas tubulações de interligação nos aspectos relacionados à instalação, inspeção, operação e manutenção, visando à segurança e à saúde dos trabalhadores.",
    alternativaC: "Estabelece os requisitos e condições mínimas objetivando a implementação de medidas de controle e sistemas preventivos, de forma a garantir a segurança e a saúde dos trabalhadores que, direta ou indiretamente, interajam em instalações elétricas e serviços com eletricidade.",
    alternativaD: "Estabelece diretrizes e requisitos para o desenvolvimento do Programa de Controle Médico de Saúde Ocupacional nas organizações, com o objetivo de proteger e preservar a saúde de seus empregados em relação aos riscos ocupacionais, conforme avaliação de riscos do Programa de Gerenciamento de Risco da organização.",
    correta: "Estabelece os requisitos e condições mínimas objetivando a implementação de medidas de controle e sistemas preventivos, de forma a garantir a segurança e a saúde dos trabalhadores que, direta ou indiretamente, interajam em instalações elétricas e serviços com eletricidade.",
}
const q2 = {
    numQuestao: 2 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "Com base no uso de normas e recomendações técnicas. Assinale a sequência obrigatória para uso em procedimentos técnicos",
    alternativaA: "1°) Normas internacionais, 2°) Normas oficiais NR’s e NBR’s, 3°) Definições do responsável técnico.",
    alternativaB: "1°) Normas oficiais NR’s e NBR’s, 2°) Normas internacionais, 3°) Recomendações dos fabricantes.",
    alternativaC: "1°) Normas internacionais, 2°) Normas oficiais NR’s e NBR’s, 3°) Recomendações dos fabricantes.",
    alternativaD: "1°) Normas oficiais NR’s e NBR’s, 2°) Normas internacionais, 4°) Definições do responsável técnico que possa emitir art.",
    correta: "1°) Normas oficiais NR’s e NBR’s, 2°) Normas internacionais, 3°) Recomendações dos fabricantes.",
}
const q3 = {
    numQuestao: 3 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "Qual NBRs não é uma norma utilizadas em instalações elétricas?",
    alternativaA: "NBR 15417",
    alternativaB: "NBR 14039",
    alternativaC: "NBR 8222",
    alternativaD: "NBR 5410",
    correta: "NBR 15417",
}
const q4 = {
    numQuestao: 4,
    imagem: '4.png', // ADICIONE
    pergunta: "Os acidentes em instalações elétricas acontecem normalmente por alguns motivos. Assinale a afirmativa incorreta.",
    alternativaA: "Falta de conhecimento, Falha no treinamento, Praticas inadequadas",
    alternativaB: "Ambiente de trabalho cheio de riscos, Falha na supervisão, Falta de conhecimento",
    alternativaC: "Falha no treinamento, Práticas inadequadas de trabalho, Manutenção ruim",
    alternativaD: "Instalações precárias, Falta de supervisão, instalações adequadas",
    correta: "Instalações precárias, Falta de supervisão, instalações adequadas",
}
const q5 = {
    numQuestao: 5,
    imagem: '5.png', // ADICIONE
    pergunta: "Qual a sequência correta de um sistema de instalação eletrica da geração a distribuição de energia. Assinale a afirmativa correta.",
    alternativaA: "Usina geradora, estação elevador de tensão, estação rebaixadora, subestação, grandes consumidores",
    alternativaB: "Usina geradora, estação elevador de tensão, subestação, estação rebaixadora, transformador, pequenos consumidores.",
    alternativaC: "Usina geradora, estação elevador de tensão, estação rebaixadora, transformador, subestação, pequenos consumidores.",
    alternativaD: "Usina geradora, estação elevador de tensão, estação rebaixadora, subestação, transformador, grandes consumidores",
    correta: "Usina geradora, estação elevador de tensão, estação rebaixadora, subestação, grandes consumidores",
}
const q6 = {
    numQuestao: 6 + '.',
    imagem: '1.png', // ADICIONE
    pergunta: "Com relação a alta tensão, baixa tensão e extrabaixa tensão. Qual classificação está incorreta?",
    alternativaA: "Alta Tensão - tensão superior a 800 VAC ou 1500 VCC, Baixa Tensão – tensão superior a 50 VCA ou 120 VCC, Extrabaixa Tensão – tensão não superior a 50 VCA ou 120 VCC.",
    alternativaB: "Alta Tensão - tensão superior a 1500 VAC ou 1000 VCC, Baixa Tensão – tensão superior a 50 VCA ou 120 VCC, Extrabaixa Tensão – tensão não superior a 50 VCA ou 120 VCC.",
    alternativaC: "Alta Tensão - tensão superior a 1000 VAC ou 1500 VCC, Baixa Tensão – tensão superior a 50 VCA ou 120 VCC, Extrabaixa Tensão – tensão não superior a 50 VCA ou 120 VCC.",
    alternativaD: "Alta Tensão - tensão superior a 1000 VAC ou 1500 VCC, Baixa Tensão – tensão superior a 50 VCA ou 200 VCC, Extrabaixa Tensão – tensão não superior a 50 VCA ou 120 VCC.",
    correta: "Alta Tensão - tensão superior a 1000 VAC ou 1500 VCC, Baixa Tensão – tensão superior a 50 VCA ou 120 VCC, Extrabaixa Tensão – tensão não superior a 50 VCA ou 120 VCC.",
}
const q7 = {
    numQuestao: 7 + '.',
    imagem: '2.png', // ADICIONE
    pergunta: "Das medidas de controle em instalações elétricas. Assinale a alternativa correta.",
    alternativaA: "Desenergização, tensão de segurança, isolação das partes vivas, obstáculos, barreiras, sinalização, seccionamento automático de alimentação, bloqueio religamento automático.",
    alternativaB: "Desenergização, ausência de tensão de segurança, isolação das partes vivas, obstáculos, barreiras, sinalização, seccionamento automático de alimentação, bloqueio religamento automático.",
    alternativaC: "Desenergização, tensão de segurança, isolação de periféricos, obstáculos, barreiras, sinalização, seccionamento automático de alimentação, bloqueio religamento automático.",
    alternativaD: "Desenergização, aterramento de extrabaixa tensão, isolação das partes vivas, obstáculos, barreiras, sinalização, seccionamento automático de alimentação, bloqueio religamento automático.",
    correta: "Desenergização, tensão de segurança, isolação das partes vivas, obstáculos, barreiras, sinalização, seccionamento automático de alimentação, bloqueio religamento automático.",
}
const q8 = {
    numQuestao: 8 + '.',
    imagem: '3.png', // ADICIONE
    pergunta: "Com relação a riscos elétricos e as principais sugestões. Assinale a afirmativa correta.",
    alternativaA: "Choque elétrico - não possuir implantes eletrônicos no corpo e / ou próteses metálicas, blindagens. Arco Elétrico - protetor facial e vestimenta. Campo Eletromagnéticos - desenergização, tensão de  segurança, barreiras, invólucros,  luvas, bota de segurança, capacete.",
    alternativaB: "Choque elétrico - desenergização, tensão de  segurança, barreiras, invólucros,  luvas, bota de segurança, capacete. Arco Elétrico - protetor facial e vestimenta. Campo Eletromagnéticos - não possuir implantes eletrônicos no corpo e / ou próteses metálicas, blindagens.",
    alternativaC: "Choque elétrico - desenergização, tensão de  segurança, barreiras, invólucros,  luvas, bota de segurança, capacete. Arco Elétrico - não possuir implantes eletrônicos no corpo e / ou próteses metálicas, blindagens. Campo Eletromagnéticos - rotetor facial e vestimenta.",
    alternativaD: "Choque elétrico - protetor facial e vestimenta. Arco Elétrico - desenergização, tensão de  segurança, barreiras, invólucros,  luvas, bota de segurança, capacete. Campo Eletromagnéticos - não possuir implantes eletrônicos no corpo e / ou próteses metálicas, blindagens.",
    correta: "Choque elétrico - desenergização, tensão de  segurança, barreiras, invólucros,  luvas, bota de segurança, capacete. Arco Elétrico - protetor facial e vestimenta. Campo Eletromagnéticos - não possuir implantes eletrônicos no corpo e / ou próteses metálicas, blindagens.",
}
const q9 = {
    numQuestao: 9 + '.',
    imagem: '4.png', // ADICIONE
    pergunta: "Conforme o item 10.7.8 da NR-10, que trata de equipamentos destinados ao trabalho de alta tensão, o equipamento que NÃO se enquadra na categoria de itens que precisam ser submetidos a testes elétricos ou ensaios de laboratório periódicos é:",
    alternativaA: "luva de borracha.",
    alternativaB: "protetor auricular.",
    alternativaC: "capacete de segurança.",
    alternativaD: "bastão de manobra.",
    correta: "protetor auricular.",
}
const q10 = {
    numQuestao: 10 + '.',
    imagem: '5.png', // ADICIONE
    pergunta: "Assinale a opção correta em relação à segurança nas instalações elétricas, de acordo com a NR-10.",
    alternativaA: "Se não houver procedimento específico da instituição ou especificações do fabricante em relação a testes e ensaios periódicos para os equipamentos utilizados em alta tensão, esses devem ser realizados anualmente.",
    alternativaB: "Em obra de manutenção em subestação, as responsabilidades quanto ao cumprimento das normas são exclusivas do contratante do serviço de instalação elétrica.",
    alternativaC: "Os serviços em instalações elétricas energizadas de alta tensão podem ser realizados por um único profissional, desde que seguidas as recomendações de segurança.",
    alternativaD: "Entre as medidas de proteção coletiva inclui-se a completa desenergização elétrica, não sendo possível o emprego de tensão de segurança.",
    correta: "Os serviços em instalações elétricas energizadas de alta tensão podem ser realizados por um único profissional, desde que seguidas as recomendações de segurança.",
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
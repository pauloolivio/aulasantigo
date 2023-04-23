let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let palavras = [];
let jogoAutomatico = true;

carregaListaAutomatica();

criarPalavraSecreta();

function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    palavraSecretaExplicacao = palavras[indexPalavra].explicacao;

    // console.log(palavraSecretaSorteada);
}

montarPalavraNaTela();

function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            } else {
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        } else {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            } else {
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla, condicao) {
    if (condicao == false) {
        document.getElementById(tecla).style.background = "#e83c25";
        document.getElementById(tecla).style.color = "#ffffff";
    } else {
        document.getElementById(tecla).style.background = "#5538d6";
        document.getElementById(tecla).style.color = "#ffffff";
    }


}

function comparalistas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0) {
        tentativas--
        carregaImagemForca();

        if (tentativas == 0) {
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada + "<br><br>" + palavraSecretaExplicacao);
            piscarBotaoJogarNovamente(true);
        }
    } else {
        mudarStyleLetra("tecla-" + letra, true);
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("PARABÉNS!", "Você venceu...<br>" + palavraSecretaSorteada + "<br><br>" +
            palavraSecretaExplicacao);
        tentativas = 0;
        piscarBotaoJogarNovamente(true);
    }
}

// async function piscarBotaoJogarNovamente(){
//     while (jogarNovamente == true) {
//         document.getElementById("btnReiniciar").style.backgroundColor = 'red';
//         document.getElementById("btnReiniciar").style.scale = 1.3;
//         await atraso(500)
//         document.getElementById("btnReiniciar").style.backgroundColor = 'yellow';
//         document.getElementById("btnReiniciar").style.scale = 1;
//         await atraso(500)
//     }
// }

async function atraso(tempo) {
    return new Promise(x => setTimeout(x, tempo))
}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function() {
    jogarNovamente = false;
    location.reload();
});

function listaAutomatica() { // ativa o modo manual
    if (jogoAutomatico == true) {
        document.getElementById("jogarAutomatico").innerHTML = "<i class='bx bx-play-circle'></i>"
        palavras = [];
        jogoAutomatico = false;

        document.getElementById("abreModalAddPalavra").style.display = "block";
        document.getElementById("status").innerHTML = "Modo Manual";
    } else if (jogoAutomatico == false) { // ativa o modo automático
        document.getElementById("jogarAutomatico").innerHTML = "<i class='bx bx-pause-circle'></i>"
        jogoAutomatico = true;

        document.getElementById("abreModalAddPalavra").style.display = "none";
        document.getElementById("status").innerHTML = "Modo Automático";

    }
}

const modal = document.getElementById("modal-alerta");

const btnAbreModal = document.getElementById("abreModalAddPalavra");
btnAbreModal.onclick = function() {
    modal.style.display = "block";
}

const btnFechaModal = document.getElementById("fechaModal");
btnFechaModal.onclick = function() {
    modal.style.display = "none";
    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = "";
    document.getElementById("addExplicacao").value = "";
}

window.onclick = function() {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("addPalavra").value = "";
        document.getElementById("addCategoria").value = "";
        document.getElementById("addExplicacao").value = "";
    }
}

function carregaListaAutomatica() {
    palavras = [
        palavra001 = {
            nome: "RISCO OU PERIGO",
            categoria: "FUNDAMENTOS BÁSICOS",
            explicacao: "Risco é a probabilidade ou chance de lesão  ou morte. <br> Perigo é uma condição ou um conjunto de circunstâncias que têm o potencial de causar ou contribuir para uma lesão ou morte"
        },
        palavra002 = {
            nome: "ATO INSEGURO",
            categoria: "FUNDAMENTOS BÁSICOS",
            explicacao: "É quando a pessoa se expõe ao perigo,  pode se de forma consciente, inconsciente ou  circunstancial",
        },
        palavra003 = {
            nome: "CONDIÇÃO INSEGURA",
            categoria: "FUNDAMENTOS BÁSICOS",
            explicacao: "É o ambiente físico de trabalho  que expõe a perigo ou risco a integridade física do  trabalhador e a própria segurança das instalações e  equipamentos"
        },
        palavra004 = {
            nome: "QUASE ACIDENTES",
            categoria: "FUNDAMENTOS BÁSICOS",
            explicacao: "São  ocorrências que apresentam características e potencial para causar algum dano, mas que não  chegam a fazê-lo, de forma a não deixarem marcas como os acidentes"
        },
        palavra005 = {
            nome: "ERGONOMIA FÍSICA",
            categoria: "NR17",
            explicacao: "Ocupa-se das características da anatomia humana, antropometria, fisiologia e biomecânica, relacionados com a atividade física."
        },
        palavra006 = {
            nome: "ERGONOMIA COGNITIVA",
            categoria: "NR17",
            explicacao: "Ocupa-se dos processos mentais, como a percepção, memória, raciocínio e resposta motora, relacionados com as interações entre as pessoas e outros elementos de um sistema."
        },
        palavra007 = {
            nome: "ERGONOMIA ORGANIZACIONAL",
            categoria: "NR17",
            explicacao: "Ocupa-se da otimização dos sistemas sócio-técnicos, abrangendo as estruturas organizacionais, políticas e processos."
        },
        palavra008 = {
            nome: "POSTURA NO TRABALHO",
            categoria: "NR17",
            explicacao: "Ergonomia Física ocupa-se das características da anatomia humana, antropometria, fisiologia e biomecânica, relacionados com a atividade física.",
        },
        palavra009 = {
            nome: "MOVIMENTOS REPETITIVOS",
            categoria: "NR17",
            explicacao: "Ergonomia Física ocupa-se das características da anatomia humana, antropometria, fisiologia e biomecânica, relacionados com a atividade física.",
        },
        palavra010 = {
            nome: "MÚSCULO ESQUELÉTICO",
            categoria: "NR17",
            explicacao: "DISTURBIO MÚSCULO ESQUELÉTICO - A Ergonomia Física ocupa-se das características da anatomia humana, antropometria, fisiologia e biomecânica, relacionados com a atividade física.",
        },

        palavra011 = {
            nome: "ERRO DE PERCEPÇÃO",
            categoria: "FUNDAMENTOS BÁSICOS",
            explicacao: "são obstáculos mentais que nos impedem de perceber claramente o problema ou a informação necessária para resolvê-lo.",
        },

        palavra012 = {
            nome: "ERRO DE DECISÃO",
            categoria: "FUNDAMENTOS BÁSICOS",
            explicacao: "São erros gerados por uma tomada de descisão errada, que podem ser ocasionadas por: incompetência, desatenção, falta de treinamentos, corrupção.",
        },

        palavra013 = {
            nome: "ERRO DE AÇÃO",
            categoria: "FUNDAMENTOS BÁSICOS",
            explicacao: "Quando a ação realizada não gera o benefício esperado. Algumas vezes a necessidade de tomar uma ação rápida para um problema em questão pode vir de uma tomada descisão precoce ocasionadas por: incompetência, desatenção, falta de treinamentos, corrupção.",
        },

        palavra014 = {
            nome: "ERRO DE AÇÃO",
            categoria: "FUNDAMENTOS BÁSICOS",
            explicacao: "Quando a ação realizada não gera o benefício esperado. Algumas vezes a necessidade de tomar uma ação rápida para um problema em questão pode vir de uma tomada descisão precoce ocasionadas por: incompetência, desatenção, falta de treinamentos, corrupção.",
        },

        palavra015 = {
            nome: "SEGURANÇA NO TRABALHO",
            categoria: "FUNDAMENTOS BÁSICOS",
            explicacao: "Está relacionada a acidentes, condições perigosas; incidentes; erro humano; incêndios; eletricidade; ferramentas; controle e agentes mecânicos diversos.",
        },

        palavra016 = {
            nome: "HIGIENE OCUPACIONAL",
            categoria: "FUNDAMENTOS BÁSICOS",
            explicacao: "Está relacionada a doenças do trabalho e doencas ocupacionais geradas por agentes físicos, químicos, biológicos e ergonômicos.",
        },

        palavra017 = {
            nome: "PRODUTIVIDADE",
            categoria: "FUNDAMENTOS BÁSICOS",
            explicacao: "Melhorias envolvendo a segurança e higiene do trabalho podem levar a redução de acidentes e aumento da produtividade. Exemplos de melhorias: iluminação, conforto termico, equipamentos de segurança, etc.",
        }
    ];
}

function adicionarPalavra() {
    let addPalavra = document.getElementById("addPalavra").value.toUpperCase();
    let addCategoria = document.getElementById("addCategoria").value.toUpperCase();

    if (isNullOrWhiteSpace(addPalavra) || isNullOrWhiteSpace(addCategoria) || addPalavra.length < 3 || addCategoria.length < 3) {
        abreModal("ATENÇÃO", " Palavra e/ou Categoria inválidos");
        return;
    }

    let palavra = {
        nome: addPalavra,
        categoria: addCategoria,
        explicacao: addExplicacao
    }

    palavras.push(palavra);
    sortear();

    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = "";
}

function isNullOrWhiteSpace(input) {
    return !input || !input.trim();
}

function sortear() {
    if (jogoAutomatico == true) {
        location.reload();
    } else {
        if (palavras.length > 0) {
            listaDinamica = [];
            criarPalavraSecreta();
            montarPalavraNaTela();
            resetaTeclas();
            tentativas = 6;
            piscarBotaoJogarNovamente(false);
        }
    }
}

function resetaTeclas() {
    let teclas = document.querySelectorAll(".teclas > button")
    teclas.forEach((x) => {
        x.style.background = "#FFFFFF";
        x.style.color = "#8B008B";
        x.disabled = false;
    });
}


async function piscarBotaoJogarNovamente(querJogar) {
    if (querJogar) {
        document.getElementById("jogarNovamente").style.display = "block";
    } else {
        document.getElementById("jogarNovamente").style.display = "none";
    }
}
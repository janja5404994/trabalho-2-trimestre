const caixaPrincipal= document.querySelector("caixaPrincipal")
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
   enunciado: "uma mulher indigena, casada com o pajé, sai para lavar roupas no rio e se depara com o boto cor de rosa que tenta a seduzir.",
   alternativas: [
   texto: "ela é seduzida pelo boto e acaba engravidando",
    afirmacao: "ela recusa o boto e ele a sequestra"
   ]
    },
    {
        enunciado: "o pajé enfurecido vai atras do boto para mata-lo",
        alternativas: [
           texto: "ela foge com o boto e os dois criam o bebe",
           afirmacao: "ela ajuda o pajé a matar o boto e o pajé cria a criança como dele "
        ]
    },
    {
        enunciado: "o pajé enfurecido vai atras do boto para mata-lo",
        alternativas: [
            texto:"ela ajuda o pajé a matar o boto e ele a leva para casa",
            afirmacao:"eles lutam mas a mulher insiste para que o boto fique vivo para pagar pensao"
        ]
    }
]; 
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

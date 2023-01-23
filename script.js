
console.log('cassino')

let creditoVisual = document.getElementById('credit');
let credito = 1000;
let multiplicadorInicial = document.getElementById('multiplicador-inicial');
let multiplicadorAtual = multiplicadorInicial.value = 1;
let incremento = 0.01;
let existeAposta = false;
let podeApostar;
let valor = document.getElementById('valor-de-aposta');
let btnConfirmaAposta = document.getElementById('confirma-aposta1');
let hitou = false;
let click = true;
let randomNumber = Math.random() * 100;
let resultadoFinal;

//variável referente a quantidade de millisegundos da variavel intervalo
const velocidadePadrao = 100;

//objeto referente ao jogo e funcionalidades
const game = {

    start(){
        if(hitou == false){
            multiplicadorAtual =  multiplicadorAtual += incremento
            multiplicadorInicial.innerText =  multiplicadorAtual.toFixed(2) + "X"      
            resultadoFinal = multiplicadorAtual
        }
        if(existeAposta){
            btnConfirmaAposta.innerText = 'RETIRAR'
        }
     },

    random (){
        let hitNumber = Math.random() * 180
            if(hitNumber < randomNumber && hitou == false){
                hitou = true;
                podeApostar = true;
                clearInterval(intervalo)
                btnConfirmaAposta.innerText = 'BET'
                btnConfirmaAposta.style.backgroundColor = 'rgb(24, 248, 43)'
                aposta.decolou();
                game.reset();
                confirmaAposta = false
            }         
    },

    reset(){
        setTimeout(() => {
            intervalo = setInterval(game.start, velocidadePadrao);
            multiplicadorAtual = 1;
            hitou = false;
            podeApostar = false;
        }, 8000);
    },

    iniciaGame(){
        this.start
        this.random
        },
}   

//Objeto referente as apostas
const aposta = {

    encerrarAposta(){
        credito = credito + valor.value * multiplicadorAtual
        credito.toFixed(2)
        creditoVisual.innerText = `${credito}$`
        btnConfirmaAposta.innerText = 'RETIRADO!'
        console.log(`aposta encerrada com sucesso! retorno: ${valor.value*multiplicadorAtual}R$`)
        Vela(multiplicadorAtual)
        this.resetaAposta()
    },

    decolou(){
        if(existeAposta && hitou){
            existeAposta = false;
            creditoVisual.innerText = `${credito}`
            console.log('você perdeu!')
            console.log('seu saldo atua é de:', credito)
            Vela(multiplicadorAtual)
            this.resetaAposta
            }
             else if (existeAposta == false && hitou){
                existeAposta = false;
                creditoVisual.innerText = `${credito}`
                Vela(multiplicadorAtual)
                this.resetaAposta
            }
    },

    resetaAposta(){
        valorApostado = 0;
    },

    criarAposta(){
        if(podeApostar){
            mudaEscritaDoBotao()
            creditoVisual.innerText = `${credito}R$`
            let valorApostado = valor.value
            let novaAposta = new Registra(valorApostado) 
        } else  if(podeApostar == false && existeAposta){
            aposta.encerrarAposta()
            existeAposta = false;
        }
    },
}

//uma das funções resposáveis por mudar o visual e a funcionalidade do botão principal
function mudaEscritaDoBotao(){
    if(click){
        btnConfirmaAposta.innerText = 'AGUARDE'
        btnConfirmaAposta.style.backgroundColor = 'rgb(236, 144, 57)'
    }
}

//função que serve de molde pra criar as apostas
function Registra (valor){
    this.valordeAposta = valor;
    if(this.valordeAposta > 2 && this.valordeAposta <= credito && existeAposta == false){
        credito = credito - this.valordeAposta
        creditoVisual.innerText = `${credito} R$`
        existeAposta = true;
        console.log("sua aposta foi feita no seguinte valor:", this.valordeAposta, "R$")     
    }
    else{
        console.log('ERRO!! tente denovo')
    }
}

//essa função atualiza a quantidade de créditos disponivéis ao entrar na página
function atualizaCreditoAoIniciar(){
    creditoVisual.innerText = `${credito},00 R$`
}
atualizaCreditoAoIniciar();

function Vela(multiplicador){
    if(historicoDeVelas.length < 20){
        if(multiplicador <= 2){
            this.multi = multiplicador;
            this.multiplicadorFinal = multi.toFixed(2)
            guardaVelas(this.multiplicadorFinal)
            let divVelas = document.getElementById('velas')
            let primeiraVela = divVelas.firstChild
            let novaVela = document.createElement("button")
            novaVela.setAttribute('class', "vela-baixa")
            novaVela.innerHTML = this.multiplicadorFinal;
            divVelas.insertBefore(novaVela, primeiraVela)
        }     
        else if(multiplicador > 2 && multiplicador <=5){
            this.multi = multiplicador;
            this.multiplicadorFinal = multi.toFixed(2)
            guardaVelas(this.multiplicadorFinal)
            let divVelas = document.getElementById('velas')
            let primeiraVela = divVelas.firstChild
            let novaVela = document.createElement("button")
            novaVela.setAttribute('class', "vela-media")
            novaVela.innerHTML = this.multiplicadorFinal; 
            divVelas.insertBefore(novaVela, primeiraVela) 
        }
        else{
            this.multi = multiplicador;
            this.multiplicadorFinal = multi.toFixed(2)
            guardaVelas(this.multiplicadorFinal)
            let divVelas = document.getElementById('velas')
            let primeiraVela = divVelas.firstChild
            let novaVela = document.createElement("button")
            novaVela.setAttribute('class', "vela-alta")
            novaVela.innerHTML = this.multiplicadorFinal;
            divVelas.insertBefore(novaVela, primeiraVela)
        }
    }
}

function guardaVelas(multiplicador){
    this.vela = multiplicador;
    historicoDeVelas.push(vela)
    console.log(historicoDeVelas)
}

let historicoDeVelas = []

//variável que guarda o setInterval da função start, portante responsável por "atualizar" o jogo
let intervalo = setInterval(game.start, velocidadePadrao)

//constante que guarda o setInterval da função random
const verificacao = setInterval(game.random, Math.random() * 4000)


window.addEventListener('load', game.iniciaGame)
btnConfirmaAposta.addEventListener('click', aposta.criarAposta)
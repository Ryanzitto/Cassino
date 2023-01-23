
console.log('cassino')

let creditoVisual = document.getElementById('credit')
let credito = 1000.00;

let multiplicadorInicial = document.getElementById('multiplicador-inicial');
let incremento = 0.01
let multiplicadorAtual = multiplicadorInicial.value = 1

const velocidadePadrao = 100
const velocidadeDobrada = 50
const valocidadeMega = 10

let existeAposta = false;
let podeApostar 
let valor = document.getElementById('valor-de-aposta')
let btnConfirmaAposta = document.getElementById('confirma-aposta1')

let hitou = false;
let click = true;

let randomNumber = Math.random() * 100
let resultadoFinal


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
                game.reset();
                aposta.decolou();
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

const aposta = {

    encerrarAposta(){
        credito = credito + valor.value * multiplicadorAtual
        creditoVisual.innerText = `${credito} R$`
        btnConfirmaAposta.innerText = 'RETIRADO!'
        console.log(`aposta encerrada com sucesso! retorno: ${valor.value*multiplicadorAtual} R$`)
        this.resetaAposta()
    },

    decolou(){
        if(existeAposta && hitou){
            existeAposta = false;
            creditoVisual.innerText = `${credito} R$`
            this.resetaAposta
            console.log('você perdeu!')
            console.log('seu saldo atua é de:', credito)
            valor.value = ''
            btnConfirmaAposta.innerText = 'BET'
            
        }
    },

    resetaAposta(){
        valorApostado = 0;
    },

    criarAposta(){
        if(podeApostar){
            mudaEscritaDoBotao()
            creditoVisual.innerText = `${credito}`
            let valorApostado = valor.value
            let novaAposta = new Registra(valorApostado) 
        } else  if(podeApostar == false && existeAposta){
            aposta.encerrarAposta()
            existeAposta = false;
        }
    },
}

function mudaEscritaDoBotao(){
    if(click){
        btnConfirmaAposta.innerText = 'AGUARDE'
    }
}

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

function atualizaCreditoAoIniciar(){
    creditoVisual.innerText = `${credito} R$`
}

atualizaCreditoAoIniciar();

let intervalo = setInterval(game.start, velocidadePadrao)
const verificacao = setInterval(game.random, Math.random() * 4000)

window.addEventListener('load', game.iniciaGame)
btnConfirmaAposta.addEventListener('click', aposta.criarAposta)
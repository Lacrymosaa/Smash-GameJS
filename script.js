var altura =  0
var largura = 0
var vidas = 1
var tempo = 10

var tempocriar = 2000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    tempocriar = 2000
} else if(nivel === 'dificil') {
    tempocriar = 1200
} else if(nivel === 'hardcore') {
    tempocriar = 750
}

function ajustaTamanho() {
    altura =  window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanho()

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000)

function posRandom() {  
    //Remover anterior caso existe
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        if(vidas > 3){
            window.location.href = 'end_game.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }
        
    }
    
    
    // Define X,Y aonde a imagem será implementada usando os parametros de altura e largura da página e subtraindo 90 para imagem não sair da area desejada
    var posX = Math.floor(Math.random() * largura) - 90
    var posY = Math.floor(Math.random() * altura) - 90

    // Impede que números sejam negativos durante o -90, ajustando a posição para 0 caso ela seja menor que 0
    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY 

    // Implementa aleatóriamente o mosquito utilizando as especificações anteriores e aplicando o CSS automáticamente.
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamRandom() + ' ' + sideRandom()//recebe classe de tamanho aleatória criado na função
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamRandom() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function sideRandom() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'     
    }
}



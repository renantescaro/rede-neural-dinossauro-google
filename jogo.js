var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var yPlayer = 450
var xPlayer = 50

var alturaObstaculo = numeroAleatorio()
var xObstaculo = canvas.width
var yObstaculo = 450
var pulando = false
var velocidade = 1

function desenhar(){

    if(xObstaculo <= 0){
        // alturaObstaculo = numeroAleatorio()
        xObstaculo = canvas.width
    }

    xObstaculo -= 1*velocidade

    colidir()

    pular()

    ctx.beginPath()

    // personagem
    ctx.fillStyle='rgba(255,0,0,10)'
    ctx.fillRect(xPlayer, yPlayer, 50, 50)
    ctx.fill()

    // chão
    ctx.fillStyle='rgba(100,100,100,10)'
    ctx.fillRect(0, 500, 1000, 100)
    ctx.fill()

    // obstaculo
    ctx.fillStyle='rgba(0,100,0,10)'
    ctx.fillRect(xObstaculo, yObstaculo, 50, 50)
    ctx.fill()


    // fundo
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(desenhar)
}

function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;

    return String.fromCharCode(key)
}

document.onkeypress = function(evt){
    
    var str = keyPressed()

    if(str == ' '){
        if(yPlayer >= 450){
            pulando = true
        }
    }
}

function colidir(){
    if(yPlayer == yObstaculo && xPlayer >= (xObstaculo-45)){
        alert('morte!')
    }
}

function pular(){
    if(pulando == true){
        if(yPlayer < 200){
            pulando = false
        }else{
            yPlayer -= 30
        }
    }

    if(yPlayer < 450){
        yPlayer += 10
    }

    if(yPlayer == 450){
        pulando = false
    }
}

function numeroAleatorio(){
    var num = Math.floor((Math.random() * 300) + 50)

    console.log(num)

    return num
}

setInterval(function(){
    velocidade++
},2000)

desenhar()
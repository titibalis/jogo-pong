let altura = 400
let largura = 500
let xbolinha = 200
let ybolinha = 200
let xraquete = 5
let yraquete = altura/2
let xraqueteop = 490
let yraqueteop = altura/2
let raquetelarg = 8
let raquetealt = 120
let diametro = 29
let raio = diametro/2
let xvelocidade = 5
let yvelocidade = 5
let yvelocidadeop;
let colidiu = false 
let minhapontuacao = 0
let pontuacaoop = 0

function setup() {
  createCanvas(largura, altura);
}

function draw() {
  background(0);
  createcircle();
  movimentobolinha();
  batevolta();
  criaraquete();
  sobedesce();
  colisaoraquete();
  criarraqueteop();
  movimentoop();
  colisaoraqueteop();
  criaplacar();
  marcaponto();
}

  function createcircle() {
    circle(xbolinha,ybolinha,diametro)}
function movimentobolinha(){xbolinha += xvelocidade
ybolinha += yvelocidade}
function batevolta(){
if (xbolinha + raio > largura || xbolinha -raio < 0)
xvelocidade *= -1
if (ybolinha + raio > altura || ybolinha - raio < 0)
yvelocidade *= -1  }
 function criaraquete() {rect (xraquete,yraquete,raquetelarg,raquetealt)}
 function sobedesce () {if(keyIsDown(UP_ARROW))
    yraquete -= 10  
  if(keyIsDown(DOWN_ARROW))
    yraquete += 10
}
function colisaoraquete () {if (xraquete + raquetelarg > xbolinha- raio  &&
     ybolinha - raio < yraquete + raquetealt &&
    ybolinha + raio > yraquete )
    xvelocidade *= -1}
function criarraqueteop (){
  rect(xraqueteop,yraqueteop,raquetelarg,raquetealt)
}
function movimentoop(){
  yvelocidadeop = ybolinha - yraqueteop - raquetelarg/2 - 110
  yraqueteop += yvelocidadeop
}
function colisaoraqueteop(){
   colidiu = collideRectCircle(xraqueteop, yraquete, raquetelarg, raquetealt, xbolinha, ybolinha, diametro)
  if (colidiu)
    xvelocidade *= -1
}
function criaplacar(){
  fill(color(255, 51,153))
  rect(90,8,30, 30)
  rect(330, 8, 30,30)
  fill(255)
  text(pontuacaoop, 340, 26)
  fill(255)
  textSize(20)
  text(minhapontuacao, 100, 26)
  
  

}
  function marcaponto(){
    if (xbolinha < 15)
    pontuacaoop += 1
    if (xbolinha > 490)
      minhapontuacao += 1
}


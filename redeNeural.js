const { Layer, Network } = window.synaptic

// Quantidade de neuronios por camada
var camadaEntrada = new Layer(2)
var camadaOculta = new Layer(3)
var camadaSaida = new Layer(1)

// conecta as camadas formando a rede
camadaEntrada.project(camadaOculta)
camadaOculta.project(camadaSaida)

var rede = new Network({
  input: camadaEntrada,
  hidden: [camadaOculta],
  output: camadaSaida
})

var taxaAprendizagem = .3

for (var i = 0; i < 20000; i++) {

  rede.activate([0,0]) // 0,0 => 0
  rede.propagate(taxaAprendizagem, [0])
  rede.activate([0,1]) // 0,1 => 1
  rede.propagate(taxaAprendizagem, [1])
  rede.activate([1,0]) // 1,0 => 1
  rede.propagate(taxaAprendizagem, [1])
  rede.activate([1,1]) // 1,1 => 0
  rede.propagate(taxaAprendizagem, [0])
}

var saidas = document.getElementById('saidas')

saidas.textContent = 
  Math.round(rede.activate([0,0])) + '  ' +
  Math.round(rede.activate([0,1])) + '  ' +
  Math.round(rede.activate([1,0])) + '  ' +
  Math.round(rede.activate([1,1]))


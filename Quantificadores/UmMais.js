const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'The is a big fog in NYC'

// + -> UM ou MAIS
const regex = /fogo+/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os números: 0123456789.'
console.log(texto3.match(/[0-9]/g))   // Pode trocar [0-9] pof \d+
console.log(texto3.match(/[0-9]+/g)) // Pode trocar [0-9]+ pof \d+
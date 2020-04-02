const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'The is a big fog in NYC'

// ? -> ZERO OU UM (OPCIONAL)
const regex = /fogo?/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))
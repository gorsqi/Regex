// . é um coringa, para uma posição
const texto = '1,2,3,4,5,6,7,8,9,0'
console.log('---------TEXTO---------')
console.log(texto.match(/1.2/g))    // Retorna 1,2
console.log(texto.match(/1..2/g))  // Retorna null
console.log(texto.match(/1..,/g)) // Retorna 1,2, 

console.log('---------NOTAS---------')

const notas = '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g))
console.log(notas.match(/.\../g))
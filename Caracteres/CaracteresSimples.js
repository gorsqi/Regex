const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/
console.log(texto.split(regexVirgula)) // Para cada virgula, gera um novo elemento no array
console.log(texto.match(regexVirgula))

console.log('-----------------------')

console.log(texto.match(/,/g))
console.log(texto.match(/A/g))
console.log(texto.match(/A/gi))
console.log(texto.match(/2/g))
console.log(texto.match(/b c!d/g))

const regexVogal = /aeiou/
console.log('---------Vogais---------')
console.log(texto.match(regexVogal))
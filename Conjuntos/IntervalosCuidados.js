const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // Não define um range/conjunto para ser um range/conjunto tem que estar entre []

console.log(texto.match(/[A-z]/)) // Intervalos usam a ordem da tagela UNICODE. Entre A-Z e a-z tem estes [ \ ] ^ _ ` caracteres.

// Tem que respeitar a ordem da tabela UNICODE
// console.log(texto.match(/[a-Z]/g)) // O correto seria [Z-a].
// console.log(texto.match(/[4-1]/g)) // O correto seria [1-4].
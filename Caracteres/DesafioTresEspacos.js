const texto = 'a   b'
// Forma mais simples
console.log(texto.match(/a   b/))
console.log(texto.match(/a\s+b/)) // Se mudar a string adicionando mais espaços encotraria pq + pega quantos for necessários.
console.log(texto.match(/a\s{3}b/))
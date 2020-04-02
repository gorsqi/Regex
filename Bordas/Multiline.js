const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w).+\1$/gi)) // Não pega pq tem quebra de linha.
console.log(texto.match(/^(\w).+\1$/gim)) // O m é uma flag que resolve por usar as bordas de ^ inicio e $ fim.
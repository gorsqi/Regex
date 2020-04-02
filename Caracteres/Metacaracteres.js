// . ? * + - ^ $ [ ] { } ( ) \ : Metacaracteres
const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g
console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g // Encontre , ou . ou ? ou ! ou espaço.
console.log(texto.split(regexSimbolos))
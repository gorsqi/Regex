const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(texto1.match(/<(\w+)>.*\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // ?: Não guarda

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
console.log(texto2.replace(/(lenta)(mente)/gi, '$2')) // Pode inserir 'algo$2aqui'

// Na maioria dos documentos, o limite suportado de retrovisores é 9.
const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g)) // Js conseguiu pegar o 12° conjunto via retrovisor.

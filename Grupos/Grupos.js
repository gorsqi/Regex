const texto1 = 'O José Simão é muito engraçado... hehehehehe'
console.log(texto1.match(/(he)+/g))

const texto2 = 'https://www.site.info www.escola.ninja.br google.com.ag'
console.log(texto2.match(/(https:\/\/)?(w{3}\.)?\w+\.[a-z]+(\.[a-z]+)/g)) // Eu que fiz.
console.log(texto2.match(/(https:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g)) // Resoluçao do instrutor.
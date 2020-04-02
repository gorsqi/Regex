const texto = 'Romário era uma excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/^r.*r$/gi)) // problema do dotall. O ponto não resolve para o \n.

console.log(texto.match(/^r[\s\S]*r$/gi)) // Solução para a limitação do dotall. Troca-se o (.)ponto pelo [\s\S].
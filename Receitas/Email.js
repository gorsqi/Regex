const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sam-paio@yahoo.com
`
console.log('++++++++++++++++++++++++++++++++++++++++++++')
console.log(texto.match(/[\w.-]+@([\w-]+\.)+[a-z]{2,4}/gi)) // Melhorada a partir da expressão do Taq.

console.log('++++++++++++++++++++++++++++++++++++++++++++')
console.log(texto.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g))
console.log('++++++++++++++++++++++++++++++++++++++++++++')
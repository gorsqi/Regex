const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sam-paio@yahoo.com
`

console.log(texto.match(/[a-z0-9_]+@[a-z0-9_]+\.[a-z0-9_]{2,4}/gi))
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))
console.log(texto.match(/[\w.-]+@([\w-]+\.)+[a-z]{2,4}/gi)) // Melhorada a partir da expressão do Taq.
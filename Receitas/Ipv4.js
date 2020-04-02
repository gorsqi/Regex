const texto = `
Inválidos:
192.268.0.1
1.333.0.1
192.168.0.256
256.256.256.256

Válidos:
192.168.0.1
127.0.0.1
10.0.0.255
10.11.12.0
255.255.255.255
0.0.0.0
`
const n = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])' // Para escapar a \ usa-se \\ por estar no constexto de uma string.
const ipv4 = RegExp(`\\b${n}\\.${n}\\.${n}\\.${n}\\b`, 'g')

console.log(texto.match(ipv4))
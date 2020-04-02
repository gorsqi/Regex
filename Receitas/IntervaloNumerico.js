const texto = '0 1 10 192 201 249 255 256 312 1010 1512'

// {1,2} com 1 até 2 digitos. Entre 0 - 99
console.log(texto.match(/\b(\d{1,2})\b/g))

// 1\d{2} que começa com 1 e tenha duas casas decimas. Entre 100 - 199
console.log(texto.match(/\b(1\d{2})\b/g))

// 2[0-4]\d que começa com 2 o digito do meio entre 0-4 e qualquer outro digito. Entre 200 - 249
console.log(texto.match(/\b(2[0-4]\d)\b/g))

// 25[0-5] que começa com 25 e o último número entre 0-5. Entre 250 - 255
console.log(texto.match(/\b(25[0-5])\b/g))

// Juntando as regex acima temos esta abaixo que pega de 0 - 255.
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))
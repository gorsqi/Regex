const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto1.match(/\bdia\w+/gi))    // Começam com dia.
console.log(texto1.match(/\w+dia\b/gi))   // Terminan com dia.
console.log(texto1.match(/\w+dia\w+/gi)) // Que tenha dia no meio.
console.log(texto1.match(/\bdia\b/gi))  // Apenas a  palavra dia.

// Borda é a negação do \w, que é [^A-Za-z0-9_]... temos problemas com acentos!
const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

console.log(texto2.match(/\bdia\b/gi)) // Quando se usa o \b em caracteres unicode a borda(\b) perde o sentido. 
                                      // Pq letras ascentuadas é consideradas como borda. 
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // A vírgula entra!
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))
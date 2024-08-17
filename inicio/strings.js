const escola = "Cod3r"

// essa função pega um detremidado caracterec dentro da string
console.log(escola.charAt(4))
// essa função pega o código do caractere
console.log(escola.charCodeAt(3))
// pega o ince do caractere a partir de uma função 
console.log(escola.indexOf('3'))
//seleciona a partir de qual string você vai querer executar
console.log(escola.substring(1))

console.log(escola.substring(0, 3))
//para concatenar uma string (podendo usar também +)
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + (escola) +"!")

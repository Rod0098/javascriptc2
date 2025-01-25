//criando function de forma literal 
function fun1 () {

}
//armazenado em um avariavel
const fun2 = function () {

}
//armazenar a função dentro de um array
const array = [ function (a , b) {return a + b}, fun1, fun2]
console.log (array[0](2, 3))

//armazenar em um atributo de objeto 
const obj = {}
obj.falar = function () {return 'opa'}
console.log (obj.falar())

//passar função como parametro
function run(fun) {
    fun()
}
run(function () {console.log('executando...')})

//Uma função pode retornar/conter um afunção
function soma(a, b) {
    return function (c) {
        console.log (a + b + c)
    }
}
soma(5, 4)(3)
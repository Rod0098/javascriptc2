function area(altura, largura){
    const area = altura * largura
    if (area > 20) {
        console.log(`O valor a cima está acima do permitido: ${area}m2`)
    } else {
        return area 
    }
}
console.log(area(2 , 3))
console.log(area(5, 5))
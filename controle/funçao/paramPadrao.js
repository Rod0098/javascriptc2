    //Estrategias para gerar valor padrao

    //Estratégia 1
    function padrao(a, b, c) {
        a = a || 1
        b = b || 1
        c = c || 1
        return a + b + c
    }
    
    console.log (padrao(3, 4, 2))

    //Estratégia 2, 3, 4 para gerar valor padrão
    function padrao2(a, b, c) {
        a = a !== undefined ? a : 1
        b = 1 in arguments ? b : 1
        c = isNaN(c) ? 1 : c
      return a + b + c
    }
    console.log(padrao2(), padrao2(2), padrao2(3, 4, 5))

    //Estratégia mais fácil e atualizada pelo ES2015
    function padrao3(a = 1, b = 1, c = 1) {
      return a + b + c
    }
     console.log(padrao3(3, 4, 2))

function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    //Verifica se tá faltando dados
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO], faltam dados!')
    }
    
    else {
        res.innerHTML = 'Contando...<br>'
        //Converte as variáveis para number
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //Alerta se o passo for menor ou igual a 0
    if (p <= 0) {
        alert('Passo inválido!, considerando PASSO 1')
        p = 1
    }
        //Conta do menor para o maior
        if (i < f) {
        //Se usar c++ vai incrementar de um em um somente
        for(let c = i; c <= f; c += p) {
        //Para colocar emoji (site fullemoji)
        res.innerHTML += `${c} \u{1F449} `
        }
        }
      //Conta do maior para o menor
         else {
            for( let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449} `
            }   
            
        } 
        //Emoji da bandeira no final da contagem
        res.innerHTML += `\u{1f3c1}`
    }
}
function minimum_change(array){
    let ordenado = array.sort(function(a, b){return a-b})
    let combinaciones = ordenado.reduce((accum,valor) => accum.concat(accum.map(x => [valor].concat(x))),[[]])
    let comb = []
    for (let i of combinaciones) {
        let total = i.reduce((a,b) => a + b, 0)
        comb.push(total)
    }
    comb.sort(function(a,b){return a-b})
    comb.shift()
    let sin_rep = new Set(comb)
    let cont = 1
    resultado = 0
    for(let item of sin_rep){
        if(item != cont){
            break
        }
        cont++
        resultado = item+1
    }
    return resultado
}
console.log("the minimum amount that you CANNOT give change is $",minimum_change([5, 7, 1, 1, 2, 3, 22]));



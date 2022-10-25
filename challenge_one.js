var prueba = [88,8,6,5,4,3,2,7,7,29,1]
var prueba_inv = []
var resultado = []
const S = 8
for (let i = prueba.length-1; i >= 0; i--) {
    prueba_inv.push(prueba[i])
}
const long = prueba_inv.length
for (let i = 0; i < long; i++) {
    if(prueba_inv[i].toString().length > 1){
        let dividido = prueba_inv[i].toString().split("")
        var numero = ""
        for (let j = 0; j < dividido.length; j++) {
            if (parseInt(dividido[j]) >= S){
                dividido[j] = "" 
            }
            numero += dividido[j]
        }
        resultado.push(parseInt(numero))
    }else if(prueba_inv[i] < S){
        resultado.push(prueba_inv[i])
    }
}
resultado = resultado.filter(res => !isNaN(res))
console.log(resultado);
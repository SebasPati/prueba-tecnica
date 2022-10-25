function Order_squares(array){
    var limit = 88
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.pow(array[i],2)
    }
    for(let i=0; i < array.length; i++){
        for(let j=0; j < array.length; j++){
            if(j+1 !== array.length){
                if(array[j] > array[j+1]){
                    let intercambio = array[j+1];
                    array[j+1] = array[j];
                    array[j] = intercambio;
                }
            }  
        }
    }
    let resultado = array.filter(element => element < limit)
    return resultado
}
console.log("squares sorted in ascending order",Order_squares([-8,-7,0,7,8]));
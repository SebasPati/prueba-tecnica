function Order_squares(array){
    var limit = 88
    var newArray = []
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.pow(array[i],2)
    }
    let dataLen = array.length;
    for(let i=0; i < dataLen; i++){
        for(let j=0; j < dataLen; j++){
            if(j+1 !== dataLen){
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
console.log("squares sorted in ascending order",Order_squares([1,2,3,4,5,8,9,10]));
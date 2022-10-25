s = 88

def squares(array):
    for i in range(len(array)):
        array[i] = array[i]*array[i]
    length = len(array)
    for i in range(length):
        for j in range(length):
            if (j+1 != length):
                if(array[j] > array[j+1]):
                    replace = array[j+1]
                    array[j+1] = array[j]
                    array[j] = replace
    result = list(filter(lambda item: item < s,array))
    return result
print("squares sorted in ascending order",squares([-6,-5,0,5,6])) 

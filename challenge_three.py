from itertools import combinations

def minimun_change(array):
    array.sort()
    combs = []
    for i in range(len(array)):
        comb = combinations(array,array[i])
        combs.append(list(comb))
    comb = combinations(array,len(array)-1)
    combs.append(list(comb))
    sumas = []
    for i in combs:
        for j in i:
            acc = 0
            for k in j:
                acc = acc + int(k)
            sumas.append(acc)
    sumas.sort()
    sumas_unique = list(set(sumas))
    cont = 1
    result = 0
    for i in sumas_unique:
        if (i != cont):
            break
        cont = cont+1
        result = i+1
    return result
    
    

print("the minimum amount that you CANNOT give change is $",minimun_change([5,7,1,1,2,3,22]))
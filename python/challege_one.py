array = [1,2,3,4,8,88,68,960]
s = 8
result = []
for i in array:
    string_number = str(i)
    if str(s) in string_number or i > s:
        replace = string_number.replace(str(s),'')
        for j in string_number:
            if (j >= str(s)):
                replace = string_number.replace(j,'')
                if replace != '':
                    result.insert(0, int(replace))
                continue
        if not ((replace != '') and (int(replace) < s)):
            continue
    if i < s:
        result.insert(0, i)
print(result)

    

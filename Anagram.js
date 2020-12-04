function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let strMap = {}
    for(let char of str1){
        strMap[char] ? strMap[char] += 1 : strMap[char] = 1
    }
    for(let char of str2){
        if(!strMap[char]){
            return false
        } else {
            strMap[char] -= 1
        }
    }
    return true
}
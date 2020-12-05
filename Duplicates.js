function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
        collection[arguments[val]] ? collection[arguments[val]] += 1 : collection[arguments[val]] = 1
    }
    for(let key in collection){
        if (collection[key] > 1){
            return true
        }
    }
    return false
}
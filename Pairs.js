function Pairs(a, b, k) {
    let i = 0
    let j = b.length - 1
    let x
    let y
    let tiny = 0
    while(i < a.length){
        x = a[i].toString()
        y = b[j].toString()
        if(parseInt(x.concat(y)) < k){
            tiny++
        }
        i++
        j--  
    }
    return tiny
}
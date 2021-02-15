const arr = [1,3,6,4,1,2]

const findSmallest = (a) => {
    const set = new Set()
    let max = 0

    for(let i = 0; i < a.length; i++){
        set.add(a[i])
        max = Math.max(a[i], max)
    }

    for(let i = 1; i < max; i++){
        if(!set.has(i)){
            console.log(i)
            return i
        }
    }
    return max + 1
}

findSmallest(arr)








// const set = new Set()
// let max = 0
// for(let i = 0; i < a.length; i++){
//     if(a[i] > 0){
//         set.add(a[i])
//         max = Math.max(max, a[i])
//     }
// }

// for(let i = 1; i < max; i++){
//     if(!set.has(i)){
//         console.log('ans', i)
//         return i
//     }
// }
// return max+1
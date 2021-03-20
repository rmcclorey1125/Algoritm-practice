const rotate = (items, startIndex, targetItem) => {
    let rightMin = 0
    let leftMin = 0
    let i = startIndex
    let j = startIndex
    if(items[startIndex] === targetItem){
        return 0
    }
    while(items[i] !== targetItem){
        if(i === items.length){
            i = 0
            rightMin++
        } else {
            i++
            rightMin++
        }
    }
    
    while(items[j] !== targetItem){
        if(j === 0){
            j = items.length - 1
            leftMin++ 
        } else {
            console.log(items[j])
            j--
            leftMin++     
        }
    }
    return Math.min(rightMin, leftMin)
}
const MaxOcc = (str) =>{
    const map = {}
    let max = 0
    for(let letter of str){
        if(!map[letter]){
            map[letter] = 1
            max = Math.max(map[letter], max)
        } else {
            map[letter] += 1
            max = Math.max(map[letter], max)
        }
    }
    for(let letter in map){
        if(map[letter === max]){
            return letter
        }
    }
}
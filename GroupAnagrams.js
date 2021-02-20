const groupAnagrams = (strs) => {
    const map = {}
    
    for(let str of strs){
        const ana = [...str].sort().join('')
        if(!map[ana]){
            map[ana] = []
        }
        map[ana].push(str)
    }
    return Object.values(map)
};
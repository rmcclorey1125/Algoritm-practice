const longestSubstring = (s, k) => {
    const mp = {}
    
    for(let letter of s){
        mp[letter] = mp[letter] + 1 || 1
    }
    
    let result = 0
    for(let prop in mp){
        if(mp[prop] < k){
            let spl = s.split(prop)
            for(let word of spl){
                result = Math.max(result, longestSubstring(word, k))
            }
            return result
        }
    }
    return s.length
};


const lengthOfLongestSubstring = (str) => {

    let left = 0
    let right = 0
    let set = new Set()
    let max = 0
    
    while(right < str.length) {
        if(!set.has(str.charAt(right))) {
            set.add(str.charAt(right))
            max = Math.max(max, set.size)
            right++
        } else {
            set.delete(str.charAt(left))
            left++
        }
    }
    return max
};




const longestPalindrome = (s) => {
    let max = ''
    for(let i = 0; i < s.length; i++){
        let oddCenter = fromCenter(s, i, i)
        let evenCenter = fromCenter(s, i, i-1)
        
        if(oddCenter.length > max.length){
            max = oddCenter
        }
        if(evenCenter.length > max.length){
            max = evenCenter
        }
    }
    return max
};

const fromCenter = (str, right, left) => {
    let i = 0
    while(str[left - i] && str[left - i] === str[right + i]){
        i++
    }
    i--
    return str.slice(left - i, right + i + 1)
}





// const longestPalindrome = (s) => {
//     let max = ''
//     for(let i = 0; i < s.length; i++){
//         for(let j = 0; j < 2; j++){
//             let left = i
//             let right = i + j
//             while (s[left] && s[left] === s[right]){
//                 left--
//                 right++
//             }
//             if ((right - left - 1) > max.length) {
//                 max = s.substring(left + 1, right)
//             }
//         }
//     }
//     return max
// };
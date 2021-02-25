// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function balancedSubstring(str){
    let k = 2 

    while(k <= str.length){
        for(let i = 0; i <= str.length - k; i++){
            let subStr = ''
            for(let j = i; j <= i+k; j++){
                subStr += S[j]
                let set = new Set(subStr)
                for(let letter of set){
                    let lower = letter.toLowerCase()
                    let upper = letter.toUpperCase()
                    if(!set.has(lower) || !set.has(upper)){
                        k++
                    }
                }
            }
        }
    }
}


// --------------------------------------------------------------------------------------------------------

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let k = 2

    function isBalanced(subStr){
        if(!subStr){
            return false
        }
        let seen = new Set(subStr)

        for(let letter of seen){
            let lower = letter.toLowerCase()
            let upper = letter.toUpperCase()
            if(!seen.has(lower) || !seen.has(upper)){
                return false
            }
        }
        return true
    }

    function getSubstring(start, end){
        let subStr = ''
        for(let i = start; i < end; i++){
            subStr += S[i] 
        }
        return subStr
    }

    let currentSubstring
    while(k <= S.length){
        for(let i=0; i <= S.length-k; i++){
            currentSubstring = getSubstring(i, i+k)
            if(isBalanced(currentSubstring)){
                console.log(currentSubstring)
                return currentSubstring
            }
        }
        k++
    }
    console.log(-1)
    return -1
}

solution('azABaabza')
solution('TacoCat')
solution('AcZCbaBz')


// --------------------------------------------------------------------------------------------------------
// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let map = {
//         'A': 'a',
//         'B': 'b',
//         'C': 'c',
//         'D': 'd',
//         'E': 'e',
//         'F': 'f',
//         'G': 'g',
//         'H': 'h',
//         'I': 'i',
//         'J': 'j',
//         'K': 'k',
//         'L': 'l',
//         'M': 'm',
//         'N': 'n',
//         'O': 'o',
//         'P': 'p',
//         'Q': 'q',
//         'R': 'r',
//         'S': 's',
//         'T': 't',
//         'U': 'u',
//         'V': 'v',
//         'W': 'w',
//         'X': 'x',
//         'Y': 'y',
//         'Z': 'z',
//     }

//     let left = 0;
//     let right = 0;
//     let set = new Set()
//     let longest = 0

//     while(right < S.length){
//         if(!set.has(S.charAt(right))){
//             set.add(S.charAt(right))
//             right++
//         }
//     }

//         if(!set.has(map[S.charAt(left)])){
//             left++
//         }
// }
// --------------------------------------------------------------------------------------------------------

// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let map = {
//         'A': 'a',
//         'B': 'b',
//         'C': 'c',
//         'D': 'd',
//         'E': 'e',
//         'F': 'f',
//         'G': 'g',
//         'H': 'h',
//         'I': 'i',
//         'J': 'j',
//         'K': 'k',
//         'L': 'l',
//         'M': 'm',
//         'N': 'n',
//         'O': 'o',
//         'P': 'p',
//         'Q': 'q',
//         'R': 'r',
//         'S': 's',
//         'T': 't',
//         'U': 'u',
//         'V': 'v',
//         'W': 'w',
//         'X': 'x',
//         'Y': 'y',
//         'Z': 'z',
//     }

//     let counter
//     let begin = 0
//     let end = 0
//     let d = 0

//     // Hash Map
//     for(let i = 0; i < S.length; i++){

//     }

//     while(end < S.length){
//         if(mp[S[end++]]){
//             counter
//         }
//         while(S){
//             if(mp[S[begin++]]){
//                 counter
//         }
//     }
// }
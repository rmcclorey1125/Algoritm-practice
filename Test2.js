// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let str = N.toString();
    let ans = -Infinity
    for(let i = 0; i <= str.length; i++){
        if(str[0] === '-'){
            let test = str.substring(-Infinity,i+1) + '5' + str.substring(i+1)
            ans = Math.max(ans, parseInt(test))
            console.log(test)
        } else {
            let test = str.substring(-Infinity,i) + '5' + str.substring(i)
            ans = Math.max(ans, parseInt(test))
            console.log(test)
        }
    }
    console.log(ans)
    return ans
}

solution(-826)



// --------------------------------------------------------------------------------------------------------
// function solution(N) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let arr = [];
//     let str = N.toString();
//     if(str[0] === '-'){
//         arr.push('-')
//         for(let i = 1; i < str.length; i++){
//             if(parseInt(str[i]) > 5){
//                 arr.push(str[i]);
//             }else{
//                 arr.push(5);
//             }
//         }
//     } else {
//         for(let i = 0; i < str.length; i++){
//             if(parseInt(str[i]) > 5){
//                 arr.push(str[i]);
//             } else if (parseInt(str[i]) < 5) {
//                 arr.push(5);
//                 arr.push(str[i]);
//             }
//         }
//     }
//     let result = parseInt(arr.join(''));
//     return result;
// }
// --------------------------------------------------------------------------------------------------------

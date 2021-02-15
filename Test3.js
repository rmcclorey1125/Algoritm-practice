// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, K) {
    let days = {
        "Mon": 1,
        "Tues": 2,
        "Wed": 3,
        "Thurs": 4,
        "Fri": 5,
        "Sat": 6,
        "Sun": 7
    }
    // write your code in JavaScript (Node.js 8.9.4)
    let day = days[S]
    let newDay
    
    if(K % 7 === 0){
        return S
    }
    if(K % 7 === 1){
        newDay = (day + 1) % 7
    }
    if(K % 7 === 2){
        newDay = (day + 2) % 7
    }
    if(K % 7 === 3){
        newDay = (day + 3) % 7
    }
    if(K % 7 === 0){
        newDay = (day + 4) % 7
    }
    if(K % 7 === 0){
        newDay = (day + 5) % 7
    }
    if(K % 7 === 0){
        newDay = (day + 6) % 7
    }
    return getKeyByValue(days, newDay)
}

function getKeyByValue(object, value){
    return Object.keys(object).find(key => object[key] === value)
}

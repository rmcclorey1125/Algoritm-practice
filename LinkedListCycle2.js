const detectCycle = function(head) {
    let set = new Set()
    while(head){
        set.add(head)
        if(set.has(head.next)){
            return head.next
        }
        head = head.next
    }
    return null
};


// const detectCycle = function(head) {
//     let slow = head
//     let fast = head
//     while(fast && fast.next && fast.next.next){
//         slow = slow.next
//         fast = fast.next.next
//         if(slow === fast){
//             slow = head
//             while(slow !== fast){
//                 slow = slow.next
//                 fast = fast.next
//                 }
//             return slow
//         }
//     }
//     return null
// };
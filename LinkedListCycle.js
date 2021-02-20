const hasCycle = (head) => {
    if(!head){
        return false;
    }
    let fast = head
    let slow = head
    while(fast) {
        if(!fast.next){
            return false
        } else {
            fast = fast.next.next
            slow = slow.next
        }
        if(slow === fast){
            return true
        }
    }
    return false
};


class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val){
        let newNode = new Node(val)
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
        return this.size
    }

    dequeue(){
        if(this.size === 0){
            return undefined
        }
        if(this.size === 1){
            this.last = null
        }
        let dequeued = this.first
        this.first = this.first.next
        this.size--
        return dequeued.val
    }
}
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(val){
        let newNode = new Node(val)
        if(this.root === null){
            this.root = newNode
            return this
        } else {
            let current = this.root
            while(true){
                if(val === current.value){
                    return undefined
                }
                if(val < current.value){
                    if(current.left === null){
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (val > current.value){
                    if(current.right === null){
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    find(val){
        if(this.root === null){
            return false
        }
        let current = this.root
        while(current && !found){
            if(val < current.value){
                current = current.left
            }else if (val > current.value){
                current = current.right
            } else {
                return true
            }
        }
        return false
    }

    BFS(){
        let node = this.root
        let data = []
        let queue = []
        queue.push(node)
        while(queue.length){
            node = queue.shift()
            data.push(node)
            if(node.left) queue.push(node.left)
            if(node.left) queue.push(node.left)
        }
        return data
    }
}
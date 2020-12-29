class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){ 
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight})
        this.adjacencyList[vertex2].push({node:vertex1,weight})
    }

    Dijkstra(start, finish){
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let path = []
        let smallest

        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }

        while(nodes.value.length){
            smallest = nodes.dequeue().val
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    let candidate = distances[smallest] + nextNode.weight
                    let nextNeighbor = nextNode.node
                    if(candidate < distances[nextNeighbor]){
                        distances[nextNeighbor] = candidate
                        previous[nextNeighbor] = smallest
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }
}

class priorityQueue{
    constructor(){
        this.values = []
    }
    
    enqueue(value, priority){
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp(){
        let index = this.values.length - 1
        const element = this.values[index]
        while(index > 0){
            let parentIndex = Math.floor((index -1)/2)
            let parent = this.values[parentIndex]
            if(element.priority >= parent.priority) break
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
    }
    
    dequeue(){
        const min = this.values[0]
        const end = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = end
            this.sinkDown()
        }
        return min
    }

    sinkDown(){
        let index = 0
        const length = this.values.length
        const element = this.values[0]
        while(true){
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let leftChild
            let rightChild
            let swap = null

            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex]
                if(leftChild.priority < element.priority){
                    swap = leftChildIndex
                }
            }
            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex]
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIndex
                }
            }
            if(swap === null) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        } 
    }
}
        
class node{
    constructor(value, priority){
        this.value = value,
        this.priority = priority
    }
}

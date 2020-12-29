class Graph{
    constructor(){
        this.adjacencyList ={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    DFSRecursive(start){
        const allVertexs = []
        const visted = {}
        const adjacencyList = this.adjacencyList

        (function recursive(vertex){
            if(!vertex){
                return null
            }
            visited[vertex] = true
            allVertexs.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if(!visted[neighbor]){
                    return dfs(neighbor)
                }
            })
        })(start)

        return result
    }

    DFSIterative(start){
        const stack = [start]
        const result = []
        const visited = {}
        let currentVertex

        visited[start] = true
        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].foreach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    BFS(start){
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex
        visited[start] = true

        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visted[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }
}
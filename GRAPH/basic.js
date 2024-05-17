
class Graph{
    constructor() {
        this.adjecencyList = {}
    }
    addVertex(vertex) {
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1,vertex2) {
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2);
        this.adjecencyList[vertex2].add(vertex1);
    }

    removeVertex(vertex) {
        if(!this.adjecencyList[vertex]){
            return
        }
        for( let adjacentVertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjecencyList[vertex]
    }
    removeEdge(vertex1,vertex2) {
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }

    display() {
        for(const vertex in this.adjecencyList){
            console.log(`${vertex} -> ${[...this.adjecencyList[vertex]]}`)
        }
    }
    


    bfs(startVertex) {
        if (!this.adjecencyList[startVertex]) {
          return;
        }
    
        const visited = {};
        const queue = [];
        queue.push(startVertex);
        visited[startVertex] = true;
    
        while (queue.length > 0) {
          const currentVertex = queue.shift();
          console.log(currentVertex);
          for (const child of this.adjecencyList[currentVertex]) {
            if (!visited[child]) {
              queue.push(child);
              visited[child] = true;
            }
          }
        }
      }


    dfsTraversal(start) {
      const visited = new Set();
      const dfs = (vertex) => {
        visited.add(vertex);
        console.log(vertex); // Process the vertex here (e.g., printing)
        for (let neighbor of this.adjecencyList[vertex]) {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        }
      };
      dfs(start);
    }

}
const graph = new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')

graph.addEdge('a','b')
graph.addEdge('b','c')
graph.addEdge('c','d')

graph.removeVertex('d')
graph.dfsTraversal('a')

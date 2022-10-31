class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (v) => v.node !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (v) => v.node !== vertex1
        );
    }

    removeVertex(vertex) {
        const edges = this.adjacencyList[vertex];
        edges.forEach((e) => this.removeEdge(e.node, vertex));
        delete this.adjacencyList[vertex];
    }

    print() {
        return this.adjacencyList;
    }
}

console.clear();

let g = new WeightedGraph();
console.log('adding vertices');
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
console.log(g.print());

console.log('adding edges');
g.addEdge('A', 'B', 9);
g.addEdge('A', 'C', 5);
g.addEdge('B', 'C', 7);
console.log(g.print());

g.removeEdge('A', 'C');
console.log(g.print());

g.removeVertex('A');
console.log(g.print());
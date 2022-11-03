class DAG {
    constructor() {
        this.edges = {};
    }

    findCycle(vertex) {
        return this.find(vertex, vertex);
    }

    find(start, vertex) {
        if (!this.edges[start]) { return false; }
        for (var i = 0; i < this.edges[start].length; i++) {
            var parent = this.edges[start][i];
            if (vertex in parent || this.find(Object.keys(parent)[0], vertex)) {
                return true;
            }
        }
        return false;
    }

    addEdge(from, to, weight) {
        if (!this.edges[from]) {
            this.edges[from] = [];
        }

        let edgeValue = {};
        edgeValue[to] = weight;
        this.edges[from].push(edgeValue);

        if (this.findCycle(to)) {
            console.log('Cycle found: ' + from + ' -> ' + to);
            this.edges[from] = this.edges[from].filter(e => !to in e)
        }
    }
}

var dag = new DAG();

dag.addEdge('A', 'B', 10);
console.log(dag.edges);
dag.addEdge('B', 'C', 20);
console.log(dag.edges);
dag.addEdge('C', 'A', 5);
console.log(dag.edges);
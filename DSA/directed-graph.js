class DirectedGraph {
    constructor() {
        this.list = {};
    }

    addVertex(node) {
        if (this.list[node] === undefined) {
            this.list[node] = new Set();
        }
        else {
            return "node already exist";
        }
    }

    addEdge(node1, node2) {
        if (this.list[node1] === undefined) {
            this.addVertex(node1);
        }
        if (this.list[node2] === undefined) {
            this.addVertex(node2);
        }

        this.list[node1].add(node2);
    }

    removeVertex(node) {
        if (this.list[node] === undefined) {
            return "Vertex undefined";
        }

        for (let o of Object.keys(this.list)) {
            this.list[o].delete(node)
        }

        delete this.list[node];
    }

    removeEdge(node1, node2) {
        if (this.list[node1] === undefined || this.list[node2] === undefined) {
            return "Invalid vertex";
        }
        else {
            this.list[node1].delete(node2);
        }
    }

    print() {
        console.log(this.list)
    }
}

let ug = new DirectedGraph();

ug.addVertex("A");
ug.addVertex("B");
ug.addVertex("C");
ug.print();
ug.addEdge("A", "B");
ug.print();
ug.addEdge("A", "C");
ug.print();
ug.removeVertex("B");
ug.print();
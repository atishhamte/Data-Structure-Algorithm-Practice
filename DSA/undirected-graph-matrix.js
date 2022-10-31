class UndirectedGraph {
    constructor() {
        this.matrix = [];
        this.vertexRelation = {};
        this.length = 0;
    }

    addVertex(node) {
        if (this.vertexRelation[node] === undefined) {
            this.vertexRelation[node] = this.length;
            this.length++;
            for (let d of this.matrix) {
                d.push(0);
            }
            this.matrix.push(Array(this.length).fill(0));
            return true;
        }
        else {
            return "node already exist";
        }
    }

    addEdge(node1, node2) {
        let node1Index = this.vertexRelation[node1];
        let node2Index = this.vertexRelation[node2];

        if (node1Index !== undefined && node2Index !== undefined) {
            this.matrix[node1Index][node2Index] = 1;
            this.matrix[node2Index][node1Index] = 1;
        }
        else {
            return "Invalid nodes";
        }
    }

    removeVertex(node) {
        let nodeIndex = this.vertexRelation[node];
        for (let i = 0; i < this.matrix[nodeIndex].length; i++) {
            if (this.matrix[nodeIndex][i] === 1) {
                this.matrix[i][nodeIndex] = undefined;
            }
        }
        this.vertexRelation[node] = undefined;
        this.matrix[nodeIndex] = [];
    }

    removeEdge(node1, node2) {
        let node1Index = this.vertexRelation[node1];
        let node2Index = this.vertexRelation[node2];

        if (node1Index !== undefined && node2Index !== undefined) {
            this.matrix[node1Index][node2Index] = 0;
            this.matrix[node2Index][node1Index] = 0;
        }
        else {
            return "Invalid nodes";
        }
    }

    print() {
        console.log(this.matrix)
    }
}

let ug = new UndirectedGraph();

ug.addVertex("A");
ug.addVertex("B");
ug.print();
ug.addEdge("A", "B");
ug.print();
ug.removeVertex("B");
ug.print();
ug.addVertex("C");
ug.addEdge("A", "C");
ug.print();
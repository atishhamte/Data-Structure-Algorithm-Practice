class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let node = new Node(data)
        if (this.isEmpty()) {
            this.root = node;
        }
        else {
            this._insertNode(this.root, node);
        }
    }

    remove(data) {
        if (this.isEmpty()) {
            return "Tree is empty"
        }

        return this._removeNode(this.root, data);
    }

    min() {
        if (this.isEmpty()) {
            return "Tree is empty"
        }

        return this._findMinNode(this.root);
    }

    max() {
        if (this.isEmpty()) {
            return "Tree is empty"
        }
        return this._findMaxNode(this.root);
    }

    preOrder() {
        if (this.isEmpty()) {
            return "Tree is empty"
        }

        return this._getPreOrder(this.root, []);
    }

    inOrder() {
        if (this.isEmpty()) {
            return "Tree is empty"
        }

        return this._getInOrder(this.root, []);
    }

    postOrder() {
        if (this.isEmpty()) {
            return "Tree is empty"
        }

        return this._getPostOrder(this.root, []);
    }

    search() {
        if (this.isEmpty()) {
            return "Tree is empty"
        }

        return this._searchInTree(this.root);
    }

    isEmpty() {
        return this.root === null;
    }

    dfs() {
        let dfsValues = [];
        let stack = [this.root];
        let tempNode;

        while (stack.length > 0) {
            tempNode = stack.shift();
            dfsValues.push(tempNode.value);
            if (tempNode.right) stack.unshift(tempNode.right);
            if (tempNode.left) stack.unshift(tempNode.left);
        }
        return dfsValues;
    }

    bfs() {
        let bfsValues = [];
        let queue = [this.root];
        let tempNode;

        while (queue.length > 0) {
            tempNode = queue.pop();
            bfsValues.push(tempNode.value);
            if (tempNode.left) queue.unshift(tempNode.left);
            if (tempNode.right) queue.unshift(tempNode.right);

        }
        return bfsValues;
    }

    // Private Methods
    _insertNode(parent, node) {
        if (node.value < parent.value) {
            if (parent.left === null) {
                parent.left = node;
            }
            else {
                this._insertNode(parent.left, node);
            }
        }
        else {
            if (parent.right === null) {
                parent.right = node;
            }
            else {
                this._insertNode(parent.right, node);
            }
        }
    }

    _removeNode(node, data) {
        if (data < node.value) {
            node.left = this._removeNode(node.left, data);
            return node;
        }
        else if (data > node.value) {
            node.right = this._removeNode(node.right, data);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            var minimum = this._findMinNode(node.right);
            node.value = minimum.value;
            node.right = this._removeNode(node.right, minimum.value);
            return node;
        }
    }

    _findMinNode(node) {
        if (node.left) {
            return this._findMinNode(node.left);
        }
        else {
            return node;
        }
    }

    _findMaxNode(node) {
        if (node.right) {
            return this._findMaxNode(node.right);
        }
        else {
            return node;
        }
    }

    _getPreOrder(node, arr = []) {
        if (node !== null) {
            arr.push(node.value)
            this._getPreOrder(node.left, arr);
            this._getPreOrder(node.right, arr);
        }
        return arr;
    }

    _getInOrder(node, arr = []) {
        if (node !== null) {
            this._getInOrder(node.left, arr);
            arr.push(node.value);
            this._getInOrder(node.right, arr);
        }
        return arr;
    }

    _getPostOrder(node, arr = []) {
        if (node !== null) {
            this._getPostOrder(node.left, arr);
            this._getPostOrder(node.right, arr);
            arr.push(node.value);
        }
        return arr;
    }

    _searchInTree(node, data) {
        if (node === null) {
            return null
        }
        else if (data < node.value) {
            return this._searchInTree(node.left, data)
        }
        else if (data > node.value) {
            return this._searchInTree(node.right, data)
        }
        else {
            return node;
        }
    }
}

let bst = new BinarySearchTree();

console.log("Is tree empty : ", bst.isEmpty());

console.log("Insert 10");
bst.insert(10);

console.log("Insert 5");
bst.insert(5);

console.log("Insert 7");
bst.insert(7);

console.log("Insert 3");
bst.insert(3);

console.log("Insert 12");
bst.insert(12);

console.log("Insert 11");
bst.insert(11);

console.log("Is tree empty : ", bst.isEmpty());

console.log("PreOrder");
console.log(bst.preOrder());

console.log("InOrder");
console.log(bst.inOrder());

console.log("PostOrder");
console.log(bst.postOrder());

console.log("Search 5 in tree");
console.log(bst.search(5));

console.log("Minimum in tree");
console.log(bst.min());

console.log("Remove 7 from tree");
bst.remove(7);

console.log("Maximum in tree");
console.log(bst.max());

console.log("DFS");
console.log(bst.dfs());

console.log("BFS");
console.log(bst.bfs());
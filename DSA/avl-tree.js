class Node {
    constructor(item) {
        this.item = item;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    height(node) {
        return (node === null) ? 0 : node.height;
    }

    rightRotate(y) {
        let x = y.left;
        let xRightChild = x.right;
        x.right = y;
        y.left = xRightChild;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        return x;
    }

    leftRotate(x) {
        let y = x.right;
        let yLeftChild = y.left;
        y.left = x;
        x.right = yLeftChild;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        return y;
    }

    getBalanceFactor(node) {
        return (node == null) ? 0 : this.height(node.left) - this.height(node.right);
    }

    insertNodeHelper(node, item) {
        if (node === null) {
            return new Node(item);
        }

        if (item < node.item) {
            node.left = this.insertNodeHelper(node.left, item);
        }
        else if (item > node.item) {
            node.right = this.insertNodeHelper(node.right, item);
        }
        else {
            return node;
        }

        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

        let balanceFactor = this.getBalanceFactor(node);

        if (balanceFactor > 1) {
            if (item < node.left.item) {
                return this.rightRotate(node);
            }
            else if (item > node.left.item) {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }

        if (balanceFactor < -1) {
            if (item > node.right.item) {
                return this.leftRotate(node);
            }
            else if (item < node.right.item) {
                node.right = this.rightRotate(node.right);
                return this.leftRotate(node);
            }
        }

        return node;
    }

    insertNode(item) {
        this.root = this.insertNodeHelper(this.root, item);
    }

    nodeWithMinimumValue(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    deleteNodeHelper(root, item) {
        if (root == null) {
            return root;
        }
        if (item < root.item) {
            root.left = this.deleteNodeHelper(root.left, item);
        }
        else if (item > root.item) {
            root.right = this.deleteNodeHelper(root.right, item);
        }
        else {
            if ((root.left === null) || (root.right === null)) {
                let temp = null;
                if (temp == root.left) {
                    temp = root.right;
                }
                else {
                    temp = root.left;
                }

                if (temp == null) {
                    temp = root;
                    root = null;
                }
                else {
                    root = temp;
                }
            }
            else {
                let temp = this.nodeWithMinimumValue(root.right);
                root.item = temp.item;
                root.right = this.deleteNodeHelper(root.right, temp.item);
            }
        }
        if (root == null) {
            return root;
        }

        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;

        let balanceFactor = this.getBalanceFactor(root);
        if (balanceFactor > 1) {
            if (this.getBalanceFactor(root.left) >= 0) {
                return this.rightRotate(root);
            }
            else {
                root.left = this.leftRotate(root.left);
                return this.rightRotate(root);
            }
        }
        if (balanceFactor < -1) {
            if (this.getBalanceFactor(root.right) <= 0) {
                return this.leftRotate(root);
            }
            else {
                root.right = this.rightRotate(root.right);
                return this.leftRotate(root);
            }
        }
        return root;
    }

    deleteNode(item) {
        this.root = this.deleteNodeHelper(this.root, item);
    }

    preOrder() {
        return this.preOrderHelper(this.root, []);
    }

    preOrderHelper(node, arr = []) {
        if (node) {
            arr.push(node.item);
            this.preOrderHelper(node.left, arr);
            this.preOrderHelper(node.right, arr);
        }
        return arr
    }
}

let tree = new AVLTree();
tree.insertNode(33);
tree.insertNode(13);
tree.insertNode(53);
tree.insertNode(9);
tree.insertNode(21);
tree.insertNode(61);
tree.insertNode(8);
tree.insertNode(11);
console.log(tree.preOrder());
tree.deleteNode(13);
console.log("After Deletion: ");
console.log(tree.preOrder());
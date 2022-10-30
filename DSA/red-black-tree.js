// Ref: https://www.youtube.com/watch?v=IDqdf7VicDs
class BST {
    _root = null;
    _compare;

    constructor(compareFn = null) {
        if (compareFn && typeof compareFn === 'function') {
            this._compare = compareFn;
        }
        else {
            this._compare = (a, b) => {
                if (a > b) return BST.comparison.BIGGER;
                if (a < b) return BST.comparison.SMALLER;

                return BST.comparison.EQUAL;
            }
        }
    }

    get root() {
        return this._root;
    }

    get min() {
        if (this.root === null) return null;

        return this._minNode(this.root).key;
    }

    get max() {
        if (this.root === null) return null;

        return this._maxNode(this.root).key;
    }

    static get comparison() {
        return Object.freeze({
            BIGGER: 1,
            BIGGER_OR_EQUAL: [1, 0],
            SMALLER: -1,
            SMALLER_OR_EQUAL: [-1, 0],
            EQUAL: 0
        })
    }

    createNode(key) {
        return Object.seal({
            key,
            left: null,
            right: null
        })
    }

    insert(key) {
        const newNode = this.createNode(key);

        if (this.root === null) {
            this._root = newNode;
        }
        else {
            this._insertNode(newNode);
        }
    }

    print() {
        this._printNode();
    }

    traverseInOrder(cb) {
        this._inOrder(this.root, cb);
    }

    traverseReversedOrder(cb) {
        this._reverseOrder(this.root, cb);
    }

    traversePreOrder(cb) {
        this._preOrder(this.root, cb);
    }

    traversePostOrder(cb) {
        this._postOrder(this.root, cb);
    }

    search(key) {
        return this._searchTree(key);
    }

    remove(key) {
        this._root = this._removeNode(key);
    }

    _removeNode = (key, node = this.root) => {
        if (node === null) return null;

        if (this._compare(key, node.key) === BST.comparison.SMALLER) {
            node.left = this._removeNode(key, node.left);
            return node;
        }

        if (this._compare(key, node.key) === BST.comparison.BIGGER) {
            node.right = this._removeNode(key, node.right);
            return node;
        }

        if (node.left === null && node.right === null) {
            node = null;
        }
        else if (node.left === null) {
            node = node.right;
        }
        else if (node.right === null) {
            node = node.left;
        }
        else {
            const max = this._maxNode(node.left);
            node.key = max.key;
            node.left = this._removeNode(max.key, node.left)
        }

        return node;
    }

    _maxNode = (node) => {
        while (node && node.right && node.right.key !== null) {
            node = node.right;
        }

        return node;
    }

    _minNode = (node) => {
        while (node && node.left && node.left.key !== null) {
            node = node.left;
        }

        return node;
    }

    _searchTree = (key, node = this.root) => {
        if (node === null || node.key === null) return false;

        if (this._compare(key, node.key) === BST.comparison.EQUAL) return true;

        if (this._compare(key, node.key) === BST.comparison.SMALLER) {
            return this._searchTree(key, node.left);
        }

        return this._searchTree(key, node.right);
    }

    _postOrder = (node, cb) => {
        if (node !== null && node.key !== null) {
            this._postOrder(node.left, cb);
            this._postOrder(node.right, cb);
            cb(node.key);
        }
    }

    _preOrder = (node, cb) => {
        if (node !== null && node.key !== null) {
            cb(node.key);
            this._preOrder(node.left, cb);
            this._preOrder(node.right, cb);
        }
    }

    _reverseOrder = (node, cb) => {
        if (node !== null && node.key !== null) {
            this._reverseOrder(node.right, cb);
            cb(node.key);
            this._reverseOrder(node.left, cb);
        }
    }

    _inOrder = (node, cb) => {
        if (node !== null && node.key !== null) {
            this._inOrder(node.left, cb);
            cb(node.key);
            this._inOrder(node.right, cb);
        }
    }

    _insertNode = (newNode, currentNode = this.root) => {
        if (BST.comparison.SMALLER_OR_EQUAL.includes(this._compare(newNode.key, currentNode.key))) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            }
            else {
                this._insertNode(newNode, currentNode.left)
            }
        }
        else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            }
            else {
                this._insertNode(newNode, currentNode.right)
            }
        }
    }

    _printNode = (node = this.root, spaceCount = 0, label = '* ') => {
        if (node === null) {
            return console.log(`${' -'.repeat(spaceCount)}${label}null`);
        }

        console.log(`${' -'.repeat(spaceCount)}${label}${node.key}`);
        this._printNode(node.right, spaceCount + 2, 'R: ');
        this._printNode(node.left, spaceCount + 2, 'L: ');
    }
}

const COLOR = Object.freeze({
    RED: 'red',
    BLACK: 'black'
})

class RedBlackNode {
    _color;
    left = null;
    right = null;

    constructor(key = null, parent = null) {
        this.key = key;
        this.parent = parent;

        if (key == null) {
            this._color = COLOR.BLACK;
        }
        else {
            this._color = COLOR.RED;
            this.left = new RedBlackNode(null, this);
            this.right = new RedBlackNode(null, this);
        }
    }

    get isRed() {
        return this.color === COLOR.RED;
    }

    get isBlack() {
        return !this.isRed
    }

    get isNil() {
        return this.key === null;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        if (!this.isNil) {
            this._color = newColor;
        }
    }
}

class RBTree extends BST {
    _root = null;
    _compare;

    constructor(compareFn = null) {
        let fn = null;

        if (compareFn && typeof compareFn === 'function') {
            fn = compareFn;
        }
        else {
            fn = (a, b) => {
                if (a > b) return BST.comparison.BIGGER;
                if (a < b) return BST.comparison.SMALLER;

                return BST.comparison.EQUAL;
            }
        }

        super(fn);
        this._compare = fn;
    }

    get root() {
        return this._root;
    }

    createNode(key = null, parent = null) {
        return new RedBlackNode(key, parent);
    }

    insert(key) {
        const newNode = this.createNode(key);

        if (this.root === null) {
            this._root = newNode;
        }
        else {
            this._insertNode(newNode);
        }

        this._adjustTreeAfterInsertion(newNode);
    }

    remove(key) {
        this._removeNode(key);
    }

    _getNodeSibling(node) {
        const parentNode = node.parent;
        const sibNode = parentNode.left === node ?
            parentNode.right :
            parentNode.left;

        return sibNode;
    }

    _handleCase2(node) {
        // sibling is red with 2 black children
        const sibNode = this._getNodeSibling(node);

        if (sibNode.isRed) {
            const parentNode = node.parent;

            sibNode.color = COLOR.BLACK;
            parentNode.color = COLOR.RED;

            if (node === parentNode.left) {
                this._LRotation(parentNode);
            }
            else {
                this._RRotation(parentNode);
            }
        }

        this._handleCase3(node);
    }

    _handleCase3(node) {
        // node parent is black, sibling and its children are black
        const sibNode = this._getNodeSibling(node);

        if (
            node.parent.isBlack &&
            sibNode.isBlack &&
            sibNode.left.isBlack &&
            sibNode.right.isBlack
        ) {
            sibNode.color = COLOR.RED;
            this._handleRemovedNode(node.parent);
        }
        else {
            this._handleCase4(node);
        }
    }

    _handleCase4(node) {
        // node parent is red, sibling and its children are black
        const sibNode = this._getNodeSibling(node);

        if (
            node.parent.isRed &&
            sibNode.isBlack &&
            sibNode.left.isBlack &&
            sibNode.right.isBlack
        ) {
            sibNode.color = COLOR.RED;
            node.parent.color = COLOR.BLACK;
        }
        else {
            this._handleCase5(node);
        }
    }

    _handleCase5(node) {
        // sib is black with red left and black right
        const sibNode = this._getNodeSibling(node);

        if (sibNode.isBlack) {
            const parentNode = node.parent;

            if (node === parentNode.left && sibNode.left.isRed && sibNode.right.isBlack) {
                sibNode.color = COLOR.RED;
                sibNode.left.color = COLOR.BLACK;
                this._RRotation(sibNode);
            }

            if (node === parentNode.right && sibNode.left.isBlack && sibNode.right.isRed) {
                sibNode.color = COLOR.RED;
                sibNode.right.color = COLOR.BLACK;
                this._LRotation(sibNode);
            }
        }

        this._handleCase6(node);
    }

    _handleCase6(node) {
        // sib is black with red right and black left
        const sibNode = this._getNodeSibling(node);
        const parentNode = node.parent;

        sibNode.color = parentNode.color;
        parentNode.color = COLOR.BLACK;

        if (node === parentNode.left) {
            sibNode.right.color = COLOR.BLACK;
            this._LRotation(parentNode);
        }
        else {
            sibNode.left.color = COLOR.BLACK;
            this._RRotation(parentNode);
        }
    }

    _handleRemovedNode(node) {
        // node is black and with a parent
        if (node.isBlack && node.parent !== null) { // case 1
            this._handleCase2(node);
        }
    }

    _removeNode = (key, node = this.root) => {
        if (node === null || node.isNil) return;

        if (this._compare(key, node.key) === BST.comparison.SMALLER) {
            this._removeNode(key, node.left);
        }
        else if (this._compare(key, node.key) === BST.comparison.BIGGER) {
            this._removeNode(key, node.right);
        }
        else if (node.left.isNil && node.right.isNil) {
            this._handleRemovedNode(node);

            if (node.parent === null) {
                this._root = null;
            }
            else if (node === node.parent.left) {
                node.parent.left = this.createNode(null, node);
            }
            else {
                node.parent.right = this.createNode(null, node);
            }
        }
        else if (node.left.isNil) {
            node.key = node.right.key;
            node.right = this.createNode(null, node);
        }
        else if (node.right.isNil) {
            node.key = node.left.key;
            node.left = this.createNode(null, node);
        }
        else {
            const max = this._maxNode(node.left);
            node.key = max.key;
            this._removeNode(max.key, node.left);
        }
    }

    _maxNode = (node) => {
        while (node && !node.isNill && !node.right.isNil) {
            node = node.right;
        }

        return node;
    }

    _insertNode = (newNode, currentNode = this.root) => {
        if (this._compare(newNode.key, currentNode.key) === BST.comparison.SMALLER) {
            if (currentNode.left.isNil) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
            }
            else {
                this._insertNode(newNode, currentNode.left)
            }
        }
        else {
            if (currentNode.right.isNil) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
            }
            else {
                this._insertNode(newNode, currentNode.right)
            }
        }
    }

    _RRotation = (node) => {
        if (node.left) {
            const nodeParent = node.parent;
            const detached = node.left;
            node.left = detached.right;
            detached.right = node;
            node.parent = detached;

            if (node.left !== null) {
                node.left.parent = node;
            }

            if (nodeParent !== null) {
                if (node === nodeParent.left) {
                    nodeParent.left = detached;
                }
                else {
                    nodeParent.right = detached;
                }
            }
            else {
                this._root = detached;
            }

            detached.parent = nodeParent;
        }
    }

    _LRotation = (node) => {
        if (node.right) {
            const nodeParent = node.parent;
            const detached = node.right;
            node.right = detached.left;
            detached.left = node;
            node.parent = detached;

            if (node.right !== null) {
                node.right.parent = node;
            }

            if (nodeParent !== null) {
                if (node === nodeParent.left) {
                    nodeParent.left = detached;
                }
                else {
                    nodeParent.right = detached;
                }
            }
            else {
                this._root = detached;
            }

            detached.parent = nodeParent;
        }
    }

    _handleRedUncle(parentNode, uncleNode, grandParentNode) {
        parentNode.color = COLOR.BLACK;
        uncleNode.color = COLOR.BLACK;
        grandParentNode.color = COLOR.RED;
        this._adjustTreeAfterInsertion(grandParentNode);
    }

    _recolorMidNode(node) {
        node.color = COLOR.BLACK;
        node.parent.color = COLOR.RED;
    }

    _handleBlackUncle(node) {
        const parentNode = node.parent;

        if (node === parentNode.left) {
            if (parentNode === parentNode.parent.left) {
                this._recolorMidNode(parentNode);
                this._RRotation(parentNode.parent);
            }
            else {
                this._RRotation(parentNode);
                this._recolorMidNode(node);
                this._LRotation(node.parent);
            }
        }
        else {
            if (parentNode === parentNode.parent.right) {
                this._recolorMidNode(parentNode);
                this._LRotation(parentNode.parent);
            }
            else {
                this._LRotation(parentNode);
                this._recolorMidNode(node);
                this._RRotation(node.parent);
            }
        }
    }

    _adjustTreeAfterInsertion(node) {
        if (node.parent === null) {
            node.color = COLOR.BLACK;
        }
        else if (node.parent.isRed) {
            const parentNode = node.parent;
            const grandParentNode = parentNode.parent;
            const uncleNode = grandParentNode.left === parentNode ?
                grandParentNode.right :
                grandParentNode.left;

            if (uncleNode.isBlack) {
                // console.log('red parent black uncle')
                this._handleBlackUncle(node);
            }
            else {
                // console.log('red parent red uncle')
                this._handleRedUncle(parentNode, uncleNode, grandParentNode)
            }
        }
    }

    print() {
        this._printNode();
    }

    _printNode = (node = this.root, spaceCount = 0, label = '* ') => {
        if (node == null) return;

        console.log(`${' -'.repeat(spaceCount)}${label}${node.key} (${node.color})`);

        if (node.isNil) return;

        this._printNode(node.right, spaceCount + 2, 'R: ');
        this._printNode(node.left, spaceCount + 2, 'L: ');
    }
}

let rbt = new RBTree();
rbt.insert(10);
rbt.insert(5);
rbt.insert(20);
rbt.insert(28);
rbt.insert(56);
rbt.insert(11);
rbt.insert(16);
rbt.insert(25);
rbt.insert(36);
rbt.insert(41);
rbt.print();

rbt.remove(20);
rbt.remove(11);
rbt.remove(16);
rbt.remove(10);
rbt.print();
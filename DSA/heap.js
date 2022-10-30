// Max Heap
class BinaryHeap {
    constructor() {
        this.items = [];
    }

    add(element) {
        this.items.push(element);
        let index = this.items.length - 1;
        const current = this.items[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.items[parentIndex];

            if (parent <= current) {
                this.items[parentIndex] = current;
                this.items[index] = parent;
                index = parentIndex;
            }
            else break;
        }
    }

    extract() {
        const max = this.items[0];
        const end = this.items.pop();
        this.items[0] = end;

        let index = 0;
        const length = this.items.length;
        const current = this.items[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.items[leftChildIndex];
                if (leftChild > current) swap = leftChildIndex;
            }
            if (rightChildIndex < length) {
                rightChild = this.items[rightChildIndex];
                if (
                    (swap === null && rightChild > current) ||
                    (swap !== null && rightChild > leftChild)
                )
                    swap = rightChildIndex;
            }

            if (swap === null) break;
            this.items[index] = this.items[swap];
            this.items[swap] = current;
            index = swap;
        }

        return max;
    }
}

const bh = new BinaryHeap();
bh.add(3);
bh.add(4);
bh.add(31);
bh.add(6);
console.log(bh);
console.log(bh.extract());
console.log(bh);
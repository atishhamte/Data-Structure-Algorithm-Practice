class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(value, priority) {
        let node = new Node(value, priority);

        for (let i = 0; i < this.items.length; i++) {
            if (node.priority > this.items[i].priority) {
                this.items.splice(i, 0, node);
                return true;
            }
        }

        this.items.push(node);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }

        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        return this.items[0];
    }

    rear() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }

        return this.items[this.items.length - 1];
    }

    search(item) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].value === item) {
                return i;
            }
        }
        return null;
    }

    print() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            str += this.items[i].value + " ";
        }
        return str;
    }
}

let queue = new PriorityQueue();
console.log('Is queue Empty : ', queue.isEmpty());
queue.enqueue(1, 1);
queue.enqueue(2, 2);
queue.enqueue(3, 1);
queue.enqueue(4, 2);
queue.enqueue(5, 1);
console.log('Is queue Empty : ', queue.isEmpty());
console.log('Print the queue : ', queue.print())
console.log('Lookup for front value : ', queue.front());
console.log('Print the queue : ', queue.print())
console.log('Pop out top value : ', queue.dequeue())
console.log('Print the queue : ', queue.print())
console.log('Lookup for front value : ', queue.front());
console.log('Search index for value 4 : ', queue.search(4))
console.log('Search index for value 10 : ', queue.search(10))
console.log('Print the queue : ', queue.print())
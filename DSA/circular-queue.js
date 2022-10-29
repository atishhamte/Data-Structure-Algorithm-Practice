class CircularQueue {
    constructor(size) {
        this.items = [];
        this.front = 0;
        this.rear = -1;
        this.size = size;
        this.length = 0;

    }

    enqueue(item) {
        if (this.length >= this.size) {
            return "Queue limit exceeded";
        }
        else {
            this.rear++;
            this.items[this.rear % this.size] = item;
            this.length++;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        this.items[this.front % this.size] = null;
        this.front++;
        this.length--;
        return true;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        return this.items[this.front % this.size];
    }

    print() {
        return this.items.toString();
    }
}

let queue = new CircularQueue(5);
console.log('Is queue Empty : ', queue.isEmpty());
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log('Is queue Empty : ', queue.isEmpty());
console.log('Print the queue : ', queue.print())
console.log('Lookup for peek value : ', queue.peek())
console.log('Pop out top value : ', queue.dequeue())
console.log('Lookup for peek value : ', queue.peek())
queue.enqueue(6)
console.log('Print the queue : ', queue.print())
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        // this.items[this.items.length] = item;
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty"
        }

        // let item = this.items[0];
        // this.items.splice(0, 1);
        // return item;
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        return this.items[0];
    }

    search(item) {
        // for (let i = 0; i < this.items.length - 1; i++) {
        //     if (this.items[i] === item) {
        //         return i;
        //     }
        // }
        // return null
        let index = this.items.indexOf(item);
        return (index > 0) ? index : null;

    }

    print() {
        return this.items.toString();
    }
}

let queue = new Queue();
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
console.log('Search index for value 3 : ', queue.search(3))
console.log('Search index for value 10 : ', queue.search(10))
console.log('Print the queue : ', queue.print())
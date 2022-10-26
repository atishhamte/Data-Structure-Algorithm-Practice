class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class QueueUsingLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    enqueue(item) {
        let node = new Node(item);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let prev = this.head;
            while (prev) {
                if (!prev.next) {
                    prev.next = node
                    break;
                }
                else {
                    prev = prev.next;
                }
            }

        }
        this.size++;
        return true;
    }

    dequeue() {
        if (this.isEmpty()) {
            return false;
        }
        let value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    isEmpty() {
        return this.size === 0
    }

    peek() {
        return this.head.value;
    }

    search(item) {
        if (this.isEmpty()) {
            return false;
        }
        let i = 0;

        let prev = this.head;

        while (prev) {
            if (prev.value === item) {
                return i;
            }
            prev = prev.next;
            i++;
        }
        return false;
    }

    print() {

        let prev = this.head;
        let str = '';
        while (prev.next) {
            str += prev.value + ',';
            prev = prev.next
        }

        str += prev.value;
        return str;

    }
}

let queue = new QueueUsingLinkedList();
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
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackUsingLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(item) {
        let node = new Node(item);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
        }
        this.size++;
    }

    pop() {
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

let stack = new StackUsingLinkedList();
console.log('Is stack Empty : ', stack.isEmpty());

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
console.log('Is stack Empty : ', stack.isEmpty());
console.log('Print the stack : ', stack.print())
console.log('Lookup for peek value : ', stack.peek())

console.log('Pop out top value : ', stack.pop())

console.log('Lookup for peek value : ', stack.peek())
console.log('Search index for value 3 : ', stack.search(3))
console.log('Search index for value 10 : ', stack.search(10))
console.log('Print the stack : ', stack.print())
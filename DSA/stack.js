class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        // this.items[this.items.length] = item;
        this.items.push(item)
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }

        // let item = this.items[this.items.length - 1];
        // this.items.splice(this.items.length - 1, 1)
        // return item
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        return this.items[this.items.length - 1];
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

let stack = new Stack();
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
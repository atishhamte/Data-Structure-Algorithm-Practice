class Deque {
    constructor() {
        this.items = [];
        this.count = 0;
        this.lowestCount = 0;
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        }
        else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        }
        else {
            this.items.splice(0, 0, element);
            this.count++;
        }
    }

    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    removeFront() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;

    }

    removeBack() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        let result = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return result;
    }

    peekFront() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[this.lowestCount];
    }

    peekBack() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count - this.lowestCount == 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.items = [];
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        let string = `${this.items[this.lowestCount]}`;
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            string = `${string},${this.items[index]}`;
        }
        return string;
    }
}

let dq = new Deque();

console.log("Add front 1");
dq.addFront(1);

console.log("Add back 3");
dq.addBack(3);

console.log("Add front 2");
dq.addFront(2);

console.log("Add back 1");
dq.addBack(1);

console.log("Print queue");
console.log(dq.toString());

console.log("Peek front");
console.log(dq.peekFront());

console.log("Peek back");
console.log(dq.peekBack());

console.log("Remove front");
console.log(dq.removeFront());

console.log("Remove back");
console.log(dq.removeBack());

console.log("Queue empty");
console.log(dq.isEmpty());

console.log("Queue size", dq.size());

console.log("Print queue");
console.log(dq.toString());

console.log("Clear queue");
dq.clear();

console.log("Print queue");
console.log(dq.toString());
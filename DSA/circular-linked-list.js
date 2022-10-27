class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(element) {
        let node = new Node(element);
        if (this.isEmpty()) {
            this.head = node;
            node.next = this.head;
        }
        else {
            let current = this.head;
            while (current.next && current.next != this.head) {
                current = current.next;
            }

            current.next = node;
            node.next = this.head;
        }

        this.size++;
    }

    insert(element, location) {
        let node = new Node(element);
        if (location < 0 || location > this.sizeOfList()) {
            return false;
        }
        if (this.isEmpty() && location != 0) {
            return false;
        }
        if (location === 0) {
            this.append(element);
        }
        else {
            let i = 1;
            let current = this.head;

            while (current.next) {
                if (i === location) {
                    let next = current.next;
                    current.next = node;
                    node.next = next;
                    this.size++;
                    break;
                }
                else {
                    current = current.next;
                }

                i++;
            }
        }
    }

    indexOf(element) {
        let i = 0;
        let current = this.head;

        while (current.next && this.sizeOfList() > i) {
            if (current.value === element) {
                return i;
            }
            else {
                current = current.next
            }
            i++;
        }
        return false;
    }

    getHead() {
        return this.head.value;
    }

    getElementAt(location) {
        if (location < 0 || location > this.sizeOfList() - 1) {
            return false;
        }
        let current = this.head;
        let i = 0;
        while (current) {
            if (i === location) {
                return current;
            }
            current = current.next;
            i++;
        }
    }

    removeAt(location) {
        if (location < 0 || location > this.sizeOfList() - 1) {
            return false;
        }

        let current;

        if (location == 0) {
            const previous = this.getElementAt(this.sizeOfList() - 1);
            current = this.head;
            this.head = current.next;
            previous.next = this.head;
        }
        else if (location == this.sizeOfList() - 1) {
            const previous = this.getElementAt(location - 1);
            current = previous.next;
            previous.next = this.head;
        }
        else {
            const previous = this.getElementAt(location - 1);
            current = previous.next;
            previous.next = current.next;
        }

        this.size--;
        return true;
    }

    delete(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    deleteHead() {
        if (this.isEmpty()) {
            return 'List is empty'
        }

        return this.removeAt(0);
    }

    isPresent(element) {
        return this.indexOf(element) !== false
    }

    isEmpty() {
        return this.sizeOfList() === 0;
    }

    sizeOfList() {
        return this.size;
    }

    printList() {
        if (this.isEmpty()) {
            return 'List is empty'
        }
        let root = this.head;
        let str = '';
        while (root.next && root.next != this.head) {
            str += root.value + ' -> ';
            root = root.next;
        }
        str += root.value + ' -> ' + root.next.value;
        return str;
    }
}

let cll = new CircularLinkedList();

console.log('Is list empty?');
console.log(cll.isEmpty());

console.log('Insert 1 at location 0');
cll.insert(1, 0);
console.log('Print the list : ', cll.printList());

console.log('Is list empty?');
console.log(cll.isEmpty());

console.log('Insert 2');
cll.append(2);
console.log('Print the list : ', cll.printList());

console.log('Insert 5');
cll.append(5);
console.log('Print the list : ', cll.printList());

console.log('Insert 10');
cll.append(10);
console.log('Print the list : ', cll.printList());

console.log('Insert 15');
cll.append(15);
console.log('Print the list : ', cll.printList());

console.log('Insert 20');
cll.append(20);
console.log('Print the list : ', cll.printList());

console.log('Insert 17 at location 5');
cll.insert(17, 5);
console.log('Print the list : ', cll.printList());

console.log('Delete element 1');
cll.delete(1);
console.log('Print the list : ', cll.printList());

console.log('Delete element positioned at 0');
cll.removeAt(0)
console.log('Print the list : ', cll.printList());

console.log('Get Head');
console.log(cll.getHead());

console.log('Get element of position 0');
console.log(cll.getElementAt(0))

console.log('Delete Head');
cll.deleteHead()
console.log('Print the list : ', cll.printList());

console.log('Delete Head');
cll.deleteHead()
console.log('Print the list : ', cll.printList());

console.log('Delete Head');
cll.deleteHead()
console.log('Print the list : ', cll.printList());

console.log('Is element 15 present in the list');
console.log(cll.isPresent(15));

console.log('Is list empty?');
console.log(cll.isEmpty())

console.log('Size of the list');
console.log(cll.sizeOfList())

console.log('Index of element 17 is : ', cll.indexOf(17));

console.log('Print the list : ', cll.printList());
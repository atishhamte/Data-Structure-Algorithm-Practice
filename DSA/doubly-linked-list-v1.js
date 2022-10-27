class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(element) {
        let node = new Node(element);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
            node.prev = prev;
        }

        this.size++;
    }

    prepend(element) {
        let node = new Node(element);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
            temp.prev = node;
        }

        this.size++;
    }

    insertAt(element, location) {
        let node = new Node(element);
        if (location < 0 || location > this.sizeOfList()) {
            return false;
        }
        if (this.isEmpty() && location != 0) {
            return false;
        }
        if (location === 0) {
            this.prepend(element);
        }
        else if (this.sizeOfList() === location) {
            this.append(element);
        }
        else {
            let i = 0;
            let current = this.head;

            while (current) {
                if (i === location) {
                    let next = current.next;
                    current.next = node;
                    node.prev = current;
                    node.next = next;
                    next.prev = node;
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

    removeElement(element) {
        let current = this.head;
        if (current.value === element) {
            this.head = current.next;
            this.head.prev = null;
            this.size--;
            return true;
        }
        else {
            while (current) {
                if (current.value === element) {
                    let next = current.next;
                    let prev = current.prev;
                    prev.next = next;
                    next.prev = prev;
                    this.size--;
                    return true;
                }
                else {
                    current = current.next;
                }
            }
            return false;
        }
    }

    removeFrom(location) {
        if (this.sizeOfList() < location || location < 0) {
            return false;
        }

        if (location === 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
            return true;
        }
        let i = 0;
        let current = this.head;

        while (current) {
            if (i === location) {
                let next = current.next;
                let prev = current.prev;
                prev.next = next;
                next.prev = prev;
                this.size--;
                return true;
            }
            else {
                current = current.next;
            }

            i++;
        }
        return false;
    }

    indexOf(element) {
        let i = 0;

        let prev = this.head;

        while (prev.next) {
            if (prev.value === element) {
                return i;
            }
            else {
                prev = prev.next
            }
            i++;
        }
        return false;
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
        while (root.next) {
            str += root.value + ' <-> ';
            root = root.next;
        }
        str += root.value;
        return str;
    }
}

let dll = new DoublyLinkedList();
console.log('Insert 1 at location 0');
dll.insertAt(1, 0);
console.log('Print the list : ', dll.printList());

console.log('Insert 6');
dll.append(6);
console.log('Print the list : ', dll.printList());

console.log('Insert 10');
dll.append(10);
console.log('Print the list : ', dll.printList());

console.log('Prepend 0');
dll.prepend(0);
console.log('Print the list : ', dll.printList());

console.log('Insert 15');
dll.append(15);
console.log('Print the list : ', dll.printList());

console.log('Insert 20 at location 5');
dll.insertAt(20, 5);

console.log('Print the list : ', dll.printList());

console.log('Insert 12 at location 22');
dll.insertAt(12, 22);
console.log('Print the list : ', dll.printList());

console.log('Remove element 6');
dll.removeElement(6);
console.log('Print the list : ', dll.printList());

console.log('Index of element 10 is : ', dll.indexOf(10));

console.log('Remove element 1');
dll.removeElement(1);
console.log('Print the list : ', dll.printList());

console.log('Remove from location 2');
dll.removeFrom(2);
console.log('Print the list : ', dll.printList());

console.log('Remove from location 0');
dll.removeFrom(0);
console.log('Print the list : ', dll.printList());
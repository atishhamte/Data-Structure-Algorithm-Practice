class Set {
    constructor() {
        this.items = {};
    }

    has(element) {
        return element in this.items;
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {};
    }

    isEmpty() {
        return this.size() == 0;
    }

    size() {
        return Object.keys(this.items).length;
    }

    elements() {
        // let elements = [];
        // for (const key in this.items) {
        //     elements.push(key);
        // }
        // return elements;

        return Object.values(this.items)
    }

    union(otherSet) {
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }

        const unionSet = new Set();
        this.elements().forEach(element => {
            unionSet.add(element);
        });
        otherSet.elements().forEach(element => {
            unionSet.add(element);
        });

        return unionSet.elements();

    }

    intersection(otherSet) {
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        const intersectionSet = new Set();
        this.elements().forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });

        return intersectionSet.elements();
    }

    difference(otherSet) {
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        const differenceSet = new Set();
        this.elements().forEach(element => {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });
        return differenceSet.elements();
    }

    isSubset(otherSet) {
        if (!(otherSet instanceof Set)) {
            throw new Error("Must be Instance Of Set");
        }
        if (!(otherSet.size() > this.size())) {
            return false;
        }
        let isSubset = true;
        this.elements().every(element => {
            if (!otherSet.has(element)) {
                isSubset = false;
                return;
            }
        });

        return isSubset;

    }

    toString() {
        return this.elements().toString();
    }
}

let set = new Set();
console.log("Add 1");
set.add(1);

console.log("Add 2");
set.add(2);

console.log("Add 3");
set.add(3);

console.log("Add 1");
set.add(1);

console.log("Add 5");
set.add(5);

console.log("Add 1");
set.add(1);

console.log("Has 1");
console.log(set.has(1));

console.log("Has 2");
console.log(set.has(2));

console.log("Has 6");
console.log(set.has(6));

console.log("Delete 2");
console.log(set.delete(2));

console.log("Delete 6");
console.log(set.delete(6));

console.log("Get elements");
console.log(set.elements());

console.log("Print set");
console.log(set.toString())


let s1 = new Set();
console.log("Set 1 Add 1");
s1.add(1);

console.log("Set 1 Add 2");
s1.add(2);

console.log("Set 1 Add 3");
s1.add(3);

let s2 = new Set();
console.log("Set 2 Add 3");
s2.add(3);

console.log("Set 2 Add 4");
s2.add(4);

console.log("Set 2 Add 5");
s2.add(5);


console.log("Set 1 union Set 2 : ", s1.union(s2));
console.log("Set 1 subset of Set 2 : ", s1.isSubset(s2));
console.log("Set 1 difference Set 2 : ", s1.difference(s2));
console.log("Set 1 intersection Set 2 : ", s1.intersection(s2));
class Set {
    constructor(arr = []) {
        this.items = [];
        for (let i = 0; i < arr.length; i++) {
            this.add(arr[i]);
        }
    }

    add(data) {
        if (this.items.indexOf(data) === -1) {
            this.items.push(data);
        }
    }

    delete(data) {
        if (this.size() === 0) {
            return "Stack is empty"
        }
        let index = this.items.indexOf(data);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
        else {
            return "Item not found";
        }
    }

    has(data) {
        return this.items.indexOf(data) !== -1;
    }

    clear() {
        this.items = [];
    }

    values() {
        return this.items;
    }

    keys() {
        return this.items;
    }

    entries() {
        return this.items.map(item => [item, item]);
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items)
    }
}

class ExtendedSet extends Set {
    isSubsetOf(set) {
        if (!this._isValidSet(set)) return false;

        return this.size() <= set.size() && [...this.items].every(item => set.has(item))
    }

    isSupersetOf(set) {
        if (!this._isValidSet(set)) return false;

        return this.size() >= set.size() && [...set.items].every(item => this.has(item))
    }

    union(set) {
        if (!this._isValidSet(set)) return new ExtendedSet();

        return new ExtendedSet([...this.items, ...set.items]).items;
    }

    difference(set) {
        if (!this._isValidSet(set)) return new ExtendedSet();

        const differenceSet = new ExtendedSet();

        this.items.forEach((item) => {
            if (!set.has(item)) differenceSet.add(item);
        });

        return differenceSet.items;
    }

    intersection(set) {
        const intersectionSet = new ExtendedSet();

        if (!this._isValidSet(set)) return intersectionSet;

        const [smallerSet, biggerSet] =
        set.size() <= this.size() ? [set, this] : [this, set];

        smallerSet.items.forEach((item) => {
            if (biggerSet.has(item)) intersectionSet.add(item);
        });

        return intersectionSet.items;
    }

    intersectionDifference(set) {
        if (!this._isValidSet(set)) return new ExtendedSet();

        return new ExtendedSet([
            ...this.difference(set),
            ...set.difference(this),
        ]).items;
    }

    // Private Method
    _isValidSet = (set) => {
        return set && set.size() > 0;
    };
}

let s = new Set([1, 1, 2, 3, 1, 3]);
console.log("Add 1");
s.add(1);
console.log("Add 5");
s.add(5);
console.log("Add 7");
s.add(7);
console.log("Print Set");
s.print();
console.log("Delete 5");
s.delete(5);
console.log("Delete 7");
s.delete(7);
console.log("Set has data 1 : ", s.has(1));
console.log("Set keys", s.keys());
console.log("Set values", s.values());
console.log("Set entries", s.entries());
console.log("Set size", s.size());
console.log("Clear Set");
s.clear();
console.log("Print Set");
s.print();

let s1 = new ExtendedSet([1, 2, 3, 4, 5]);
let s2 = new ExtendedSet([3, 4, 5, 6, 7]);

console.log('Set 1 union Set 2');
console.log(s1.union(s2))
console.log('Set 1 subset of Set 2');
console.log(s1.isSubsetOf(s2))
console.log('Set 2 subset of Set 1');
console.log(s2.isSubsetOf(s1))
console.log('Set 1 superset of Set 2');
console.log(s1.isSupersetOf(s2))
console.log('Set 2 superset of Set 1');
console.log(s2.isSupersetOf(s1))
console.log('Set 1 difference Set 2');
console.log(s1.difference(s2))
console.log('Set 2 difference Set 1');
console.log(s2.difference(s1))
console.log('Set 1 intersection Set 2');
console.log(s1.intersection(s2))
console.log('Set 1 intersection difference Set 2');
console.log(s1.intersectionDifference(s2))
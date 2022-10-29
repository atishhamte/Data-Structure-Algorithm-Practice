class HashTable {
    constructor(size) {
        this.items = {};
        this.size = size;
    }

    add(key, value) {
        let hashKey = this.getKey(key);

        if (!this.items[hashKey]) {
            this.items[hashKey] = {};
        }

        this.items[hashKey][key] = value;
    }

    remove(key) {
        if (this.isEmpty()) {
            return null;
        }

        let hashKey = this.getKey(key);

        if (this.items[hashKey] === undefined) {
            return null;
        }

        delete this.items[hashKey][key];
        return true;
    }

    get(key) {
        if (this.isEmpty()) {
            return null;
        }

        let hashKey = this.getKey(key);

        if (this.items[hashKey] === undefined) {
            return null;
        }

        return this.items[hashKey][key] || null
    }

    clear() {
        this.items = {};
    }

    getKey(key) {
        return key.toString().length % this.size;
    }

    toString() {
        return JSON.stringify(this.items);
    }

    isEmpty() {
        return Object.keys(this.items).length === 0;
    }
}

let ht = new HashTable(5);

console.log('Adding values');
ht.add("language", "javascript");
ht.add("os", "linux");
ht.add("os", "windows");
ht.add("language", "python");

console.log('Get os');
console.log(ht.get('os'))

console.log('remove language');
ht.remove('language');

console.log('Print table');
console.log(ht.toString())

console.log('Clear table');
ht.clear();

console.log('Print table');
console.log(ht.toString())
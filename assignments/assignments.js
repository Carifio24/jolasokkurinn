function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function rotate(array, n) {
    n = n % array.length;
    return array.slice(n, array.length).concat(array.slice(0, n));
}

function randomOffsets(size, max) {
    const indices = [];
    while (indices.length < size) {
        const value = Math.ceil(Math.random() * (max - 1));
        if (!indices.includes(value)) {
            indices.push(value);
        }
    }
    return indices;
}

function offsetsValid(offsets, max) {
    for (let i = 1; i < max; i++) {
        const shifted = offsets.map(x => (x + i) % max);
        if (shifted.every(x => offsets.includes(x))) {
            return false;
        }
    }
    return true;
}

function createPresentsSets(names, setSize) {
    const shuffled = shuffle(names);
    const nameCount = shuffled.length;

    // We check if this set of offsets is "valid"
    // which for now we define to mean that no sets
    // are repeated
    let offsets = randomOffsets(setSize, nameCount);
    while (!offsetsValid(offsets, nameCount)) {
        offsets = randomOffsets(setSize, nameCount);
    }

    const rotatedArrays = offsets.map(offset => rotate(shuffled, offset));
    const result = {};
    names.forEach((name, index) => {
        result[name] = shuffle(rotatedArrays.map(array => array[index]));
    });
    return result;

}

const names = ["Elna", "Gudfridur", "Stefania", "Kristjan", "Loa", "Jon"];
const setSize = 3;
const results = createPresentsSets(names, setSize);
const encrypted = Buffer.from(JSON.stringify(results)).toString('base64');
console.log(encrypted);

const namesMap = {};
names.forEach(name => {
    namesMap[name] = Buffer.from(name).toString('base64');
});
console.log(namesMap);

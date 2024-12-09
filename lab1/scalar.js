function increment(n) {
    return n + 1;
}

const a = 9;
const b = increment(a);

console.dir({ a, b });

function incrementObj(numObj) {
    if (numObj && typeof numObj.n === 'number') {
        numObj.n += 1;
    }
}

const obj = { n: 9 };
incrementObj(obj);

console.dir(obj);

const pipe = (...fns) => {
    if (!fns.every(fn => typeof fn === 'function')) {
        throw new Error('All arguments must be functions');
    }

    return (x) => fns.reduce((result, fn) => fn(result), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5)); // 36

const f2 = pipe(inc, inc);
console.log(f2(7)); // 9

try {
    const f3 = pipe(inc, 7, cube);
} catch (e) {
    console.error(e.message);
}

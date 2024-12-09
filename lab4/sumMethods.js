const sumFor = (...args) => args.reduce((acc, num) => acc + num, 0);

const sumForOf = (...args) => args.reduce((acc, num) => acc + num, 0);

const sumWhile = (...args) => {
    let total = 0;
    let i = 0;
    while (i < args.length) {
        total += args[i];
        i++;
    }
    return total;
};

const sumDoWhile = (...args) => {
    let total = 0;
    let i = 0;
    if (args.length > 0) {
        do {
            total += args[i];
            i++;
        } while (i < args.length);
    }
    return total;
};

const sumReduce = (...args) => args.reduce((acc, curr) => acc + curr, 0);

console.log(sumFor(1, 2, 3));
console.log(sumForOf(1, 2, 3));
console.log(sumWhile(1, 2, 3));
console.log(sumDoWhile(1, 2, 3));
console.log(sumReduce(1, 2, 3));

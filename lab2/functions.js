const average = (a, b) => (a + b) / 2;

const square = x => x ** 2;

const cube = x => x ** 3;

const calculate = (start, end) => {
    const results = [];
    for (let i = start; i <= end; i++) {
        results.push(average(square(i), cube(i)));
    }
    return results;
};

console.log(calculate(0, 9));

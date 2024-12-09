function range(start, end, filterFn = () => true) {
    const result = [];
    for (let i = start; i <= end; i++) {
        if (filterFn(i)) result.push(i);
    }
    return result;
}

console.log(range(15, 30));
console.log(range(15, 30, (num) => num % 2 !== 0));
const array = [
    false, 'hello', 3, 222, -240, false, true, 'word', null, undefined, 640n, Symbol('id')
];

const typeCount = array.reduce((acc, item) => {
    const type = typeof item;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
}, {});

console.dir(typeCount);

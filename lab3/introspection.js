const introspectObject = (obj) =>
    Object.entries(obj)
        .filter(([_, value]) => typeof value === 'function')
        .map(([key, func]) => [key, func.length]);

const iface = {
    m1: (x) => [x],
    m2(x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    },
};

console.log(introspectObject(iface));

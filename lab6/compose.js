const compose = (...fns) => {
    const handlers = [];

    const composedFn = (x) => {
        try {
            return fns.reduceRight((result, fn) => {
                if (typeof fn !== 'function') {
                    throw new Error('All arguments must be functions');
                }
                return fn(result);
            }, x);
        } catch (e) {
            handlers.forEach(handler => handler(e));
            return undefined;
        }
    };

    composedFn.on = (event, handler) => {
        if (event === 'error' && typeof handler === 'function') {
            handlers.push(handler);
        }
    };

    return composedFn;
};

const safeInc = x => {
    if (x < 0) throw new Error('Negative number');
    return ++x;
};

const safeTwice = x => x * 2;

const safeCube = x => {
    if (x > 100) throw new Error('Too large number');
    return x ** 3;
};

const f = compose(safeCube, safeTwice, safeInc);

f.on('error', e => {
    console.error('Caught error:', e.message);
});

console.log(f(5));
console.log(f(-1));
console.log(f(50));

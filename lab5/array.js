function array() {
    const internalArray = [];

    const accessor = (index) => {
        if (index !== undefined) return internalArray[index];
        return internalArray.pop();
    };

    accessor.push = (value) => internalArray.push(value);

    return accessor;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr());
console.log(arr());
console.log(arr());

console.log(arr());

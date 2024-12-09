const random = (min, max = min) => {
    if (max === min) min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateKey = (length, characters) =>
    Array.from({ length }, () => characters[random(0, characters.length - 1)]).join('');

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);

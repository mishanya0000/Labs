const ages = (persons) =>
    Object.fromEntries(
        Object.entries(persons).map(([name, { born, died }]) => [name, died - born])
    );

const persons = {
    vania: { born: 2007, died: 2024 },
    egor: { born: 2008, died: 2025 },
    romaha: { born: 2010, died: 2020 },
    andriy: { born: 1999, died: 2000 },
};

console.log(ages(persons));
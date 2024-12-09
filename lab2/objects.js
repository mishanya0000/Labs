function fn() {
    const constObject = { name: "Mike" };
    let varObject = { name: "Nikitin" };


    constObject.name = "Taras";
    varObject.name = "Zozulchak";


    varObject = { name: "Changed" };

    console.log(constObject, varObject);
}

const createUser = (name, city) => ({ name, city });

fn();
console.log(createUser("Nikitin Mike", "Kiev"));

// import data
const fruits = require("./data.js");

// menampikan seluruh data
const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

// menambahkan data
const store = (name) => {
    fruits.push(name);

    console.log(`menambahkan data ${name}`);
    index();
};

// export data
module.exports = {index, store};
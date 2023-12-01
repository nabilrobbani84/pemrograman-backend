const {index, store} = require('./fruitsController.js');

const main = () => {
    console.log('Menampilkan seluruh buah  ');
    index();
    console.log('\n');
    store("strawberry");
};

main();
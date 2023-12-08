const persiapan =() => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("persiapan ...");
        }, 3000);
    });
};

const rebusAir = () => {
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("Merebus Air ...");
        }, 7000);
    });
};

const masak = () => {
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("Masak Mie ...");
        }, 5000);
    });
};

// consuming promise
const main = () => {
    persiapan ()
        .then((result) => {
            console.log(result);
            return rebusAir()
        })
        .then((result) => {
            console.log(result);
            return masak()
        })
        .then((result) => {
            console.log(result);
        })
}

const second = async () => {
    const hasilPersiapan = await persiapan();
    const hasilRebusAir = await rebusAir();
    const hasilMasak = await masak();

    console.log(hasilPersiapan);
    console.log(hasilRebusAir);
    console.log(hasilMasak);
}

second();

// No. 1 Write a code to display the multiplication table of a given integer

const multiplication = (number) => {
    let limit = 10;
    for (let index = 1; index <= limit; index++) {
        let result = number * index;
        console.log(`${number} x ${index} = ${result}`);
    }
};

multiplication(5);

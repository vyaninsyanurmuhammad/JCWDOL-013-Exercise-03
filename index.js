// No. 1 Write a code to display the multiplication table of a given integer

const multiplication = (number) => {
    let limit = 10;
    for (let index = 1; index <= limit; index++) {
        let result = number * index;
        console.log(`${number} x ${index} = ${result}`);
    }
};

multiplication(5);

// No. 2 Write a code to check whether a string is a palindrome or not.

const palindrome = (text) => {
    let reverseString = text.split("").reverse().join("");

    text === reverseString
        ? console.log("It is a Palindrome")
        : console.log("It is not a Palindrome");
};

palindrome("madam");

// No. 3 Write a code to convert centimeter to kilometer.

const centimeterToKilometer = (centimeter) => {
    let kilometer = centimeter / 100000;
    console.log(`${kilometer} Km`);
};

centimeterToKilometer(100000);

// No. 4 Write a code to format number as currency (IDR)

const formatCurrencyIDR = (number) => {
    let currencyIDR = `Rp. ${number.toLocaleString("id-ID")},00`;
    console.log(currencyIDR);
};

formatCurrencyIDR(1000);

// No. 5 write a code to remove the first occurrence of a given “search string” from a string

const removeFirstOccurrence = (text, searchText) => {
    let newString = text.replace(searchText, "");
    console.log(newString);
};

removeFirstOccurrence("Hello world", "ell");

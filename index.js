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

// No. 6 Write a code to capitalize the first letter of each word in a string

const capitalizeFirstLetter = (text) => {
    let splitedText = text.split(" ");
    let splitedResultText = [];
    for (let index = 0; index < splitedText.length; index++) {
        splitedResultText.push(
            splitedText[index].charAt(0).toUpperCase() + splitedText[index].slice(1),
        );
    }
    console.log(splitedResultText.join(" "));
};

capitalizeFirstLetter("hello world");

// No. 7 Write a code to reverse a string

const reverseString = (text) => {
    let newText = text.split("").reverse().join("");
    console.log(newText);
};

reverseString("hello");

// No. 8 Write a code to swap the case of each character from string

const swapCase = (text) => {
    let newText = "";
    for (let index = 0; index < text.length; index++) {
        newText +=
            text[index] === text[index].toUpperCase()
                ? text[index].toLowerCase()
                : text[index].toUpperCase();
    }
    console.log(newText);
};

swapCase("The QuiCk BrOwN Fox");

// No. 9 Write a code to find the largest of two given integers

const largestOfTwo = (number1, number2) => {
    number1 > number2
        ? console.log(`${number1} is the largest`)
        : console.log(`${number2} is the largest`);
};

largestOfTwo(42, 27);

// No. 10 Write a conditional statement to sort three numbers

const sortThreeNumbers = (number1, number2, number3) => {
    (number1 > number2 && number1 > number3)
        ? console.log(`${number1} is the largest`)
        : (number2 > number1 && number2 > number3)
            ? console.log(`${number2} is the largest`)
            : console.log(`${number3} is the largest`);
};

sortThreeNumbers(42, 27, 100);

// No. 11 Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type

const checkDataType = (data) => {
    if (typeof data === "string") return console.log("1");
    if (typeof data === "number") return console.log("2");

    return console.log("3");
};

checkDataType("hello");

// No. 12 Write a code to change every letter a into * from a string of input

const changeAtoStar = (text) => {
    const textLowerCase = text.toLowerCase();
    let newText = "";

    for (let index = 0; index < textLowerCase.length; index++) {
        newText += textLowerCase[index] === "a" ? "*" : textLowerCase[index];
    }
    console.log(newText);
};

changeAtoStar("An apple a day keeps the doctor away");